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
