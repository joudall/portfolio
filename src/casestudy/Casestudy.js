import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/casestudy.css';
import projectsData from '../projects/projectsData';

const CaseStudy = () => {
  const { id } = useParams();
  const project = projectsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="case-study-container">
      {/* Hero Section */}
      <div className="case-study-hero">
        <div className="hero-content">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="hero-image">
          <img src={project.image} alt={project.title} />
        </div>
      </div>

      {/* Project Details */}
      <div className="project-details">
        <div className="detail-box">
          <h3>Role</h3>
          <p>{project.role}</p>
        </div>
        <div className="detail-box">
          <h3>Timeline</h3>
          <p>{project.timeline || "3 months"}</p>
        </div>
        <div className="detail-box">
          <h3>Team Size</h3>
          <p>{project.teamSize || "1 person"}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="case-study-content">
        {/* Background Section */}
        <section className="content-section">
          <h2 className="section-title">Background</h2>
          <p className="section-text">{project.background}</p>
        </section>

        {/* Problem Section */}
        <section className="content-section problem-section">
          <h2 className="section-title">The Problem</h2>
          <p className="section-text">{project.problem}</p>
          <div className="problem-details">
            {project.userProblems && project.userProblems.map((userProblem, index) => (
              <div key={index} className="problem-item">
                {userProblem.text}
              </div>
            ))}
          </div>
        </section>

        {/* Goals Section */}
        <section className="content-section">
          <h2 className="section-title">Project Goals</h2>
          <div className="goals-container">
            {project.goals && project.goals.map((goal, index) => (
              <div key={index} className="goal-item">
                {goal.text}
              </div>
            ))}
          </div>
        </section>

        {/* Ideation Section with User Research */}
        <section className="content-section">
          <h2 className="section-title">Research & Discovery</h2>
          
          {/* User Persona */}
          {project.userpersonapic && (
            <div className="research-visual">
              <h3 className="subsection-title">User Persona</h3>
              <img src={project.userpersonapic} alt="User Persona" className="research-image" />
            </div>
          )}
          
          {/* Empathy Map */}
          {project.empathymap && (
            <div className="research-visual">
              <h3 className="subsection-title">Empathy Map</h3>
              <img src={project.empathymap} alt="Empathy Map" className="research-image" />
            </div>
          )}

          {/* User Research */}
          <div className="research-findings">
            <h3 className="subsection-title">User Interview Findings</h3>
            <div className="findings-grid">
              {project.userInterviews && project.userInterviews.map((interview, index) => (
                <div key={index} className="finding-item">
                  {interview.text}
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Research */}
          <div className="research-findings">
            <h3 className="subsection-title">Secondary Research</h3>
            <div className="findings-grid">
              {project.research && project.research.map((research, index) => (
                <div key={index} className="finding-item">
                  {research.text}
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="research-findings">
            <h3 className="subsection-title">Competitive Analysis</h3>
            <p>{project.competitiveResearch}</p>
            <div className="competitors-grid">
              {project.competition && project.competition.map((competition, index) => (
                <div key={index} className="competitor-item">
                  {competition.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="content-section solution-section">
          <h2 className="section-title">The Solution</h2>
          <p className="section-text">{project.solution}</p>
          
          <div className="solutions-grid">
            {project.ourSolutions && project.ourSolutions.map((solution, index) => (
              <div key={index} className="solution-item">
                {solution.text}
              </div>
            ))}
          </div>
        </section>

        {/* Design Process */}
        <section className="content-section">

          {/* Design Process */}
          {project.designprocess && (
            <div className="design-visual">
              <h2 className="subsection-title">Design Process</h2>
              <img src={project.designprocess} alt="Design Process" className="design-image" />
            </div>
          )}
          
          {/* User Flow */}
          {project.userflow && (
            <div className="design-visual">
              <h3 className="subsection-title">User Flow</h3>
              <img src={project.userflow} alt="User Flow" className="design-image" />
            </div>
          )}

          {/* Journey Map */}
          {project.journeymap && (
            <div className="design-visual">
              <h3 className="subsection-title">User Journey</h3>
              <img src={project.journeymap} alt="Journey Map" className="design-image" />
            </div>
          )}

          {/* Information Architecture */}
          {(project.infoarch && project.infoarch.length > 0) && (
            <div className="design-visual">
              <h3 className="subsection-title">Information Architecture</h3>
              <div className="architecture-images">
                {project.infoarch.map((arch, index) => (
                  <img key={index} src={arch} alt={`Information Architecture ${index + 1}`} className="design-image" />
                ))}
              </div>
            </div>
          )}

          {/* UML Diagram */}
          {project.umldiagram && (
            <div className="design-visual">
              <h3 className="subsection-title">System Diagram</h3>
              <img src={project.umldiagram} alt="System Diagram" className="design-image" />
            </div>
          )}
        </section>

        {/* Wireframes & Prototypes */}
        <section className="content-section">
          <h2 className="section-title">Wireframes & Prototypes</h2>
          
          {/* Low-Fi Wireframes */}
          <div className="wireframes-container">
            <div className="wireframes-grid">
              {project.lofiPic && (Array.isArray(project.lofiPic) ? project.lofiPic : [project.lofiPic]).map((pic, index) => (
                <img key={index} src={pic} alt={`Lo-fi Wireframe ${index + 1}`} className="wireframe-image" />
              ))}
            </div>
          </div>

          {/* Style Guide */}
          {project.styleguideline && (
            <div className="design-visual">
              <h3 className="subsection-title">Style Guide</h3>
              <img src={project.styleguideline} alt="Style Guide" className="design-image" />
            </div>
          )}

          {/* Hi-Fi Wireframes */}
          {project.hifiWireframes && (
            <div className="design-visual">
              <h3 className="subsection-title">High-Fidelity Wireframes</h3>
              <img src={project.hifiWireframes} alt="Hi-fi Wireframes" className="design-image" />
            </div>
          )}

          {/* Prototype */}
          {project.prototypeLink && (
            <div className="prototype-container">
              <h3 className="subsection-title">Interactive Prototype</h3>
              <iframe 
                className="prototype-frame"
                src={project.prototypeLink}
                allowFullScreen
              ></iframe>
              {project.figma && id !== '0' && (
                <a href={project.figma} className="figma-link" target="_blank" rel="noopener noreferrer">
                  View on Figma
                </a>
              )}
            </div>
          )}
        </section>

        {/* Usability Testing */}
        <section className="content-section">
          <h2 className="section-title">Usability Testing</h2>
          <p className="section-text">{project.usabilityTesting}</p>
          
          <div className="feedback-container">
            <h3 className="subsection-title">User Feedback</h3>
            <div className="feedback-grid">
              {project.feedback && project.feedback.map((feedback, index) => (
                <div key={index} className="feedback-item">
                  {feedback.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges 
        <section className="content-section challenges-section">
          <h2 className="section-title">Challenges</h2>
          <div className="challenges-grid">
            <div className="challenge-item">
              <h3 className="challenge-title">Design Constraints</h3>
              <p>Balancing user needs with technical limitations required innovative solutions and compromises.</p>
            </div>
            <div className="challenge-item">
              <h3 className="challenge-title">User Engagement</h3>
              <p>Creating features that would keep users engaged while providing real value was a key challenge.</p>
            </div>
          </div>
        </section>
        */}

        {/* Conclusion */}
        <section className="content-section conclusion-section">
          <h2 className="section-title">Conclusion</h2>
          <p className="section-text">{project.conclusion}</p>
          
          {project.keyLearnings && (
            <div className="learnings-container">
              <h3 className="subsection-title">Key Learnings</h3>
              <div className="learnings-grid">
                {project.keyLearnings.map((learning, index) => (
                  <div key={index} className="learning-item">
                    {learning.text}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CaseStudy;
