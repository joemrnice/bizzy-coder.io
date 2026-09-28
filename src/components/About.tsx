import React from 'react';
import { Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AboutProps {
  summary: string[];
  specializations: string[];
  engineeringPhilosophy: string[];
}

export const About: React.FC<AboutProps> = ({
  summary,
  specializations,
  engineeringPhilosophy,
}) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">01 // Background</span>
          <h2>Professional Summary & Philosophy</h2>
        </div>

        <div className="about-grid">
          <div className="about-bio-card card">
            <h3 className="card-title">
              <Cpu size={22} className="title-icon text-accent" />
              AI/ML Engineering Focus
            </h3>
            <div className="bio-text">
              {summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="specialization-box">
              <h4 className="box-title">Core AI/ML Specializations</h4>
              <ul className="spec-list">
                {specializations.map((spec, index) => (
                  <li key={index}>
                    <CheckCircle2 size={16} className="spec-icon text-accent" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-philosophy-card card">
            <h3 className="card-title">
              <ShieldCheck size={22} className="title-icon text-accent" />
              Engineering Philosophy
            </h3>
            <div className="philosophy-list">
              {engineeringPhilosophy.map((item, index) => {
                const parts = item.split(':');
                const title = parts.length > 1 ? parts[0] : `Principle ${index + 1}`;
                const detail = parts.length > 1 ? parts.slice(1).join(':') : item;

                return (
                  <div key={index} className="philosophy-item">
                    <span className="philosophy-num">0{index + 1}</span>
                    <div className="philosophy-content">
                      <h4 className="philosophy-title">{title}</h4>
                      <p className="philosophy-desc">{detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--color-bg-alt);
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
        }

        .card-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 1.35rem;
        }

        .bio-text p {
          margin-bottom: 1rem;
          line-height: 1.7;
        }

        .bio-text p:last-child {
          margin-bottom: 1.5rem;
        }

        .specialization-box {
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius);
          padding: 1.25rem;
        }

        .box-title {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--color-text-primary);
        }

        .spec-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .spec-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--color-text-secondary);
        }

        .spec-icon {
          margin-top: 0.2rem;
          flex-shrink: 0;
          color: var(--color-accent-primary);
        }

        .philosophy-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .philosophy-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .philosophy-num {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-accent-primary);
          background-color: var(--color-accent-glow);
          padding: 0.3rem 0.6rem;
          border-radius: var(--border-radius-sm);
          flex-shrink: 0;
        }

        .philosophy-title {
          font-size: 1rem;
          margin-bottom: 0.25rem;
          color: var(--color-text-primary);
        }

        .philosophy-desc {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
