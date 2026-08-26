import { useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import { useScrollStore } from '../stores/scrollStore';

let lenisInstance: Lenis | null = null;

export function useScrollProgress() {
  const setScrollY = useScrollStore((s) => s.setScrollY);
  const setScrollProgress = useScrollStore((s) => s.setScrollProgress);

  const initLenis = useCallback(() => {
    if (lenisInstance) return;

    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisInstance.on('scroll', (e: { scroll: number; limit: number }) => {
      setScrollY(e.scroll);
      const progress = e.limit > 0 ? e.scroll / e.limit : 0;
      setScrollProgress(progress);
    });

    function raf(time: number) {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [setScrollY, setScrollProgress]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const limit = document.documentElement.scrollHeight - window.innerHeight;
        setScrollY(scrollY);
        setScrollProgress(limit > 0 ? scrollY / limit : 0);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    initLenis();

    return () => {
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, [initLenis, setScrollY, setScrollProgress]);

  return lenisInstance;
}
