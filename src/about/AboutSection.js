import React from 'react';
import '../styles/about.css';

const WorkPosition = ({ title, year, link }) => {
  return (
    <div className="work-position">
      <p className="work-year">{year}</p>
      <p>{title}</p>
      <a href={link} className="view-button" target="_blank" rel="noopener noreferrer">View</a>
    </div>
  );
};

const AboutSection = ({title, content, work }) => {
  return (
    <section className="about-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{content}</div>
      {work && work.map((job, index) => (
          <WorkPosition key={index} title={job.title} year={job.year} link={job.link} />
      ))}
      </section>
      );
};

const About = () => {
  const sections = [
    {
      title: 'About',
      content: (
        <p>
          Hi, I'm Joud — a code enthusiast who loves to sprinkle creativity into innovative web concepts. 
          I thrive on creating seamless user journeys and watching user metrics improve.
        </p>
      ),
    },
    {
      title: 'Education',
      content: (
        <p>
          I am a recent graduate from Western University, I majored in Computer Science but have a large passion for creating web experiences & web applications with great user design & experience!
        </p>
      ),
    },
    {
    title: 'Work',
      content: (
      <React.Fragment>
      </React.Fragment>
      ),
        work: [
          {
          title: "Web Developer - Islamic Centre of Southwest Ontario",
          year: "2023-Present",
          link: "http://www.islamiccentre.ca/",
          },
          {
          title: "Web Developer Intern - University Students' Council at Western University",
          year: "2022-2023",
          link: "https://westernusc.ca/",
          },
        ]
      },
    ];

  return (
     <div className="about-container">
      {sections.map((section, index) => (
      <AboutSection key={index} title={section.title} content={section.content} work={section.work} />))}
      </div>
       );
      };
            
export default About;