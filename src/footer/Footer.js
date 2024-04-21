import React from 'react';
import { FaGithub, FaLinkedin, FaBehance, FaFile} from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
       <p>This site is hand-crafted and coded. <br></br>Copyright © Joud Al-lahham.</p>
      </div>
      <div className="footer-right">
        <a href="https://github.com/joudlahham" target="_blank" rel="noopener noreferrer">
          <FaGithub/> 
        </a>
        
        <a href="https://linkedin.com/in/joudallahham" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/> 
        </a>
        <a href="https://behance.net/joudlahham" target="_blank" rel="noopener noreferrer">
          <FaBehance/> 
        </a>
        <a href="https://www.dropbox.com/scl/fi/ch4iro0nfr50s6dbfggrt/JoudAllahham_Resume.pdf?rlkey=sb0sqp1f5zm48qbh6o9g8woxz&dl=0" target="_blank" rel="noopener noreferrer">
          <FaFile/> 
        </a>
      </div>
    </footer>
  );
};

export default Footer;
