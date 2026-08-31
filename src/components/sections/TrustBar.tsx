import { siteContent } from '../../data/siteContent';
import './TrustBar.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function TrustBar() {
  const { t } = useLanguage();
  const { trustBar } = translateData(siteContent, t);

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
        <p className="trust-bar__disclaimer">{t('Professional experience reference only; organization names do not imply endorsement or partnership.')}</p>
      </div>
    </section>
  );
}
