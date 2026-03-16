import React, { useState } from 'react';

const RECEIVER_EMAIL = 'eslamsaeed298@gmail.com';

const contactItems = [
  { icon: '📧', label: 'Email',    value: 'eslamsaeed298@gmail.com',   href: 'mailto:eslamsaeed298@gmail.com' },
  { icon: '📱', label: 'Phone',    value: '+20 1101109666',             href: 'tel:+201101109666' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/Eslamsaeed880',  href: 'https://github.com/Eslamsaeed880' },
  { icon: '📍', label: 'Location', value: 'Cairo, Egypt',               href: null },
];

export default function ContactSection() {
  const [formData, setFormData]   = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanSubject = formData.subject.trim();
    const cleanMessage = formData.message.trim();

    const subject = encodeURIComponent(cleanSubject || `New message from ${cleanName}`);
    const body = encodeURIComponent(
      [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        '',
        cleanMessage,
      ].join('\n')
    );

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(RECEIVER_EMAIL)}&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitting(false);
  };

  return (
    <div className="contact-section with-sidebar">
      <div className="section-inner">

        {/* Section label */}
        <div className="reveal section-label">
          <span className="section-label-text" style={{ color: 'var(--primary-light)' }}>04 / Contact</span>
          <div className="section-label-line" style={{ background: 'linear-gradient(to right, rgba(124,58,237,0.4), transparent)' }} />
        </div>

        <div className="contact-grid">
          {/* Left: Contact info */}
          <div>
            <h2 className="contact-heading font-display reveal">
              Let&apos;s <span className="gradient-text">build</span>
              <br />something great
            </h2>
            <p className="contact-desc reveal">
              Whether you have a project, a full-time role, or just want to talk about distributed systems and scalable backends — I&apos;d love to hear from you.
            </p>

            <div className="reveal">
              {contactItems.map(item => (
                <div key={item.label} className={`contact-info-item glass-panel spotlight-card${item.href ? ' contact-info-link' : ''}`}
                  style={{ cursor: item.href ? 'pointer' : 'default' }}
                  onClick={item.href ? () => window.open(item.href, item.href.startsWith('http') ? '_blank' : '_self') : undefined}
                >
                  <span className="contact-info-icon">{item.icon}</span>
                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    <p className="contact-info-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div className="reveal contact-response glass-panel">
              <div className="contact-response-dot" />
              <p style={{ fontSize: '0.875rem', color: 'var(--fg-muted)' }}>
                Typically responds within <strong style={{ color: 'var(--fg)' }}>24 hours</strong>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            {submitted ? (
              <div className="success-box glass-panel">
                <div className="success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9F67FF" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="success-title font-display">Message sent!</h3>
                <p className="success-text">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-wrap glass-panel">
                <h3 className="contact-form-title font-display">Send a message</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      id="name" type="text" required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      id="email" type="email" required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject" type="text"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project idea / Job opportunity / Just saying hi"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message" required rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or what's on your mind..."
                    className="form-input form-textarea"
                  />
                </div>

                <button type="submit" disabled={submitting} className="submit-btn">
                  {submitting ? (
                    <>
                      <svg className="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="form-note">No spam. Your message goes directly to my inbox.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
