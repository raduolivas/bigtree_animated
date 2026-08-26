import { useScrollStore } from '../stores/scrollStore';
import type { TreePhase } from '../stores/scrollStore';

export function useTreeState() {
  const scrollProgress = useScrollStore((s) => s.scrollProgress);
  const treePhase = useScrollStore((s) => s.treePhase);
  const hoveredServiceId = useScrollStore((s) => s.hoveredServiceId);

  return { scrollProgress, treePhase, hoveredServiceId } as {
    scrollProgress: number;
    treePhase: TreePhase;
    hoveredServiceId: string | null;
  };
}
