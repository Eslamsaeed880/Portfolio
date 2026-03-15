import React, { useEffect, useRef } from 'react';

const codeLines = [
  { tokens: [{ type: 'keyword', text: 'const ' }, { type: 'var', text: 'developer' }, { type: 'punct', text: ' = {' }] },
  { tokens: [{ type: 'comment', text: '  // Backend Engineer · CS Student' }] },
  { tokens: [{ type: 'prop', text: '  name' }, { type: 'punct', text: ': ' }, { type: 'string', text: '"Eslam Saeed"' }, { type: 'punct', text: ',' }] },
  { tokens: [{ type: 'prop', text: '  role' }, { type: 'punct', text: ': ' }, { type: 'string', text: '"Software Engineer"' }, { type: 'punct', text: ',' }] },
  { tokens: [{ type: 'prop', text: '  stack' }, { type: 'punct', text: ': [' }, { type: 'string', text: '"Node.js"' }, { type: 'punct', text: ', ' }, { type: 'string', text: '"React"' }, { type: 'punct', text: ', ' }, { type: 'string', text: '"Cloud"' }, { type: 'punct', text: '],' }] },
  { tokens: [{ type: 'prop', text: '  design' }, { type: 'punct', text: ': ' }, { type: 'keyword', text: '(system) =>' }, { type: 'punct', text: ' {' }] },
  { tokens: [{ type: 'indent', text: '    ' }, { type: 'keyword', text: 'return ' }, { type: 'string', text: '"scalable architecture"' }, { type: 'punct', text: ';' }] },
  { tokens: [{ type: 'punct', text: '  },' }] },
  { tokens: [{ type: 'punct', text: '};' }] },
];

export default function CodeCard() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="spotlight-card glass-panel code-card animate-float"
      style={{ animationDelay: '1s' }}
    >
      {/* Window chrome */}
      <div className="code-card-chrome">
        <span className="chrome-dot" style={{ background: '#ef4444', opacity: 0.7 }} />
        <span className="chrome-dot" style={{ background: '#eab308', opacity: 0.7 }} />
        <span className="chrome-dot" style={{ background: '#22c55e', opacity: 0.7 }} />
        <span className="chrome-file">developer.js</span>
      </div>

      {/* Code body */}
      <div className="code-body">
        {codeLines.map((line, i) => (
          <div key={i} className="code-line" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
            <span className="line-num" style={{ fontSize: '11px' }}>{i + 1}</span>
            <span style={{ whiteSpace: 'pre' }}>
              {line.tokens.map((token, j) => (
                <span key={j} className={`token-${token.type}`}>{token.text}</span>
              ))}
            </span>
          </div>
        ))}
        {/* Blinking cursor */}
        <div className="code-line" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
          <span className="line-num" style={{ fontSize: '11px' }}>10</span>
          <span
            className="cursor-blink"
            style={{ width: 8, height: 16, background: 'var(--primary-light)', display: 'inline-block' }}
          />
        </div>
      </div>
    </div>
  );
}
