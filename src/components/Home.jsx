import React from 'react';

export default function Home({ children }) {
    return (
    <section className="home" id="home">
        <h2 className='name'>Hi, I'm <span className="highlight">Eslam</span> Saeed</h2>
        <p>{children}</p>
        <a href="#projects" className="cta">View My Work</a>
      </section>
    );
}