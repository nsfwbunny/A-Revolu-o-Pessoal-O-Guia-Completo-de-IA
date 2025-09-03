"use client";

import { useRef } from "react";
import { Player } from "./Player";
import { Physics, RigidBody } from "@react-three/rapier";
import { CinematicCamera } from "./CinematicCamera";

export const Scene = () => {
  const playerRef = useRef();

  return (
    <Physics>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Player ref={playerRef} />
      <CinematicCamera playerRef={playerRef} />
      <RigidBody type="fixed">
        <mesh rotation-x={-Math.PI / 2} position-y={-1}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </RigidBody>
    </Physics>
  );
};
