import React from "react";
import "../Skills/Skills.css";
import figma from "../../Assets/fig.png";
import rive from "../../Assets/rive.png";
import ps from "../../Assets/ps.png";
import illus from "../../Assets/illus.jpg";
import html from "../../Assets/html.jpg";
import css from "../../Assets/css.png";
import js from "../../Assets/js.png";
import react from "../../Assets/react.png";

const Skills = () => {
  return (
    <div className="main3">
      <div className="subMain3">
        <p className="heading">Skills & Tools</p>
        <div className="Images">
          <div className="grid">
            <img src={figma} alt="" />
          </div>
          <div className="grid">
            <img src={rive} alt="" />
          </div>
          <div className="grid">
            <img src={ps} alt="" />
          </div>
          <div className="grid">
            <img src={illus} alt="" />
          </div>
        </div>
        <div className="Images">
          <div className="grid">
            <img src={html} alt="" />
          </div>
          <div className="grid">
            <img src={css} alt="" />
          </div>
          <div className="grid">
            <img src={js} alt="" />
          </div>
          <div className="grid">
            <img src={react} alt="" />
          </div>
        </div>
        <div className="skillPara">
          <p className="skill">
            From sketching rough wireframes to crafting detailed prototypes, I
            love turning simple ideas into engaging digital experiences. Tools
            like Figma help me build low- to high-fidelity designs, while Rive
            allows me to explore micro-interactions and animations. I'm also
            learning how to implement these designs using basic web technologies
            like HTML, CSS, and Webflow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
