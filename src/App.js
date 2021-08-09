import './App.css';

function App() {
  function say(event) {
    let oks = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ]
    let random = Math.random();
    let second = Math.floor(random * 10);
    ok = oks[second];
  }
  let ok = "";
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">thing 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">thing 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">thing 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">thing 4</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div class="compliment">
    <button type="button" class="btn btn-primary" onClick={say}>say something</button>
    <p>{ok}</p>
    </div>
</div>
  );
}

export default App;
