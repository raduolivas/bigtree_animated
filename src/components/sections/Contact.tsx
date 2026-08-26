import { useState } from 'react';
import { siteContent } from '../../data/siteContent';
import { services } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import './Contact.css';

type SubmissionState = 'idle' | 'submitting' | 'sent' | 'email' | 'error';

export function Contact() {
  const { contact } = siteContent;
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: services[0].title,
    brief: '',
    urgent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

    if (!endpoint) {
      const subject = encodeURIComponent(`Growth call request — ${formData.service}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nUrgent: ${formData.urgent ? 'Yes' : 'No'}\n\nBusiness problem:\n${formData.brief}`
      );
      window.location.href = `mailto:${siteContent.footer.email}?subject=${subject}&body=${body}`;
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
      service: services[0].title,
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

          {submissionState !== 'sent' && submissionState !== 'email' ? (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="contact__input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="contact__input"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="service" className="contact__label">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  className="contact__input contact__select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="brief" className="contact__label">Project Brief</label>
                <textarea
                  id="brief"
                  name="brief"
                  rows={4}
                  required
                  className="contact__input contact__textarea"
                  placeholder="Tell us about your project or goals..."
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                />
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
                  <span>Urgent Project (Fast-track review)</span>
                </label>
              </div>

              <p className="contact__privacy-note">Your details are used only to respond to this enquiry. If direct submission is not configured, your email application will open with a prepared draft.</p>

              {submissionState === 'error' && (
                <p className="contact__error" role="alert">We could not send the request. Please email {siteContent.footer.email} directly.</p>
              )}

              <Button type="submit" variant="primary" size="lg" disabled={submissionState === 'submitting'}>
                {submissionState === 'submitting' ? 'Sending…' : 'Request My Growth Call'}
              </Button>
            </form>
          ) : (
            <div className="contact__success" role="status">
              <h3 className="contact__success-title">
                {submissionState === 'sent' ? contact.success.title : 'Your Email Draft Is Ready'}
              </h3>
              <p className="contact__success-description">
                {submissionState === 'sent'
                  ? contact.success.description
                  : `Your email application should now contain a prepared message to ${siteContent.footer.email}. Review it and press send to complete your request.`}
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
