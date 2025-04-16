import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import CaseStudy from './casestudy/Casestudy.js';
import Footer from "./footer/Footer.js";
import "./styles/app.css";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
            <Analytics />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
