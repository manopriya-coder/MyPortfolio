import React from "react";
import "../Aboutme2/Aboutme2.css";
import bgLine from "../../Assets/lineBg.png"

const Aboutme2 = () => {
  return (
    <div className="main2">
      <div className="subMain2">
        <div className="heading">
          <p className="white">About</p>
          <p className="green">me</p>
        </div>
        <p className="para">
          I'm a fresher UI/UX designer passionate about turning ideas into
          functional, elegant designs. I enjoy working with Figma, Photoshop,
          and Illustrator, and I'm currently exploring Rive for animations.
        </p>
      </div>
        <img src={bgLine} alt="" className="bgLine"/>

    </div>
  );
};

export default Aboutme2;
