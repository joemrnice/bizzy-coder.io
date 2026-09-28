import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { ExperienceItem } from '../data/portfolioData';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">03 // Career History</span>
          <h2>Professional Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={exp.id || idx} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={16} />
              </div>

              <div className="timeline-content card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.jobTitle}</h3>
                    <div className="exp-company text-accent">{exp.company}</div>
                  </div>
                  <div className="exp-meta">
                    <span className="meta-badge">
                      <Calendar size={14} />
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="meta-badge">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="exp-body">
                  <h4 className="sub-heading">Responsibilities & Scope:</h4>
                  <ul className="resp-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>

                  {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                    <div className="achievements-box">
                      <h4 className="sub-heading achievements-heading">
                        <Award size={16} className="text-accent" />
                        Key Achievements & Impact:
                      </h4>
                      <ul className="achieve-list">
                        {exp.keyAchievements.map((achieve, aIdx) => (
                          <li key={aIdx}>{achieve}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="tech-stack-row">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--color-bg-alt);
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 11px;
          width: 2px;
          background-color: var(--color-border);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 1.5rem;
          transform: translateX(-50%);
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: var(--color-bg);
          border: 2px solid var(--color-accent-primary);
          color: var(--color-accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .timeline-content {
          margin-left: 0.5rem;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .exp-title {
          font-size: 1.25rem;
          margin-bottom: 0.2rem;
        }

        .exp-company {
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .exp-meta {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .meta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--color-text-muted);
          background-color: var(--color-bg);
          padding: 0.25rem 0.6rem;
          border-radius: var(--border-radius-sm);
          border: 1px solid var(--color-border-subtle);
        }

        .sub-heading {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .resp-list {
          list-style: disc;
          padding-left: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .resp-list li {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.4rem;
          line-height: 1.5;
        }

        .achievements-box {
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          border-left: 3px solid var(--color-accent-primary);
          border-radius: var(--border-radius-sm);
          padding: 1rem;
          margin-bottom: 1.25rem;
        }

        .achievements-heading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .achieve-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .achieve-list li {
          font-size: 0.9rem;
          color: var(--color-text-primary);
          line-height: 1.4;
        }

        .tech-stack-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 600px) {
          .timeline {
            padding-left: 1.25rem;
          }

          .timeline-marker {
            left: -1.25rem;
            width: 20px;
            height: 20px;
          }

          .timeline-marker svg {
            width: 12px;
            height: 12px;
          }

          .exp-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};
