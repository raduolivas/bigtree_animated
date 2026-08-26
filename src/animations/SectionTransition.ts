export interface SectionTransitionConfig {
  sectionId: string;
  triggerStart: string;
  triggerEnd: string;
  animation: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'stagger';
  staggerDelay?: number;
}

export const sectionTransitions: SectionTransitionConfig[] = [
  { sectionId: '#trust-bar', triggerStart: 'top 80%', triggerEnd: 'top 20%', animation: 'fadeIn' },
  { sectionId: '#services', triggerStart: 'top 80%', triggerEnd: 'top 20%', animation: 'fadeUp' },
  { sectionId: '#btt-advantage', triggerStart: 'top 80%', triggerEnd: 'top 20%', animation: 'fadeUp' },
  { sectionId: '#technology', triggerStart: 'top 80%', triggerEnd: 'top 20%', animation: 'slideLeft' },
  { sectionId: '#btt-method', triggerStart: 'top 80%', triggerEnd: 'top 20%', animation: 'fadeUp' },
  { sectionId: '#contact', triggerStart: 'top 80%', triggerEnd: 'top 20%', animation: 'fadeUp' },
];
