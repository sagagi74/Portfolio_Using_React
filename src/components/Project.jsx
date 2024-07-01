import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="project">
    <img src={image} alt={`${title} screenshot`} />
    <h2>{title}</h2>
    <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Project</a>
    <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default Project;
