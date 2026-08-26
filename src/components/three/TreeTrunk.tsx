import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTreeState } from '../../hooks/useTreeState';
import { computeTreeGrowth } from '../../animations/TreeGrowthController';

export function TreeTrunk() {
  const { scrollProgress } = useTreeState();
  const { trunkProgress } = useMemo(() => computeTreeGrowth(scrollProgress), [scrollProgress]);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle sway effect for the trunk in the hero area
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.02;
      
      // Data pulse effect
      if (groupRef.current.children[0]) {
        const mesh = groupRef.current.children[0] as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.emissive.setHex(0x3b82f6);
        material.emissiveIntensity = 0.1 + Math.sin(time * 2) * 0.1;
      }
    }
  });

  const trunkCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -1, 0),
      new THREE.Vector3(0.2, 1.5, 0.1),
      new THREE.Vector3(-0.1, 3.5, -0.1),
      new THREE.Vector3(0, 5.5, 0),
    ]);
  }, []);

  return (
    <group ref={groupRef} scale={[1, trunkProgress, 1]}>
      <mesh>
        <tubeGeometry args={[trunkCurve, 32, 0.45, 12, false]} />
        <meshStandardMaterial
          color="#162e22"
          roughness={0.85}
          metalness={0.15}
          transparent
          opacity={trunkProgress}
        />
      </mesh>
    </group>
  );
}
