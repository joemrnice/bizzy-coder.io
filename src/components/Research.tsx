import React from 'react';
import { BookOpen, FileText, Github, Sparkles } from 'lucide-react';
import { PublicationItem } from '../data/portfolioData';

interface ResearchProps {
  researchInterests: string[];
  publications: PublicationItem[];
}

export const Research: React.FC<ResearchProps> = ({ researchInterests, publications }) => {
  return (
    <section id="research" className="research-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">05 // Research & Innovation</span>
          <h2>Research & Technical Interests</h2>
        </div>

        <div className="research-grid">
          {/* Research Interests */}
          <div className="card interests-card">
            <h3 className="card-title">
              <Sparkles size={22} className="text-accent" />
              Primary Research Interests
            </h3>
            <div className="interests-grid">
              {researchInterests.map((interest, idx) => (
                <div key={idx} className="interest-item">
                  <span className="interest-bullet"></span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="publications-block">
            <h3 className="col-title">
              <BookOpen size={22} className="text-accent" />
              Selected Publications & Preprints
            </h3>

            {publications && publications.length > 0 ? (
              <div className="pub-list">
                {publications.map((pub) => (
                  <div key={pub.id} className="card pub-card">
                    <h4 className="pub-title">{pub.title}</h4>
                    <p className="pub-authors">
                      {pub.authors.join(', ')}
                    </p>
                    <div className="pub-venue">
                      <span>{pub.venue}</span> • <span className="pub-year">{pub.year}</span>
                    </div>

                    <div className="pub-actions">
                      {pub.doi && (
                        <span className="doi-badge">DOI: {pub.doi}</span>
                      )}
                      {pub.pdfUrl && (
                        <a
                          href={pub.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-link"
                          aria-label={`Read PDF for ${pub.title}`}
                        >
                          <FileText size={14} />
                          PDF
                        </a>
                      )}
                      {pub.githubUrl && (
                        <a
                          href={pub.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-link"
                          aria-label={`Code repository for ${pub.title}`}
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card empty-pub-card">
                <p className="empty-text">
                  Research publications and whitepapers will be added here. Currently focusing on applied production ML deployments.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .research-section {
          background-color: var(--color-bg-alt);
          border-top: 1px solid var(--color-border-subtle);
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .research-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2rem;
        }

        .card-title, .col-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          font-size: 1.25rem;
        }

        .interests-grid {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .interest-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--color-text-secondary);
        }

        .interest-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-accent-primary);
          flex-shrink: 0;
        }

        .pub-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .pub-title {
          font-size: 1.1rem;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }

        .pub-authors {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.5rem;
        }

        .pub-venue {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--color-accent-primary);
          margin-bottom: 1rem;
        }

        .pub-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .doi-badge {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--color-text-muted);
          background-color: var(--color-bg);
          padding: 0.2rem 0.5rem;
          border-radius: var(--border-radius-sm);
          border: 1px solid var(--color-border-subtle);
        }

        .btn-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-accent-primary);
        }

        .empty-pub-card {
          text-align: center;
          padding: 2.5rem 1.5rem;
        }

        .empty-text {
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        @media (max-width: 992px) {
          .research-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
