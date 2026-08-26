import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, Environment, ContactShadows } from '@react-three/drei';
import { Bloom, EffectComposer, Noise, Vignette, DepthOfField } from '@react-three/postprocessing';
import { detectGPUTier, isMobile } from '../../utils/deviceDetect';
import { TreeModel } from './TreeModel';
import { TreeFruit } from './TreeFruit';
import { TreeParticles } from './TreeParticles';
import { TreeLighting } from './TreeLighting';
import { TreeCamera } from './TreeCamera';
import './BigTreeScene.css';
import * as THREE from 'three';

export function BigTreeScene() {
  const gpuTier = useMemo(() => detectGPUTier(), []);
  const mobile = useMemo(() => isMobile(), []);

  return (
    <div className="tree-scene">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        gl={{ 
          antialias: gpuTier !== 'low', 
          alpha: true,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        camera={{ position: [0, 2, 10], fov: 45 }}
      >
        <Suspense fallback={null}>
          <TreeLighting />
          <TreeCamera />
          
          <TreeModel />
          <TreeFruit />
          <TreeParticles gpuTier={gpuTier} mobile={mobile} />

          <Environment preset="city" blur={0.8} />
          
          <ContactShadows 
            position={[0, -0.9, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2.5} 
            far={4} 
          />

          {/* {gpuTier !== 'low' && (
            <EffectComposer>
              <DepthOfField focusDistance={0.025} focalLength={0.05} bokehScale={6} height={480} />
              <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} height={300} opacity={0.6} />
              <Noise opacity={0.02} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
          )} */}
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
