import { faqs } from '../../data/faqs';
import { SectionHeading } from '../ui/SectionHeading';
import './FAQ.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

export function FAQ() {
  const { t } = useLanguage();
  const localizedFaqs = translateData(faqs, t);
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="faq__layout">
          <div className="faq__intro">
            <SectionHeading
              eyebrow={t('Questions Before We Begin // Straight Answers')}
              title={t('Clarity Before Commitment.')}
              description={t('Good technology decisions begin with honest questions. Here are the answers business owners most often need before starting a conversation.')}
            />
            <a className="faq__contact-link" href="#contact">
              {t('Ask a different question')} <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="faq__list">
            {localizedFaqs.map((item, index) => (
              <details key={item.question} className="faq__item" open={index === 0}>
                <summary className="faq__question">
                  <span className="faq__number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.question}</span>
                  <span className="faq__toggle" aria-hidden="true" />
                </summary>
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
