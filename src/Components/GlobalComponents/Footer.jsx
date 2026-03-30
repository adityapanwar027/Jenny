import React from "react";
import styles from "./Footer.module.css";

import Logo from "../GlobalComponents/Logo";
import Hire from "/src/assets/up right.svg";
import Mail0 from "/src/assets/send.svg";
import Facebook from "/src/assets/facebook.svg";
import Youtube from "/src/assets/youtube.svg";
import Whatsapp from "/src/assets/whatsapp.svg";
import Instagram from "/src/assets/instagram.svg";
import Twitter from "/src/assets/Union.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <h1>Lets Connect there</h1>

          <button className={styles.hireBtn}>
            Hire me{" "}
            <span>
              <img src={Hire} alt="" />
            </span>
          </button>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.footerMiddle}>
          <div className={`${styles.footerCol} ${styles.about}`}>
            <div className={styles.logo}>
              <Logo />
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim.
            </p>

            <div className={styles.socialIcons}>
              <FaFacebook className={styles.icons}/>
              <FaYoutube className={styles.icons}/>
              <FaInstagram className={styles.icons}/>
              <FaTwitter className={styles.icons}/>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Resume</li>
              <li>Project</li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h3>Contact</h3>
            <ul>
              <li>+20 11 43 63 73 41</li>
              <li>fawzisayed1209@gmail.com</li>
              <li>fawziuiux.com</li>
            </ul>
          </div>

          <div className={`${styles.footerCol} ${styles.newsletter}`}>
            <h3>Get the latest information</h3>

            <div className={styles.emailBox}>
              <input type="email" placeholder="Email Address" />
              <button>
                <img src={Mail0} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.footerBottom}>
          <p>Copyright© 2023 Fawziuiux.</p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
