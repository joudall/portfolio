import React, { Component } from "react";
import projectsData from "./projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
  render() {
    return (
      <div className="projects-container">
        {Object.values(projectsData).map((project, index) => (
          <div key={index} className="project-box">
            <h3>{project.title}</h3>
            <div className="project-description">{project.description}</div>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-button">
                Github
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-button">
                  Demo
                </a>
              )}
              {project.figma && ( 
                <a href={project.figma} target="_blank" rel="noopener noreferrer" className="figma-button">
                  Figma
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
