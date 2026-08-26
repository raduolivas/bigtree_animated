import { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScrollStore } from '../../stores/scrollStore';
import { cameraKeyframes } from '../../animations/ScrollController';
import * as THREE from 'three';

export function TreeCamera() {
  const scrollProgress = useScrollStore((s) => s.scrollProgress);
  const targetPosition = useMemo(() => new THREE.Vector3(), []);
  const targetLookAt = useMemo(() => new THREE.Vector3(), []);
  const currentLookAt = useMemo(() => new THREE.Vector3(0, 2.5, 0), []);

  useFrame(({ camera, clock }, delta) => {
    const keys = Object.keys(cameraKeyframes);
    const numSteps = keys.length - 1;
    
    // Find current keyframe segment
    const step = Math.floor(scrollProgress * numSteps);
    const nextStep = Math.min(step + 1, numSteps);
    const t = (scrollProgress * numSteps) % 1;

    const currentKey = keys[step];
    const nextKey = keys[nextStep];

    const current = cameraKeyframes[currentKey];
    const next = cameraKeyframes[nextKey];

    // Position interpolation
    targetPosition.set(
      THREE.MathUtils.lerp(current.position[0], next.position[0], t),
      THREE.MathUtils.lerp(current.position[1], next.position[1], t),
      THREE.MathUtils.lerp(current.position[2], next.position[2], t)
    );

    const cinematicDrift = Math.sin(clock.getElapsedTime() * 0.16) * 0.12;
    targetPosition.x += cinematicDrift;

    // LookAt interpolation (we'll look at a point that also moves)
    const lookAtX = THREE.MathUtils.lerp(current.lookAt[0], next.lookAt[0], t);
    const lookAtY = THREE.MathUtils.lerp(current.lookAt[1], next.lookAt[1], t);
    const lookAtZ = THREE.MathUtils.lerp(current.lookAt[2], next.lookAt[2], t);
    
    targetLookAt.set(lookAtX, lookAtY, lookAtZ);
    camera.position.lerp(targetPosition, 1 - Math.exp(-delta * 2.8));
    currentLookAt.lerp(targetLookAt, 1 - Math.exp(-delta * 3.4));
    camera.lookAt(currentLookAt);
  });

  return null;
}
