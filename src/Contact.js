import React from 'react';
import './App.css';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <h3>My contact page</h3>
      <ul>
        <li>
          <a href="https://www.instagram.com/sofiahinojosadl_/" target="_blank" rel="noreferrer">Instagram</a>
        </li>
        <li>
          <a href="https://github.com/sofiahinojosa" target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/sofiahinojosadl" target="_blank" rel="noreferrer">Twitter</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;