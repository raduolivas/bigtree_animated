import { siteContent } from '../../data/siteContent';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import './Hero.css';

export function Hero() {
  const { hero } = siteContent;

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="section section--hero hero">
      <div className="container hero__content">
        <Badge text={hero.badge} />
        <h1 className="hero__headline">{hero.headline}</h1>
        <p className="hero__subheadline">{hero.subheadline}</p>
        <div className="hero__actions">
          <Button variant="primary" size="lg" onClick={() => scrollToSection('#contact')}>
            {hero.cta}
          </Button>
          <Button className="hero__glass-cta" variant="secondary" size="lg" onClick={() => scrollToSection('#services')}>
            {hero.secondaryCta}
          </Button>
        </div>
      </div>
      <ScrollIndicator label={hero.scrollIndicator} />
    </section>
  );
}
