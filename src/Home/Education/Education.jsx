import React from "react";
import "../Education/Education.css";
import bgDesign from "../../Assets/lineBg.png"

const Education = () => {
  return (
    <div className="education">
      <p>
        Education <span>Details</span>
      </p>
      <div className="eduMain">
        <div className="eduDetail">
          <h4>Bachelor of Science (Information Technology)<span className="year">2022-2025</span></h4>
          <h5>The Standard Fireworks Rajaratnam College for Women, Sivaksi</h5>
        </div>
      </div>
      <img src={bgDesign} alt="" />
    </div>
  );
};

export default Education;
