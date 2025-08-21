import React from "react";
import "../Contact/Contact.css";
import bottomBlur from "../../Assets/bottomBlurEffect.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <img src={bottomBlur} alt="" />
      <div className="position">
        <div className="logomain2">
          <div className="logoCircle2"></div>
          <div className="logoName2">
            <h3>Contact Details</h3>
          </div>
        </div>
        <div className="contactIcons">
          <div className="iconBox">
            <Link to="https://www.linkedin.com/in/mano-priya-3690bb2b7/">
              <i class="ri-linkedin-fill"></i>
            </Link>
          </div>
          <div className="iconBox">
            <Link to="mailto:manopriya21022005@gmail.com">
              <i class="ri-mail-fill"></i>
            </Link>
          </div>
          <div className="iconBox">
            <Link to="tel:8489287943">
              <i class="ri-phone-fill"></i>
            </Link>
          </div>
        </div>
        <div className="bottomMenu">
          <p>Home</p>
          <p>About me</p>
          <p>Service</p>
          <p>Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
