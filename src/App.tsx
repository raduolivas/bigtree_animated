import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
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
      const content = section.querySelector('.services__grid, .advantage__grid, .technology__grid, .method__timeline, .faq__layout, .contact__wrapper, .vision__content');
      
      if (heading) {
        gsap.fromTo(heading, 
          { y: 40, opacity: 0 },
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
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
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
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
