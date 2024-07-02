import React from 'react';
import Project from './Project';
import image1 from '../assets/goat_ecommerce.jpg';
import image2 from '../assets/Project_Goat_Small.jpg';
//portfolio page 

const projects = [
  {
    title: 'goat_ecommerce',
    image: image1,
    deployedLink: 'https://agile-anchorage-91815-86c9ccb72548.herokuapp.com/products',
    repoLink: 'https://github.com/ojds2022/Goat_E-Commerce'
  },
  {
    title: 'goat_calorie_tracker',
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
    </div>
  </section>
);

export default Portfolio;
