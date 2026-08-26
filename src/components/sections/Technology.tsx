import { siteContent } from '../../data/siteContent';
import { capabilities } from '../../data/technology';
import { SectionHeading } from '../ui/SectionHeading';
import './Technology.css';

export function Technology() {
  const { technology } = siteContent;

  return (
    <section id="technology" className="section technology">
      <div className="container">
        <SectionHeading
          eyebrow={technology.eyebrow}
          title={technology.title}
          description={technology.description}
        />

        <div className="technology__grid">
          {capabilities.map((tech) => (
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
