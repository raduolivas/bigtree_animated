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
    description: 'We understand the cost of the problem, the people affected, and the outcome worth pursuing.',
    treePhase: 'roots',
  },
  {
    id: 'strategize',
    number: '02',
    title: 'Strategize',
    description: 'We define a practical roadmap, priorities, investment range, and measures of success.',
    treePhase: 'trunk',
  },
  {
    id: 'build',
    number: '03',
    title: 'Build',
    description: 'Senior specialists build in focused increments, showing progress and testing assumptions early.',
    treePhase: 'branches',
  },
  {
    id: 'launch',
    number: '04',
    title: 'Launch',
    description: 'We launch carefully, prepare your team, and confirm the solution works in daily operations.',
    treePhase: 'fruits',
  },
  {
    id: 'grow',
    number: '05',
    title: 'Grow',
    description: 'We measure the result, improve what matters, and evolve the solution as your business grows.',
    treePhase: 'mature',
  },
];
