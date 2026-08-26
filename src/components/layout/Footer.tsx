import { siteContent } from '../../data/siteContent';
import './Footer.css';

export function Footer() {
  const { footer, brand } = siteContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__brand-name">{brand.name}</h3>
            <p className="footer__brand-description">{footer.description}</p>
            <p className="footer__headquarters">
              <span className="footer__label">Headquarters:</span> {footer.headquarters}
            </p>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Services</h4>
            <ul className="footer__list">
              {footer.serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="footer__link">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Company</h4>
            <ul className="footer__list">
              {footer.companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__column-title">Connect</h4>
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
            &copy; {currentYear} {brand.name}. All rights reserved.
          </p>
          <p className="footer__privacy">Enquiry details are used only to respond to your request.</p>
        </div>
      </div>
    </footer>
  );
}
