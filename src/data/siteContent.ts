export const siteContent = {
  brand: {
    name: 'BTT Consulting',
    tagline: 'Technology Built for Growth',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'BTT Advantage', href: '#btt-advantage' },
      { label: 'BTT Method', href: '#btt-method' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  hero: {
    badge: 'Senior Technology Partner // Netherlands',
    headline: 'Technology That Moves Your Business Forward.',
    subheadline:
      'We help ambitious small and medium businesses win more customers, automate costly work, and modernize the systems holding them back. Senior expertise, practical advice, and no unnecessary complexity.',
    cta: 'Book a Growth Call',
    secondaryCta: 'Explore Solutions',
    scrollIndicator: 'See How We Work',
  },

  trustBar: {
    label: 'Our specialists bring professional experience from organizations including:',
    companies: ['Google', 'Rabobank', 'Ericsson', 'ING', 'ASML'],
  },

  services: {
    eyebrow: 'Business Outcomes // Technical Depth',
    title: 'Solve What Slows Your Business Down.',
    description:
      'Start with the result you need—not a list of technologies. We identify the simplest high-value solution, build it with senior specialists, and make sure it works in the real world.',
  },

  advantage: {
    eyebrow: 'Why BTT // Senior by Design',
    title: 'Senior Expertise. Business-First Thinking.',
    description:
      'You work directly with experienced people who understand both technology and commercial reality. We listen first, challenge assumptions when needed, and remain accountable for the outcome.',
    connections: [
      {
        title: 'Close, Direct Partnership',
        description:
          'Clear conversations with the people doing the work—online or face-to-face. No layers of account management and no disappearing after launch.',
        tags: ['Direct Access', 'Clear Advice'],
      },
      {
        title: 'Experience Where It Matters',
        description:
          'Senior engineers, AI specialists, and product strategists focused on reducing risk and delivering a result your business can actually use.',
        tags: ['Senior Specialists', 'Outcome Focused'],
      },
    ],
    techPills: ['Azure', 'React', 'Python', 'Node.js', 'Angular', 'AWS'],
    cards: [
      { title: 'Experienced People', detail: '10+ Years Experience' },
      { title: 'Fast, Reliable Delivery', detail: 'Senior-Only Team' },
    ],
    guarantee: {
      title: 'Built by Senior Specialists',
      description:
        'Your project is designed and delivered by professionals with 10+ years of experience. You get faster decisions, fewer expensive mistakes, and technology built to last.',
    },
  },

  technology: {
    eyebrow: 'Reliable Foundations // No Surprises',
    title: 'Technology You Do Not Have to Worry About.',
    description:
      'Behind every simple customer experience is disciplined engineering. We build secure, observable, maintainable systems so your team can focus on running the business.',
  },

  method: {
    eyebrow: 'From Problem to Progress // Five Steps',
    title: 'A Clear Path from Idea to Result.',
    description:
      'Every engagement begins with the business problem, produces a practical roadmap, and ends with a working solution your team is prepared to use.',
  },

  vision: {
    eyebrow: 'Our Mission // Long-Term Partnership',
    description:
      'To become the technology partner growing businesses trust for honest advice, exceptional engineering, and measurable progress—starting in the Netherlands and building lasting partnerships beyond it.',
  },

  contact: {
    eyebrow: 'Free 30-Minute Growth Call // No Obligation',
    title: 'Bring Us the Business Problem.',
    description:
      'Tell us what is costing you time, customers, or confidence. We will help you clarify the opportunity and identify a sensible next step—without a sales presentation or technical jargon.',
    nextSteps: [
      {
        step: '01',
        title: 'We review your situation',
        description: 'A senior consultant reads your message and prepares the right questions.',
      },
      {
        step: '02',
        title: 'We talk for 30 minutes',
        description: 'A focused, jargon-free conversation about the problem and business impact.',
      },
      {
        step: '03',
        title: 'You leave with clarity',
        description: 'We recommend a sensible next move—even when that does not involve us.',
      },
    ],
    success: {
      title: 'Thank You!',
      description:
        'Your request has been received. A senior consultant will review it and get back to you within one business day.',
      cta: 'Submit Another Request',
    },
  },

  footer: {
    description:
      'Senior technology consultancy for growing businesses that want to win customers, automate operations, and modernize with confidence.',
    headquarters: 'Amsterdam, Netherlands',
    serviceLinks: [
      'Web App Development',
      'Cloud Integration',
      'DevOps & Automation',
      'Strategic Consultancy',
    ],
    companyLinks: [
      { label: 'The BTT Advantage', href: '#btt-advantage' },
      { label: 'The BTT Method', href: '#btt-method' },
      { label: 'Contact Us', href: '#contact' },
    ],
    email: 'info@bttconsulting.com',
    social: {
      linkedin: '#',
    },
  },
} as const;
