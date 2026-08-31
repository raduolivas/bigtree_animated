import { siteContent } from '../../data/siteContent';
import './VisionCard.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function VisionCard() {
  const { t } = useLanguage();
  const { vision } = translateData(siteContent, t);

  return (
    <section className="section section--compact vision-card">
      <div className="container">
        <div className="vision__content">
          <h2 className="vision__eyebrow">{vision.eyebrow}</h2>
          <p className="vision__description">{vision.description}</p>
        </div>
      </div>
    </section>
  );
}
