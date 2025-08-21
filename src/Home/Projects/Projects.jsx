import React from "react";
import "../Projects/Projects.css";
import project1 from "../../Assets/mockUps.png";
import loop from "../../Assets/Loop Animation.gif";
import bottom from "../../Assets/Bottom Animation.gif";
import ps1 from "../../Assets/ProfileQuality.jpg";

const Projects = () => {
  return (
    <div className="main4">
      <div className="mainProjectContainer">
        <p className="mainP">
          My Featured <span>Projects</span>
        </p>
        <div className="figmaProject">
          <div className="project1">
            <img src={project1} alt="" />
            <div className="bottom">
              <p className="bottomP">Footwear Online Shopping Application</p>
              <div className="icon">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
          </div>
          <div className="project2">
            <img src={project1} alt="" />
            <div className="bottom2">
              <p className="bottomP2">Wander Together Application</p>
              <div className="icon2">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
          </div>
        </div>
        <p className="mainP2">
          Animation in <span>Rive</span>
        </p>
        <div className="riveProject">
          <div className="riveProject1">
            <img src={loop} alt="" />
          </div>
          <div className="riveProject2">
            <img src={bottom} alt="" />
          </div>
        </div>
        <p className="mainP2">
          Design in <span>Photoshop</span>
        </p>
        <div className="psProject">
          <div className="psProject1">
            <img src={ps1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
