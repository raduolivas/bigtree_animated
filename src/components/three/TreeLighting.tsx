import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTreeState } from '../../hooks/useTreeState';
import { computeTreeGrowth } from '../../animations/TreeGrowthController';

export function TreeLighting() {
  const { scrollProgress } = useTreeState();
  const growth = useMemo(() => computeTreeGrowth(scrollProgress), [scrollProgress]);
  const keyRef = useRef<THREE.DirectionalLight>(null);
  const rimRef = useRef<THREE.DirectionalLight>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame((state, delta) => {
    const pulse = 1 + Math.sin(state.clock.getElapsedTime() * 1.1) * 0.06;
    if (keyRef.current) keyRef.current.intensity = THREE.MathUtils.damp(keyRef.current.intensity, 1.3 + growth.maturityProgress * 1.1, 3, delta);
    if (rimRef.current) rimRef.current.intensity = THREE.MathUtils.damp(rimRef.current.intensity, 0.45 + growth.networkProgress * 1.25, 3, delta);
    if (glowRef.current) glowRef.current.intensity = (0.35 + growth.glowIntensity * 1.4) * pulse;
  });

  return (
    <>
      <ambientLight intensity={0.38} />
      {/* Cinematic Key Light */}
      <directionalLight
        ref={keyRef}
        position={[5, 10, 5]} 
        intensity={1.3}
        castShadow 
        shadow-mapSize={[1024, 1024]}
      />
      {/* Subtle Rim Light */}
      <directionalLight
        ref={rimRef}
        position={[-5, 2, -5]} 
        intensity={0.45}
        color="#74f7a1"
      />
      <pointLight ref={glowRef} position={[0, 3.4, 2.4]} intensity={0.4} color="#d6a85f" distance={10} />
    </>
  );
}
