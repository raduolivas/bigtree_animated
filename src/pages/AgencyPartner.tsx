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
  'pt-BR': {
    eyebrow: 'Parceiro tecnológico white-label // Para agências', title: 'Mantenha o cliente. Amplie a equipe.',
    lead: 'A BigTreeTech ajuda agências a entregar o trabalho técnico por trás de projetos ambiciosos de clientes, sem recrutar, coordenar vários freelancers ou abrir mão do relacionamento com o cliente.',
    cta: 'Conversar sobre uma parceria', secondary: 'Voltar à BigTreeTech',
    painLabel: 'A lacuna de entrega', painTitle: 'Suas oportunidades não devem ser limitadas pela capacidade técnica.',
    pains: ['Um projeto vendido exige competências que sua equipe atual não possui.', 'A disponibilidade dos freelancers muda no meio da entrega.', 'Sua equipe perde horas faturáveis coordenando detalhes técnicos e qualidade.'],
    modelLabel: 'A parceria BTT', modelTitle: 'Uma camada técnica discreta por trás da sua agência.',
    benefits: [['White-label por acordo', 'Podemos trabalhar discretamente por trás da sua marca, com limites claros para a comunicação com o cliente.'], ['Um líder responsável', 'Você tem um único contato sênior coordenando especialidades, qualidade, progresso e transferência.'], ['Combinação flexível de especialistas', 'Acione competências em web, aplicativos, automação, cloud ou segurança somente quando o trabalho exigir.'], ['Preparado para transferência', 'Documentação, acessos e propriedade são organizados para que nem você nem seu cliente fiquem dependentes da BTT.']],
    processLabel: 'Um processo de entrega tranquilo', processTitle: 'Primeiro, alinhamento profundo. Depois, execução confiável.',
    steps: [['01', 'Qualificar juntos', 'Analisamos a oportunidade, o escopo, as responsabilidades, os riscos e a compatibilidade comercial antes de você prometer a entrega.'], ['02', 'Alinhar a entrega', 'Combinamos comunicação, visibilidade da marca, marcos, responsabilidade pelas aprovações e a definição de concluído.'], ['03', 'Entregar como uma equipe', 'Trabalhamos em um único fluxo coordenado enquanto sua agência mantém o relacionamento estratégico com o cliente.']],
    fitTitle: 'Uma ótima combinação quando…', fit: ['Você é responsável pelo relacionamento com o cliente e pode indicar um tomador de decisão claro.', 'O projeto exige execução técnica sênior, não produção anônima de baixo custo.', 'Você valoriza documentação, segurança, comunicação honesta e entrega sustentável.'],
    closing: 'Transforme mais oportunidades qualificadas em trabalhos que sua agência pode entregar com confiança.', closingCta: 'Falar sobre seu próximo projeto',
  },
};

export function AgencyPartner() {
  const { language, setLanguage, t } = useLanguage();
  const c = copy[language];
  useEffect(() => { document.title = `${c.title} | BigTreeTech`; window.scrollTo(0, 0); }, [c.title]);
  return (
    <main className="agency-page">
      <header className="agency-page__header container">
        <Link to="/" className="agency-page__brand">BTT Consulting</Link>
        <div className="agency-page__header-actions">
          <div className="agency-page__language" aria-label={t('Choose language')}>
            <button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            <span>/</span>
            <button type="button" className={language === 'nl' ? 'is-active' : ''} onClick={() => setLanguage('nl')} aria-pressed={language === 'nl'}>NL</button>
            <span>/</span>
            <button type="button" className={language === 'pt-BR' ? 'is-active' : ''} onClick={() => setLanguage('pt-BR')} aria-pressed={language === 'pt-BR'}>PT-BR</button>
          </div>
          <Link to="/#contact" className="agency-page__header-cta">{c.cta}</Link>
        </div>
      </header>
      <section className="agency-page__hero container"><p className="agency-page__eyebrow">{c.eyebrow}</p><h1>{c.title}</h1><p className="agency-page__lead">{c.lead}</p><div className="agency-page__actions"><Link to="/#contact" className="agency-page__cta">{c.cta}</Link><Link to="/" className="agency-page__secondary">{c.secondary}</Link></div></section>
      <section className="agency-page__split container"><article><p className="agency-page__eyebrow">{c.painLabel}</p><h2>{c.painTitle}</h2><ul>{c.pains.map((x) => <li key={x}>{x}</li>)}</ul></article><article className="agency-page__split-highlight"><p className="agency-page__eyebrow">{c.modelLabel}</p><h2>{c.modelTitle}</h2><div className="agency-page__benefits">{c.benefits.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></article></section>
      <section className="agency-page__section container"><p className="agency-page__eyebrow">{c.processLabel}</p><h2>{c.processTitle}</h2><div className="agency-page__steps">{c.steps.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="agency-page__fit container"><h2>{c.fitTitle}</h2><ul>{c.fit.map((x) => <li key={x}>{x}</li>)}</ul></section>
      <section className="agency-page__closing"><div className="container"><h2>{c.closing}</h2><Link to="/#contact" className="agency-page__cta">{c.closingCta}</Link><a href="mailto:contact@bigtreetech.it">contact@bigtreetech.it</a></div></section>
    </main>
  );
}
