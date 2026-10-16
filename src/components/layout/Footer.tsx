import { siteContent } from '../../data/siteContent';
import './Footer.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const { footer, brand } = translateData(siteContent, t);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__brand-name">{brand.name}</h3>
            <p className="footer__brand-description">{footer.description}</p>
            <p className="footer__headquarters">
              <span className="footer__label">{t('Headquarters:')}</span> {footer.headquarters}
            </p>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">{t('Services')}</h4>
            <ul className="footer__list">
              {footer.serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="footer__link">{service}</a>
                </li>
              ))}
              <li><a href="/nl/it-consultant-mkb" className="footer__link">{t('IT-consultant voor MKB')}</a></li>
              <li><a href="/agency-technology-partner" className="footer__link">{t('Agency Technology Partner')}</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">{t('Company')}</h4>
            <ul className="footer__list">
              {footer.companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">{t('Connect')}</h4>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${footer.email}`} className="footer__link">{footer.email}</a>
              </li>
              {footer.social.linkedin !== '#' && (
                <li>
                  <a href={footer.social.linkedin} className="footer__link" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} {brand.name}. {t('All rights reserved.')}
          </p>
          <p className="footer__privacy">{t('Enquiry details are used only to respond to your request.')}</p>
        </div>
      </div>
    </footer>
  );
}
