import React from "react";
import "../FootwearProject/Footwear.css";
import bgLine from "../../Assets/lineBg.png";
import { motion } from "framer-motion";

const Footwear = () => {
  return (
    <div className="banner">
        <img src={bgLine} alt="" />

      <motion.div
        // className="banner"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p>Footwear Online Shopping Application</p>
      </motion.div>
    </div>
  );
};

export default Footwear;
