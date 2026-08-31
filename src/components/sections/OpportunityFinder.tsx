import { useState } from 'react';
import { opportunities } from '../../data/opportunities';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import './OpportunityFinder.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function OpportunityFinder() {
  const { language, t } = useLanguage();
  const localizedOpportunities = translateData(opportunities, t);
  const [selectedId, setSelectedId] = useState(opportunities[0].id);
  const selected = localizedOpportunities.find((item) => item.id === selectedId) ?? localizedOpportunities[0];

  const requestConversation = () => {
    window.dispatchEvent(new CustomEvent('btt:opportunity-selected', {
      detail: {
        service: selected.service,
        brief: language === 'nl' ? `Onze belangrijkste prioriteit is: ${selected.label}.` : `Our main priority is: ${selected.label}.`,
      },
    }));

    const target = document.querySelector('#contact');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section id="opportunity-finder" className="section opportunity-finder">
      <div className="container">
        <SectionHeading
          eyebrow={t('Opportunity Finder // Start with the Problem')}
          title={t('What Is Holding Your Business Back?')}
          description={t('Choose the challenge that feels most familiar. We will translate it into a practical technology direction—without requiring you to diagnose the solution first.')}
        />

        <div className="opportunity-finder__workspace">
          <div className="opportunity-finder__choices" role="group" aria-label={t('Choose your main business challenge')}>
            {localizedOpportunities.map((item, index) => {
              const selectedItem = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selectedItem}
                  className={`opportunity-finder__choice ${selectedItem ? 'opportunity-finder__choice--selected' : ''}`}
                  onClick={() => setSelectedId(item.id)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.shortLabel}</strong>
                  <i aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <article className="opportunity-finder__result" aria-live="polite" aria-atomic="true">
            <div className="opportunity-finder__scanline" aria-hidden="true" />
            <p className="opportunity-finder__signal"><span /> {selected.signal}</p>
            <p className="opportunity-finder__result-label">{t('Recommended direction')}</p>
            <h3>{selected.service}</h3>

            <div className="opportunity-finder__result-block">
              <span>{t('Likely business outcome')}</span>
              <p>{selected.outcome}</p>
            </div>
            <div className="opportunity-finder__result-block">
              <span>{t('Practical first step')}</span>
              <p>{selected.firstStep}</p>
            </div>

            <Button type="button" variant="primary" size="lg" onClick={requestConversation}>
              {t('Discuss This Opportunity')}
            </Button>
            <p className="opportunity-finder__note">{t('Your selection will be added to the consultation form.')}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
