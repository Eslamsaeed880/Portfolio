import React, { useEffect, useState } from 'react';
import DATA from '../../../data.js';

const bio = DATA.bio;
const titles = DATA.titles;

const stats = [
  { num: '10+', label: 'Projects built' },
  { num: '6+',  label: 'Languages'      },
  { num: '4+',  label: 'Years coding'   },
];

export default function HeroText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index] || '';

    // Pause briefly when a title is fully typed before deleting.
    if (!deleting && subIndex === currentTitle.length) {
      const pauseTimer = setTimeout(() => setDeleting(true), 700);
      return () => clearTimeout(pauseTimer);
    }

    // When fully deleted, move to the next title.
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return undefined;
    }

    const speed = deleting ? 45 : 85;
    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [index, subIndex, deleting]);

  return (
    <div>
      {/* Status badge */}
      <div className="animate-clip-in" style={{ animationDelay: '0.1s' }}>
        <span className="hero-badge glass-panel">
          <span className="status-dot" />
          Available for full-time roles &amp; freelance projects
        </span>
      </div>

      {/* Name */}
      <div className="animate-clip-in" style={{ animationDelay: '0.2s' }}>
        <h1 className="hero-name font-display">
          <span style={{ color: 'var(--fg)' }}>Eslam</span>
          <br />
          <span className="gradient-text">Saeed</span>
        </h1>
      </div>

      {/* Role — animated typing SVG */}
      <div className="animate-clip-in" style={{ animationDelay: '0.32s' }}>
        <div className="hero-role font-display">
          <span className="title">
            <span className="gradient-text">{titles[index].substring(0, subIndex)}</span>
            <span className="cursor-blink" style={{ marginLeft: 2 }}>|</span>
          </span>
        </div>
      </div>

      {/* Bio */}
      <div className="animate-fade-up" style={{ animationDelay: '0.44s' }}>
        <p className="hero-bio">
          { bio }
        </p>
      </div>

      {/* CTAs */}
      <div className="hero-ctas animate-fade-up" style={{ animationDelay: '0.54s' }}>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="glass-btn"
          aria-label="View my projects"
        >
          View Projects
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <a
          href="#contact"
          onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="hero-cta-secondary"
          aria-label="Get in touch"
        >
          Get In Touch
        </a>
      </div>

      {/* Stats */}
      <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.64s' }}>
        {stats.map(stat => (
          <div key={stat.label}>
            <p className="hero-stat-num font-display">{stat.num}</p>
            <p className="hero-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
