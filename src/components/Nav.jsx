import React from 'react';

export default function Nav() {
    return (
        <header>
            <div className="logo"><a href="#home">Eslam Saeed <span className='highlight'>Portfolio</span></a></div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
}