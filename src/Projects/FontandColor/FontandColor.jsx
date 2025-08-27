import React from "react";
import "../FontandColor/FontandColor.css";
import colorFont from '../../Assets/ColorFont.png'

const FontandColor = () => {
  return (
    <div className="mainFC">
      <p>COLOR AND FONTS</p>
      <div className="colorFontImg">
        <img src={colorFont} alt="" />
      </div>
    </div>
  );
};

export default FontandColor;
