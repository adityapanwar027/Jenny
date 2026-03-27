import React from "react";
import styles from "./Slider.module.css";
import star from "../../assets/Star 7 (1).svg";

function Slider() {
  return (
    <section className={styles.banner}>
      <div className={styles.whiteStrip}>
        <div className={styles.slideTrack}>

          {/* FIRST LOOP */}
          <div className={styles.slideText}>
            <img src={star} className={styles.star} alt="" />
            Wireframe
            <img src={star} className={styles.star} alt="" />
            User Research
            <img src={star} className={styles.star} alt="" />
            UX Design
            <img src={star} className={styles.star} alt="" />
            App Design
            <img src={star} className={styles.star} alt="" />
            Dashboard
          </div>

          {/* DUPLICATE FOR SMOOTH LOOP */}
          <div className={styles.slideText}>
            <img src={star} className={styles.star} alt="" />
            Wireframe
            <img src={star} className={styles.star} alt="" />
            User Research
            <img src={star} className={styles.star} alt="" />
            UX Design
            <img src={star} className={styles.star} alt="" />
            App Design
            <img src={star} className={styles.star} alt="" />
            Dashboard
          </div>

        </div>
      </div>
    </section>
  );
}

export default Slider;