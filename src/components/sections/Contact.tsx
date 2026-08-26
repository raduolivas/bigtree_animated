import { useState } from 'react';
import { siteContent } from '../../data/siteContent';
import { services } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import './Contact.css';

export function Contact() {
  const { contact } = siteContent;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: services[0].title,
    brief: '',
    urgent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
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

          {!submitted ? (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="contact__input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Company Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="contact__input"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="service" className="contact__label">Service Needed</label>
                <select
                  id="service"
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
                    className="contact__checkbox"
                    checked={formData.urgent}
                    onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                  />
                  <span>Urgent Project (Fast-track review)</span>
                </label>
              </div>

              <Button type="submit" variant="primary" size="lg">
                Send Request
              </Button>
            </form>
          ) : (
            <div className="contact__success">
              <h3 className="contact__success-title">{contact.success.title}</h3>
              <p className="contact__success-description">{contact.success.description}</p>
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
