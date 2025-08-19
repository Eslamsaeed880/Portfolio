import React from 'react';
import Profession from './Profession';
import useRevealOnScroll from '../useRevealOnScroll';

export default function About({ description, profession }) {
    const revealRef = useRevealOnScroll('translate-in');
    return (
        <section className="about reveal" id="about" ref={revealRef}>
            <h2>About <span className="highlight">Me</span></h2>
            <div className="about-content">
                <div className="usp">
                    <div className="seperator">
                        <h3>Passionate Web Developer</h3>
                        {description.map((desc) => <p key={desc}>{desc}</p>)}
                    </div>
                    <div>
                        <a href="#contact" className="cta">Contact Me</a>
                    </div>
                </div>
                
                <div className="professions">
                    <ul>
                        {profession.map((prof) => (
                            <Profession key={prof.title} title={prof.title} description={prof.description} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}