import { siteContent } from '../../data/siteContent';
import { services } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from './ServiceCard';
import './Services.css';

export function Services() {
  const { services: servicesCopy } = siteContent;

  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading
          eyebrow={servicesCopy.eyebrow}
          title={servicesCopy.title}
          description={servicesCopy.description}
        />
        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
