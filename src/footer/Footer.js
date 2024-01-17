import React from 'react';
import { FaGithub, FaLinkedin, FaBehance,FaFile} from 'react-icons/fa';
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
        <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:86df59a0-88fb-334f-8d26-8260bf40dbe0" target="_blank" rel="noopener noreferrer">
          <FaFile/> 
        </a>
      </div>
    </footer>
  );
};

export default Footer;
