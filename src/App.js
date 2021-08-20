import './App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
    <div className="App">
      <img className="star_left" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/546/original/Screen_Shot_2021-08-19_at_22.18.49-removebg-preview.png?1629429665" alt="a" />
      <img className="star_right"src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/547/original/a.png?1629429855" alt="a" />
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/certificates" component={Certificates} />
        <Route path="/contact" component={Contact} />
        </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div className="Home">
    <h3>Hello there :D</h3>
    <small>Welcome to my website :0</small>

  </div>
)

export default App;

/* <div class="parallax"><span className="div">Home page</span></div> */
// <img src="https://source.unsplash.com/random?nature" alt="a" className="the-img" />
