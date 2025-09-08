"use client";

import { forwardRef, useRef, useImperativeHandle } from "react";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@/hooks/useKeyboardControls";
import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import * as THREE from "three";

const SPEED = 5;
const JUMP_FORCE = 8;

export const Player = forwardRef((props, ref) => {
  const rigidBodyRef = useRef<RapierRigidBody>(null!);
  const { moveForward, moveBackward, moveLeft, moveRight, jump } = useKeyboardControls();

  useImperativeHandle(ref, () => ({
    get rigidBody() {
      return rigidBodyRef.current;
    }
  }));

  useFrame(() => {
    if (!rigidBodyRef.current) return;

    const velocity = rigidBodyRef.current.linvel();

    const direction = new THREE.Vector3(
      Number(moveLeft) - Number(moveRight),
      0,
      Number(moveBackward) - Number(moveForward)
    )
      .normalize()
      .multiplyScalar(SPEED);

    rigidBodyRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z }, true);

    const isGrounded = Math.abs(velocity.y) < 0.1;
    if (jump && isGrounded) {
      rigidBodyRef.current.applyImpulse({ x: 0, y: JUMP_FORCE, z: 0 }, true);
    }
  });

  return (
    <RigidBody ref={rigidBodyRef} colliders="cuboid" mass={1} lockRotations>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
});

Player.displayName = "Player";
