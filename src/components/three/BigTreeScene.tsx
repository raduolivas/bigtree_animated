import { Component, Suspense, useEffect, useMemo, useState, type ErrorInfo, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, useProgress } from '@react-three/drei';
import { detectGPUTier, isMobile } from '../../utils/deviceDetect';
import { TreeModel } from './TreeModel';
import { TreeFruit } from './TreeFruit';
import { TreeParticles } from './TreeParticles';
import { TreeRoots } from './TreeRoots';
import { TreeLighting } from './TreeLighting';
import { TreeCamera } from './TreeCamera';
import './BigTreeScene.css';
import * as THREE from 'three';
import { useTreeState } from '../../hooks/useTreeState';

const phaseLabels = {
  seed: ['00', 'ORIGIN'],
  roots: ['01', 'DISCOVERY'],
  trunk: ['02', 'FOUNDATION'],
  branches: ['03', 'STRATEGY'],
  fruits: ['04', 'DELIVERY'],
  mature: ['05', 'GROWTH'],
  network: ['06', 'SCALE'],
  ecosystem: ['07', 'PARTNERSHIP'],
} as const;

interface SceneErrorBoundaryProps {
  children: ReactNode;
  onError: () => void;
}

interface SceneErrorBoundaryState {
  failed: boolean;
}

class SceneErrorBoundary extends Component<SceneErrorBoundaryProps, SceneErrorBoundaryState> {
  state: SceneErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): SceneErrorBoundaryState {
    return { failed: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function SceneLoadingStatus({ onReady }: { onReady: () => void }) {
  const { active, progress } = useProgress();

  useEffect(() => {
    if (!active && progress >= 100) onReady();
  }, [active, onReady, progress]);

  return null;
}

export function BigTreeScene() {
  const gpuTier = useMemo(() => detectGPUTier(), []);
  const mobile = useMemo(() => isMobile(), []);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const { treePhase } = useTreeState();
  const [phaseNumber, phaseName] = phaseLabels[treePhase];

  return (
    <div
      className={`tree-scene ${sceneReady ? 'tree-scene--ready' : ''} ${sceneFailed ? 'tree-scene--static' : ''}`}
      aria-hidden="true"
    >
      <div className="tree-scene__poster">
        <div className="tree-scene__silhouette" />
      </div>

      <div className="tree-scene__phase">
        <span className="tree-scene__phase-number">{phaseNumber}</span>
        <span className="tree-scene__phase-name">// {phaseName}</span>
      </div>

      {!sceneFailed && (
        <SceneErrorBoundary onError={() => setSceneFailed(true)}>
          <Canvas
            className="tree-scene__canvas"
            shadows={gpuTier === 'high'}
            dpr={[1, gpuTier === 'high' ? 1.5 : 1.25]}
            frameloop="always"
            gl={{
              antialias: gpuTier === 'high',
              alpha: true,
              powerPreference: 'high-performance',
              outputColorSpace: THREE.SRGBColorSpace,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.2,
            }}
            camera={{ position: [0, 2, 10], fov: 45 }}
          >
            <Suspense fallback={null}>
              <SceneLoadingStatus onReady={() => setSceneReady(true)} />
              <TreeLighting />
              <TreeCamera />
              <TreeRoots />
              <TreeModel />
              <TreeFruit />
              <TreeParticles gpuTier={gpuTier} mobile={mobile} />
              <Environment preset="city" blur={0.8} />
              {gpuTier === 'high' && (
                <ContactShadows
                  position={[0, -0.9, 0]}
                  opacity={0.32}
                  scale={10}
                  blur={2.5}
                  far={4}
                />
              )}
            </Suspense>
          </Canvas>
        </SceneErrorBoundary>
      )}
    </div>
  );
}

export default BigTreeScene;
