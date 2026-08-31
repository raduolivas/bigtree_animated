import { siteContent } from '../../data/siteContent';
import { methodSteps } from '../../data/method';
import { SectionHeading } from '../ui/SectionHeading';
import './BTTMethod.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function BTTMethod() {
  const { t } = useLanguage();
  const { method } = translateData(siteContent, t);
  const localizedSteps = translateData(methodSteps, t);

  return (
    <section id="btt-method" className="section btt-method">
      <div className="container">
        <SectionHeading
          eyebrow={method.eyebrow}
          title={method.title}
          description={method.description}
          align="center"
        />

        <div className="method__timeline">
          {localizedSteps.map((step) => (
            <div key={step.id} className="method__step">
              <span className="method__step-number">{step.number}</span>
              <h3 className="method__step-title">{step.title}</h3>
              <p className="method__step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
