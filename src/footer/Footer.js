import React from 'react';
import { FaGithub, FaLinkedin, FaBehance, FaFile} from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
       <p>© 2025 - This site is hand-crafted and coded by Joud Al-lahham using React.js.</p>
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
        {/* Resume link commented out
        <a href="https://drive.google.com/file/d/1fP_hAFuF-ffGZMivwXorAYAW4J3rDtJV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FaFile/> 
        </a>
        */}
      </div>
    </footer>
  );
};

export default Footer;
