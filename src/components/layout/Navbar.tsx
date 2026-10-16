import { useState, useEffect } from 'react';
import { siteContent } from '../../data/siteContent';
import { useScrollStore } from '../../stores/scrollStore';
import './Navbar.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const content = translateData(siteContent, t);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollStore((s) => s.scrollY);

  useEffect(() => {
    setScrolled(scrollY > 50);
  }, [scrollY]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    } else {
      window.location.href = `/${href}`;
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label={t('Main navigation')}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={(e) => handleNavClick(e, '#home')}>
          {content.brand.name}
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
          aria-label={t('Toggle navigation menu')}
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>

        <ul id="main-navigation-links" className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {content.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__language" aria-label={t('Choose language')}>
            <button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            <span>/</span>
            <button type="button" className={language === 'nl' ? 'is-active' : ''} onClick={() => setLanguage('nl')} aria-pressed={language === 'nl'}>NL</button>
            <span>/</span>
            <button type="button" className={language === 'pt-BR' ? 'is-active' : ''} onClick={() => setLanguage('pt-BR')} aria-pressed={language === 'pt-BR'}>PT-BR</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
