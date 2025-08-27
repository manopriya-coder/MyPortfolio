import React from 'react'
import "../LangingScreen/Landing.css"
import mockup from "../../Assets/mockUps.png"
import { motion } from "framer-motion";


const Landing = () => {
  return (
    <div className='mainLanding'>
      <motion.div
        className="landingImg"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* <div className='landingImg'> */}
            <img src={mockup} alt="" />


        {/* </div> */}
      </motion.div>
        

    </div>
  )
}

export default Landing