import React from 'react';
import resume from '../assets/yong.pdf';

const Resume = () => (
  <section className="resume">
    <h2>Resume</h2>
    <a href={resume} download="Yong_Woo_Yun_Resume.pdf" className="btn btn-download">Download Resume</a>
    <iframe
      src={resume}
      width="100%"
      height="600px"
      title="Resume"
    >
      Your browser might not support iframes, please use Chrome browser.
    </iframe>
    <h3>Proficiencies</h3>
    <ul className="proficiencies">
      <li>JavaScript</li>
      <li>React</li>
      <li>HTML/CSS</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>MongoDB</li>
      {/* Add more proficiencies as needed */}
    </ul>
  </section>
);

export default Resume;
