import React from 'react';

function App() {


  return (
    <>
      {/* <h1>Welcome to My Portfolio</h1> */}
      
      <header>
        <div className="logo">Eslam Saeed <span className='highlight'>Portfolio</span></div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      
      <section className="home">
        <h2 className='name'>Hi, I'm <span className="highlight">Eslam</span> Saeed</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores earum rem repudiandae unde, necessitatibus nulla.</p>
        <a href="#projects" className="cta">View My Work</a>
      </section>

      <section className="about">
        <h2>About <span className="highlight">Me</span></h2>
        <div className="usp"></div>
        <div className="professions"></div>
      </section>

      <section className="skills">

      </section>

      <section className="projects">

      </section>

      <section className="contact">

      </section>
    </>
  );
}

export default App;
