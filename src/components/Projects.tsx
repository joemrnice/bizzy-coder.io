import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

interface ProjectsProps {
  projects: ProjectItem[];
}

const CATEGORIES = [
  'All',
  'Generative AI',
  'Machine Learning',
  'Computer Vision',
  'MLOps',
  'NLP'
] as const;

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">06 // Portfolio Showcase</span>
          <h2>Featured AI/ML Projects</h2>
        </div>

        {/* Category Filters */}
        <div className="filter-bar" role="tablist" aria-label="Project Category Filter">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              role="tab"
              aria-selected={selectedCategory === cat}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} Preview Image`}
                  className="project-img"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const fallback = document.createElement('div');
                      fallback.className = 'project-img-fallback';
                      fallback.innerText = '[ PROJECT ARCHITECTURE IMAGE ]';
                      target.parentElement.appendChild(fallback);
                    }
                  }}
                />
                <span className="project-category-tag">{project.category}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDescription}</p>

                <div className="project-key-results">
                  {project.keyResults.map((result, idx) => (
                    <div key={idx} className="result-tag">
                      {result}
                    </div>
                  ))}
                </div>

                <div className="tech-tags-row">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="badge">+{project.technologies.length - 5}</span>
                  )}
                </div>

                <div className="project-actions">
                  <div className="external-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="project-icon-link"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        className="project-icon-link"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="case-study-btn"
                    type="button"
                    aria-label={`View case study for ${project.title}`}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <style>{`
        .projects-section {
          background-color: var(--color-bg);
        }

        .filter-bar {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .filter-btn {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          padding: 0.5rem 1rem;
          border-radius: var(--border-radius);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          background-color: var(--color-surface-hover);
          color: var(--color-text-primary);
        }

        .filter-btn.active {
          background-color: var(--color-accent-primary);
          color: #ffffff;
          border-color: var(--color-accent-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          background-color: var(--color-bg-alt);
          overflow: hidden;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }

        .project-card:hover .project-img {
          transform: scale(1.03);
        }

        .project-img-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          padding: 1rem;
          text-align: center;
        }

        .project-category-tag {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background-color: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(4px);
          color: var(--color-accent-primary);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          border-radius: var(--border-radius-sm);
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .project-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .project-desc {
          font-size: 0.92rem;
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .project-key-results {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
        }

        .result-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--color-accent-primary);
          background-color: var(--color-accent-glow);
          padding: 0.25rem 0.5rem;
          border-radius: var(--border-radius-sm);
        }

        .tech-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }

        .project-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
        }

        .external-links {
          display: flex;
          gap: 0.5rem;
        }

        .project-icon-link {
          width: 36px;
          height: 36px;
          border-radius: var(--border-radius-sm);
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .project-icon-link:hover {
          border-color: var(--color-accent-primary);
          color: var(--color-accent-primary);
        }

        .case-study-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: none;
          color: var(--color-accent-primary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: gap var(--transition-fast);
        }

        .case-study-btn:hover {
          gap: 0.6rem;
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
