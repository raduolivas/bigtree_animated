import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { services } from '../../data/services';
import { useTreeState } from '../../hooks/useTreeState';
import { computeTreeGrowth } from '../../animations/TreeGrowthController';

export function TreeFruit() {
  const { scrollProgress, hoveredServiceId } = useTreeState();
  const { fruitsProgress } = useMemo(() => computeTreeGrowth(scrollProgress), [scrollProgress]);
  const groupRef = useRef<THREE.Group>(null);
  const fruitRefs = useRef<{ [key: string]: THREE.Mesh }>({});

  const fruitPositions = useMemo(() => {
    return services.map((s, idx) => {
      const angle = (idx / services.length) * Math.PI * 2;
      const radius = 2.4 + (idx % 3) * 0.3;
      const height = 3.2 + (idx % 4) * 0.7;
      return {
        id: s.id,
        pos: [Math.cos(angle) * radius, height, Math.sin(angle) * radius] as [number, number, number],
        color: s.accent.includes('#') ? s.accent : '#3b82f6',
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
      groupRef.current.scale.setScalar(fruitsProgress);
    }

    // Smooth hover scaling and pulsing per fruit
    const time = state.clock.getElapsedTime();
    Object.keys(fruitRefs.current).forEach((id) => {
      const mesh = fruitRefs.current[id];
      if (mesh) {
        const isHovered = hoveredServiceId === id;
        const targetScale = isHovered ? 1.6 : 1.0;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        const material = mesh.material as THREE.MeshPhysicalMaterial;
        if (material) {
          const targetEmissive = isHovered ? 2.0 : 0.4 + Math.sin(time * 3) * 0.1;
          material.emissiveIntensity = THREE.MathUtils.lerp(material.emissiveIntensity, targetEmissive, 0.1);
        }
      }
    });
  });

  return (
    <group ref={groupRef}>
      {fruitPositions.map((f) => (
        <mesh
          key={f.id}
          ref={(el) => {
            if (el) fruitRefs.current[f.id] = el;
          }}
          position={f.pos}
        >
          <icosahedronGeometry args={[0.25, 2]} />
          <meshPhysicalMaterial
            color={f.color}
            emissive={f.color}
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
            clearcoat={1}
            transparent
            opacity={fruitsProgress}
          />
        </mesh>
      ))}
    </group>
  );
}
