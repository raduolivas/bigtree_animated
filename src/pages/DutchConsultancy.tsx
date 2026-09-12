import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './DutchConsultancy.css';

const services = [
  {
    number: '01',
    title: 'IT-consultant voor het MKB',
    text: 'Praktisch technologieadvies dat begint bij uw bedrijfsdoel. U krijgt heldere prioriteiten, een realistisch plan en senior begeleiding zonder onnodig jargon.',
  },
  {
    number: '02',
    title: 'AI-automatisering voor bedrijven',
    text: 'We onderzoeken waar repetitief werk, trage opvolging of verspreide informatie tijd kost en automatiseren alleen wat aantoonbare waarde oplevert.',
  },
  {
    number: '03',
    title: 'Websites die klanten opleveren',
    text: 'Snelle, professionele websites die vertrouwen opbouwen, uw diensten duidelijk presenteren en bezoekers helpen om contact op te nemen.',
  },
];

export function DutchConsultancy() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage('nl');
    document.title = 'IT-consultant voor MKB | AI-automatisering | BigTreeTech';
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');
    description?.setAttribute('content', 'Senior IT-consultant voor het MKB. Praktisch advies, AI-automatisering en professionele websites voor groeiende bedrijven in Nederland.');
    window.scrollTo(0, 0);
    return () => {
      if (previousDescription) description?.setAttribute('content', previousDescription);
    };
  }, [setLanguage]);

  return (
    <main className="nl-consultancy">
      <header className="nl-consultancy__header container">
        <Link to="/" className="nl-consultancy__brand">BTT Consulting</Link>
        <Link to="/#contact" className="nl-consultancy__header-link">Plan een gesprek</Link>
      </header>

      <section className="nl-consultancy__hero container">
        <div>
          <p className="nl-consultancy__eyebrow">Senior technologiepartner // Nederland</p>
          <h1>IT-consultant voor het MKB en praktische AI-automatisering</h1>
          <p className="nl-consultancy__lead">BigTreeTech helpt kleine en middelgrote bedrijven slimmer groeien met duidelijke IT-strategie, betrouwbare automatisering en digitale ervaringen die klanten vertrouwen.</p>
          <div className="nl-consultancy__actions">
            <Link to="/#contact" className="nl-consultancy__cta">Plan een gratis groeigesprek</Link>
            <Link to="/" className="nl-consultancy__secondary">Bekijk BigTreeTech</Link>
          </div>
          <p className="nl-consultancy__reassurance">30 minuten · Vrijblijvend · Direct contact met een senior specialist</p>
        </div>
        <aside className="nl-consultancy__promise">
          <span>Uw uitdaging eerst</span>
          <strong>Geen standaardpakket, maar een verstandige volgende stap.</strong>
          <p>We luisteren, brengen de commerciële impact in kaart en adviseren een oplossing die bij uw bedrijf, team en budget past.</p>
        </aside>
      </section>

      <section className="nl-consultancy__section container" aria-labelledby="diensten-title">
        <div className="nl-consultancy__section-heading">
          <p>Technologie met bedrijfswaarde</p>
          <h2 id="diensten-title">Waarmee we Nederlandse ondernemers helpen</h2>
        </div>
        <div className="nl-consultancy__grid">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nl-consultancy__section nl-consultancy__process container">
        <div className="nl-consultancy__section-heading">
          <p>Van vraag naar resultaat</p>
          <h2>Een eenvoudige start, zonder technisch voorwerk</h2>
        </div>
        <ol>
          <li><span>01</span><div><strong>Vertel wat u tegenhoudt</strong><p>Een proces dat te veel tijd kost, een website die weinig aanvragen oplevert of een idee waarvan de prioriteit nog onduidelijk is.</p></div></li>
          <li><span>02</span><div><strong>Ontvang een eerlijke analyse</strong><p>We bespreken kansen, risico’s en een haalbare eerste stap. Ook wanneer een grote investering niet nodig is.</p></div></li>
          <li><span>03</span><div><strong>Bouw gericht verder</strong><p>Senior specialisten leveren in overzichtelijke stappen en blijven aanspreekbaar voor het resultaat.</p></div></li>
        </ol>
      </section>

      <section className="nl-consultancy__closing">
        <div className="container">
          <p>IT-advies voor MKB zonder onnodige complexiteit</p>
          <h2>Welke technologie kan uw bedrijf vandaag al vooruithelpen?</h2>
          <Link to="/#contact" className="nl-consultancy__cta">Bespreek uw uitdaging</Link>
          <a href="mailto:contact@bigtreetech.it">contact@bigtreetech.it</a>
        </div>
      </section>
    </main>
  );
}
