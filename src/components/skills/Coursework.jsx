import React from 'react';

const courses = [
  'Data Structures & Algorithms', 'Operating Systems',
  'Advanced Data Structures', 'Web Development',
  'Concepts Of Programming Languages', 'High Performance Computing',
  'Software Engineering', 'Algorithms', 'Advanced Software Engineering',
  'Database Systems', 'Computer Networks', 'Artificial Intelligence',
  'Computer Architecture', 'Programming Languages',
];

export default function Coursework() {
  return (
    <div className="reveal coursework-card glass-panel">
      <p className="coursework-label">Relevant Coursework</p>
      <div>
        {courses.map(course => (
          <span key={course} className="course-tag">{course}</span>
        ))}
      </div>
    </div>
  );
}
