export interface Opportunity {
  id: string;
  label: string;
  shortLabel: string;
  service: string;
  outcome: string;
  firstStep: string;
  signal: string;
}

export const opportunities: Opportunity[] = [
  {
    id: 'customers',
    label: 'We need more customers or better digital conversion',
    shortLabel: 'Win more customers',
    service: 'Websites That Win Business',
    outcome: 'A faster, more credible customer journey designed to turn attention into qualified enquiries and sales.',
    firstStep: 'Review where visitors lose confidence or abandon the journey, then prioritize the highest-value improvements.',
    signal: 'Growth signal detected',
  },
  {
    id: 'automation',
    label: 'Too much time is lost to repetitive manual work',
    shortLabel: 'Automate costly work',
    service: 'AI & Business Automation',
    outcome: 'Less repetitive administration, faster response times, and more capacity for work that needs human judgment.',
    firstStep: 'Map one high-volume workflow and measure its time, errors, delays, and automation potential.',
    signal: 'Efficiency signal detected',
  },
  {
    id: 'systems',
    label: 'Our systems are disconnected, slow, or difficult to change',
    shortLabel: 'Modernize systems',
    service: 'Connected Business Systems',
    outcome: 'Reliable information flow between teams and tools, with fewer workarounds and a stronger foundation for growth.',
    firstStep: 'Identify the systems that hold critical data and the handoffs currently creating delay or duplicate work.',
    signal: 'Modernization signal detected',
  },
  {
    id: 'direction',
    label: 'We have technology ideas but no clear priority or roadmap',
    shortLabel: 'Create a clear roadmap',
    service: 'Technology Strategy',
    outcome: 'A practical sequence of decisions and investments connected to commercial value, risk, and available capacity.',
    firstStep: 'Clarify the business outcomes, constraints, and competing initiatives before recommending technology.',
    signal: 'Strategy signal detected',
  },
  {
    id: 'security',
    label: 'We are concerned about security, resilience, or customer data',
    shortLabel: 'Reduce digital risk',
    service: 'Security Testing',
    outcome: 'A clearer view of real exposure and a prioritized plan to reduce risk without creating unnecessary disruption.',
    firstStep: 'Establish what needs protection, how it could be exposed, and which controls deserve attention first.',
    signal: 'Risk signal detected',
  },
] as const;
