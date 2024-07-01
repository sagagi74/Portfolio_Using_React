import React from 'react';
import profileImage from '../assets/yongprofile.jpg';

const AboutMe = () => (
  <section>
    <h2>About Me</h2>
    <img src={profileImage} alt="yongyun" style={{ width: '150px', borderRadius: '50%' }} />
    <p>
      yongwoo yun
    </p>
  </section>
);

export default AboutMe;