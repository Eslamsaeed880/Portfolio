import React from 'react';

export default function ProjectsGrid({ projects, setCurrent }) {
  return (
    <div className="all-projects-grid">
      <p className="all-projects-label">All Projects</p>
      {projects.map((p, i) => (
        <div
          key={p.id}
          className="reveal mini-project-card glass-panel spotlight-card"
          style={{ border: `1px solid ${p.color}20`, animationDelay: `${i * 0.08}s` }}
          onClick={() => setCurrent(i)}
        >
          <div
            className="mini-project-icon"
            style={{ background: `${p.color}20`, border: `1px solid ${p.color}30` }}
          >
            <div className="mini-project-icon-dot" style={{ background: p.color }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 className="mini-project-title font-display">{p.title}</h3>
            <p className="mini-project-desc">{p.description}</p>
            <div className="mini-project-tags">
              {p.tags.slice(0, 3).map(tag => (
                <span key={tag} className="mini-project-tag font-mono" style={{ color: p.color }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
