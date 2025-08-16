import React from 'react';
import Profession from './Profession';

export default function About() {
    return (
        <section className="about" id="about">
            <h2>About <span className="highlight">Me</span></h2>
            <div className="about-content">
                <div className="usp">
                    <div className="seperator">
                        <h3>Passionate Web Developer</h3>
                        <p>With over 2 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.</p>
                        <p>I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.</p>
                    </div>
                    <div>
                        <a href="#contact" className="cta">Contact Me</a>
                    </div>
                </div>
                
                <div className="professions">
                    <ul>
                        <Profession title="Frontend Developer" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt! Ad deleniti nostrum facere corrupti." />
                        <Profession title="UI/UX Designer" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt! Ad deleniti nostrum facere corrupti." />
                        <Profession title="Content Creator" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt! Ad deleniti nostrum facere corrupti." />
                    </ul>
                </div>
            </div>
        </section>
    );
}