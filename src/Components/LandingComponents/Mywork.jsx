import React from "react";
import "./Mywork.css";

function Mywork() {
  return (
    <section className="mywork-root">
      <div className="mywork-section">
        <h1 className="mywork-title">
          My <span>Work Experience</span>
        </h1>

        <div className="mywork-timeline">

          <div className="mywork-row">
            <div className="mywork-left">
              <h2>Cognizant, Mumbai</h2>
              <p>Sep 2016 - July 2020</p>
            </div>
            
            <div className="mywork-circle-wrapper">
              <div className="mywork-circle-outer">
                <div className="mywork-circle-inner"></div>
              </div>
            </div>

            <div className="mywork-right">
              <h2>Experience Designer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="mywork-row">
            <div className="mywork-left">
              <h2>Sugee Pvt Limited, Mumbai</h2>
              <p>Sep 2020 - July 2023</p>
            </div>

            <div className="mywork-circle-wrapper">
              <div className="mywork-circle-outer dark">
                <div className="mywork-circle-inner"></div>
              </div>
            </div>

            <div className="mywork-right">
              <h2>UI/UX Designer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="mywork-row">
            <div className="mywork-left">
              <h2>Cinetstox, Mumbai</h2>
              <p>Sep 2023</p>
            </div>

            <div className="mywork-circle-wrapper">
              <div className="mywork-circle-outer">
                <div className="mywork-circle-inner"></div>
              </div>
            </div>

            <div className="mywork-right">
              <h2>Lead UX Designer</h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Mywork;