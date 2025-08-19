import React from 'react';
// Sparkle background component
const SparkleBackground = () => {
  // Generate random positions and movement for sparkles
  const sparkles = Array.from({ length: 40 }).map((_, i) => {
    // Random direction and distance for movement
    const x = (Math.random() - 0.5) * 80; // px
    const y = (Math.random() - 0.5) * 80; // px
    const style = {
      top: Math.random() * 100 + 'vh',
      left: Math.random() * 100 + 'vw',
      animationDelay: (Math.random() * 3) + 's',
      '--sparkle-x': `${x}px`,
      '--sparkle-y': `${y}px`,
    };
    return <div key={i} className="sparkle-dot" style={style}></div>;
  });
  return <div className="sparkle">{sparkles}</div>;
};
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import DATA from '../data';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


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
      </div>
    </>
  );
}

export default App;
