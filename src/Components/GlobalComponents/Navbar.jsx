import styles from "./Navbar.module.css";
import { useState } from "react";
import Logo from "../GlobalComponents/Logo";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section, id) => {
    setActiveLink(section);
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* LEFT */}
          <ul className={`${styles.navLeft} ${menuOpen ? styles.open : ""}`}>
            <li>
              <a
                onClick={() => handleClick("Home", "#home")}
                className={`${styles.navLink} ${activeLink === "Home" ? styles.active : ""}`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                onClick={() => handleClick("About", "#about")}
                className={`${styles.navLink} ${activeLink === "About" ? styles.active : ""}`}
              >
                About
              </a>
            </li>

            <li>
              <a
                onClick={() => handleClick("Service", "#service")}
                className={`${styles.navLink} ${activeLink === "Service" ? styles.active : ""}`}
              >
                Service
              </a>
            </li>
          </ul>

          {/* LOGO */}
          <div className={styles.navbarLogoWrapper}>
            <Logo />
          </div>

          {/* RIGHT */}
          <ul className={`${styles.navRight} ${menuOpen ? styles.open : ""}`}>
            <li>
              <a
                onClick={() => handleClick("Resume", "#resume")}
                className={`${styles.navLink} ${activeLink === "Resume" ? styles.active : ""}`}
              >
                Resume
              </a>
            </li>

            <li>
              <a
                onClick={() => handleClick("Project", "#project")}
                className={`${styles.navLink} ${activeLink === "Project" ? styles.active : ""}`}
              >
                Project
              </a>
            </li>

            <li>
              <a
                onClick={() => handleClick("Contact", "#contact")}
                className={`${styles.navLink} ${activeLink === "Contact" ? styles.active : ""}`}
              >
                Contact
              </a>
            </li>
          </ul>
        {/* HAMBURGER */}
        <div
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleActive : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
