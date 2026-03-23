// src/Components/GlobalComponents/Logo.jsx
import React, { useState } from "react";
import './Logo.css'
import Frame55 from "../../assets/Frame 55.svg";
import Typo from "../../assets/typo.svg";
import Frame4 from "../../assets/Frame 4 (2).svg";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>

      <div
        className="logo-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Frame 55 logo icon - imported from assets */}
        <img src={Frame55} alt="Logo Icon" className="logo-icon" />

        {/* Text container for swapping SVGs */}
        <div className="text-container">
          {/* JCREA text - imported from assets */}
          <img src={Typo} alt="JCREA" className="text-image jcrea-text" />

          {/* Made by Jayesh Patil - imported from assets */}
          <img
            src={Frame4}
            alt="Made by Jayesh Patil"
            className="text-image madeby-text"
          />
        </div>
      </div>
    </>
  );
};

export default Logo;
