import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { getParticleCount, type GPUTier } from '../../utils/deviceDetect';

interface TreeParticlesProps {
  gpuTier: GPUTier;
  mobile: boolean;
}

export function TreeParticles({ gpuTier, mobile }: TreeParticlesProps) {
  const count = useMemo(() => getParticleCount(gpuTier, mobile), [gpuTier, mobile]);
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const blueColor = new THREE.Color('#3b82f6');
    const greenColor = new THREE.Color('#34d399');

    for (let i = 0; i < count; i++) {
      const radius = 1 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const height = Math.random() * 8 - 1;

      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = Math.sin(theta) * radius;

      const mix = Math.random();
      const finalColor = blueColor.clone().lerp(greenColor, mix);
      col[i * 3] = finalColor.r;
      col[i * 3 + 1] = finalColor.g;
      col[i * 3 + 2] = finalColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
