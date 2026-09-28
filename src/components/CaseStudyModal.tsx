import React, { useEffect, useRef } from 'react';
import { X, CheckCircle, AlertTriangle, Layers, ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key & prevent body scroll when open
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Focus close button inside modal for accessibility
    const timer = setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector('button') as HTMLButtonElement;
      closeBtn?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-container card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        ref={modalRef}
      >
        <div className="modal-header">
          <div>
            <span className="badge">{project.category}</span>
            <h3 id="modal-project-title" className="modal-title">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="close-modal-btn"
            aria-label="Close Case Study Modal"
            type="button"
          >
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {/* Summary / Overview */}
          <div className="modal-section">
            <h4 className="modal-sub-title">Overview</h4>
            <p className="modal-text">{project.shortDescription}</p>
          </div>

          {/* Problem & Solution */}
          <div className="problem-solution-grid">
            <div className="ps-box problem-box">
              <h4 className="modal-sub-title">Problem Statement</h4>
              <p className="modal-text">{project.problem}</p>
            </div>
            <div className="ps-box solution-box">
              <h4 className="modal-sub-title">Engineered Solution</h4>
              <p className="modal-text">{project.solution}</p>
            </div>
          </div>

          {/* Detailed Architecture Breakdown */}
          {project.detailedCaseStudy && (
            <>
              <div className="modal-section">
                <h4 className="modal-sub-title">
                  <Layers size={18} className="text-accent inline-icon" />
                  System Architecture & Pipeline Steps
                </h4>
                <ul className="modal-list">
                  {project.detailedCaseStudy.architecture.map((arch, idx) => (
                    <li key={idx}>
                      <span className="step-num">{idx + 1}</span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4 className="modal-sub-title">
                  <AlertTriangle size={18} className="text-accent inline-icon" />
                  Technical Challenges & Optimizations
                </h4>
                <ul className="modal-list">
                  {project.detailedCaseStudy.challenges.map((chal, idx) => (
                    <li key={idx}>{chal}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Results & Key Metrics */}
          <div className="modal-section">
            <h4 className="modal-sub-title">
              <CheckCircle size={18} className="text-accent inline-icon" />
              Measurable Outcomes
            </h4>
            <div className="results-pills">
              {project.keyResults.map((res, idx) => (
                <div key={idx} className="result-pill">
                  {res}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="modal-sub-title">Technologies Used</h4>
            <div className="tech-row">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} />
                View Repository
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
          <button onClick={onClose} className="btn btn-secondary" type="button">
            Close
          </button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-container {
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius-xl);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1.5rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .modal-title {
          font-size: 1.35rem;
          margin-top: 0.5rem;
        }

        .close-modal-btn {
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          width: 38px;
          height: 38px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .close-modal-btn:hover {
          background-color: var(--color-surface-hover);
          border-color: var(--color-accent-primary);
        }

        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-sub-title {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-primary);
        }

        .inline-icon {
          color: var(--color-accent-primary);
        }

        .modal-text {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .problem-solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .ps-box {
          background-color: var(--color-bg);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--border-radius);
          padding: 1rem;
        }

        .modal-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .modal-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent-primary);
          background-color: var(--color-accent-glow);
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .results-pills {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .result-pill {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          color: var(--color-accent-primary);
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          padding: 0.5rem 0.85rem;
          border-radius: var(--border-radius-sm);
        }

        .tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid var(--color-border-subtle);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--color-bg-alt);
        }

        .modal-links {
          display: flex;
          gap: 0.75rem;
        }

        @media (max-width: 600px) {
          .problem-solution-grid {
            grid-template-columns: 1fr;
          }

          .modal-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .modal-links {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};
