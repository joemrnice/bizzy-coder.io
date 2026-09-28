import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';
import { Theme, applyTheme, getInitialTheme } from '../utils/theme';

interface NavbarProps {
  name: string;
  title: string;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ name, title }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Initialize theme
  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  // Active section observer
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.substring(1));
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header className="navbar-header">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" aria-label={`${name} Home`}>
          <div className="logo-icon">
            <Terminal size={20} className="text-accent" />
          </div>
          <div className="logo-text">
            <span className="logo-name">{name}</span>
            <span className="logo-title">{title}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            type="button"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="mobile-menu-drawer"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile Navigation Drawer"
          >
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="close-drawer-btn"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mobile-nav">
              <ul>
                {NAV_ITEMS.map((item) => {
                  const id = item.href.substring(1);
                  const isActive = activeSection === id;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--color-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--color-border-subtle);
          height: var(--header-height);
          display: flex;
          align-items: center;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-text-primary);
          font-weight: 700;
          text-decoration: none;
        }

        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--border-radius);
          background-color: var(--color-accent-glow);
          color: var(--color-accent-primary);
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-name {
          font-size: 1rem;
          line-height: 1.2;
          font-weight: 700;
        }

        .logo-title {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-family: var(--font-mono);
        }

        .desktop-nav .nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 1.5rem;
        }

        .nav-link {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.4rem 0.2rem;
          position: relative;
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .nav-link:hover, .nav-link.active {
          color: var(--color-accent-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-accent-primary);
          border-radius: 2px;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-toggle-btn, .mobile-menu-btn, .close-drawer-btn {
          background: transparent;
          border: 1px solid var(--color-border);
          color: var(--color-text-primary);
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }

        .theme-toggle-btn:hover, .mobile-menu-btn:hover, .close-drawer-btn:hover {
          background-color: var(--color-surface-hover);
          border-color: var(--color-accent-primary);
        }

        .mobile-menu-btn {
          display: none;
        }

        /* Mobile Drawer */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
        }

        .mobile-menu-drawer {
          width: 280px;
          max-width: 80vw;
          height: 100%;
          background-color: var(--color-bg);
          border-left: 1px solid var(--color-border);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }

        .mobile-menu-title {
          font-weight: 700;
          font-size: 1.1rem;
        }

        .mobile-nav ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.5rem 0;
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }

        .mobile-nav-link.active, .mobile-nav-link:hover {
          color: var(--color-accent-primary);
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};
