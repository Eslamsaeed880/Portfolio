import React from 'react';
import SpotlightCard from './SpotlightCard.jsx';

export default function ProjectCarousel({ projects, current, setCurrent }) {
  const total = projects.length;

  const getCardClass = (index) => {
    if (index === current) return 'carousel-card active';
    if (index === (current - 1 + total) % total) return 'carousel-card prev';
    if (index === (current + 1) % total) return 'carousel-card next';
    return 'carousel-card';
  };

  return (
    <>
      <div className="carousel-stage">
        {projects.map((p, i) => (
          <div key={p.id} className={getCardClass(i)}>
            <SpotlightCard
              className="glass-panel project-card-inner"
              style={{ border: `1px solid ${p.color}33`, height: '100%' }}
            >
              {/* Image */}
              <div className="project-image-wrap">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  onError={e => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.title)}&background=0A0B0F&color=${p.color.replace('#', '')}&size=600`;
                  }}
                />
                <div
                  className="project-img-overlay"
                  style={{ background: `linear-gradient(135deg, ${p.color}33 0%, transparent 60%)` }}
                />
                <div className="project-badge glass-panel">
                  <span style={{ color: p.color }}>{p.highlight}</span>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <div>
                  <h3 className="project-title font-display">{p.title}</h3>
                  <p className="project-desc">{p.longDesc}</p>
                  <div className="project-tags">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="project-tag font-mono"
                        style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link github"
                    aria-label={`View ${p.title} source code`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link live"
                      style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}40` }}
                      aria-label={`View ${p.title} live`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`carousel-dot-item${i === current ? ' active' : ''}`}
            style={{ width: i === current ? 24 : 8 }}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
