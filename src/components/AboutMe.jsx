import React from 'react';
import profileImage from '../assets/yong.png';
//About me page to root
const AboutMe = () => (
  <section className="about-me">
    <h2>About Me</h2>
    <img src={profileImage} alt="YongYun" className="profile-image" />
    <p>
    With 16 years of professional experience in e-commerce management, online
marketing, paid social marketing, information technology, supply chain, and ERP, I
have progressed from an application/web developer to a Chief Technology Officer
(CTO). Throughout my career, I have consistently tackled complex challenges,
successfully delivering results by focusing on building start-ups and restructuring
existing operations
   
    </p>
  </section>
);

export default AboutMe;
