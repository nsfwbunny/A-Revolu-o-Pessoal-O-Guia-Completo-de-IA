"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

export const Experience = () => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
      shadows
    >
      <Scene />
    </Canvas>
  );
};
