export const siteContent = {
  brand: {
    name: 'BTT Consulting',
    tagline: 'Your Partner in Growth',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'BTT Advantage', href: '#btt-advantage' },
      { label: 'BTT Method', href: '#btt-method' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  hero: {
    badge: 'Your Partner in Growth',
    headline: 'Your Business Deserves to Grow.',
    subheadline:
      "Not sure how AI or modern tech can help you? You're not alone. We help business owners — from quiet streets to busy city centers — discover simple, powerful ways to save time, win more customers, and grow with confidence. No tech jargon, no pressure.",
    cta: 'Request a Quote',
    secondaryCta: 'Our Services',
    scrollIndicator: 'Discover More',
  },

  trustBar: {
    label: 'Our team brings experience from:',
    companies: ['Google', 'Rabobank', 'Ericsson', 'ING', 'ASML'],
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Simple Solutions. Real Growth.',
    description:
      "You don't need to understand cloud computing or AI to benefit from them. You just need a partner who explains things plainly, moves fast, and truly cares about your success — whether you're a one-person shop or a growing team.",
  },

  advantage: {
    eyebrow: 'Our Unique Model',
    title: 'Your Growth Partner: World-Class Skill, Personal Care',
    description:
      'We combine deep technical expertise with a down-to-earth, personal approach. Hand-picked senior specialists who listen first, then build practical solutions that help your business grow — enhanced with AI-powered tools and friendly guidance.',
    connections: [
      {
        title: 'Local Presence',
        description:
          'Real conversations, face-to-face or online — we listen first and build relationships that last.',
        tags: ['Personal Service', 'Client First'],
      },
      {
        title: 'World-Class Expertise',
        description:
          'Deep technical talent — including senior developers (10+ years), AI specialists, and product strategists who care about results, not jargon.',
        tags: ['Senior Developers', 'AI & Strategy'],
      },
    ],
    techPills: ['Azure', 'React', 'Python', 'Node.js', 'Angular', 'AWS'],
    cards: [
      { title: 'Experienced People', detail: '10+ Years Experience' },
      { title: 'Fast, Reliable Delivery', detail: 'Senior-Only Team' },
    ],
    guarantee: {
      title: 'Senior-Only Guarantee',
      description:
        'Every engineer on your project has 10+ years of experience. No juniors, no compromises — only battle-tested specialists who deliver excellence.',
    },
  },

  technology: {
    eyebrow: 'Tech That Works For You',
    title: 'Your Technology, Handled',
    description:
      'We set up and run the technology behind your business — from your website to your internal tools — so you can focus on what you do best, without worrying about servers, updates, or downtime.',
  },

  method: {
    eyebrow: 'How We Work',
    title: 'The BTT Method',
    description:
      'A proven five-step process that takes your business from idea to growth — built on 16+ years of experience scaling products at Google, Rabobank, and Ericsson.',
  },

  vision: {
    eyebrow: 'Our Vision',
    description:
      'Become the most trusted IT partner for small and medium businesses across the Netherlands — and beyond, with our sights set on bringing the same elite engineering and AI-driven growth to Canada next.',
  },

  contact: {
    eyebrow: 'Get Started Today',
    title: "Let's Talk About Your Growth",
    description:
      "Tell us what you're trying to achieve — more customers, less busywork, or a better website. We'll show you the simplest way to get there, with no pressure and no tech jargon.",
    success: {
      title: 'Thank You!',
      description:
        'Your request has been received. Our senior engineers will review your project and get back to you within 24 hours.',
      cta: 'Submit Another Request',
    },
  },

  footer: {
    description:
      'Practical technology solutions for businesses that want to grow. We combine real experience with AI-powered tools to help you work smarter, reach more customers, and compete with confidence.',
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
