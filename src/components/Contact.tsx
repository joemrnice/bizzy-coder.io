import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Download, Github, Linkedin, Globe } from 'lucide-react';

interface ContactProps {
  email: string;
  location: string;
  github: string;
  linkedin: string;
  website?: string;
  formspreeId: string;
  resumePath: string;
}

export const Contact: React.FC<ContactProps> = ({
  email,
  location,
  github,
  linkedin,
  website,
  formspreeId,
  resumePath,
}) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const formAction = `https://formspree.io/f/${formspreeId}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(data.error || 'There was an issue sending your message. Please try again or reach out directly via email.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error while submitting form. Please check your connection or send an email directly.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">07 // Get In Touch</span>
          <h2>Contact & Collaboration</h2>
        </div>

        <div className="contact-grid">
          {/* Direct Contact Info Card */}
          <div className="contact-info-card card">
            <h3 className="card-title">Let's Connect</h3>
            <p className="info-desc">
              Whether you have a technical query, project opportunity, research collaboration, or position to discuss, feel free to drop a message.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <a
                    href={`mailto:${email.replace('[YOUR_EMAIL@EXAMPLE.COM]', 'contact@example.com')}`}
                    className="info-value"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">{location}</span>
                </div>
              </div>
            </div>

            <div className="resume-download-box">
              <h4 className="box-heading">Curriculum Vitae</h4>
              <p className="box-desc">
                Download a complete detailed PDF summary of experience, publications, and key systems.
              </p>
              <a href={resumePath} download className="btn btn-secondary full-width">
                <Download size={18} />
                Download CV (PDF)
              </a>
            </div>

            <div className="social-links-row">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Website"
                >
                  <Globe size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Formspree Form */}
          <div className="contact-form-card card">
            <h3 className="card-title">Send a Message</h3>

            {status === 'success' && (
              <div className="status-alert success-alert" role="alert">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Message Sent!</strong>
                  <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="status-alert error-alert" role="alert">
                <AlertCircle size={20} />
                <div>
                  <strong>Submission Error</strong>
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}

            <form
              action={formAction}
              method="POST"
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="required">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="e.g. Jane Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email <span className="required">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="e.g. jane@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="e.g. AI Systems Engineering Opportunity"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Detail your inquiry, project parameters, or questions..."
                  className="form-input textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary submit-btn"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--color-bg-alt);
          border-top: 1px solid var(--color-border-subtle);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
        }

        .info-desc {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius);
          background-color: var(--color-accent-glow);
          color: var(--color-accent-primary);
          border: 1px solid rgba(56, 189, 248, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-label {
          display: block;
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--color-text-muted);
          text-transform: uppercase;
        }

        .info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .resume-download-box {
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius);
          padding: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .box-heading {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .box-desc {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
        }

        .full-width {
          width: 100%;
        }

        .social-links-row {
          display: flex;
          gap: 0.75rem;
        }

        /* Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .required {
          color: var(--color-error);
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: var(--border-radius);
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: border-color var(--transition-fast);
        }

        .form-input:focus {
          border-color: var(--color-accent-primary);
          outline: none;
        }

        .textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          margin-top: 0.5rem;
          width: 100%;
        }

        .status-alert {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: var(--border-radius);
          margin-bottom: 1.25rem;
          font-size: 0.9rem;
        }

        .success-alert {
          background-color: rgba(52, 211, 153, 0.1);
          border: 1px solid var(--color-success);
          color: var(--color-success);
        }

        .error-alert {
          background-color: rgba(248, 113, 113, 0.1);
          border: 1px solid var(--color-error);
          color: var(--color-error);
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
