import React, { useState } from "react";
import './Hero.css'
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
    <>

      <div className="hero-section">
        <img src={Eclipse2} alt="Eclipse background" className="eclipse" />
        {/* left side text - testimonial */}
        <img
           src={Frame4Left}
          
          alt="Left side text"
          className={`frame4-left ${isHovered ? "hovered" : ""}`}
        />
        {/* right side text - 10 years experience */}
        <img
          src={Frame3}
          alt="Right side text"
          className={`frame3 ${isHovered ? "hovered" : ""}`}
        />
        
        {/* girl image */}
        <img
          src={girlImage}
          alt="Girl"
          className="girl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        {/* center text that disappears on hover - "Hello! I'm Jenny, Product Designer" */}
        <img
          src={Frame4}
          alt="Hello! I'm Jenny, Product Designer"
          className={`frame4 ${isHovered ? "hovered" : ""}`}
        />

        {/* doodle that appears on hover */}
        <img
          src={Doodle}
          alt="Doodle design"
          className={`doodle ${isHovered ? "visible" : ""}`}
        />

        {/* Vector 2 - decorative element at bottom left of Frame 4 text */}
        <img
          src={Vector2}
          alt="Decorative vector"
          className={`vector2 ${isHovered ? "hovered" : ""}`}
        />

        <div
          className="frame56-button"
          role="group"
          aria-label="Hero actions"
          onMouseLeave={() => setActiveCta("portfolio")}
        >
          {/* Portfolio button */}
          <button
            type="button"
            className={`hero-cta-button ${
              activeCta === "portfolio" ? "hero-cta-button--active" : ""
            }`}
            onMouseEnter={() => setActiveCta("portfolio")}
            onFocus={() => setActiveCta("portfolio")}
            onClick={() => scrollToTarget(".portfolio-sec")}
          >
            <span className="hero-cta-button__label">Portfolio</span>
            <span
              className={`hero-cta-button__arrow ${
                activeCta === "portfolio" ? "hero-cta-button__arrow--visible" : ""
              }`}
              aria-hidden="true"
            >
              <img src={arrowIcon} alt="" className="hero-cta-button__arrow-icon" />
            </span>
          </button>
        {/* Hire me button */}
          <button
            type="button"
            className={`hero-cta-button ${
              activeCta === "hire" ? "hero-cta-button--active" : ""
            }`}
            onMouseEnter={() => setActiveCta("hire")}
            onFocus={() => setActiveCta("hire")}
            onClick={() => scrollToTarget("#about")}
          >
            <span className="hero-cta-button__label">Hire me</span>
            <span
              className={`hero-cta-button__arrow ${
                activeCta === "hire" ? "hero-cta-button__arrow--visible" : ""
              }`}
              aria-hidden="true"
            >
              <img src={arrowIcon} alt="" className="hero-cta-button__arrow-icon" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
