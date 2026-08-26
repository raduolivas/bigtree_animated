export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  branchId: string;
  accent: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: 'ai-growth',
    number: '01',
    title: 'AI Growth Solutions for Local Businesses',
    shortDescription: 'Harness AI to attract customers, automate tasks, and grow revenue.',
    description: 'We help local businesses leverage artificial intelligence to attract more customers, automate repetitive tasks, and unlock new revenue streams — all without needing to understand the technology yourself.',
    category: 'AI',
    branchId: 'branch-ai',
    accent: 'var(--color-fruit-ai)',
    slug: 'ai-growth',
  },
  {
    id: 'strategic-consultancy',
    number: '02',
    title: 'Strategic Consultancy',
    shortDescription: 'Expert guidance to align technology with your business goals.',
    description: 'Our senior consultants work alongside you to understand your business challenges and create a clear technology roadmap that drives measurable results.',
    category: 'Consultancy',
    branchId: 'branch-consultancy',
    accent: 'var(--color-fruit-consultancy)',
    slug: 'strategic-consultancy',
  },
  {
    id: 'web-apps',
    number: '03',
    title: 'Websites & Web Apps',
    shortDescription: 'Beautiful, fast, and effective digital experiences.',
    description: 'From marketing websites to complex web applications, we build digital products that look premium, load fast, and convert visitors into customers.',
    category: 'Web',
    branchId: 'branch-web',
    accent: 'var(--color-fruit-web)',
    slug: 'web-apps',
  },
  {
    id: 'cloud-platform',
    number: '04',
    title: 'Cloud & Platform Engineering',
    shortDescription: 'Scalable, secure cloud infrastructure that just works.',
    description: 'We design, build, and manage cloud infrastructure on Azure, AWS, and GCP — so your applications are always fast, secure, and ready to scale.',
    category: 'Cloud',
    branchId: 'branch-cloud',
    accent: 'var(--color-fruit-cloud)',
    slug: 'cloud-platform',
  },
  {
    id: 'backend',
    number: '05',
    title: 'Backend & Systems',
    shortDescription: 'Robust backend systems built for reliability and performance.',
    description: 'We engineer the server-side architecture, APIs, and data systems that power your applications — built for reliability, performance, and long-term maintainability.',
    category: 'Backend',
    branchId: 'branch-backend',
    accent: 'var(--color-fruit-backend)',
    slug: 'backend',
  },
  {
    id: 'devops',
    number: '06',
    title: 'DevOps & Automation',
    shortDescription: 'Streamline your development and deployment pipeline.',
    description: 'We automate your build, test, and deployment pipelines so your team ships faster with fewer errors — and your infrastructure manages itself.',
    category: 'Automation',
    branchId: 'branch-automation',
    accent: 'var(--color-fruit-devops)',
    slug: 'devops',
  },
  {
    id: 'cybersecurity',
    number: '07',
    title: 'Cybersecurity & SOC',
    shortDescription: 'Protect your business from digital threats around the clock.',
    description: 'Our security operations center monitors, detects, and responds to threats 24/7 — keeping your business, data, and customers safe.',
    category: 'Security',
    branchId: 'branch-security',
    accent: 'var(--color-fruit-security)',
    slug: 'cybersecurity',
  },
  {
    id: 'pentesting',
    number: '08',
    title: 'Pentesting & Vulnerability',
    shortDescription: 'Find and fix vulnerabilities before attackers do.',
    description: 'Our ethical hackers test your systems the way real attackers would — then give you a clear, actionable plan to fix every vulnerability we find.',
    category: 'Pentesting',
    branchId: 'branch-pentesting',
    accent: 'var(--color-fruit-pentesting)',
    slug: 'pentesting',
  },
  {
    id: 'mobile',
    number: '09',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform apps your customers will love.',
    description: 'We build mobile applications for iOS and Android that are fast, beautiful, and designed around your users — from concept through App Store launch.',
    category: 'Mobile',
    branchId: 'branch-mobile',
    accent: 'var(--color-fruit-mobile)',
    slug: 'mobile',
  },
];
