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

const AboutSection = ({title, description, content, positions }) => {
  return (
    <section className="about-section">
      <h2 className="section-title">{title}</h2>
      <p className="description">{description}</p>
      <div className="section-content">{content}</div>
      {positions && positions.map((position, index) => (
          <Position key={index} title={position.title} description={position.description} year={position.year} link={position.link} />
      ))}
    </section>
  );
};

const About = () => {
  const sections = [
    {
      title: 'About',
      content: <p>Hi, I'm Joud — a soon to be Computer Science graduate from Western University with a passion for web design and user-centric solutions. 
        <br></br><br></br>My journey through hackathons and project development has shaped my skills in prototyping, research, and web app development.
        <br></br><br></br>Utilizing my technical background, I bridge the gap between design and development, enhancing user engagement through intuitive website design and effective digital marketing strategies.</p>
    },
    {
      title: 'Education',
      content: <p>Currently completing my Computer Science degree at Western University, I've dedicated my studies to mastering the complexity of web design and development. Throughout my academic career, I've actively applied my knowledge in practical settings, leading to measurable improvements in user engagement and experience.</p>,
    },
    {
      title: 'Work',
      content: <React.Fragment />,
      positions: [
        {
          title: "Web Developer - Islamic Centre of Southwest Ontario",
          description: "At the Islamic Centre of Southwest Ontario, I boosted user engagement by 40% with mobile-first web design and system integrations, and increased newsletter interaction by 50% through Email and Facebook marketing.",
          year: "2023-Present",
          link: "https://islamiccentre.ca/"
        },
        {
          title: "Web Developer Intern - University Students' Council at Western University",
          description:'As a Web Development Intern at the University Students’ Council at Western University, I led the redesign of key websites and created an interactive building map, improving user engagement through responsive design and tailored content.',
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
          description:'As the Digital Marketing Manager at Muslim Youth Social Connection (MYSC), I am responsible for the management, design, and timely updates of our website, ensuring a seamless online experience for our community.',
          year: "2024-Present",
          link: "https://www.getmysc.ca/",
        },
      ]
    }
  ];

  return (
     <div className="about-container">
      {sections.map((section, index) => (
      <AboutSection key={index} title={section.title} content={section.content} description={section.description} positions={section.positions || section.work} />))}
     </div>
  );
};
            
export default About;
