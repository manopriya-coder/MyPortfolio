import React from "react";
import "../FontandColor/FontandColor.css";
import colorFont from '../../Assets/ColorFont.png'
import { motion } from "framer-motion";


const FontandColor = () => {
  return (
    <div className="mainFC">
      <p>COLOR AND FONTS</p>
      
      <motion.div
        className="colorFontImg"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* <div className="colorFontImg"> */}
        <img src={colorFont} alt="" />
      {/* </div> */}
      </motion.div>
      
    </div>
  );
};

export default FontandColor;
