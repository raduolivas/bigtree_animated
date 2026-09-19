import { siteContent } from '../../data/siteContent';
import { translateData, useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import './TeamExtension.css';

export function TeamExtension() {
  const { t } = useLanguage();
  const { teamExtension } = translateData(siteContent, t);

  const scrollToContact = () => {
    const target = document.querySelector('#contact');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section id="team-extension" className="section team-extension">
      <div className="container">
        <SectionHeading eyebrow={teamExtension.eyebrow} title={teamExtension.title} description={teamExtension.description} />

        <div className="team-extension__comparison">
          <article className="team-extension__panel team-extension__panel--fragmented">
            <p className="team-extension__label">{teamExtension.fragmented.label}</p>
            <h3>{teamExtension.fragmented.title}</h3>
            <ul>
              {teamExtension.fragmented.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>

          <div className="team-extension__connector" aria-hidden="true"><span>→</span></div>

          <article className="team-extension__panel team-extension__panel--managed">
            <p className="team-extension__label">{teamExtension.managed.label}</p>
            <h3>{teamExtension.managed.title}</h3>
            <ul>
              {teamExtension.managed.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        </div>

        <div className="team-extension__steps">
          {teamExtension.steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="team-extension__action">
          <Button variant="primary" size="lg" onClick={scrollToContact}>{teamExtension.cta}</Button>
        </div>
      </div>
    </section>
  );
}
