import React from 'react';
import './App.css';
import './Certificates.css'

function Certificates() {
  return (
    <div className="Certificates">
      <h3>My certificates page</h3>

      <ul>
        <li>
          <a href="https://www.shecodes.io/certificates/dcf953e1d39d62955d05a448163842e8" target="_blank" rel="noreferrer">Shecodes Basics</a>
        </li>
        <li>
          <a href="https://www.shecodes.io/certificates/07aa5c25d41ee639aa9d40d985d4b6ee" target="_blank" rel="noreferrer">Shecodes Plus</a>
        </li>
        <li>
          <a href="https://www.shecodes.io/certificates/163ac6a888c9fcc23c8735b153cb706b" target="_blank" rel="noreferrer">Shecodes React</a>
        </li>
      </ul>
    </div>
  );
}

export default Certificates;