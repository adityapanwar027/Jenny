import React from "react";
import styles from "./Logo.module.css";

import Frame55 from "../../assets/Frame 55.svg";
import Typo from "../../assets/typo.svg";
import Frame4 from "../../assets/Frame 4 (2).svg";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      
      <img
        src={Frame55}
        alt="Logo Icon"
        className={styles.logoIcon}
      />

      <div className={styles.textContainer}>
        
        <img
          src={Typo}
          alt="JCREA"
          className={`${styles.textImage} ${styles.jcreaText}`}
        />

        <img
          src={Frame4}
          alt="Made by Jayesh Patil"
          className={`${styles.textImage} ${styles.madebyText}`}
        />

      </div>
    </div>
  );
};

export default Logo;