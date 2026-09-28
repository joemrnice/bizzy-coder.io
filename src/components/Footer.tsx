import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

interface FooterProps {
  name: string;
  title: string;
  github: string;
  linkedin: string;
  email: string;
  website?: string;
}

export const Footer: React.FC<FooterProps> = ({
  name,
  title,
  github,
  linkedin,
  email,
  website,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-title-group">
            <h3 className="footer-name">{name}</h3>
            <p className="footer-tagline">{title} • Intelligent Systems & Scalable AI</p>
          </div>
          <p className="footer-desc">
            Designing, building, and deploying production-grade AI/ML solutions with low latency and measurable impact.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Connect</h4>
            <div className="footer-socials">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="social-icon-btn"
                >
                  <Github size={18} />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="social-icon-btn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email.replace('[YOUR_EMAIL@EXAMPLE.COM]', 'contact@example.com')}`}
                  aria-label="Email Contact"
                  className="social-icon-btn"
                >
                  <Mail size={18} />
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Personal Website"
                  className="social-icon-btn"
                >
                  <Globe size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">
            © {currentYear} {name}. All rights reserved.
          </p>
          <p className="attribution">
            Built with React, TypeScript & Vite • Optimized for GitHub Pages
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-bg-alt);
          border-top: 1px solid var(--color-border);
          padding-top: 4rem;
          margin-top: 4rem;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1.5fr;
          gap: 3rem;
          padding-bottom: 3rem;
        }

        .footer-name {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }

        .footer-tagline {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--color-accent-primary);
          margin-bottom: 1rem;
        }

        .footer-desc {
          max-width: 480px;
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        .footer-links-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .footer-col-heading {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--color-text-primary);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-links a {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--color-accent-primary);
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: var(--border-radius);
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          background-color: var(--color-accent-glow);
          border-color: var(--color-accent-primary);
          color: var(--color-accent-primary);
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid var(--color-border-subtle);
          padding: 1.5rem 0;
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links-group {
            grid-template-columns: 1fr 1fr;
          }

          .footer-bottom-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
