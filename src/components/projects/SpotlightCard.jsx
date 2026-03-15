import React, { useRef } from 'react';

export default function SpotlightCard({ children, className, style }) {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={handleMouseMove} className={`spotlight-card ${className || ''}`} style={style}>
      {children}
    </div>
  );
}
