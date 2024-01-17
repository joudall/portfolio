import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isCurrentPage = (path) => location.pathname === path;

  const renderNavLink = (to, text) => {
    const linkClass = isCurrentPage(to) ? "nav-link current" : "nav-link";
    return (
      <Link to={to} className={linkClass} onClick={() => setMenuOpen(false)}>
        {text}
      </Link>
    );
  };

  return (
    <nav className="nav">
      <div className={`menu-icon ${menuOpen ? "hidden" : ""}`} onClick={() => setMenuOpen(true)}>
        <div></div> 
        <div></div>
        <div></div>
      </div>

      {menuOpen && (
        <div className="menu-close" onClick={() => setMenuOpen(false)}>&times;</div>
      )}

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {renderNavLink("/", "About")}
        {renderNavLink('/skills', "Skills")}
        {renderNavLink("/projects", "Projects")}
        {renderNavLink("/contact", "Contact")}
      </div>
    </nav>
  );
}
