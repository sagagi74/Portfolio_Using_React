import React from 'react';
import profileImage from '../assets/yong.png';
//About me page to root
const AboutMe = () => (
  <section className="about-me">
    <h2>About Me</h2>
    <img src={profileImage} alt="YongYun" className="profile-image" />
    <p>
    16 years of my professional management career with e-commerce management, online marketing, paid social marketing, information technology, supply chain, and ERP experiences, starting from application/web developer to CTO, I have been facing very challenging tasks and I was able to successfully deliver the results focusing on start-up business or rebuild current business structures
    </p>
  </section>
);

export default AboutMe;
