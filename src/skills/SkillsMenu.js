import React, { Component } from "react";
import "../styles/skillsMenu.css";
import SkillBar from "react-skillbars";

export default class SkillsMenu extends Component {
  skills = [
    {type: "Java", level: 50 },
    {type: "Javascript", level: 90 },
    {type: "HTML", level: 95},
    {type: "CSS", level:95},
    {type: "React JS", level:90},
    {type: "Figma", level:90},
    {type: "Three JS", level:70},
    {type: "MySQL", level:70},
    {type: "PHP", level:65},
    {type: "Java", level:60},
    {type: "C++", level:50},
    {type: "Git", level:60},
    {type: "C", level:50},
    {type: "Python", level:50},
  ]

  colors = {
    bar: "#9AAB89",
    title: {
      text: "#fff",
      background: "black"
    }
  };

  render() {
    return (
      <div className="skills-container">
        <SkillBar skills={this.skills} height={25} colors={this.colors} />
      </div>
    );
  }
}
