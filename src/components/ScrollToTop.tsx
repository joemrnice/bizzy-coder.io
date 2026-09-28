import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-btn"
      aria-label="Scroll to top of page"
      type="button"
    >
      <ArrowUp size={20} />
      <style>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--color-accent-primary);
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 900;
          transition: all var(--transition-fast);
        }

        .scroll-to-top-btn:hover {
          background-color: var(--color-accent-primary);
          color: #ffffff;
          border-color: var(--color-accent-primary);
          transform: translateY(-3px);
        }

        @media (max-width: 600px) {
          .scroll-to-top-btn {
            bottom: 1.25rem;
            right: 1.25rem;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </button>
  );
};
