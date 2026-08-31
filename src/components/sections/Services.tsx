import { siteContent } from '../../data/siteContent';
import { services } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from './ServiceCard';
import './Services.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  const { services: servicesCopy } = translateData(siteContent, t);
  const localizedServices = translateData(services, t);

  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading
          eyebrow={servicesCopy.eyebrow}
          title={servicesCopy.title}
          description={servicesCopy.description}
        />
        <div className="services__grid">
          {localizedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
