import React from "react";
import styles from "./Hireme.module.css";
import WomenPointing from "/src/assets/hme.png";

export default function Hireme() {
  return (
    <section className={styles.hireSection} id="about">
      <div className={`${styles.container} ${styles.hireLayout}`}>
        
        <div className={styles.hireImageBlock}>
          <img
            src={WomenPointing}
            alt="Woman pointing"
            className={styles.hireImage}
          />
        </div>

        <div className={styles.hireContent}>
          <h2>
            Why <span>Hire me</span>?
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacus nunc, posuere in justo vulputate, bibendum sodales
          </p>

          <div className={styles.statGrid}>
            <div>
              <strong>450+</strong>
              <span>Project Completed</span>
            </div>
            <div>
              <strong>450+</strong>
              <span>Project Completed</span>
            </div>
          </div>

          <button className={styles.outlineBtn}>
            Hire me
          </button>
        </div>

      </div>
    </section>
  );
}