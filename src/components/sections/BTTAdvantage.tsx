import { siteContent } from '../../data/siteContent';
import { SectionHeading } from '../ui/SectionHeading';
import './BTTAdvantage.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function BTTAdvantage() {
  const { t } = useLanguage();
  const { advantage } = translateData(siteContent, t);

  return (
    <section id="btt-advantage" className="section btt-advantage">
      <div className="container">
        <SectionHeading
          eyebrow={advantage.eyebrow}
          title={advantage.title}
          description={advantage.description}
        />

        <div className="advantage__grid">
          <div className="advantage__cards">
            {advantage.connections.map((card) => (
              <div key={card.title} className="advantage__card">
                <h3 className="advantage__card-title">{card.title}</h3>
                  <p className="advantage__card-description">{card.description}</p>
                <div className="advantage__card-tags">
                  {card.tags.map((tag) => (
                    <span key={tag} className="advantage__tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="advantage__guarantee">
            <h3 className="advantage__guarantee-title">{advantage.guarantee.title}</h3>
            <div className="advantage__card-tags">
              <p className="advantage__guarantee-description">{advantage.guarantee.description}</p>
            </div>
            <div className="advantage__pills">
              {advantage.techPills.map((pill) => (
                <span key={pill} className="advantage__pill">{pill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
