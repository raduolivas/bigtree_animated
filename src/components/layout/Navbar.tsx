import { useState, useEffect, useRef } from 'react';
import { siteContent } from '../../data/siteContent';
import { useScrollStore } from '../../stores/scrollStore';
import { setPageScrollLocked } from '../../hooks/useScrollProgress';
import './Navbar.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const content = translateData(siteContent, t);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const scrollY = useScrollStore((s) => s.scrollY);

  useEffect(() => {
    setScrolled(scrollY > 50);
  }, [scrollY]);

  useEffect(() => {
    if (!menuOpen) return;

    const root = document.documentElement;
    const body = document.body;
    const lockedScrollY = window.scrollY;
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    setPageScrollLocked(true);
    root.classList.add('nav-menu-open');
    body.style.position = 'fixed';
    body.style.top = `-${lockedScrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    const focusFrame = requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLAnchorElement>('.navbar__link')?.focus({ preventScroll: true });
    });

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus({ preventScroll: true }));
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktopQuery = window.matchMedia('(min-width: 1121px)');
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener('keydown', handleMenuKeyDown);
    desktopQuery.addEventListener('change', closeAtDesktop);

    return () => {
      cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', handleMenuKeyDown);
      desktopQuery.removeEventListener('change', closeAtDesktop);
      root.classList.remove('nav-menu-open');
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.width = previousBodyStyles.width;
      body.style.overflow = previousBodyStyles.overflow;
      window.scrollTo({ top: lockedScrollY, left: 0, behavior: 'auto' });
      setPageScrollLocked(false);
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const scrollToTarget = () => target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      if (menuOpen) {
        setMenuOpen(false);
        requestAnimationFrame(() => requestAnimationFrame(scrollToTarget));
      } else {
        scrollToTarget();
      }
    } else {
      setMenuOpen(false);
      window.location.href = `/${href}`;
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`} aria-label={t('Main navigation')}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={(e) => handleNavClick(e, '#home')}>
          {content.brand.name}
        </a>

        <button
          ref={toggleRef}
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
          aria-label={menuOpen ? t('Close navigation menu') : t('Open navigation menu')}
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>

        <ul
          ref={menuRef}
          id="main-navigation-links"
          className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
          data-lenis-prevent
        >
          {content.nav.links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${link.href === '#contact' ? 'navbar__link--cta' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="navbar__link-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="navbar__link-label">{link.label}</span>
                <span className="navbar__link-arrow" aria-hidden="true">↘</span>
              </a>
            </li>
          ))}
          <li className="navbar__language" aria-label={t('Choose language')}>
            <span className="navbar__language-label">{t('Choose language')}</span>
            <div className="navbar__language-options">
              <button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
              <span>/</span>
              <button type="button" className={language === 'nl' ? 'is-active' : ''} onClick={() => setLanguage('nl')} aria-pressed={language === 'nl'}>NL</button>
              <span>/</span>
              <button type="button" className={language === 'pt-BR' ? 'is-active' : ''} onClick={() => setLanguage('pt-BR')} aria-pressed={language === 'pt-BR'}>PT-BR</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
