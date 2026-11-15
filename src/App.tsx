import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { InstagramLanding } from './pages/InstagramLanding';
import { DutchConsultancy } from './pages/DutchConsultancy';
import { AgencyPartner } from './pages/AgencyPartner';
import { useScrollProgress } from './hooks/useScrollProgress';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/globals.css';
import './styles/sections.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize scroll engine
  useScrollProgress();

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const context = gsap.context(() => {
    // Reveal animations for sections
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section) => {
      const heading = section.querySelector('.section-heading');
      const content = section.querySelector('.team-extension__comparison, .engagement-models__grid, .opportunity-finder__workspace, .services__grid, .advantage__grid, .technology__grid, .method__timeline, .faq__layout, .contact__wrapper, .vision__content');
      
      if (heading) {
        gsap.fromTo(heading, 
          { y: 24 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        );
      }

      if (content) {
        gsap.fromTo(content,
          { y: 32 },
          {
            y: 0,
            duration: 1.2,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: content,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        );
      }
    });
    });

    return () => context.revert();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/instagram" element={<InstagramLanding />} />
      <Route path="/nl/it-consultant-mkb" element={<DutchConsultancy />} />
      <Route path="/agency-technology-partner" element={<AgencyPartner />} />
    </Routes>
  );
}

export default App;
