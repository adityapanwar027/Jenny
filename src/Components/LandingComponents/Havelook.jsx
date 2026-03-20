import React from "react";
import "./Havelook.css";
import Project1 from "/src/assets/arrow.svg"
import Project0 from "/src/assets/look.png"
import Project3 from "/src/assets/up right.svg"
function Havelook() {
  return (
    <>
      <section className="portfolio-sec">
        <div className="portfolio-container">
          {/* Top Heading */}
          <div className="portfolio-top">
            <h1 className="portfolio-title">
              Lets have a look at <br />
              my <span>Portfolio</span>
            </h1>

            <button className="portfolio-seeall">See All</button>
          </div>

          {/* Slider Images */}
          <div className="portfolio-slider">
            {/* CARD 1 */}
            <div className="portfolio-card">
              <img src={Project0} alt="project" />

              <button className="portfolio-card-arrow"><img src={Project1} alt="" /></button>
              <h2
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  fontSize: "70px",
                  color: "white",
                  zIndex: 2,
                  fontFamily: "'Lufga', sans-serif",
                }}
              >
                Lirante
              </h2>
              {/* Glass Hover Overlay */}
              <div className="portfolio-card-overlay">
                <div className="portfolio-glass-full">
                  <h2>Lirante</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    congue interdum ligula a dignissim. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed lobortis orci
                    elementum egestas lobortis.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="portfolio-card">
              <img src={Project0} alt="project" />

              <button className="portfolio-card-arrow"><img src={Project1} alt="" /></button>
              <h2
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  fontSize: "70px",
                  color: "white",
                  zIndex: 2,
                  fontFamily: "'Lufga', sans-serif",
                }}
              >
                Lirante
              </h2>
              <div className="portfolio-card-overlay">
                <div className="portfolio-glass-full">
                  <h2>Lirante</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    congue interdum ligula a dignissim. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Sed lobortis orci
                    elementum egestas lobortis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="portfolio-dots">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Categories */}
          <div className="portfolio-tags">
            <span>Landing Page</span>
            <span>Product Design</span>
            <span>Animation</span>
            <span>Glassmorphism</span>
            <span>Cards</span>
          </div>

          {/* Bottom Content */}
          <div className="portfolio-bottom">
            <h2>
              Lirante - Food Dilvery Solution
              <span className="portfolio-bottom-arrow"><img src={Project3}alt="" /></span>
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Havelook;
