import './App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
    <div>
<Nav />
<Switch>
<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/projects" component={Projects} />
</Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <div class="parallax"><span className="div">Home page</span></div>

    <div className="text">
    <h3 className="about-me">About me</h3>
    <p>I am a 14 year old web developer from Mexico. My coding journey started in quarantine about a year ago with html, css, and js. Currently, I am learning Angular. I like working with React too :3</p>

    <h3 className="projects">Projects</h3>

    <h3>I like working with...</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>React</li>
      <li>Bootstrap</li>
      <li>Angular</li>
      <li>Github</li>
    </ul>
    </div>
  </div>
)

export default App;
