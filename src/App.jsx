import React from 'react';
import SidebarNav from './components/SidebarNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimationController from './components/AnimationController';

function App() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Background grid */}
      <div className="grid-lines" aria-hidden="true" />

      {/* Ambient glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', top: '-20%', left: '-10%',
          width: 600, height: 600, borderRadius: '50%',
          pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', bottom: '-20%', right: '-10%',
          width: 500, height: 500, borderRadius: '50%',
          pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Sidebar navigation */}
      <SidebarNav />

      {/* Main content */}
      <main className="main-content">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />

      {/* Handles scroll reveals + spotlight effects */}
      <AnimationController />
    </>
  );
}

export default App;

