import React from 'react'
import './Footer.css'
import Logo from "../GlobalComponents/Logo"
import Hire from "/src/assets/up right.svg"
import Mail0 from "/src/assets/send.svg"
import Facebook from "/src/assets/facebook.svg" 
import Youtube from "/src/assets/youtube.svg"
import Whatsapp from "/src/assets/whatsapp.svg" 
import Instagram from "/src/assets/instagram.svg" 
import Twitter from "/src/assets/Union.svg"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* top heading */}
        <div className="footer-top">
          <h1>Lets Connect there</h1>
          <button className="hire-btn">
            Hire me <span><img src={Hire} alt="" /></span>
          </button>
        </div>

        <div className="divider"></div>

        {/* middle section */}
        <div className="footer-middle">

          {/* column 1 */}
          <div className="footer-col about">
            <div className="logo">
             
              <Logo/>
             
              
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>

            <div className="social-icons">
              <img src={Facebook} alt="" />
              <img src={Youtube} alt="" />
              <img src={Whatsapp} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>

          {/* column 2 */}
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Resume</li>
              <li>Project</li>
            </ul>
          </div>

          {/* column 3 */}
          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li>+20 11 43 63 73 41</li>
              <li>fawzisayed1209@gmail.com</li>
              <li>fawziuiux.com</li>
            </ul>
          </div>

          {/* column 4 */}
          <div className="footer-col newsletter">
            <h3>Get the latest information</h3>
            <div className="email-box">
              <input type="email" placeholder="Email Address" />
              <button><img src={Mail0} alt="" /></button>
            </div>
          </div>

        </div>

        <div className="divider"></div>

        {/* bottom section */}
        <div className="footer-bottom">
          <p>Copyright© 2023 Fawziuiux. All Rights Reserved.</p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
