import { useFrame } from '@react-three/fiber';
import { useScrollStore } from '../../stores/scrollStore';
import { cameraKeyframes } from '../../animations/ScrollController';
import * as THREE from 'three';

export function TreeCamera() {
  const scrollProgress = useScrollStore((s) => s.scrollProgress);

  useFrame(({ camera }) => {
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
    camera.position.set(
      THREE.MathUtils.lerp(current.position[0], next.position[0], t),
      THREE.MathUtils.lerp(current.position[1], next.position[1], t),
      THREE.MathUtils.lerp(current.position[2], next.position[2], t)
    );

    // LookAt interpolation (we'll look at a point that also moves)
    const lookAtX = THREE.MathUtils.lerp(current.lookAt[0], next.lookAt[0], t);
    const lookAtY = THREE.MathUtils.lerp(current.lookAt[1], next.lookAt[1], t);
    const lookAtZ = THREE.MathUtils.lerp(current.lookAt[2], next.lookAt[2], t);
    
    camera.lookAt(lookAtX, lookAtY, lookAtZ);
  });

  return null;
}
