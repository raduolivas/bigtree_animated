export interface AdvantageCard {
  id: string;
  title: string;
  detail: string;
}

export interface ConnectionCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const connectionCards: ConnectionCard[] = [
  {
    id: 'local-presence',
    title: 'Local Presence',
    description: 'Real conversations, face-to-face or online — we listen first and build relationships that last.',
    tags: ['Personal Service', 'Client First'],
  },
  {
    id: 'world-class-expertise',
    title: 'World-Class Expertise',
    description: 'Deep technical talent — including senior developers (10+ years), AI specialists, and product strategists who care about results, not jargon.',
    tags: ['Senior Developers', 'AI & Strategy'],
  },
];

export const advantageCards: AdvantageCard[] = [
  {
    id: 'experienced-people',
    title: 'Experienced People',
    detail: '10+ Years Experience',
  },
  {
    id: 'fast-delivery',
    title: 'Fast, Reliable Delivery',
    detail: 'Senior-Only Team',
  },
];

export const techPills = ['Azure', 'React', 'Python', 'Node.js', 'Angular', 'AWS'];

export const seniorGuarantee = {
  title: 'Senior-Only Guarantee',
  description: 'Every engineer on your project has 10+ years of experience. No juniors, no compromises — only battle-tested specialists who deliver excellence.',
};
