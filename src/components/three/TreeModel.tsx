import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useTreeState } from '../../hooks/useTreeState';
import { computeTreeGrowth } from '../../animations/TreeGrowthController';

export function TreeModel() {
  const { scrollProgress } = useTreeState();
  const { trunkProgress, maturityProgress } = useMemo(() => computeTreeGrowth(scrollProgress), [scrollProgress]);
  
  const groupRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF('/model/tree/tree-v2.glb?v=3', true);
  const gltfScene = useMemo(() => scene.clone(), [scene]);
  useMemo(() => {
    if (gltfScene) {
      gltfScene.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          node.castShadow = true;
          node.receiveShadow = true;
          node.frustumCulled = true;
        }
      });
    }
  }, [gltfScene]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      // Natural organic wind sway simulating botanical response
      const windStrength = 0.006 + maturityProgress * 0.014;
      groupRef.current.rotation.z = Math.sin(time * 0.72) * windStrength + Math.sin(time * 1.4) * 0.004;
      groupRef.current.rotation.x = Math.cos(time * 0.55) * windStrength * 0.55;
      
      // Scale based on scroll growth progress
      const targetScale = 0.88 + trunkProgress * 0.12;
      const currentScale = THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 3.2, delta);
      groupRef.current.scale.setScalar(currentScale);
    }
  });

  return <primitive ref={groupRef} object={gltfScene} position={[0, -1, 0]} />;
}
