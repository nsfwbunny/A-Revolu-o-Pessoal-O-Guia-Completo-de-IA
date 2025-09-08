"use client";

import { useEffect, useState } from 'react';

export const useKeyboardControls = () => {
  const [controls, setControls] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          setControls((c) => ({ ...c, moveForward: true }));
          break;
        case 'KeyS':
        case 'ArrowDown':
          setControls((c) => ({ ...c, moveBackward: true }));
          break;
        case 'KeyA':
        case 'ArrowLeft':
          setControls((c) => ({ ...c, moveLeft: true }));
          break;
        case 'KeyD':
        case 'ArrowRight':
          setControls((c) => ({ ...c, moveRight: true }));
          break;
        case 'Space':
          setControls((c) => ({ ...c, jump: true }));
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          setControls((c) => ({ ...c, moveForward: false }));
          break;
        case 'KeyS':
        case 'ArrowDown':
          setControls((c) => ({ ...c, moveBackward: false }));
          break;
        case 'KeyA':
        case 'ArrowLeft':
          setControls((c) => ({ ...c, moveLeft: false }));
          break;
        case 'KeyD':
        case 'ArrowRight':
          setControls((c) => ({ ...c, moveRight: false }));
          break;
        case 'Space':
          setControls((c) => ({ ...c, jump: false }));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return controls;
};
