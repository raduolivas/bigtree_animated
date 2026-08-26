export interface TechCapability {
  id: string;
  title: string;
  description: string;
}

export const capabilities: TechCapability[] = [
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture',
    description: 'Designing scalable, resilient systems on Azure, AWS, and GCP.',
  },
  {
    id: 'cicd',
    title: 'CI/CD Pipelines',
    description: 'Automated build, test, and deployment workflows that ship code safely.',
  },
  {
    id: 'observability',
    title: 'Observability',
    description: 'Monitoring, logging, and alerting so you always know how your systems perform.',
  },
  {
    id: 'security-by-design',
    title: 'Security by Design',
    description: 'Baking security into every layer from day one, not bolting it on later.',
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    description: 'Reproducible, version-controlled infrastructure with Terraform and Pulumi.',
  },
  {
    id: 'performance',
    title: 'Performance Tuning',
    description: 'Optimizing response times, throughput, and resource utilization.',
  },
];
