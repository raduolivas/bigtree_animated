import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/siteContent';
import './InstagramLanding.css';

type SubmissionState = 'idle' | 'submitting' | 'sent' | 'email' | 'error';

const initialForm = {
  name: '',
  email: '',
  country: '',
  city: '',
  stage: 'I have a business and want to grow',
  goal: '',
  timeline: 'I am exploring my options',
  contactConsent: false,
  communityOptIn: false,
  source: 'Instagram campaign',
};

export function InstagramLanding() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Join the BTT Europe Growth Circle | BigTreeTech';
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const endpoint = import.meta.env.VITE_COMMUNITY_FORM_ENDPOINT as string | undefined;

    if (!endpoint) {
      const subject = encodeURIComponent(`Instagram community lead — ${formData.name}`);
      const body = encodeURIComponent(
        `Source: ${formData.source}\nName: ${formData.name}\nEmail: ${formData.email}\nCountry: ${formData.country}\nCity: ${formData.city}\nStage: ${formData.stage}\nTimeline: ${formData.timeline}\nCommunity updates opt-in: ${formData.communityOptIn ? 'Yes' : 'No'}\n\nGoal or challenge:\n${formData.goal}`,
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

  return (
    <main className="instagram-lead">
      <div className="instagram-lead__atmosphere" aria-hidden="true">
        <span className="instagram-lead__tree" />
        <span className="instagram-lead__grid" />
      </div>

      <header className="instagram-lead__header">
        <Link to="/" className="instagram-lead__brand" aria-label="BigTreeTech home">
          <span aria-hidden="true">◆</span> BigTreeTech
        </Link>
        <p>Europe Growth Circle // Early Access</p>
      </header>

      <section className="instagram-lead__hero" aria-labelledby="instagram-lead-title">
        <div className="instagram-lead__story">
          <p className="instagram-lead__eyebrow"><span /> Your European growth journey starts here</p>
          <h1 id="instagram-lead-title">Grow beyond borders. Build what comes next.</h1>
          <p className="instagram-lead__intro">
            Join an international community for ambitious founders, professionals, and business owners who want to turn ideas into practical opportunities across Europe—with technology, guidance, and human connection.
          </p>

          <div className="instagram-lead__benefits" aria-label="Community benefits">
            <article>
              <span>01</span>
              <div><strong>Find your direction</strong><p>Clarify your next business or technology move.</p></div>
            </article>
            <article>
              <span>02</span>
              <div><strong>Connect internationally</strong><p>Learn from people building across countries and cultures.</p></div>
            </article>
            <article>
              <span>03</span>
              <div><strong>Turn ideas into action</strong><p>Discover how BTT can support your practical journey.</p></div>
            </article>
          </div>

          <p className="instagram-lead__proof">Based in the Netherlands · Built for international ambition</p>
        </div>

        <div className="instagram-lead__form-shell">
          {submissionState !== 'sent' && submissionState !== 'email' ? (
            <form className="instagram-lead__form" onSubmit={handleSubmit}>
              <div className="instagram-lead__form-heading">
                <p>Start your journey // 60 seconds</p>
                <h2>Tell us where you are—and where you want to go.</h2>
                <span>No obligation. We reply personally.</span>
              </div>

              <div className="instagram-lead__fields instagram-lead__fields--two">
                <label>
                  <span>Full name</span>
                  <input required autoComplete="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" />
                </label>
                <label>
                  <span>Email address</span>
                  <input required type="email" autoComplete="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" />
                </label>
                <label>
                  <span>Country</span>
                  <input required autoComplete="country-name" value={formData.country} onChange={(event) => setFormData({ ...formData, country: event.target.value })} placeholder="Where do you live?" />
                </label>
                <label>
                  <span>City</span>
                  <input required autoComplete="address-level2" value={formData.city} onChange={(event) => setFormData({ ...formData, city: event.target.value })} placeholder="Your city" />
                </label>
              </div>

              <label className="instagram-lead__field">
                <span>Where are you in your journey?</span>
                <select value={formData.stage} onChange={(event) => setFormData({ ...formData, stage: event.target.value })}>
                  <option>I have a business and want to grow</option>
                  <option>I have an idea and need direction</option>
                  <option>I am building my professional future</option>
                  <option>I want to enter or expand in Europe</option>
                  <option>I am looking for a technology partner</option>
                </select>
              </label>

              <label className="instagram-lead__field">
                <span>What would you like to achieve?</span>
                <textarea required rows={3} maxLength={700} value={formData.goal} onChange={(event) => setFormData({ ...formData, goal: event.target.value })} placeholder="Tell us about your idea, business goal, or biggest challenge…" />
                <small>{formData.goal.length}/700</small>
              </label>

              <label className="instagram-lead__field">
                <span>When would you like to move forward?</span>
                <select value={formData.timeline} onChange={(event) => setFormData({ ...formData, timeline: event.target.value })}>
                  <option>I am exploring my options</option>
                  <option>Within the next 3 months</option>
                  <option>Within the next 6 months</option>
                  <option>I am ready to start now</option>
                </select>
              </label>

              <label className="instagram-lead__consent">
                <input required type="checkbox" checked={formData.contactConsent} onChange={(event) => setFormData({ ...formData, contactConsent: event.target.checked })} />
                <span>I agree that BTT may use these details to respond to my request and understand how it can support my journey.</span>
              </label>
              <label className="instagram-lead__consent">
                <input type="checkbox" checked={formData.communityOptIn} onChange={(event) => setFormData({ ...formData, communityOptIn: event.target.checked })} />
                <span>Yes, send me occasional BTT community news and European opportunities by email.</span>
              </label>

              {submissionState === 'error' && <p className="instagram-lead__error" role="alert">We could not prepare your request. Email us directly at {siteContent.footer.email}.</p>}

              <button className="instagram-lead__submit" type="submit" disabled={submissionState === 'submitting'}>
                {submissionState === 'submitting' ? 'Sending…' : 'Request My Invitation'} <span aria-hidden="true">→</span>
              </button>
              <p className="instagram-lead__privacy">BTT Consulting uses these details only for your request and the updates you explicitly choose. You can withdraw consent or request deletion at <a href={`mailto:${siteContent.footer.email}`}>{siteContent.footer.email}</a>.</p>
            </form>
          ) : (
            <div className="instagram-lead__success" role="status">
              <span aria-hidden="true">✓</span>
              <p>Journey request prepared</p>
              <h2>{submissionState === 'sent' ? 'Welcome to the beginning.' : 'One final step: send your email.'}</h2>
              <p>{submissionState === 'sent' ? 'We received your details and will reply personally.' : `Your email app now contains a prepared message to ${siteContent.footer.email}. Review it and press send so we can receive your request.`}</p>
              <button type="button" onClick={() => { setSubmissionState('idle'); setFormData(initialForm); }}>Start another request</button>
            </div>
          )}
        </div>
      </section>

      <footer className="instagram-lead__footer">
        <span>© {new Date().getFullYear()} BigTreeTech</span>
        <Link to="/">Explore BTT Consulting</Link>
        <a href={`mailto:${siteContent.footer.email}`}>{siteContent.footer.email}</a>
      </footer>
    </main>
  );
}
