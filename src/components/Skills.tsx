import React from 'react';
import { Brain, Sparkles, Code, Database, Server, Layers } from 'lucide-react';
import { SkillCategory } from '../data/portfolioData';

interface SkillsProps {
  categories: SkillCategory[];
}

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Brain':
      return <Brain size={22} />;
    case 'Sparkles':
      return <Sparkles size={22} />;
    case 'Code':
      return <Code size={22} />;
    case 'Database':
      return <Database size={22} />;
    case 'Server':
      return <Server size={22} />;
    default:
      return <Layers size={22} />;
  }
};

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">02 // Technical Capabilities</span>
          <h2>Skills & Technology Stack</h2>
        </div>

        <div className="skills-grid">
          {categories.map((category, idx) => (
            <div key={idx} className="skill-card card">
              <div className="category-header">
                <div className="category-icon text-accent">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-pills-list">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius);
          background-color: var(--color-accent-glow);
          color: var(--color-accent-primary);
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .category-title {
          font-size: 1.15rem;
          color: var(--color-text-primary);
        }

        .skills-pills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-pill {
          display: inline-block;
          padding: 0.35rem 0.75rem;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          border-radius: var(--border-radius-sm);
          background-color: var(--color-bg);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          transition: all var(--transition-fast);
        }

        .skill-pill:hover {
          border-color: var(--color-accent-primary);
          color: var(--color-accent-primary);
          transform: translateY(-1px);
        }

        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
