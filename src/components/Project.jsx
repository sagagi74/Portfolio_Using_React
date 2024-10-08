import React from 'react';
//project button

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="project">
    <img src={image} alt={`${title} screenshot`} />
    <h2>{title}</h2>
    <div className="project-buttons">
      <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Sample App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Repo</a>
    </div>
  </div>
);

export default Project;
