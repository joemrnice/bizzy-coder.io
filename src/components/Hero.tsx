import React from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  subtitles: string[];
  valueProposition: string;
  profileImagePath: string;
  resumePath: string;
  github: string;
  linkedin: string;
  email: string;
}

export const Hero: React.FC<HeroProps> = ({
  name,
  title,
  subtitles,
  valueProposition,
  profileImagePath,
  resumePath,
  github,
  linkedin,
  email,
}) => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} className="text-accent" />
            <span>5+ Years Professional Experience</span>
          </div>

          <h1 className="hero-name">{name}</h1>
          <h2 className="hero-title">{title}</h2>
          
          <p className="hero-subtitles">
            {subtitles.join(' • ')}
          </p>

          <p className="hero-val-prop">
            {valueProposition}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href={resumePath} download className="btn btn-secondary">
              <Download size={18} />
              Download CV
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-btn"
              >
                <Github size={20} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-btn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email.replace('[YOUR_EMAIL@EXAMPLE.COM]', 'contact@example.com')}`}
                aria-label="Email Contact"
                className="social-btn"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="hero-media">
          <div className="profile-frame">
            <img
              src={profileImagePath}
              alt={`${name} - ${title}`}
              className="profile-img"
              onError={(e) => {
                // Graceful fallback if image is missing
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  const fallback = document.createElement('div');
                  fallback.className = 'profile-fallback';
                  fallback.innerText = '[ USER PHOTO ]';
                  target.parentElement.appendChild(fallback);
                }
              }}
            />
            <div className="profile-accent-border"></div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <ArrowDown size={20} />
      </a>

      <style>{`
        .hero-section {
          min-height: calc(100vh - var(--header-height));
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          padding-top: 3rem;
          padding-bottom: 4rem;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background-color: var(--color-accent-glow);
          color: var(--color-accent-primary);
          border: 1px solid rgba(56, 189, 248, 0.3);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }

        .hero-name {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }

        .hero-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          color: var(--color-accent-primary);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .hero-subtitles {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
        }

        .hero-val-prop {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          max-width: 600px;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .socials-label {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-family: var(--font-mono);
        }

        .social-btn {
          width: 42px;
          height: 42px;
          border-radius: var(--border-radius);
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .social-btn:hover {
          border-color: var(--color-accent-primary);
          color: var(--color-accent-primary);
          transform: translateY(-2px);
          background-color: var(--color-accent-glow);
        }

        .hero-media {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-frame {
          position: relative;
          width: 320px;
          height: 320px;
          border-radius: var(--border-radius-xl);
          overflow: hidden;
          background-color: var(--color-surface);
          border: 2px solid var(--color-border);
          box-shadow: var(--shadow-lg);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .profile-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-surface);
          color: var(--color-text-muted);
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          animation: bounce 2s infinite;
        }

        .scroll-indicator:hover {
          color: var(--color-accent-primary);
          border-color: var(--color-accent-primary);
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translate(-50%, 0);
          }
          40% {
            transform: translate(-50%, -8px);
          }
          60% {
            transform: translate(-50%, -4px);
          }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-badge, .hero-val-prop, .hero-actions, .hero-socials {
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
          }

          .profile-frame {
            width: 260px;
            height: 260px;
          }

          .scroll-indicator {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
