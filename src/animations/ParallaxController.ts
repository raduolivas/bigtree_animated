export interface ParallaxConfig {
  sensitivity: number;
  maxOffset: number;
  easing: number;
}

export const defaultParallaxConfig: ParallaxConfig = {
  sensitivity: 0.02,
  maxOffset: 0.5,
  easing: 0.08,
};

export function computeParallaxOffset(
  mouseX: number,
  mouseY: number,
  config: ParallaxConfig = defaultParallaxConfig
): { x: number; y: number } {
  const normalizedX = (mouseX / window.innerWidth - 0.5) * 2;
  const normalizedY = (mouseY / window.innerHeight - 0.5) * 2;

  return {
    x: normalizedX * config.sensitivity * config.maxOffset,
    y: -normalizedY * config.sensitivity * config.maxOffset,
  };
}
