import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import '../three/BigTreeScene.css';
import { useLanguage } from '../../i18n/LanguageContext';

const BigTreeScene = lazy(() => import('../three/BigTreeScene'));

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [mountScene, setMountScene] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const lightweight = reducedMotion || connection?.saveData === true ||
      connection?.effectiveType === '2g';

    if (lightweight) return;

    const modelPreload = document.createElement('link');
    modelPreload.rel = 'preload';
    modelPreload.as = 'fetch';
    modelPreload.href = '/model/tree/tree-v2.glb';
    modelPreload.crossOrigin = 'anonymous';
    document.head.appendChild(modelPreload);

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const idleId = idleWindow.requestIdleCallback
      ? idleWindow.requestIdleCallback(() => setMountScene(true), { timeout: 700 })
      : globalThis.setTimeout(() => setMountScene(true), 350);

    return () => {
      if (idleWindow.cancelIdleCallback) idleWindow.cancelIdleCallback(idleId);
      else globalThis.clearTimeout(idleId);
      modelPreload.remove();
    };
  }, [reducedMotion]);

  return (
    <>
      <a className="skip-link" href="#main-content">{t('Skip to main content')}</a>
      <Navbar />
      <div className="tree-scene tree-scene--fallback" aria-hidden="true">
        <div className="tree-scene__poster"><div className="tree-scene__silhouette" /></div>
      </div>
      {mountScene && (
        <Suspense fallback={null}>
          <BigTreeScene />
        </Suspense>
      )}
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
}
