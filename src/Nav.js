import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
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
          <Link to="/shop">
          <a class="nav-link active" aria-current="page" href="/">Shop</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Nav;