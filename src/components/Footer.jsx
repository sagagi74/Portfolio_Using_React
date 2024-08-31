import React from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import twitterIcon from '../assets/twitter.png';
//footer page

const Footer = () => (
  <footer className="footer">
    <a href="https://github.com/sagagi74" target="_blank" rel="noopener noreferrer" className="icon">
      <img src={githubIcon} alt="GitHub" className="icon-image" />
    </a>
    <a href="https://www.linkedin.com/in/timothy-yong-yun-0a272245/" target="_blank" rel="noopener noreferrer" className="icon">
      <img src={linkedinIcon} alt="LinkedIn" className="icon-image" />
    </a>
    <a href="https://x.com/home?lang=en" target="_blank" rel="noopener noreferrer" className="icon">
      <img src={twitterIcon} alt="Twitter" className="icon-image" />
    </a>
  </footer>
);

export default Footer;