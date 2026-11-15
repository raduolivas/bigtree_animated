import { Component, Suspense, useEffect, useMemo, useState, type CSSProperties, type ErrorInfo, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, useProgress } from '@react-three/drei';
import { detectGPUTier, isMobile } from '../../utils/deviceDetect';
import { TreeModel } from './TreeModel';
import { TreeParticles } from './TreeParticles';
import { TreeLighting } from './TreeLighting';
import { TreeCamera } from './TreeCamera';
import './BigTreeScene.css';
import * as THREE from 'three';
import { useTreeState } from '../../hooks/useTreeState';
import { useLanguage } from '../../i18n/LanguageContext';

const phaseLabels = {
  seed: ['00', 'ORIGIN'],
  roots: ['01', 'DISCOVERY'],
  trunk: ['02', 'FOUNDATION'],
  branches: ['03', 'STRATEGY'],
  fruits: ['04', 'CANOPY'],
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

function SceneLoadingStatus({ onReady, onProgress }: { onReady: () => void; onProgress: (progress: number) => void }) {
  const { active, progress } = useProgress();

  useEffect(() => {
    onProgress(progress);
    if (!active && progress >= 100) onReady();
  }, [active, onProgress, onReady, progress]);

  return null;
}

export function BigTreeScene() {
  const { t } = useLanguage();
  const gpuTier = useMemo(() => detectGPUTier(), []);
  const mobile = useMemo(() => isMobile(), []);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [pageVisible, setPageVisible] = useState(() => document.visibilityState !== 'hidden');
  const { treePhase } = useTreeState();
  const [phaseNumber, phaseName] = phaseLabels[treePhase];

  useEffect(() => {
    const handleVisibility = () => setPageVisible(document.visibilityState !== 'hidden');
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  return (
    <div
      className={`tree-scene ${sceneReady ? 'tree-scene--ready' : ''} ${sceneFailed ? 'tree-scene--static' : ''}`}
      aria-hidden="true"
    >
      <div className="tree-scene__poster" />

      {!sceneReady && !sceneFailed && (
        <div className="tree-scene__loading">
          <span>{t('Growing digital ecosystem')}</span>
          <span>{Math.round(loadProgress).toString().padStart(2, '0')}%</span>
          <i style={{ '--tree-load': `${loadProgress}%` } as CSSProperties} />
        </div>
      )}

      <div className="tree-scene__phase">
        <span className="tree-scene__phase-number">{phaseNumber}</span>
        <span className="tree-scene__phase-name">// {t(phaseName)}</span>
      </div>

      {!sceneFailed && (
        <SceneErrorBoundary onError={() => setSceneFailed(true)}>
          <Canvas
            className="tree-scene__canvas"
            shadows={gpuTier === 'high'}
            dpr={[1, gpuTier === 'high' ? 1.5 : 1.25]}
            frameloop={pageVisible ? 'always' : 'never'}
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
              <SceneLoadingStatus onReady={() => setSceneReady(true)} onProgress={setLoadProgress} />
              <TreeLighting />
              <TreeCamera />
              <TreeModel />
              <TreeParticles gpuTier={gpuTier} mobile={mobile} />
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
