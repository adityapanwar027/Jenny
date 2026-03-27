import React from "react";
import styles from "./Mywork.module.css";

function Mywork() {
  return (
    <section className={styles["mywork-root"]}>
      <div className={styles["mywork-section"]}>
        <h1 className={styles["mywork-title"]}>
          My <span>Work Experience</span>
        </h1>

        <div className={styles["mywork-timeline"]}>

          <div className={styles["mywork-row"]}>
            <div className={styles["mywork-left"]}>
              <h2>Cognizant, Mumbai</h2>
              <p>Sep 2016 - July 2020</p>
            </div>

            <div className={styles["mywork-circle-wrapper"]}>
              <div className={styles["mywork-circle-outer"]}>
                <div className={styles["mywork-circle-inner"]}></div>
              </div>
            </div>

            <div className={styles["mywork-right"]}>
              <h2>Experience Designer</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className={styles["mywork-row"]}>
            <div className={styles["mywork-left"]}>
              <h2>Sugee Pvt Limited, Mumbai</h2>
              <p>Sep 2020 - July 2023</p>
            </div>

            <div className={styles["mywork-circle-wrapper"]}>
              <div className={`${styles["mywork-circle-outer"]} ${styles.dark}`}>
                <div className={styles["mywork-circle-inner"]}></div>
              </div>
            </div>

            <div className={styles["mywork-right"]}>
              <h2>UI/UX Designer</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className={styles["mywork-row"]}>
            <div className={styles["mywork-left"]}>
              <h2>Cinetstox, Mumbai</h2>
              <p>Sep 2023</p>
            </div>

            <div className={styles["mywork-circle-wrapper"]}>
              <div className={styles["mywork-circle-outer"]}>
                <div className={styles["mywork-circle-inner"]}></div>
              </div>
            </div>

            <div className={styles["mywork-right"]}>
              <h2>Lead UX Designer</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Mywork;