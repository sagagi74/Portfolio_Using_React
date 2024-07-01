import React from 'react';
import resume from '../assets/yong.pdf';

const Resume = () => (
  <section className="resume">
    <h2>Resume</h2>
    <iframe
      src={resume}
      width="100%"
      height="600px"
      title="Resume"
    >
      Your browser does not support iframes.
    </iframe>
    <h3>Proficiencies</h3>
    <ul className="proficiencies">
      <li>JavaScript</li>
      <li>React</li>
      <li>HTML/CSS</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>MongoDB</li>
    </ul>
  </section>
);

export default Resume;
