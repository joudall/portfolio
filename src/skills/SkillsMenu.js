import React from 'react';
import '../styles/skillsMenu.css';
import htmlLogo from '../images/html.png';
import csslogo from '../images/css.png';
import javascriptlogo from '../images/javascript.png';
import pythonlogo from '../images/python.png';
import javalogo from '../images/java.png';
import phplogo from '../images/php.png';
import clogo from '../images/c.png';
import cpluslogo from '../images/c++.png';
import reactlogo from '../images/react.png';
import angularlogo from '../images/angular.webp';
import threelogo from '../images/three.png';
import nodelogo from '../images/node.png';
import bootstrap from '../images/bootstrap.svg';
import opengl from '../images/opengl.png';
import mongodb from '../images/mongodb.png';
import git from '../images/git.png';
import github from '../images/github.png';
import bitbucket from '../images/bitbucket.webp';
import commandline from '../images/commandline.png';
import jira from '../images/jira.png';
import confluence from '../images/confluence.png'
import sql from '../images/sql.png'
import linux from '../images/linux.png'
import blender from '../images/blender.png'
import microsoftsuite from '../images/microsoftsuite.png'
import figma from '../images/figma.png'
import adobephotoshop from '../images/adobephotoshop.png'
import adobeillustrator from '../images/adobeillustrator.png'
import wordpress from '../images/wordpress.png'
import webflow from '../images/webflow.png'
import webacessibility from '../images/webaccessibility.png'
import cms from '../images/cms.png'
import seo from '../images/seo.png'
import responsivedesigns from '../images/responsivedesigns.png'
import expresslogo from '../images/Expressjs.png'
import balsamiq from '../images/balsamiq.png'

const skillCategories = {
  Languages: [
    { type: 'HTML', logo: htmlLogo },
    { type: 'CSS', logo: csslogo },
    { type: 'Javascript', logo: javascriptlogo },
    { type: 'Python', logo: pythonlogo },
    { type: 'Java', logo: javalogo },
    { type: 'PHP', logo: phplogo },
    { type: 'C', logo: clogo },
    { type: 'C++', logo: cpluslogo},
    { type: 'SQL', logo: sql},
  ],
  Frameworks: [
    { type: 'React.js', logo: reactlogo },
    //{ type: 'Angular.js', logo: angularlogo },
    { type: 'Express.js', logo: expresslogo },
    { type: 'Node.js', logo: nodelogo },
    { type: 'MongoDB', logo: mongodb },
  ],
  Development: [
    { type: 'Git', logo: git },
    { type: 'Github', logo: github },
    //{ type: 'Bitbucket', logo: bitbucket },
    { type: 'Command Line', logo: commandline},
    { type: 'Jira', logo: jira },
    { type: 'Confluence', logo: confluence },
    { type: 'Linux', logo: linux },
    { type: 'Blender', logo: blender },
    { type: 'Microsoft Suite', logo: microsoftsuite},
  ],
  Design: [
    { type: 'Figma', logo: figma },
    { type: 'Balsamiq', logo: balsamiq},
    { type: 'Adobe Photoshop', logo: adobephotoshop },
    { type: 'Adobe Illustrator', logo: adobeillustrator },
  ],
  Other: [
    { type: 'WordPress', logo: wordpress },
    { type: 'Webflow', logo: webflow },
    { type: 'Web Acessibility', logo: webacessibility },
    { type: 'Content Managment Systems', logo: cms},
    { type: 'SEO', logo: seo },
    { type: 'Responsive Designs', logo: responsivedesigns },
  ]
};

const Skill = ({ skill }) => (
  <div className="skill">
    <img src={skill.logo} alt={skill.type} />
    <span className="skill-name">{skill.type}</span>
  </div>
);

const SkillsMenu = () => (
  <div className="skills-container">
    {Object.entries(skillCategories).map(([category, skills]) => (
      <div key={category} className={`category-container ${category.replace(/\s+/g, '').toLowerCase()}`}>
        <h2 className="skills-category-title">{category}</h2>
        <div className="skills-category">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    ))}
  </div>
);


export default SkillsMenu;
