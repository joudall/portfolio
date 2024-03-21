import React from 'react';
import '../styles/about.css';

// Reusable position component for both work and volunteer positions
const Position = ({ title, year, link }) => {
  return (
    <div className="work-position">
      <p className="work-year">{year}</p>
      <p>{title}</p>
      <a href={link} className="view-button" target="_blank" rel="noopener noreferrer">View</a>
    </div>
  );
};

const AboutSection = ({title, content, positions }) => {
  return (
    <section className="about-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{content}</div>
      {positions && positions.map((position, index) => (
          <Position key={index} title={position.title} year={position.year} link={position.link} />
      ))}
    </section>
  );
};

const About = () => {
  const sections = [
    {
      title: 'About',
      content: <p>Hi, I'm Joud — a code enthusiast who loves to sprinkle creativity into innovative web concepts. I thrive on creating seamless user journeys and watching user metrics improve.</p>,
    },
    {
      title: 'Education',
      content: <p>I am a recent graduate from Western University, I majored in Computer Science but have a large passion for creating web experiences & web applications with great user design & experience!</p>,
    },
    {
      title: 'Work',
      content: <React.Fragment />,
      positions: [
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
    {
      title: 'Volunteer',
      content: <React.Fragment />,
      positions: [
        {
          title: "Digital Marketing Manager - Muslim Youth Social Connection",
          year: "2024-Present",
          link: "https://www.getmysc.ca/",
        },
      ]
    }
  ];

  return (
     <div className="about-container">
      {sections.map((section, index) => (
      <AboutSection key={index} title={section.title} content={section.content} positions={section.positions || section.work} />))}
     </div>
  );
};
            
export default About;
