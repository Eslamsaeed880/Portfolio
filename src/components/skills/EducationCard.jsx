import React from 'react';

const education = {
  degree: 'B.Sc. Computer Science',
  school: 'Faculty of Computers and Informatics, Cairo University',
  period: '2023 – 2027',
  grade:  'Very Good',
};

export default function EducationCard() {
  return (
    <div className="reveal edu-card glass-panel spotlight-card">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <p className="edu-period">{education.period}</p>
          <h3 className="edu-degree">{education.degree}</h3>
          <p className="edu-school">{education.school}</p>
        </div>
        <div style={{
          width: 48, height: 48, borderRadius: 12, flexShrink: 0,
          background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))',
          border: '1px solid rgba(124,58,237,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem',
        }}>
          🎓
        </div>
      </div>

      <div className="edu-stats">
        <div
          className="edu-stat"
          style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}
        >
          <p className="edu-stat-val" style={{ color: 'var(--primary-light)' }}>{education.grade}</p>
          <p className="edu-stat-lbl">Grade</p>
        </div>
        <div
          className="edu-stat"
          style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}
        >
          <p className="edu-stat-val" style={{ color: 'var(--accent)', fontSize: '0.875rem' }}>In Progress</p>
          <p className="edu-stat-lbl">Status</p>
        </div>
      </div>
    </div>
  );
}
