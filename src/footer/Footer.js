import React from 'react';
import { FaGithub, FaLinkedin, FaBehance, FaFile} from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
       <p>© 2024, Joud Al-lahham, All rights reserved.</p>
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
        <a href="https://www.dropbox.com/scl/fi/2s64h1497xxaqxxaug3hl/JoudAllahham_Resume.pdf?rlkey=wkpjzkvg95fciaigojcgi1ved&dl=0" target="_blank" rel="noopener noreferrer">
          <FaFile/> 
        </a>
      </div>
    </footer>
  );
};

export default Footer;
