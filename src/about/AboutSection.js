import React from 'react';
import '../styles/about.css';

const Position = ({ title, description, year, link }) => {
  return (
    <div className="work-position">
       <p>{title}</p>
      <p className="work-year">{year}</p>
      <p className="work-description">{description}</p>
      <a href={link} className="view-button" target="_blank" rel="noopener noreferrer">View</a>
    </div>
  );
};

const WorkExperience = ({ current, previous }) => {
  return (
    <div className="work-experience-container">
      <div className="experience current-experience">
        <h2 className="experience-heading">Right now, I design user interfaces and improve responsive layouts at the Islamic Centre of Southwest Ontario</h2>
        {current.map((position, index) => (
          <div key={index} className="position">
            <div className="position-details">
              <p className="position-title">{position.title}</p>
            </div>
            <br></br>
            <div className="position-action">
              <a href={position.link} className="position-view" target="_blank" rel="noopener noreferrer">View</a>
            </div>
          </div>
        ))}
      </div>
      <div className="experience previous-experience">
        <h2 className="experience-heading">Previously, I was a Web Development Intern at the University Students' Council at Western University</h2>
        {previous.map((position, index) => (
          <div key={index} className="position">
            <div className="position-details">
              <p className="position-title">{position.title}</p>
            </div>
            <br></br>
            <div className="position-action">
              <a href={position.link} className="position-view" target="_blank" rel="noopener noreferrer">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="education-section">
      <div className="education-text">
        <h2>I started my career as a frontend developer</h2>
        <p>Currently completing my Computer Science degree at Western University, I've dedicated my studies to mastering the complexity of web design and development. Throughout my academic career, I've actively applied my knowledge in practical settings, leading to measurable improvements in user engagement and experience.</p>
      </div>
      <div className="education-illustration"></div>
    </div>
  );
};

const VolunteerSection = () => {
  const myscLink = "https://www.getmysc.ca/";
  return (
    <div className="volunteer-section">
      <div className="volunteer-text">
        <h2>I also volunteer and mentor youth aspiring to get into tech</h2>
        <p>As the Digital Marketing Manager at Muslim Youth Social Connection (MYSC), I am responsible for the management, design, and timely updates of our website, ensuring a seamless online experience for our community.</p>
        <a href={myscLink} className="view-button" target="_blank" rel="noopener noreferrer">View</a>
      </div>
      <div className="volunteer-illustration"></div> {/* You can add an illustration similar to the tree here */}
    </div>
  );
};


const AboutSection = ({title, content, positions }) => {
  return (
    <section className="about-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{content}</div>
      {positions && positions.map((position, index) => (
        <Position key={index} {...position} />
      ))}
    </section>
  );
};

const currentExperience = [{
    title: "2023 - Present, boosted user engagement by 40% with mobile-first web design and system integrations, and increased newsletter interaction by 50% through Email and Facebook marketing.",
    link: "https://islamiccentre.ca/"
  }
];

const previousExperience = [
  {
    title: "Developed a user-favored campus map app enhancing navigation for 20,000+ students and led campaigns increasing engagement by 30%. Streamlined site performance and accessibility across 4 WordPress sites, achieving a 20% load time reduction.",
    link: "https://westernusc.ca/"
  }
];

const About = () => {
  const sections = [
    {
      content: (
        <p className="intro-text">
          <span className="intro-highlight">Hi, I'm Joud</span> — a developer and designer devoted to crafting seamless digital experiences. This is my digital tapestry.
        </p>
      ),
    },
  ];

  return (
    <div className="about-container">
      {sections.map((section, index) => (
        <AboutSection
          key={index}
          title={section.title}
          content={section.content}
          positions={section.positions}
        />
      ))}
      <EducationSection />
      <VolunteerSection />
      <WorkExperience current={currentExperience} previous={previousExperience} />
    </div>
  
  );
};

export default About;
