import { useCallback } from 'react';
import { useScrollStore } from '../stores/scrollStore';

export function useFruitInteraction() {
  const setHoveredServiceId = useScrollStore((s) => s.setHoveredServiceId);
  const hoveredServiceId = useScrollStore((s) => s.hoveredServiceId);

  const onServiceHover = useCallback(
    (id: string | null) => {
      setHoveredServiceId(id);
    },
    [setHoveredServiceId]
  );

  return { hoveredServiceId, onServiceHover };
}
