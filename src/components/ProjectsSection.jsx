import React, { useState, useEffect } from 'react';
import { projects }     from './projects/projectsData.js';
import ProjectCarousel  from './projects/ProjectCarousel.jsx';
import ProjectsGrid     from './projects/ProjectsGrid.jsx';

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const AUTO_ADVANCE_MS = 15000;

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % total), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [total, AUTO_ADVANCE_MS]);

  return (
    <div className="projects-section with-sidebar">
      <div className="section-inner">

        {/* Section label */}
        <div className="reveal section-label">
          <span className="section-label-text" style={{ color: 'var(--primary-light)' }}>03 / Projects</span>
          <div className="section-label-line" style={{ background: 'linear-gradient(to right, rgba(124,58,237,0.4), transparent)' }} />
        </div>

        {/* Header + controls */}
        <div className="reveal projects-header">
          <h2 className="projects-heading font-display">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <div className="carousel-controls">
            <span className="carousel-counter font-mono">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button onClick={() => setCurrent(prev => (prev - 1 + total) % total)} className="carousel-btn" aria-label="Previous project">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
            </button>
            <button onClick={() => setCurrent(prev => (prev + 1) % total)} className="carousel-btn primary-accent" aria-label="Next project">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <ProjectCarousel projects={projects} current={current} setCurrent={setCurrent} />
        <ProjectsGrid    projects={projects} setCurrent={setCurrent} />

      </div>
    </div>
  );
}
