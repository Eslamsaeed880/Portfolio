import React from 'react';
import SkillsGrid      from './skills/SkillsGrid.jsx';
import EducationCard   from './skills/EducationCard.jsx';
import Coursework      from './skills/Coursework.jsx';
import Certifications  from './skills/Certifications.jsx';

export default function SkillsSection() {
  return (
    <div className="skills-section with-sidebar">
      <div className="section-inner">

        {/* Section label */}
        <div className="reveal section-label">
          <span className="section-label-text" style={{ color: 'var(--accent)' }}>02 / Skills &amp; Education</span>
          <div className="section-label-line" style={{ background: 'linear-gradient(to right, rgba(6,182,212,0.4), transparent)' }} />
        </div>

        <div className="skills-grid">
          {/* Left: Skill tags */}
          <SkillsGrid />

          {/* Right: Education */}
          <div>
            <h2 className="skills-heading font-display reveal">Education</h2>
            <EducationCard />
            <Coursework />
            <Certifications />
          </div>
        </div>

      </div>
    </div>
  );
}
