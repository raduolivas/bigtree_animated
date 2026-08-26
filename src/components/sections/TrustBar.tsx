import { siteContent } from '../../data/siteContent';
import './TrustBar.css';

export function TrustBar() {
  const { trustBar } = siteContent;

  return (
    <section id="trust-bar" className="section section--compact trust-bar">
      <div className="container">
        <p className="trust-bar__label">{trustBar.label}</p>
        <div className="trust-bar__logos">
          {trustBar.companies.map((company) => (
            <span key={company} className="trust-bar__company">
              {company}
            </span>
          ))}
        </div>
        <p className="trust-bar__disclaimer">Professional experience reference only; organization names do not imply endorsement or partnership.</p>
      </div>
    </section>
  );
}
