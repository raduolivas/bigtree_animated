import { siteContent } from '../../data/siteContent';
import { translateData, useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import './EngagementModels.css';

export function EngagementModels() {
  const { t } = useLanguage();
  const { engagementModels } = translateData(siteContent, t);
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });

  return (
    <section id="engagement-models" className="section engagement-models">
      <div className="container">
        <SectionHeading eyebrow={engagementModels.eyebrow} title={engagementModels.title} description={engagementModels.description} />
        <div className="engagement-models__grid">
          {engagementModels.models.map((model, index) => (
            <article key={model.label} className={index === 2 ? 'engagement-models__card engagement-models__card--featured' : 'engagement-models__card'}>
              <div className="engagement-models__meta"><span>0{index + 1}</span><span>{model.timeframe}</span></div>
              <p className="engagement-models__label">{model.label}</p>
              <h3>{model.title}</h3>
              <p className="engagement-models__text">{model.text}</p>
              <ul>{model.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="engagement-models__pricing">
          <p>{engagementModels.pricing}</p>
          <Button variant="primary" size="lg" onClick={scrollToContact}>{engagementModels.cta}</Button>
        </div>
      </div>
    </section>
  );
}
