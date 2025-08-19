import React from 'react';
import { useEffect, useState } from 'react';
import useRevealOnScroll from '../useRevealOnScroll';



export default function Home({ children }) {
  const titles = ["Software Engineer", "Backend Developer", "Frontend Developer","Computer Science Student"];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0); 
  const [deleting, setDeleting] = useState(false);
  const revealRef = useRevealOnScroll('translate-in');

  useEffect(() => {
    if (index === titles.length) return;

    const speed = deleting ? 80 : 150;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    if (!deleting && subIndex === titles[index].length) {
      setTimeout(() => setDeleting(true), 1000);
    }
    else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, titles]);

  return (
  <section className="home reveal" id="home" ref={revealRef}>
      <h2 className='name'>Hi, I'm <span className="highlight">Eslam</span> Saeed</h2>
      <h3 className='title'>
        {titles[index].substring(0, subIndex)}
        <span className="cursor highlight">|</span>
      </h3>
      <p>{children}</p>
      <a href="#projects" className="cta">View My Work</a>
    </section>
  );
}