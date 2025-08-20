import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import DATA from '../data';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Up from './components/Up';
import SparkleBackground from './components/SparkleBackground';

function App() {


  return (
    <>
      <SparkleBackground />
      <div className="nav-case">
        <Nav />
      </div>

      <div className="main-blur">
        <Home></Home>
        <About description={DATA.about.description} profession={DATA.about.profession}/>

        <section className="skills" id="skills" >
          <h2>My <span className="highlight">Skills</span></h2>

          <div className="skills-content">
            <Skills tool = {DATA.skills.languages} Title = "Languages" />

            <Skills tool = {DATA.skills.backend} Title = "Backend" />

            <Skills tool = {DATA.skills.frontend} Title = "Frontend" />

            <Skills tool = {DATA.skills.databases} Title = "Databases" />

            <Skills tool = {DATA.skills.tools} Title = "Tools" />
          </div>
        </section>

        <Projects projects={DATA.projects}/>

        <Contact />

        <Footer />
        <Up />
      </div>
    </>
  );
}

export default App;
