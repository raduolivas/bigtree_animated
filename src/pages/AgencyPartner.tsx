import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './AgencyPartner.css';

const copy = {
  en: {
    eyebrow: 'White-label technology partner // For agencies',
    title: 'Keep the client. Extend the team.',
    lead: 'BigTreeTech helps agencies deliver the technical work behind ambitious client projects—without recruiting, coordinating a collection of freelancers, or giving up the client relationship.',
    cta: 'Discuss an Agency Partnership', secondary: 'Return to BigTreeTech',
    painLabel: 'The delivery gap', painTitle: 'Your opportunity should not be limited by technical capacity.',
    pains: ['A signed project needs skills your current team does not have.', 'Freelancer availability changes halfway through delivery.', 'Your team loses billable time coordinating technical details and quality.'],
    modelLabel: 'The BTT partnership', modelTitle: 'A discreet technical layer behind your agency.',
    benefits: [
      ['White-label by agreement', 'We can work quietly behind your brand with clear boundaries for client communication.'],
      ['One accountable lead', 'You have one senior point of contact coordinating disciplines, quality, progress, and handover.'],
      ['Flexible specialist mix', 'Bring in web, application, automation, cloud, or security expertise only when the work requires it.'],
      ['Built for handover', 'Documentation, access, and ownership are prepared so neither you nor your client becomes dependent on us.'],
    ],
    processLabel: 'A calm delivery process', processTitle: 'Deep alignment first. Reliable execution after.',
    steps: [['01', 'Qualify together', 'We review the opportunity, scope, responsibilities, risks, and commercial fit before you promise delivery.'], ['02', 'Align delivery', 'We agree on communication, brand visibility, milestones, approval ownership, and the definition of done.'], ['03', 'Ship as one team', 'We deliver through one coordinated workflow while your agency retains the strategic client relationship.']],
    fitTitle: 'A strong fit when…', fit: ['You own the client relationship and can provide a clear decision-maker.', 'The project needs senior technical execution, not cheap anonymous production.', 'You value documentation, security, honest communication, and sustainable delivery.'],
    closing: 'Turn more qualified opportunities into work your agency can confidently deliver.', closingCta: 'Talk About Your Next Project',
  },
  nl: {
    eyebrow: 'White-label technologiepartner // Voor bureaus', title: 'Behoud de klant. Breid het team uit.',
    lead: 'BigTreeTech helpt bureaus het technische werk achter ambitieuze klantprojecten te realiseren—zonder recruitment, een verzameling freelancers aan te sturen of de klantrelatie op te geven.',
    cta: 'Bespreek een bureaupartnerschap', secondary: 'Terug naar BigTreeTech',
    painLabel: 'Het deliverygat', painTitle: 'Uw kansen mogen niet worden beperkt door technische capaciteit.',
    pains: ['Een verkocht project vereist expertise die uw huidige team niet heeft.', 'Beschikbaarheid van freelancers verandert midden in het project.', 'Uw team verliest factureerbare tijd aan technische afstemming en kwaliteitscontrole.'],
    modelLabel: 'Het BTT-partnerschap', modelTitle: 'Een discrete technische laag achter uw bureau.',
    benefits: [['White-label in overleg', 'Wij kunnen achter uw merk werken met heldere afspraken over klantcommunicatie.'], ['Eén verantwoordelijke lead', 'U hebt één senior aanspreekpunt voor disciplines, kwaliteit, voortgang en overdracht.'], ['Flexibele expertise', 'Zet web-, applicatie-, automatiserings-, cloud- of securityexpertise alleen in wanneer het werk dit vereist.'], ['Gebouwd voor overdracht', 'Documentatie, toegang en eigenaarschap worden voorbereid zodat u en uw klant niet afhankelijk van ons worden.']],
    processLabel: 'Een rustig leveringsproces', processTitle: 'Eerst diep afstemmen. Daarna betrouwbaar uitvoeren.',
    steps: [['01', 'Samen kwalificeren', 'We beoordelen kans, scope, verantwoordelijkheden, risico’s en commerciële fit voordat u levering toezegt.'], ['02', 'Delivery afstemmen', 'We spreken communicatie, merkzichtbaarheid, mijlpalen, goedkeuring en de definitie van gereed af.'], ['03', 'Als één team leveren', 'We leveren via één gecoördineerde werkwijze terwijl uw bureau de strategische klantrelatie behoudt.']],
    fitTitle: 'Een sterke match wanneer…', fit: ['U beheert de klantrelatie en kunt één duidelijke beslisser aanwijzen.', 'Het project vraagt senior technische uitvoering, geen goedkope anonieme productie.', 'U hecht waarde aan documentatie, security, eerlijke communicatie en duurzame delivery.'],
    closing: 'Zet meer gekwalificeerde kansen om in werk dat uw bureau met vertrouwen kan leveren.', closingCta: 'Bespreek uw volgende project',
  },
};

export function AgencyPartner() {
  const { language } = useLanguage();
  const c = copy[language];
  useEffect(() => { document.title = `${c.title} | BigTreeTech`; window.scrollTo(0, 0); }, [c.title]);
  return (
    <main className="agency-page">
      <header className="agency-page__header container"><Link to="/" className="agency-page__brand">BTT Consulting</Link><Link to="/#contact" className="agency-page__header-cta">{c.cta}</Link></header>
      <section className="agency-page__hero container"><p className="agency-page__eyebrow">{c.eyebrow}</p><h1>{c.title}</h1><p className="agency-page__lead">{c.lead}</p><div className="agency-page__actions"><Link to="/#contact" className="agency-page__cta">{c.cta}</Link><Link to="/" className="agency-page__secondary">{c.secondary}</Link></div></section>
      <section className="agency-page__split container"><article><p className="agency-page__eyebrow">{c.painLabel}</p><h2>{c.painTitle}</h2><ul>{c.pains.map((x) => <li key={x}>{x}</li>)}</ul></article><article className="agency-page__split-highlight"><p className="agency-page__eyebrow">{c.modelLabel}</p><h2>{c.modelTitle}</h2><div className="agency-page__benefits">{c.benefits.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></article></section>
      <section className="agency-page__section container"><p className="agency-page__eyebrow">{c.processLabel}</p><h2>{c.processTitle}</h2><div className="agency-page__steps">{c.steps.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="agency-page__fit container"><h2>{c.fitTitle}</h2><ul>{c.fit.map((x) => <li key={x}>{x}</li>)}</ul></section>
      <section className="agency-page__closing"><div className="container"><h2>{c.closing}</h2><Link to="/#contact" className="agency-page__cta">{c.closingCta}</Link><a href="mailto:contact@bigtreetech.it">contact@bigtreetech.it</a></div></section>
    </main>
  );
}
