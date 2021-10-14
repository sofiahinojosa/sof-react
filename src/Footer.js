import React from 'react';
import './App.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return(
    <div className="Footer">
      <h5>Contact me 🌱</h5>
      <ul>
        <li>
          <a href="https://www.instagram.com/sofiaahinojosadl" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://github.com/sofiahinojosa" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sofiahinojosadl" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="mailto:sofiahinojosadl@gmail.com" target="_blank" rel="noreferrer"> 
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  )
}