import { useEffect, useState } from 'react';
import { siteContent } from '../../data/siteContent';
import { services } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import './Contact.css';
import { translateData, useLanguage } from '../../i18n/LanguageContext';

type SubmissionState = 'idle' | 'submitting' | 'sent' | 'email' | 'error';

export function Contact() {
  const { language, t } = useLanguage();
  const localizedSite = translateData(siteContent, t);
  const localizedServices = translateData(services, t);
  const { contact } = localizedSite;
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: localizedServices[0].title,
    brief: '',
    urgent: false,
  });

  useEffect(() => {
    const handleOpportunity = (event: Event) => {
      const selection = (event as CustomEvent<{ service: string; brief: string }>).detail;
      setFormData((current) => ({
        ...current,
        service: selection.service,
        brief: current.brief || selection.brief,
      }));
    };

    window.addEventListener('btt:opportunity-selected', handleOpportunity);
    return () => window.removeEventListener('btt:opportunity-selected', handleOpportunity);
  }, []);

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      service: localizedServices.find((service) => service.id === services.find((item) => item.title === current.service)?.id)?.title ?? localizedServices[0].title,
    }));
  // The language change should update the visible service label without clearing the form.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

    if (!endpoint) {
      const subject = encodeURIComponent(`Growth call request — ${formData.service}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nUrgent: ${formData.urgent ? 'Yes' : 'No'}\n\nBusiness problem:\n${formData.brief}`
      );
      window.location.href = `mailto:${localizedSite.footer.email}?subject=${subject}&body=${body}`;
      setSubmissionState('email');
      return;
    }

    setSubmissionState('submitting');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Request failed');
      setSubmissionState('sent');
    } catch {
      setSubmissionState('error');
    }
  };

  const handleReset = () => {
    setSubmissionState('idle');
    setFormData({
      name: '',
      email: '',
      service: localizedServices[0].title,
      brief: '',
      urgent: false,
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__wrapper">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />

          <div className="contact__promise" aria-label={t('Consultation promise')}>
            <span>{t('Free 30-minute conversation')}</span>
            <span>{t('Reply within one business day')}</span>
            <span>{t('No sales pressure')}</span>
          </div>

          {submissionState !== 'sent' && submissionState !== 'email' ? (
            <div className="contact__conversion-grid">
              <aside className="contact__next" aria-labelledby="contact-next-title">
                <p className="contact__next-kicker">{t('What happens next')}</p>
                <h3 id="contact-next-title" className="contact__next-title">{t('A useful conversation from the first call.')}</h3>
                <ol className="contact__steps">
                  {contact.nextSteps.map((item) => (
                    <li key={item.step} className="contact__step">
                      <span className="contact__step-number">{item.step}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="contact__direct">
                  <span>{t('Prefer email?')}</span>
                  <a href={`mailto:${localizedSite.footer.email}`}>{localizedSite.footer.email}</a>
                </div>
              </aside>

              <form className="contact__form" onSubmit={handleSubmit} aria-label={t('Request a growth call')}>
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">{t('Full Name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="contact__input"
                  placeholder={language === 'pt-BR' ? 'João Silva' : 'John Doe'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email" className="contact__label">{t('Email Address')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="contact__input"
                  placeholder={language === 'pt-BR' ? 'voce@empresa.com' : 'you@company.com'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="service" className="contact__label">{t('Service Needed')}</label>
                <select
                  id="service"
                  name="service"
                  className="contact__input contact__select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {localizedServices.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="brief" className="contact__label">{t('Project Brief')}</label>
                <textarea
                  id="brief"
                  name="brief"
                  rows={4}
                  required
                  maxLength={1200}
                  aria-describedby="brief-hint"
                  className="contact__input contact__textarea"
                  placeholder={t('Tell us about your project or goals...')}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                />
                <span id="brief-hint" className="contact__field-hint">
                  {t('A few sentences are enough')} · {formData.brief.length}/1200
                </span>
              </div>

              <div className="contact__checkbox-field">
                <label className="contact__checkbox-label">
                  <input
                    type="checkbox"
                    name="urgent"
                    className="contact__checkbox"
                    checked={formData.urgent}
                    onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                  />
                  <span>{t('Urgent Project (Fast-track review)')}</span>
                </label>
              </div>

              <p className="contact__privacy-note">{t('Your details are used only to respond to this enquiry. If direct submission is not configured, your email application will open with a prepared draft.')}</p>

              {submissionState === 'error' && (
                <p className="contact__error" role="alert">
                  {language === 'nl'
                    ? `De aanvraag kon niet worden verzonden. E-mail ons rechtstreeks via ${localizedSite.footer.email}.`
                    : language === 'pt-BR'
                      ? `Não foi possível enviar a solicitação. Envie um e-mail diretamente para ${localizedSite.footer.email}.`
                      : `We could not send the request. Please email ${localizedSite.footer.email} directly.`}
                </p>
              )}

              <Button type="submit" variant="primary" size="lg" disabled={submissionState === 'submitting'}>
                {submissionState === 'submitting' ? t('Sending…') : t('Request My Growth Call')}
              </Button>
              <p className="contact__submit-note">{t('No commitment. No technical preparation needed.')}</p>
              </form>
            </div>
          ) : (
            <div className="contact__success" role="status">
              <h3 className="contact__success-title">
                {submissionState === 'sent' ? contact.success.title : t('Your Email Draft Is Ready')}
              </h3>
              <p className="contact__success-description">
                {submissionState === 'sent'
                  ? contact.success.description
                  : language === 'nl'
                    ? `Uw e-mailprogramma bevat nu een voorbereid bericht aan ${localizedSite.footer.email}. Controleer het en druk op verzenden om uw aanvraag af te ronden.`
                    : language === 'pt-BR'
                      ? `Seu aplicativo de e-mail agora contém uma mensagem preparada para ${localizedSite.footer.email}. Revise-a e pressione enviar para concluir sua solicitação.`
                      : `Your email application should now contain a prepared message to ${localizedSite.footer.email}. Review it and press send to complete your request.`}
              </p>
              <Button type="button" variant="secondary" size="lg" onClick={handleReset}>
                {contact.success.cta}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
