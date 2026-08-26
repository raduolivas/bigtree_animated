import { siteContent } from '../../data/siteContent';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import './Hero.css';

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="home" className="section section--hero hero">
      <div className="container hero__content">
        <Badge text={hero.badge} />
        <h1 className="hero__headline">{hero.headline}</h1>
        <p className="hero__subheadline">{hero.subheadline}</p>
        <div className="hero__actions">
          <Button variant="primary" size="lg">
            {hero.cta}
          </Button>
          <Button variant="secondary" size="lg">
            {hero.secondaryCta}
          </Button>
        </div>
      </div>
      <ScrollIndicator label={hero.scrollIndicator} />
    </section>
  );
}
