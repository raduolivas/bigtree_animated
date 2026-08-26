import type { Service } from '../../data/services';
import { useFruitInteraction } from '../../hooks/useFruitInteraction';
import './ServiceCard.css';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { onServiceHover } = useFruitInteraction();

  return (
    <article
      className="service-card"
      style={{ '--service-accent': service.accent } as React.CSSProperties}
      onMouseEnter={() => onServiceHover(service.id)}
      onMouseLeave={() => onServiceHover(null)}
    >
      <span className="service-card__number">{service.number}</span>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.shortDescription}</p>
      <span className="service-card__category">{service.category}</span>
    </article>
  );
}
