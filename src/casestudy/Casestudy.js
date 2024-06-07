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
    <div className="case-study">
      <h1>{project.title}</h1>
      <h2>{project.subtitle}</h2>
      <div className="background">
        <h3>Background</h3>
        <p>{project.background}</p>
      </div>
      <div className="goals">
        <h3>Goals</h3>
        {project.goals && project.goals.map((goal, index) => (
          <div key={index} className="goal">
            <p>{goal.text}</p>
          </div>
        ))}
      </div>
      <div className="problem">
        <h3>Problem</h3>
        <p>{project.problem}</p>
      </div>
      <div className="userProblems">
        <h3>User Problems</h3>
        {project.userProblems && project.userProblems.map((userProblem, index) => (
          <div key={index} className="userProblem">
            <p>{userProblem.text}</p>
          </div>
        ))}
      </div>
      <div className="solution">
        <h3>Solution</h3>
        <p>{project.solution}</p>
        <div className="ourSolutions">
          {project.ourSolutions && project.ourSolutions.map((ourSolution, index) => (
            <div key={index} className="ourSolution">
              <p>{ourSolution.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="research">
        <h3>Primary Research - User Interviews</h3>
        <p>To better understand the problem, I conducted user interview sessions with potential users, gauging their answers to craft the perfect solution.</p>
        {project.userInterviews && project.userInterviews.map((userInterview, index) => (
          <div key={index} className="userInterview">
            <p>{userInterview.text}</p>
          </div>
        ))}
        <h3>Secondary Research - Research</h3>
        <p>In order to come up with solutions/features that will be helpful for users, I wanted to understand the context behind the problem and understand the reasonings. After gathering insights from scientific articles and personal experience blogs, I gained the following insights:</p>
        {project.research && project.research.map((research, index) => (
          <div key={index} className="research">
            <p>{research.text}</p>
          </div>
        ))}
      </div>
      <div className="competitive-research">
        <h3>Competitive Research</h3>
        <p>{project.competitiveResearch}</p>
        {project.competition && project.competition.map((competition, index) => (
          <div key={index} className="competition">
            <p>{competition.text}</p>
          </div>
        ))}
      </div>
      <div className="ideation">
        <h3>Ideation</h3>
        <p>To get innovative solutions into the hands of users, I concentrated on idea generation. Based on my understanding of the problem, I brainstormed the information architecture and user flow to ensure a smooth experience for the users.</p>
        {project.empathymap && <img src={project.empathymap} alt="empathy map" />}
        {project.affinitydiagram && <img src={project.affinitydiagram} alt="affinity map" />}
        {project.userpersonapic && <img src={project.userpersonapic} alt="user persona" />}
        {project.userflow && <img src={project.userflow} alt="user flow" />}
        {project.journeymap && <img src={project.journeymap} alt="user persona" />}
      </div>
      <div className="lo-fi-wireframes">
        <h3>Low-Fidelity Prototype</h3>
        <p>{project.loFiWireframes}</p>
        {project.lofiPic && (Array.isArray(project.lofiPic) ? project.lofiPic : [project.lofiPic]).map((pic, index) => (
          <img key={index} src={pic} alt={`lofi wireframe ${index + 1}`} />
        ))}
      </div>
      <div className="ui-kit">
        <h3>UI Kit</h3>
        <p>{project.uiKit}</p>
        {project.styleguideline && <img src={project.styleguideline} alt="style guide" />}
      </div>
      {(project.infoarch && project.infoarch.length > 0) || project.umldiagram ? (
        <div className="information-architecture">
          <h3>Information Architecture</h3>
          {project.infoarch && project.infoarch.map((pic, index) => (
            <img key={index} src={pic} alt={`Information Architecture ${index + 1}`} />
          ))}
          {project.umldiagram && <img src={project.umldiagram} alt="user persona" />}
        </div>
      ) : null}
      <div className="hi-fi-prototype">
        <h3>High-Fidelity Prototype</h3>
        {project.hifiWireframes && <img src={project.hifiWireframes} alt="hifi wireframes" />}
        {project.prototypeLink && (
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src={project.prototypeLink}
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="usability-testing">
        <h3>Usability Testing</h3>
        <p>{project.usabilityTesting}</p>
        {project.feedback && project.feedback.map((feedback, index) => (
          <div key={index} className="feedback">
            <p>{feedback.text}</p>
          </div>
        ))}
      </div>
      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>{project.conclusion}</p>
        {project.keyLearnings && project.keyLearnings.map((keyLearnings, index) => (
          <div key={index} className="keylearnings">
            <p>{keyLearnings.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
