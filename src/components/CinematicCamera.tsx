"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export const CinematicCamera = ({ playerRef }) => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);

  useFrame(() => {
    if (playerRef.current && playerRef.current.rigidBody) {
      const playerPosition = playerRef.current.rigidBody.translation();
      const cameraPosition = new THREE.Vector3();
      cameraPosition.copy(cameraRef.current.position);

      const targetCameraPosition = new THREE.Vector3(
        playerPosition.x,
        playerPosition.y + 5,
        playerPosition.z + 10
      );

      cameraPosition.lerp(targetCameraPosition, 0.1);

      cameraRef.current.position.copy(cameraPosition);
      cameraRef.current.lookAt(playerPosition.x, playerPosition.y, playerPosition.z);
    }
  });

  return null;
};
