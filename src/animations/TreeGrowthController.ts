import { remap, smoothstep } from '../utils/mathHelpers';

export interface TreeGrowthState {
  rootsProgress: number;
  trunkProgress: number;
  branchesProgress: number;
  fruitsProgress: number;
  maturityProgress: number;
  networkProgress: number;
  particleIntensity: number;
  glowIntensity: number;
}

export function computeTreeGrowth(scrollProgress: number): TreeGrowthState {
  return {
    rootsProgress: smoothstep(0.05, 0.2, scrollProgress),
    trunkProgress: smoothstep(0.15, 0.35, scrollProgress),
    branchesProgress: smoothstep(0.3, 0.55, scrollProgress),
    fruitsProgress: smoothstep(0.5, 0.65, scrollProgress),
    maturityProgress: smoothstep(0.6, 0.8, scrollProgress),
    networkProgress: smoothstep(0.8, 0.95, scrollProgress),
    particleIntensity: remap(scrollProgress, 0.1, 0.9, 0.2, 1.0),
    glowIntensity: remap(scrollProgress, 0.3, 1.0, 0.1, 0.6),
  };
}
