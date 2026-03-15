import React from 'react';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer with-sidebar">
      <div className="footer-inner">
        {/* Logo */}
        <div className="footer-logo">
          <div style={{
            width: 28, height: 28, borderRadius: 8, flexShrink: 0,
            background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 11, color: '#fff',
          }}>ES</div>
          <span className="footer-brand">Eslam<span> Portfolio</span></span>
        </div>

        {/* Nav links */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map((item, i) => (
            <React.Fragment key={item.label}>
              <a href={item.href} className="footer-nav-link">{item.label}</a>
              {i < navLinks.length - 1 && <span className="footer-sep">·</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Eslam Saeed ·{' '}
          <a href="https://github.com/Eslamsaeed880" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
  );
}