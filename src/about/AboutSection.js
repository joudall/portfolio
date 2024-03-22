import React from 'react';
import '../styles/about.css';

const Position = ({ title, year, link }) => {
  return (
    <div className="work-position">
      <p className="work-year">{year}</p>
      <p>{title}</p>
      <a href={link} className="view-button" target="_blank" rel="noopener noreferrer">View</a>
    </div>
  );
};

const AboutSection = ({title, description, content, positions }) => {
  return (
    <section className="about-section">
      <h2 className="section-title">{title}</h2>
      <h4 className="description">{description}</h4>
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
      content: <p>Hi, I'm Joud — a soon-to-be Computer Science graduate from Western University with a passion for web design and user-centric solutions. My journey through hackathons and project development has shaped my skills in prototyping, research, and web app development with React and Node.js. Utilizing my technical background, I bridge the gap between design and development, enhancing user engagement through intuitive website design and effective digital marketing strategies.</p>
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
          description: "In my role at the Islamic Centre of Southwest Ontario, I've enhanced user engagement by 40% through comprehensive web development, including a mobile-first website design and integration of third-party systems. My efforts extend to crafting targeted email and Facebook marketing campaigns, contributing to a 50% increase in newsletter interaction, showcasing my ability to combine technical development with effective digital marketing strategies.",
          year: "2023-Present",
          link: "https://islamiccentre.ca/"
        },
        {
          title: "Web Developer Intern - University Students' Council at Western University",
          description:'In my role as a Web Development Intern at the University Students’ Council at Western University, I spearheaded the comprehensive redesign of high-traffic websites, including our interactive campus map, enhancing user interaction and engagement. My hands-on approach in creating responsive design elements and content catered to various stakeholder specifications, demonstrated through a surge in engagement metrics, reflects a strong competency in both UX/UI and web development disciplines.',
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
      <AboutSection key={index} title={section.title} content={section.content} positions={section.positions || section.work} />))}
     </div>
  );
};
            
export default About;
