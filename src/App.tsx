import React from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Metrics } from './components/Metrics';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar name={portfolioData.name} title={portfolioData.title} />

      <main id="main-content">
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          subtitles={portfolioData.subtitles}
          valueProposition={portfolioData.valueProposition}
          profileImagePath={portfolioData.profileImagePath}
          resumePath={portfolioData.resumePath}
          github={portfolioData.github}
          linkedin={portfolioData.linkedin}
          email={portfolioData.email}
        />

        <About
          summary={portfolioData.aboutSummary}
          specializations={portfolioData.specializations}
          engineeringPhilosophy={portfolioData.engineeringPhilosophy}
        />

        <Skills categories={portfolioData.skills} />

        <Metrics metrics={portfolioData.metrics} />

        <Experience experiences={portfolioData.experiences} />

        <Projects projects={portfolioData.projects} />

        <Education
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />

        <Research
          researchInterests={portfolioData.researchInterests}
          publications={portfolioData.publications}
        />

        <Contact
          email={portfolioData.email}
          location={portfolioData.location}
          github={portfolioData.github}
          linkedin={portfolioData.linkedin}
          website={portfolioData.website}
          formspreeId={portfolioData.formspreeId}
          resumePath={portfolioData.resumePath}
        />
      </main>

      <Footer
        name={portfolioData.name}
        title={portfolioData.title}
        github={portfolioData.github}
        linkedin={portfolioData.linkedin}
        email={portfolioData.email}
        website={portfolioData.website}
      />

      <ScrollToTop />
    </div>
  );
};

export default App;
