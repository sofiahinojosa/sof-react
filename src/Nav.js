//import './App.css';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div>

      <nav>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <Link to="/about">
          <a href="/">about me</a>
          </Link>
        </li>
        <li>
          <Link to="/projects">
          <a href="/">projects</a>
          </Link>
        </li>
        <li>
          <Link to="/certificates">
          <a href="/">certificates</a>
          </Link>
        </li>
        <li>
          <Link to="/contact">
          <a href="/">contact</a>
          </Link>
        </li>
      </ul>
      </nav>
    </div>
  );
}



/* 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/about">
          <a class="nav-link active" aria-current="page" href="/">About</a>
          </Link>
        </li>
        <li>
          <Link to="/projects">
          <a class="nav-link active" aria-current="page" href="/">Projects</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
*/

export default Nav;