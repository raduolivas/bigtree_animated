import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useTreeState } from '../../hooks/useTreeState';
import { computeTreeGrowth } from '../../animations/TreeGrowthController';

export function TreeModel() {
  const { scrollProgress } = useTreeState();
  const { trunkProgress } = useMemo(() => computeTreeGrowth(scrollProgress), [scrollProgress]);
  
  const groupRef = useRef<THREE.Group>(null);

  // Try loading the realistic GLB model from public/models/tree/tree.glb.
  const { scene } = useGLTF('/model/tree/tree.glb', true);
  const gltfScene = useMemo(() => scene.clone(), [scene]);
  const loadFailed = !gltfScene;

  useMemo(() => {
    if (gltfScene) {
      gltfScene.traverse((node: any) => {
        if (node instanceof THREE.Mesh) {
          node.castShadow = true;
          node.receiveShadow = true;
          
          if (node.material) {
            const materials = Array.isArray(node.material) ? node.material : [node.material];
            materials.forEach((mat) => {
              console.log('MESH:', node.name, 'MATERIAL:', mat.name, {
                type: mat.type,
                color: mat.color ? mat.color.getHexString() : undefined,
                map: !!mat.map,
                normalMap: !!mat.normalMap,
                roughnessMap: !!mat.roughnessMap,
                metalnessMap: !!mat.metalnessMap,
                alphaMap: !!mat.alphaMap,
                opacity: mat.opacity,
                transparent: mat.transparent,
                alphaTest: mat.alphaTest,
              });
            });
          }
        }
      });
    }
  }, [gltfScene]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      // Natural organic wind sway simulating botanical response
      groupRef.current.rotation.z = Math.sin(time * 0.8) * 0.015 + Math.sin(time * 1.5) * 0.005;
      groupRef.current.rotation.x = Math.cos(time * 0.6) * 0.01;
      
      // Scale based on scroll growth progress
      const currentScale = 0.8 + trunkProgress * 0.2;
      groupRef.current.scale.setScalar(currentScale);
    }
  });

  if (loadFailed || !gltfScene) {
    // High-fidelity fallback procedural botanical structure if external glb is not yet placed
    return (
      <group ref={groupRef} position={[0, -1, 0]}>
        {/* Realistic Detailed Trunk */}
        <mesh castShadow receiveShadow position={[0, 2, 0]}>
          <cylinderGeometry args={[0.3, 0.45, 4, 16]} />
          <meshStandardMaterial color="#3a2718" roughness={0.9} metalness={0.05} />
        </mesh>
        {/* Primary Natural Branches & Canopy Clusters */}
        <mesh castShadow receiveShadow position={[0.8, 3.5, 0]} rotation={[0, 0, -0.4]}>
          <cylinderGeometry args={[0.12, 0.2, 2.5, 8]} />
          <meshStandardMaterial color="#3a2718" roughness={0.9} />
        </mesh>
        <mesh castShadow receiveShadow position={[-0.8, 3.8, 0.2]} rotation={[0, 0, 0.4]}>
          <cylinderGeometry args={[0.1, 0.18, 2.8, 8]} />
          <meshStandardMaterial color="#3a2718" roughness={0.9} />
        </mesh>
        {/* Leaf Clusters with PBR Properties */}
        <mesh castShadow receiveShadow position={[0, 4.5, 0]}>
          <dodecahedronGeometry args={[1.8, 2]} />
          <meshStandardMaterial color="#2c4a27" roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh castShadow receiveShadow position={[1.5, 4.0, 0.3]}>
          <dodecahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial color="#335c2e" roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh castShadow receiveShadow position={[-1.4, 4.2, -0.2]}>
          <dodecahedronGeometry args={[1.3, 1]} />
          <meshStandardMaterial color="#243f21" roughness={0.7} metalness={0.1} />
        </mesh>
      </group>
    );
  }

  return <primitive ref={groupRef} object={gltfScene} position={[0, -1, 0]} />;
}
