import React from "react";
import "../Service/Service.css";
import serviceBg from "../../Assets/wholeService.png";

const Service = () => {
  return (
    <div className="backGround">
      <img src={serviceBg} alt="" />
      <h3>
        The Ease - <span>Service</span> Process
      </h3>
      <div className="serviceContainer">
        <div className="service">
          <p>Moblie App Design</p>
        </div>
        <div className="service">
          <p>Web Design</p>
        </div>
        <div className="service">
          <p>UI / UX Design</p>
        </div>
        <div className="service">
          <p>Visual Design</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
