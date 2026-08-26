import { siteContent } from '../../data/siteContent';
import { methodSteps } from '../../data/method';
import { SectionHeading } from '../ui/SectionHeading';
import './BTTMethod.css';

export function BTTMethod() {
  const { method } = siteContent;

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
          {methodSteps.map((step) => (
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
