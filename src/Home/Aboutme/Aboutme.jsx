import React from "react";
import "../Aboutme/Aboutme.css";
import myPic from "../../Assets/MyPic.png";

const Aboutme = () => {
  return (
    <div className="mainImg">
      <div class="shape">
    </div>
    <div class="shape2">
    </div>
    {/* <div class="shape3">
    </div> */}
    <div class="shape4">
    </div>
      <div className="left">
        <div className="subLeft">
          <div className="nameText">
            <p className="normalText">I'm Mano</p>
            <p className="designText">Priya</p>
          </div>
          <div className="jobText">
            <p className="designText2">UI/UX </p>
            <p className="normalText2">Designer</p>
          </div>
          <div className="aboutText">
            <p className="aboutmePara">
              Fresh UI/UX Designer with a passion for clean design and smooth
              interactions., I am eager to apply my skills in user-centered
              design, prototyping, and problem-solving to create intuitive and
              engaging digital experiences. Seeking an opportunity as a UI/UX
              Designer where I can contribute my knowledge of design tools,
              wireframing, and user research while continuously learning and
              growing within a dynamic design team. My goal is to design
              impactful and user-friendly interfaces that meet both user needs
              and business goals.
            </p>
          </div>
          <div className="cvBtn">
            <button className="cv">Show CV</button>

          </div>
        </div>
      </div>
      <div className="right">
        <img src={myPic} />
      </div>
    </div>
  );
};

export default Aboutme;
