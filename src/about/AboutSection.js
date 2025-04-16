import React from 'react';
import '../styles/about.css';

const Position = ({ title, description, year, link }) => {
  return (
    <div className="work-position">
       <p>{title}</p>
      <p className="work-year">{year}</p>
      <p className="work-description">{description}</p>
    </div>
  );
};

const WorkExperience = ({ current, previous }) => {
  return (
    <div className="work-experience-container">
      <div className="experience current-experience">
        <h2 className="experience-heading">Right now, I'm a Software Developer at <a href="https://www.brocksolutions.com/">Brock Solutions</a></h2>
        {current.map((position, index) => (
          <div key={index} className="position">
            <div className="position-details">
              <p className="position-title">{position.title}</p>
            </div>
            <br></br>
          </div>
        ))}
      </div>
      <div className="experience previous-experience">
        <h2 className="experience-heading">Previously, I was a Web & Digital Marketing Specialist at <a href="https://islamiccentre.ca/">ICSWO</a></h2>
        {previous.map((position, index) => (
          <div key={index} className="position">
            <div className="position-details">
              <p className="position-title">{position.title}</p>
            </div>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

const InternshipExperience = ({ internship }) => {
  return (
    <div className="internship-experience-container" style={{ padding: '80px' }}>
      <h2 className="experience-heading">I interned as a Web Developer at <a href="https://westernusc.ca/">Western University Students' Council</a></h2>
      {internship.map((position, index) => (
        <div key={index} className="position">
          <div className="position-details">
            <p className="position-title">{position.title}</p>
          </div>
          <br></br>
        </div>
      ))}
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="education-section">
      <div className="education-text">
        <h2>I started my career as a web developer</h2>
        <p>Graduated with a Computer Science degree at Western University, however I've dedicated my personal studies and time mastering web design, user experience design and development. Throughout my career, I've actively applied my knowledge in practical settings, leading to measurable improvements in user engagement and experience.</p>
      </div>
      <div className="education-illustration"></div>
    </div>
  );
};

/*const VolunteerSection = () => {
  return (
    <div className="volunteer-section">
      <div className="volunteer-text">
        <h2>I also volunteer and mentor youth aspiring to get into tech</h2>
        <p>As the Digital Marketing Manager at <a href="https://www.getmysc.ca/">Muslim Youth Social Connection (MYSC)</a>, I am responsible for the management, design, and timely updates of our website, ensuring a seamless online experience for our community.</p>
      </div>
    </div>
  );
};*/


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
    title: "2024 - Present: Software Developer at Brock Solutions, I currently develop and implement automation solutions for clients across the transportation industry.",
    link: "https://www.brocksolutions.com/"
  }
];

const previousExperience = [
  {
    title: "2023 - 2024: Web & Digital Marketing Specialist at ICSWO, where I increased user engagement by 15% through mobile-first design and system integration, and improved newsletter interaction by 20% via email and social media campaigns.",
    link: "https://islamiccentre.ca/"
  }
];

const internshipExperience = [
  {
    title: "2022 - 2023: As a web developer, I developed a UCC map web app to help 40,000 students at Western navigate and discover USC services. I also streamlined site performance and accessibility across all WordPress achieving a 20% reduction in load times and full compliance with web accessibility standards.",
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
      <WorkExperience 
        current={currentExperience} 
        previous={previousExperience}
      />
      <InternshipExperience
        internship={internshipExperience}
      />
    </div>
  
  );
};

export default About;
