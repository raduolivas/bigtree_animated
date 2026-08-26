export interface MethodStep {
  id: string;
  number: string;
  title: string;
  description: string;
  treePhase: string;
}

export const methodSteps: MethodStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description: 'We listen to your challenges, understand your business, and identify the biggest opportunities for growth.',
    treePhase: 'roots',
  },
  {
    id: 'strategize',
    number: '02',
    title: 'Strategize',
    description: 'We create a clear, practical technology roadmap aligned with your goals and budget.',
    treePhase: 'trunk',
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    description: 'Our senior engineers design and build your solution — no shortcuts, no hand-offs to juniors.',
    treePhase: 'branches',
  },
  {
    id: 'launch',
    number: '04',
    title: 'Launch',
    description: 'We deploy, test, and refine until everything runs smoothly in the real world.',
    treePhase: 'fruits',
  },
  {
    id: 'grow',
    number: '05',
    title: 'Grow',
    description: 'We stay with you — optimizing, scaling, and evolving your technology as your business grows.',
    treePhase: 'mature',
  },
];
