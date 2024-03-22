import React, { Component } from "react";
import projectsData from "./projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
  renderButton(link, text, className) {
    return link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className={`button ${className}`}>
        {text}
      </a>
    ) : null;
  }

  render() {
    return (
      <div className="projects-container">
        {Object.values(projectsData).map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-media">
              <img src={project.image} alt={project.title} className="project-image"/>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">{project.description}</div>
              <p className="project-subtitle">{project.subtitle}</p>
              <div className="project-buttons">
                {this.renderButton(project.github, 'View on Github', 'github-button')}
                {this.renderButton(project.casestudy, 'View Case Study', 'casestudy-button')}
                {this.renderButton(project.figma, 'View on Figma', 'figma-button')}
                {this.renderButton(project.demo, 'View Live Site', 'demo-button')}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
