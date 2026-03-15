import React from 'react';

const highlights = [
  { icon: '🎓', label: 'Education', value: 'Computer Science'    },
  { icon: '📍', label: 'Location',  value: 'Cairo, Egypt'        },
  { icon: '⚙️', label: 'Focus',     value: 'Backend & Frontend'  },
  { icon: '🚀', label: 'Specialty', value: 'Scalable APIs'       },
];

export default function AboutPhoto() {
  return (
    <div className="about-right-col">
      {/* Photo frame */}
      <div className="reveal" style={{ position: 'relative', marginBottom: 24 }}>
        <div className="photo-frame spotlight-card glass-panel">
          <img
            src="https://avatars.githubusercontent.com/u/Eslamsaeed880?v=4"
            alt="Eslam Saeed – backend software engineer"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={e => {
              e.currentTarget.src = 'https://ui-avatars.com/api/?name=Eslam+Saeed&background=7C3AED&color=fff&size=400';
            }}
          />
          <div className="photo-overlay" />
          <div className="photo-tag glass-panel">
            <p className="photo-tag-name">Eslam Saeed</p>
            <p className="photo-tag-sub">Backend Engineer · Cairo, Egypt</p>
          </div>
        </div>
        {/* Decorative corner */}
        <div className="about-deco" aria-hidden="true" />
      </div>

      {/* Highlights grid */}
      <div className="reveal highlights-grid">
        {highlights.map(h => (
          <div key={h.label} className="highlight-card glass-panel spotlight-card">
            <span className="highlight-icon">{h.icon}</span>
            <p className="highlight-label">{h.label}</p>
            <p className="highlight-value">{h.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
