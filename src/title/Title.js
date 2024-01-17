import React from "react";
import "../styles/title.css";
import RotatingTitles from "../about/RotatingTitle";
import "../styles/nav.css";

const Title = () => {
  return (
    <div id="nav">
    <div id="title">
      <h1>Joud Al-lahham</h1>
      <div id="title_line">
        <span id="title_thick"></span>
        <span id="title_thin"></span>
      </div>
      <RotatingTitles />
    </div>
    </div>
  );
};

export default Title;
