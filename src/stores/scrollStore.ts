import { create } from 'zustand';

export type TreePhase = 'seed' | 'roots' | 'trunk' | 'branches' | 'fruits' | 'mature' | 'network' | 'ecosystem';

interface ScrollState {
  scrollY: number;
  scrollProgress: number;
  currentSection: string;
  hoveredServiceId: string | null;
  treePhase: TreePhase;
  setScrollY: (y: number) => void;
  setScrollProgress: (progress: number) => void;
  setCurrentSection: (section: string) => void;
  setHoveredServiceId: (id: string | null) => void;
}

function getTreePhase(progress: number): TreePhase {
  if (progress < 0.1) return 'seed';
  if (progress < 0.2) return 'roots';
  if (progress < 0.35) return 'trunk';
  if (progress < 0.5) return 'branches';
  if (progress < 0.65) return 'fruits';
  if (progress < 0.8) return 'mature';
  if (progress < 0.9) return 'network';
  return 'ecosystem';
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollY: 0,
  scrollProgress: 0,
  currentSection: 'home',
  hoveredServiceId: null,
  treePhase: 'seed',
  setScrollY: (y) => set({ scrollY: y }),
  setScrollProgress: (progress) =>
    set({
      scrollProgress: progress,
      treePhase: getTreePhase(progress),
    }),
  setCurrentSection: (section) => set({ currentSection: section }),
  setHoveredServiceId: (id) => set({ hoveredServiceId: id }),
}));
