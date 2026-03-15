import React from 'react';
import DATA from '../../../data.js';

const description = DATA.about.description;
const interests   = DATA.about.interests;

export default function AboutText() {
  return (
    <div>
      <h2 className="about-heading font-display reveal">
        Building backends that<br />
        <span className="gradient-text">actually scale</span>
      </h2>

      <div className="reveal">
        {description.map((para, i) => (
          <p key={i} className="about-para">{para}</p>
        ))}
      </div>

      {/* Interests */}
      <div className="reveal" style={{ marginTop: 32 }}>
        <p className="about-interests-label">Interests</p>
        <div className="interest-tags">
          {interests.map(interest => (
            <span key={interest} className="interest-tag spotlight-card">{interest}</span>
          ))}
        </div>
      </div>

      {/* Resume CTA */}
      <div className="reveal" style={{ marginTop: 8 }}>
        <a
          href="https://drive.google.com/drive/folders/1eGc8_pMzEoVO1rJE2rauChSaskJBzaN5?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
          aria-label="View resume PDF"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          View Resume
        </a>
      </div>
    </div>
  );
}
