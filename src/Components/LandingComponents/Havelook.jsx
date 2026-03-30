import React from "react";
import { FiArrowUpRight } from "react-icons/fi"; // react-icons arrow
import styles from "./Havelook.module.css";

import Project0 from "/src/assets/look.png";

function Havelook() {
  return (
    <section className={styles.portfolioSec}>
      <div className={styles.portfolioContainer}>

        {/* Top */}
        <div className={styles.portfolioTop}>
          <h1 className={styles.portfolioTitle}>
            Lets have a look at <br />
            my <span>Portfolio</span>
          </h1>
          <button className={styles.portfolioSeeall}>See All</button>
        </div>

        {/* Cards */}
        <div className={styles.portfolioSlider}>
          {[1, 2].map((_, i) => (
            <div className={styles.portfolioCard} key={i}>
              <img src={Project0} alt="project" />
              <button className={styles.portfolioCardArrow}>
                <FiArrowUpRight size="1.2em" color="white" />
              </button>

              <h2 className={styles.cardTitle}>Lirante</h2>

              <div className={styles.portfolioCardOverlay}>
                <div className={styles.portfolioGlassFull}>
                  <h2>Lirante</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed congue interdum ligula a dignissim.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.portfolioDots}>
          <span className={styles.active}></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Tags */}
        <div className={styles.portfolioTags}>
          <span>Landing Page</span>
          <span>Product Design</span>
          <span>Animation</span>
          <span>Glassmorphism</span>
          <span>Cards</span>
        </div>

        {/* Bottom */}
        <div className={styles.portfolioBottom}>
          <h2>
            Lirante - Food Delivery Solution
            <span className={styles.portfolioBottomArrow}>
              <FiArrowUpRight size="1.2em" color="white" />
            </span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed congue interdum ligula a dignissim.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Havelook;