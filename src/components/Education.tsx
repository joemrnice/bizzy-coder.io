import React from 'react';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { EducationItem, CertificationItem } from '../data/portfolioData';

interface EducationProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const Education: React.FC<EducationProps> = ({ education, certifications }) => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">04 // Qualifications</span>
          <h2>Education & Certifications</h2>
        </div>

        <div className="edu-cert-grid">
          {/* Education Block */}
          <div className="edu-col">
            <h3 className="col-title">
              <GraduationCap size={22} className="text-accent" />
              Academic Degrees
            </h3>
            <div className="edu-list">
              {education.map((edu) => (
                <div key={edu.id} className="card edu-card">
                  <h4 className="degree-title">{edu.degree}</h4>
                  <div className="inst-name text-accent">{edu.institution}</div>
                  
                  <div className="edu-meta">
                    <span className="meta-item">
                      <Calendar size={13} />
                      {edu.year}
                    </span>
                    <span className="meta-item">
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>

                  {edu.honors && (
                    <div className="honors-badge">{edu.honors}</div>
                  )}

                  {edu.details && edu.details.length > 0 && (
                    <ul className="edu-details-list">
                      {edu.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div className="cert-col" id="certifications">
            <h3 className="col-title">
              <Award size={22} className="text-accent" />
              Industry Certifications
            </h3>
            <div className="cert-list">
              {certifications.map((cert) => (
                <div key={cert.id} className="card cert-card">
                  <div className="cert-header">
                    <div>
                      <h4 className="cert-name">{cert.name}</h4>
                      <div className="cert-org">{cert.issuingOrganization}</div>
                    </div>
                    <span className="cert-year">{cert.year}</span>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                      aria-label={`Verify ${cert.name} credential`}
                    >
                      Verify Credential
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .edu-cert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .col-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
        }

        .edu-list, .cert-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .degree-title {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
        }

        .inst-name {
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .edu-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: 0.75rem;
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
        }

        .honors-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-success);
          background-color: rgba(52, 211, 153, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: var(--border-radius-sm);
          margin-bottom: 0.75rem;
        }

        .edu-details-list {
          list-style: disc;
          padding-left: 1.2rem;
        }

        .edu-details-list li {
          font-size: 0.88rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.25rem;
        }

        .cert-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .cert-name {
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }

        .cert-org {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        .cert-year {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--color-accent-primary);
          background-color: var(--color-accent-glow);
          padding: 0.2rem 0.5rem;
          border-radius: var(--border-radius-sm);
        }

        .cert-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-accent-primary);
        }

        @media (max-width: 992px) {
          .edu-cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
