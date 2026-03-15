import React from 'react';
import DATA from '../../../data.js';

const skills = DATA.skills;

const skillGroups = [
  { category: 'Languages',      icon: '💻', color: '#F59E0B', skills: skills.languages      },
  { category: 'Backend',        icon: '🔧', color: '#7C3AED', skills: skills.backend        },
  { category: 'Frontend',       icon: '⚡', color: '#06B6D4', skills: skills.frontend       },
  { category: 'System Design',  icon: '📐', color: '#EF4444', skills: skills.systemDesign   },
  { category: 'Infrastructure', icon: '☁️', color: '#9F67FF', skills: skills.infrastructure },
  { category: 'Databases',      icon: '🗄️', color: '#06B6D4', skills: skills.databases      },
  { category: 'Other Tools',    icon: '🛠️', color: '#F59E0B', skills: skills.otherTools     },
];

export default function SkillsGrid() {
  return (
    <div>
      <h2 className="skills-heading font-display reveal">
        Technical <span className="gradient-text">Stack</span>
      </h2>

      {skillGroups.map((group, gi) => (
        <div
          key={group.category}
          className="reveal skill-group glass-panel spotlight-card"
          style={{ animationDelay: `${gi * 0.1}s` }}
        >
          <div className="skill-group-header">
            <span className="skill-group-icon">{group.icon}</span>
            <h3 className="skill-group-title font-display">{group.category}</h3>
          </div>
          <div className="skill-tags">
            {group.skills.map(skill => (
              <span
                key={skill}
                className="skill-tag font-mono"
                style={{
                  background: `${group.color}18`,
                  color: group.color,
                  border: `1px solid ${group.color}35`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
