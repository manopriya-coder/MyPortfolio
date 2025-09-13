import React from "react";
import "../Projects/Projects.css";
import project1 from "../../Assets/mockUps.png";
import loop from "../../Assets/Loop Animation.gif";
import bottom from "../../Assets/Bottom Animation.gif";
import ps1 from "../../Assets/ProfileQuality.jpg";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  // const navigate = useNavigate();

  return (
    <div className="main4">
      <div className="mainProjectContainer">
        <p className="mainP">
          My Featured <span>Projects</span>
        </p>
        <div className="figmaProject">
          <motion.div
            className="project1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* <div className="project1"> */}
            <img src={project1} alt="" />
            <a href="https://footwear-casestudy.netlify.app/">
            <div className="bottom" >
              <p className="bottomP">Footwear Online Shopping Application</p>
              <div className="icon">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
            </a>
            {/* </div> */}
          </motion.div>

          {/* <div className="project2"> */}
          <motion.div
            className="project2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={project1} alt="" />
            <a href="http://travel-casestudy.netlify.app">
            <div className="bottom2">
              <p className="bottomP2">Wander Together Application</p>
              <div className="icon2">
                <i class="ri-arrow-right-up-line"></i>
              </div>
            </div>
            </a>
          </motion.div>

          {/* </div> */}
        </div>
        <p className="mainP2">
          Animation in <span>Rive</span>
        </p>
        <div className="riveProject">
          <motion.div
            className="riveProject1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* <div className="riveProject1"> */}
              <img src={loop} alt="" />
            {/* </div> */}
          </motion.div>

           <motion.div
            className="riveProject2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* <div className="riveProject2"> */}
            <img src={bottom} alt="" />
          {/* </div> */}
          </motion.div>
          
        </div>
        <p className="mainP3">
          Design in <span>Photoshop</span>
        </p>
        <div className="psProject">
          <motion.div
            className="psProject1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* <div className="psProject1"> */}
            <img src={ps1} alt="" />
          {/* </div> */}
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
