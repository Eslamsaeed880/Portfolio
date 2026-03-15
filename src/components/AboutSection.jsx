import React from 'react';
import AboutText  from './about/AboutText.jsx';
import AboutPhoto from './about/AboutPhoto.jsx';

export default function AboutSection() {
  return (
    <div className="about-section with-sidebar" id="about-inner">
      <div className="section-inner">

        {/* Section label */}
        <div className="reveal section-label">
          <span className="section-label-text" style={{ color: 'var(--primary-light)' }}>01 / About</span>
          <div className="section-label-line" style={{ background: 'linear-gradient(to right, rgba(124,58,237,0.4), transparent)' }} />
        </div>

        <div className="about-grid">
          <AboutText />
          <AboutPhoto />
        </div>

      </div>
    </div>
  );
}
