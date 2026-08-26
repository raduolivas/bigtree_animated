export type GPUTier = 'high' | 'medium' | 'low';

export function detectGPUTier(): GPUTier {
  if (typeof window === 'undefined') return 'medium';

  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  if (!gl) return 'low';

  const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
  if (debugInfo) {
    const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    const rendererLower = renderer.toLowerCase();
    if (
      rendererLower.includes('nvidia') ||
      rendererLower.includes('radeon') ||
      rendererLower.includes('geforce')
    ) {
      return 'high';
    }
    if (rendererLower.includes('intel') || rendererLower.includes('mesa')) {
      return 'medium';
    }
  }

  return 'medium';
}

export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;
}

export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function getParticleCount(tier: GPUTier, mobile: boolean): number {
  if (mobile) return 300;
  switch (tier) {
    case 'high': return 2000;
    case 'medium': return 1000;
    case 'low': return 500;
  }
}

export function getGeometryDetail(tier: GPUTier, mobile: boolean): number {
  if (mobile) return 8;
  switch (tier) {
    case 'high': return 32;
    case 'medium': return 16;
    case 'low': return 8;
  }
}
