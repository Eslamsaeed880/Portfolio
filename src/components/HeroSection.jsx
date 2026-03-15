import React from 'react';
import HeroText    from './hero/HeroText.jsx';
import CodeCard    from './hero/CodeCard.jsx';
import TechMarquee from './hero/TechMarquee.jsx';

export default function HeroSection() {
  return (
    <div className="hero-section with-sidebar">
      {/* Atmospheric blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="section-inner">
        <div className="hero-grid">
          <HeroText />
          <CodeCard />
        </div>
      </div>

      <TechMarquee />

      {/* Scroll indicator */}
      <div className="scroll-indicator animate-fade-up" style={{ animationDelay: '1.2s' }}>
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line">
          <div className="scroll-line-inner" />
        </div>
      </div>
    </div>
  );
}
