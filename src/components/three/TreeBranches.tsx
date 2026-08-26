import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTreeState } from '../../hooks/useTreeState';
import { computeTreeGrowth } from '../../animations/TreeGrowthController';

export function TreeBranches() {
  const { scrollProgress } = useTreeState();
  const { branchesProgress } = useMemo(() => computeTreeGrowth(scrollProgress), [scrollProgress]);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && scrollProgress < 0.4) {
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05;
      groupRef.current.rotation.x = Math.cos(time * 0.3) * 0.02;
    }
  });

  const branchConfigs = useMemo(() => {
    return [
      { start: [0, 2, 0], end: [-2, 3.5, 1] },
      { start: [0, 3, 0], end: [2.2, 4, -0.5] },
      { start: [0, 4, 0], end: [-1.8, 5, -1] },
      { start: [0, 4.8, 0], end: [1.5, 5.8, 1] },
      { start: [0, 5.2, 0], end: [0, 6.5, 0] },
    ];
  }, []);

  const curves = useMemo(() => {
    return branchConfigs.map((b) =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(...b.start),
        new THREE.Vector3(
          (b.start[0] + b.end[0]) * 0.5,
          (b.start[1] + b.end[1]) * 0.5 + 0.3,
          (b.start[2] + b.end[2]) * 0.5
        ),
        new THREE.Vector3(...b.end),
      ])
    );
  }, [branchConfigs]);

  return (
    <group ref={groupRef} scale={[branchesProgress, branchesProgress, branchesProgress]}>
      {curves.map((curve, i) => (
        <mesh key={i}>
          <tubeGeometry args={[curve, 16, 0.18, 8, false]} />
          <meshStandardMaterial 
            color="#1a362a" 
            roughness={0.8}
            transparent
            opacity={branchesProgress}
          />
        </mesh>
      ))}
    </group>
  );
}
