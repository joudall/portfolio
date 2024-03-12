import studyscape from '../images/studyscape.png';
import bitewise from '../images/bitewise.png';
import spellbuddy from '../images/spellbuddy.png';
import ummah from '../images/ummah.png';
import portfolio from '../images/portfolio.png';
import uscmap from '../images/uscmap.png'

const projects = {
  1: { title: "BiteWise",
  description: (
    <>
    <p>
      An all-in-one mobile application that helps build a community for those with dietary restrictions and helps them find restaurants, products and friends!
    </p>
    </>
  ),
  casestudy: 'https://www.behance.net/gallery/193664761/BiteWise',
  image:bitewise,
  },
  2: { title: "Spellbuddy",
  description: (
    <>
    <p>
      A standalone spell checker program created using Java that checks for correct spelling within documents allowing different file inputs. 
    </p>
    </>
  ),
  github: 'https://github.com/joudlahham/spellbuddy',
  casestudy: 'https://www.behance.net/gallery/192198199/SpellBuddy',
  image: spellbuddy,
  },
  3: {
    title: "ummah - WIP",
    description: (
      <>
      <p>
        A web application to connect people locally, facilitating professional networking and community engagement. 
        Providing a free, user-friendly space to find and share professional contacts, emphasizing authenticity
        and regional search capabilities to serve the unique needs of local communitie
      </p>
      </>
    ),
    github: "https://github.com/joudlahham/ummah",
    figma: "https://www.figma.com/file/29j6z3uwmeApNkdCceoT7g/Ummah?type=design&node-id=0%3A1&mode=design&t=pP87V7ei9REXQfS8-1",
    image: ummah,

  },
  4: {
    title: "My Portfolio Website",
    description: (
      <>
      <p>
      A responsive website that uses ReactJS, HTML, and CSS to showcase my work and design ability.
        </p>
      </>
    ),
    github: "https://github.com/joudlahham/portfolio",
    image: portfolio,
    imageClass: 'small-image'
  },
  5: {
    title: "Interactive Map of Western USC",
    description: (
      <>
        <p>
        This project utilizes modern web technologies such as React, Three.js, and Bootstrap to deliver a responsive and user-friendly explorer.
        </p>
      </>
    ),
    github: "https://github.com/joudlahham/westernuscmap",
    demo: "https://westernusc-map.ca/",
    image: uscmap,
    imageClass: 'small-image'
  },
  6: {
    title: "StudyScape",
    description: (
      <>
        <p>
        StudyScape is a personalized virtual workspace to support students learning at home by creating a dynamic virtual workspace and providing productivity tools.
        </p>
      </>
    ),
    github: "https://github.com/joudlahham/studyscape",
    casestudy: "https://www.behance.net/gallery/141559391/StudyScape-Case-Study",
    figma: "https://www.figma.com/proto/7lLdYuMJ4rTDSfuE87s55N/StudyScape-Case-Study?node-id=15-818&scaling=scale-down",
    image: studyscape,
  },
};

export default projects;
