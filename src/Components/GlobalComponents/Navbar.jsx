import "./Navbar.css";
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
    <nav className="navbar">
      <div className="navbar-container">

        {/* LEFT */}
        <ul className={`nav-left ${menuOpen ? "open" : ""}`}>
          <li><a onClick={() => handleClick("Home", "#home")} className={`nav-link ${activeLink==="Home"?"active":""}`}>Home</a></li>
          <li><a onClick={() => handleClick("About", "#about")} className={`nav-link ${activeLink==="About"?"active":""}`}>About</a></li>
          <li><a onClick={() => handleClick("Service", "#service")} className={`nav-link ${activeLink==="Service"?"active":""}`}>Service</a></li>
        </ul>

        {/* LOGO */}
        <div className="navbar-logo-wrapper">
          <Logo />
        </div>

        {/* RIGHT */}
        <ul className={`nav-right ${menuOpen ? "open" : ""}`}>
          <li><a onClick={() => handleClick("Resume", "#resume")} className={`nav-link ${activeLink==="Resume"?"active":""}`}>Resume</a></li>
          <li><a onClick={() => handleClick("Project", "#project")} className={`nav-link ${activeLink==="Project"?"active":""}`}>Project</a></li>
          <li><a onClick={() => handleClick("Contact", "#contact")} className={`nav-link ${activeLink==="Contact"?"active":""}`}>Contact</a></li>
        </ul>

        {/* HAMBURGER */}
        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;