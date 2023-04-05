import React from 'react';
/*import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';*/

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bhumika D M</h1>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </header>

      <div className="logo">
          <img src="http://38.media.tumblr.com/38f1fc463917467ed2c64170f8a671fc/tumblr_nj5gw1AsF81qkmh37o1_500.gif" alt="Profile Logo" width="200" height="200" />
          <br></br>
      </div>

      <div class="port">
        <section id="about">
          <h2>About Me</h2>
          <p>An engineering student who is passionate about implementing and launching new projects.<br></br> Ability to translate business requirement into technical solutions.<br></br> Looking to start the career as an entry-level software engineer with a reputed firm drivenby technology.</p>
        </section>
      
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li><a href="#">Employee Leave Management System</a></li>
            <li><a href="#">Meeting and Scheduling</a></li>
            <li><a href="#">Catering Management</a></li>
          </ul>
        </section>
      
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>Front-End Development, Responsive Web Design, Graphic Design (basics).</li>
            <li>Programming Languages: C, Java, Python.</li>
            <li>Database Management.</li>
          </ul>
        </section>
      
        <section id="resume">
          <h2>Resume</h2>
          <p>Bhumika_Resume-.pdf</p>
        </section>
      
        <section id="contact">
          <h2>Contact</h2>
          <ul>
            <li>Email: bhumikadm0802@gmail.com</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/bhumika-d-m-81a069214/">Bhumika D M</a></li>
          </ul>
        </section>
      </div>

      <div class="foo">
        <footer>
          <p>Copyright © 2023 Bhumika D M.</p>
        </footer>
      </div>

    </div>
  
  );
}

export default App;
