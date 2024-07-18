import React from 'react';
import Project from './Project';
import image1 from '../assets/goat_ecommerce.jpg';
import image2 from '../assets/Project_Goat_Small.jpg';
import image3 from '../assets/mvc.gif';
import image4 from '../assets/React.jpg';
import image5 from '../assets/note.gif';
import image6 from '../assets/backend.gif';
import image7 from '../assets/mern.gif';
import image8 from '../assets/mongo.gif';
//portfolio page 

const projects = [

  {
    title: 'Goat_Ecommerce MERN 2.0',
    image: image7,
    deployedLink: 'https://agile-anchorage-91815-86c9ccb72548.herokuapp.com/products',
    repoLink: 'https://github.com/ojds2022/Project_Three'
  },
  {
    title: 'MongoDB_NoSQL_Social_Network_API',
    image: image8,
    deployedLink: 'https://youtu.be/5j2KSRf1pqA',
    repoLink: 'https://github.com/sagagi74/MongoDB_NoSQL_Social_Network_API'
  },
  {
    title: 'Goat_Ecommerce',
    image: image1,
    deployedLink: 'https://agile-anchorage-91815-86c9ccb72548.herokuapp.com/products',
    repoLink: 'https://github.com/ojds2022/Goat_E-Commerce'
  },
 
 
  {
    title: 'Tech Blog using MVC',
    image: image3,
    deployedLink: 'https://yong-mvc-techblog-4f5b5ab7b567.herokuapp.com/',
    repoLink: 'https://github.com/sagagi74/MVC-TechBlog'
  },
  {
    title: 'Yong Portfolio Using React',
    image: image4,
    deployedLink: 'https://main--dainty-alpaca-4a7cb9.netlify.app/',
    repoLink: 'https://github.com/sagagi74/Portfolio_Using_React'
  },
  {
    title: 'Note Taker using Express.js and Node.js',
    image: image5,
    deployedLink: 'https://yongnotetaker-ab90ca7e5351.herokuapp.com/',
    repoLink: 'https://github.com/sagagi74/Note-Taker'
  },
  {
    title: 'Ecommerce Backend with Express.js API with sequelize',
    image: image6,
    deployedLink: 'https://www.youtube.com/watch?v=BfQpxCIaK7o',
    repoLink: 'https://github.com/sagagi74/ORM_Ecommerce_Back_End'
  },
  {
    title: 'Goat_Calorie_tracker',
    image: image2,
    deployedLink: 'https://ojds2022.github.io/goat_calorie_tracker/',
    repoLink: 'https://github.com/ojds2022/goat_calorie_tracker'
  },
  
];

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
        />
      ))}
      <br>
      </br>
    </div>
  </section>
);

export default Portfolio;
