import React from 'react';
import './App.css';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <h3>My projects page</h3>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.shecodes.io/workshops/shecodes-react-74a9cce7-6cb0-4b1e-935d-cab02bdf86c6/projects/396462" >React dictionary</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://react-calculator-appp.netlify.app" >Calculator App</a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://shecodes.io/workshops/shecodes-plus-54-0/projects/326341">Weather App</a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;