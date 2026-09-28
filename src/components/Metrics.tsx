import React from 'react';
import { Metric } from '../data/portfolioData';

interface MetricsProps {
  metrics: Metric[];
}

export const Metrics: React.FC<MetricsProps> = ({ metrics }) => {
  return (
    <div className="metrics-container container">
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card card">
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
            <div className="metric-desc">{metric.description}</div>
          </div>
        ))}
      </div>

      <style>{`
        .metrics-container {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .metric-card {
          text-align: center;
          padding: 1.75rem 1.25rem;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          position: relative;
          overflow: hidden;
        }

        .metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
        }

        .metric-value {
          font-family: var(--font-mono);
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--color-accent-primary);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 0.25rem;
        }

        .metric-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }
      `}</style>
    </div>
  );
};
