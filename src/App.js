import React, { useState } from "react";
import './App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import {ThemeProvider} from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './Theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//import Loader from "react-loader-spinner";


function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <Router> 
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
       <button type="button" class="btn btn-primary" onClick={themeToggler}>☀</button>

    
      
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        </Switch>
        </>
    </ThemeProvider>
    </div>
    </Router>
  );
}

const Home = () => (
  <div className="Home">
    <h3 id="h3">Hello there 👋</h3>
    <img class="mi_cara_lol" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/016/007/original/5CE168AF-FA85-40F6-9F26-E5E7EAAEED1F.jpg?1629987114" alt="pictureOfMeLol" />
    <br />
    <small>Welcome to my website ☺️</small>
    <Footer />
  </div>
)

export default App;

/* <div class="parallax"><span className="div">Home page</span></div> */
// <img src="https://source.unsplash.com/random?nature" alt="a" className="the-img" />

//<img className="star_left" src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/546/original/Screen_Shot_2021-08-19_at_22.18.49-removebg-preview.png?1629429665" alt="a" />
//<img className="star_right"src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/547/original/a.png?1629429855" alt="a" />
//<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />