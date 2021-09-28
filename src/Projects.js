import React from 'react';
import './App.css';
import './Projects.css';
import Footer from './Footer';

function Projects() {
  return (
    <div className="Projects">
      <h3>My projects 👩‍💻</h3>

      <div class="container">
  <div class="row">
    <div class="col">
            <div class="card">
              <a href="https://react-calculator-appp.netlify.app" target="_blank" rel="noreferrer">
  <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/862/original/Screen_Shot_2021-08-24_at_9.52.48.png?1629816861" class="card-img-top" alt="okok" />
  <div class="card-body">
    <h5 class="card-title">Calculator App ➗</h5>
    <p class="card-text">A simple calculator app made with js</p>
  </div>
    </a>
</div>
    </div>

    <div class="col">
       <div class="card">
         <a href="https://www.shecodes.io/workshops/shecodes-react-74a9cce7-6cb0-4b1e-935d-cab02bdf86c6/projects/396462" target="_blank" rel="noreferrer">
  <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/864/original/Screen_Shot_2021-08-24_at_10.07.14.png?1629817650" class="card-img-top" alt="okok"/>
  <div class="card-body">
    <h5 class="card-title">React Dictionary 📖</h5>
    <p class="card-text">Dictionary made with React</p>
  </div>
  </a>
</div>
    </div>
      </div>

      <div class="row">

    <div class="col">
      <div class="card">
        <a href="https://shecodes.io/workshops/shecodes-plus-54-0/projects/326341" target="_blank" rel="noreferrer">
  <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/863/original/Screen_Shot_2021-08-24_at_9.53.00.png?1629817044" class="card-img-top" alt="okok" />
  <div class="card-body">
    <h5 class="card-title">Weather App 🌦</h5>
    <p class="card-text">Basic weather app</p>
  </div>
  </a>
</div>
    </div>
    <div class="col">
      <div class="card">
        <a href="https://sharp-northcutt-807768.netlify.app/" target="_blank" rel="noreferrer">
  <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/017/844/original/Screen_Shot_2021-09-28_at_7.53.50.png?1632833705" class="card-img-top" alt="okok" />
  <div class="card-body">
    <h5 class="card-title">Dark mode 🌚</h5>
    <p class="card-text">Just a button lol</p>
  </div>
  </a>
</div>
    </div>
  </div>

<h3>My certificates 📄</h3>

  <div class="row">
    <div class="col">
            <div class="card">
              <a href="https://www.shecodes.io/certificates/dcf953e1d39d62955d05a448163842e8" target="_blank" rel="noreferrer">
  <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/865/original/Screen_Shot_2021-08-24_at_10.16.13.png?1629818392" class="card-img-top" alt="okok" />
  <div class="card-body">
    <h5 class="card-title">Shecodes Basics 😌</h5>
    <p class="card-text">Introduction to coding</p>
  </div>
    </a>
</div>

    </div>
    <div class="col">
       <div class="card">
         <a href="https://www.shecodes.io/certificates/07aa5c25d41ee639aa9d40d985d4b6ee" target="_blank" rel="noreferrer">
  <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/866/original/Screen_Shot_2021-08-24_at_10.16.22.png?1629818429" class="card-img-top" alt="okok"/>
  <div class="card-body">
    <h5 class="card-title">Shecodes Plus 😛</h5>
    <p class="card-text">Front end development</p>
  </div>
  </a>
</div>
    </div>
    <div class="col">
      <div class="card">
        <a href="https://www.shecodes.io/certificates/163ac6a888c9fcc23c8735b153cb706b" target="_blank" rel="noreferrer">
  <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/867/original/Screen_Shot_2021-08-24_at_10.16.31.png?1629818453" class="card-img-top" alt="okok" />
  <div class="card-body">
    <h5 class="card-title">Shecodes React ⚛️</h5>
    <p class="card-text">React development</p>
  </div>
  </a>
</div>
    </div>
  </div>
</div>
<Footer />
    </div>
  );
}

export default Projects;