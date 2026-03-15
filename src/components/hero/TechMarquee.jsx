import React from 'react';
import DATA from '../../../data.js';

const skills = DATA.skills;

const techStack = [
  ...skills.backend,
  ...skills.systemDesign,
  ...skills.frontend,
  ...skills.languages,
  ...skills.infrastructure,
  ...skills.otherTools,
  ...skills.databases,
];

export default function TechMarquee() {
  return (
    <div className="marquee-wrapper with-sidebar animate-fade-up" style={{ animationDelay: '0.8s' }}>
      <div className="marquee-fade-left" aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />
      <div className="marquee-track animate-marquee">
        {[...techStack, ...techStack].map((tech, i) => (
          <span key={i} className="marquee-tag glass-panel">{tech}</span>
        ))}
      </div>
    </div>
  );
}
