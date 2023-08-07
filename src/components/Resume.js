// Resume.js

import React from 'react';
import '../App.css'; 

function Resume() {
  return (
    <div>
      <h4>Resume</h4>
      <div className="resume-download">
        <p>
          Download my resume&nbsp;
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
             here 
          </a>
        </p>
      </div>
      <section className="resume-section">
        <h2>Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </section>
      <section className="resume-section">
        <h2>Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL, Sequelize </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;