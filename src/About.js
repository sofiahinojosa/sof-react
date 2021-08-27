import './App.css';
import './About.css'
import Footer from './Footer';

function About() {
  return (
    <div className="About">
      <h3>About me ✌️</h3>
      <p>
        I am a 14 year old web developer from Mexico. 
        My coding journey started in quarantine about a year ago with HTML, Css, and JavaScript. 
        Currently, I am learning Angular. 
        I like working with React too :D 
        On my free time I like to sail, listen to music, make diys, play piano, read and code.
        </p>

      <h3>My skills ⚡️</h3>
      <div class="container">
      <div className="skills">
        <div class="row">
      <ul>
        <p className="blue col">
          React
        </p>
        <p className="yellow col">
          HTML
        </p>
        <p className="pink col">
          Typescript
        </p>
        <p className="green col">
          Github
        </p>
        <p className="pink col">
          Css
        </p>
        <p className="yellow col">
          JavaScript
        </p>
        <p className="blue col">
          Angular
        </p>
        <p className="green col">
          Bootstrap
        </p>
        <p className="blue col">
          Git
        </p>
      </ul>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
