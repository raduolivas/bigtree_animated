import { useMemo } from 'react';
import * as THREE from 'three';
import { useTreeState } from '../../hooks/useTreeState';
import { computeTreeGrowth } from '../../animations/TreeGrowthController';

export function TreeRoots() {
  const { scrollProgress } = useTreeState();
  const { rootsProgress } = useMemo(() => computeTreeGrowth(scrollProgress), [scrollProgress]);

  const rootCurves = useMemo(() => {
    return [
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-1, -1, 0.5),
        new THREE.Vector3(-2.5, -2, 1),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1.2, -0.8, -0.5),
        new THREE.Vector3(2.2, -1.8, -1),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.5, -1.2, 1),
        new THREE.Vector3(1, -2.2, 2),
      ]),
    ];
  }, []);

  return (
    <group position={[0, -1, 0]}>
      {rootCurves.map((curve, i) => (
        <mesh key={i}>
          <tubeGeometry args={[curve, 20, 0.25 * rootsProgress, 8, false]} />
          <meshStandardMaterial
            color="#12241b"
            roughness={0.9}
            metalness={0.1}
            transparent
            opacity={rootsProgress}
          />
        </mesh>
      ))}
    </group>
  );
}
