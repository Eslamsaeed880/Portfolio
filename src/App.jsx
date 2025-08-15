import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import AutoScroller from './components/AutoScroller';
import Skills from './components/Skills';
import DATA from '../data';


function App() {


  return (
    <>
      <Nav />

      <Home>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores earum rem repudiandae unde, necessitatibus nulla.</Home>

      <About />

      <section className="skills" id="skills">
        <h2>My <span className="highlight">Skills</span></h2>

        <div className="skills-content">
          <Skills tool = {DATA.skills.languages} Title = "Languages" />

          <Skills tool = {DATA.skills.backend} Title = "Backend" />

          <Skills tool = {DATA.skills.frontend} Title = "Frontend" />

          <Skills tool = {DATA.skills.tools} Title = "Tools" />
        </div>
      </section>

      <section className="projects" id="projects">

      </section>

      <section className="contact" id="contact">

      </section>
    </>
  );
}

export default App;
