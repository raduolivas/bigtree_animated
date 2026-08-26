import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
      <h2 className="section__title">{title}</h2>
      {description && <article className="service-card"><p className="section__description">{description}</p></article>}
    </div>
  );
}
