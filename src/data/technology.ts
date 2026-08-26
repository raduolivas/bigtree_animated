export interface TechCapability {
  id: string;
  title: string;
  description: string;
}

export const capabilities: TechCapability[] = [
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture',
    description: 'A stable foundation that scales with demand without forcing an expensive rebuild.',
  },
  {
    id: 'cicd',
    title: 'CI/CD Pipelines',
    description: 'Safer, repeatable releases that reduce downtime and get improvements to users faster.',
  },
  {
    id: 'observability',
    title: 'Observability',
    description: 'Clear visibility into performance and problems before customers need to report them.',
  },
  {
    id: 'security-by-design',
    title: 'Security by Design',
    description: 'Protection designed into every layer from the beginning, not added after an incident.',
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    description: 'Consistent environments that can be reviewed, recovered, and changed with confidence.',
  },
  {
    id: 'performance',
    title: 'Performance Tuning',
    description: 'Faster experiences, more efficient infrastructure, and fewer customers lost to delays.',
  },
];
