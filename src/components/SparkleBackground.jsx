import React from 'react';

export default function SparkleBackground() {
  const sparkles = Array.from({ length: 40 }).map((_, i) => {

    const x = (Math.random() - 0.5) * 80; 
    const y = (Math.random() - 0.5) * 80; 
    const style = {
      top: Math.random() * 100 + 'vh',
      left: Math.random() * 100 + 'vw',
      animationDelay: (Math.random() * 3) + 's',
      '--sparkle-x': `${x}px`,
      '--sparkle-y': `${y}px`,
    };
    return <div key={i} className="sparkle-dot" style={style}></div>;
  });
  return <div className="sparkle">{sparkles}</div>;
};
