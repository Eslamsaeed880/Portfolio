import { useEffect } from 'react';

export default function AnimationController() {
  useEffect(() => {
    // ─── Scroll Reveal ───
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseFloat(el.style.animationDelay || '0') * 1000;
            setTimeout(() => el.classList.add('visible'), delay || i * 60);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(el => revealObserver.observe(el));

    // ─── Spotlight on .spotlight-card elements ───
    const spotlightCards = document.querySelectorAll('.spotlight-card');
    const handleMouseMove = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      el.classList.add('spotlight-active');
      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };
    const handleMouseLeave = (e) => {
      const el = e.currentTarget;
      el.classList.remove('spotlight-active');
      el.style.setProperty('--mouse-x', '-9999px');
      el.style.setProperty('--mouse-y', '-9999px');
    };
    spotlightCards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    // ─── Active nav on scroll ───
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const navDots = document.querySelectorAll('.nav-dot');
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target.id);
            navDots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      spotlightCards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return null;
}
