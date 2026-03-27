import React, { useState } from "react";
import styles from "./Hero.module.css";

import Eclipse2 from "/Frames/Ellipse 2.svg";
import Frame4 from "/Frames/Frame 4.svg";
import Frame3 from "/Frames/Frame 3.svg";
import Frame4Left from "/Frames/Frame 4 (1).svg";
import Doodle from "/Frames/Frame 68 (1).svg";
import Vector2 from "/Frames/Vector 2.svg";
import arrowIcon from "../../assets/myservices/up right.png";

const girlImage =
  "/Frames/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 2.png";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCta, setActiveCta] = useState("portfolio");

  const scrollToTarget = (selector) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.heroSection}>

      <img src={Eclipse2} className={styles.eclipse} alt="" />

      <img
        src={Frame4Left}
        className={`${styles.frame4Left} ${
          isHovered ? styles.frame4LeftHovered : ""
        }`}
        alt=""
      />

      <img
        src={Frame3}
        className={`${styles.frame3} ${
          isHovered ? styles.frame3Hovered : ""
        }`}
        alt=""
      />

      <img
        src={girlImage}
        className={styles.girl}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        alt=""
      />

      <img
        src={Frame4}
        className={`${styles.frame4} ${
          isHovered ? styles.frame4Hovered : ""
        }`}
        alt=""
      />

      <img
        src={Doodle}
        className={`${styles.doodle} ${
          isHovered ? styles.doodleVisible : ""
        }`}
        alt=""
      />

      <img
        src={Vector2}
        className={`${styles.vector2} ${
          isHovered ? styles.vector2Hovered : ""
        }`}
        alt=""
      />

      {/* CTA */}
      <div
        className={styles.frame56Button}
        onMouseLeave={() => setActiveCta("portfolio")}
      >
        <button
          className={`${styles.heroCtaButton} ${
            activeCta === "portfolio" ? styles.heroCtaButtonActive : ""
          }`}
          onMouseEnter={() => setActiveCta("portfolio")}
          onClick={() => scrollToTarget(".portfolio-sec")}
        >
          <span className={styles.heroCtaButtonLabel}>Portfolio</span>

          <span
            className={`${styles.heroCtaArrow} ${
              activeCta === "portfolio" ? styles.heroCtaArrowVisible : ""
            }`}
          >
            <img src={arrowIcon} className={styles.heroCtaArrowIcon} alt="" />
          </span>
        </button>

        <button
          className={`${styles.heroCtaButton} ${
            activeCta === "hire" ? styles.heroCtaButtonActive : ""
          }`}
          onMouseEnter={() => setActiveCta("hire")}
          onClick={() => scrollToTarget("#about")}
        >
          <span className={styles.heroCtaButtonLabel}>Hire me</span>

          <span
            className={`${styles.heroCtaArrow} ${
              activeCta === "hire" ? styles.heroCtaArrowVisible : ""
            }`}
          >
            <img src={arrowIcon} className={styles.heroCtaArrowIcon} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;