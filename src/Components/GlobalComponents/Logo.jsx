// src/Components/GlobalComponents/Logo.jsx
import React, { useState } from "react";
import Frame55 from "../../assets/Frame 55.svg";
import Typo from "../../assets/typo.svg";
import Frame4 from "../../assets/Frame 4 (2).svg";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{`
        .logo-container {
          display: flex;
          align-items: center;
          gap: 9px; /* 10% smaller from 10px */
          cursor: pointer;
          position: relative;
        }

        /* Frame 55 logo icon - always on left */
        .logo-icon {
          width: 28px;
          height: 35.5px; 
          object-fit: contain;
          transition: all 0.3s ease;
        }

        /* Text container for JCREA and Made by Jayesh Patil */
        .text-container {
          position: relative;
          width: 135px; /* 10% smaller from 150px */
          height: 31.5px; /* 10% smaller from 35px */
          overflow: hidden;
        }

        .text-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: left center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* JCREA text - visible by default */
        .jcrea-text {
          opacity: 1;
          transform: translateX(0);
        }

        /* Made by Jayesh Patil - hidden by default */
        .madeby-text {
          opacity: 0;
          transform: translateX(18px); /* 10% smaller from 20px */
        }

        /* On hover: JCREA fades out and slides left */
        .logo-container:hover .jcrea-text {
          opacity: 0;
          transform: translateX(-18px); /* 10% smaller from -20px */
        }

        /* On hover: Made by Jayesh Patil fades in from right */
        .logo-container:hover .madeby-text {
          opacity: 1;
          transform: translateX(0);
        }

        /* Optional: Scale effect on logo icon */
        .logo-container:hover .logo-icon {
          transform: scale(1.05);
        }
      `}</style>

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
