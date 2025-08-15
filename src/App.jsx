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
      
      <section className="home" id="home">
        <h2 className='name'>Hi, I'm <span className="highlight">Eslam</span> Saeed</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores earum rem repudiandae unde, necessitatibus nulla.</p>
        <a href="#projects" className="cta">View My Work</a>
      </section>

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
              <li>
                <h3>Web Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt! Ad deleniti nostrum facere corrupti.</p>
              </li>
              <li>
                <h3>UI/UX Designer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt! Ad deleniti nostrum facere corrupti.</p>
              </li>
              <li>
                <h3>Content Creator</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sunt! Ad deleniti nostrum facere corrupti.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">

      </section>

      <section className="projects" id="projects">

      </section>

      <section className="contact" id="contact">

      </section>
    </>
  );
}

export default App;
