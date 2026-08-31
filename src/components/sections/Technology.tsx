import { siteContent } from '../../data/siteContent';
import { capabilities } from '../../data/technology';
import { SectionHeading } from '../ui/SectionHeading';
import './Technology.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function Technology() {
  const { t } = useLanguage();
  const { technology } = translateData(siteContent, t);
  const localizedCapabilities = translateData(capabilities, t);

  return (
    <section id="technology" className="section technology">
      <div className="container">
        <SectionHeading
          eyebrow={technology.eyebrow}
          title={technology.title}
          description={technology.description}
        />

        <div className="technology__grid">
          {localizedCapabilities.map((tech) => (
            <div key={tech.id} className="technology__card">
              <h3 className="technology__card-title">{tech.title}</h3>
              <p className="technology__card-description">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
