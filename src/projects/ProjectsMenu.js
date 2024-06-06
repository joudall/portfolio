import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import projectsData from "./projectsData";
import "../styles/projects.css";
import { Link } from 'react-router-dom';

export default class ProjectsMenu extends Component {
  renderButton(link, text, className) {
    return link ? (
      <a href={link} className={`button ${className}`} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ) : null;
  }

  render() {
    return (
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        {Object.values(projectsData).map((project, index) => (
          index === 0 ? (
            <div key={index} className="project-card first-project">
              <div className="project-media">
                <Carousel showThumbs={false} showStatus={false}>
                  {project.images.map((image, imageIndex) => (
                    <div key={imageIndex}>
                      <img src={image} alt={`${project.title} ${imageIndex}`} />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
                <div className="project-description">{project.description}</div>
                <div className="project-buttons">
                  {this.renderButton(project.github, 'Github')}
                  <Link to={`/case-study/${index}`} className="button case-study-button">Case Study</Link>                  
                  {this.renderButton(project.figma, 'Figma')}
                  {this.renderButton(project.demo, 'Live Demo')}
                </div>
              </div>
            </div>
          ) : null
        ))}
        <div className="projects-grid">
          {Object.values(projectsData).map((project, index) => (
            index !== 0 && (
              <div key={index} className="project-card">
                <div className="project-media">
                  <img src={project.image} alt={project.title} className={project.imageClass} />
                </div>
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <h3 className="project-subtitle">{project.subtitle}</h3>
                  <div className="project-description">{project.description}</div>
                  <div className="project-buttons">
                    {this.renderButton(project.github, 'Github')}
                    <Link to={`/case-study/${index}`} className="button case-study-button">Case Study</Link>
                    {this.renderButton(project.figma, 'Figma')}
                    {this.renderButton(project.demo, 'Live Demo')}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    );
  }
}
