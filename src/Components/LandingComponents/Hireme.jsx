import React from 'react'
import './Hireme.css'
import WomenPointing from "/src/assets/hme.png"
export default function Hireme() {
  return (
   <>
   
   <section className="section-gap hire-section" id="about">
        <div className="container hire-layout">
          <div className="hire-image-block">
            <img src={WomenPointing}alt="Woman pointing"className="hire-image"/>
          </div>

          <div className="hire-content">
            <h2>
              Why <span>Hire me</span>?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>

            <div className="stat-grid">
              <div>
                <strong>450+</strong>
                <span>Project Completed</span>
              </div>
              <div>
                <strong>450+</strong>
                <span>Project Completed</span>
              </div>
            </div>

            <button type="button" className="outline-btn">
              Hire me
            </button>
          </div>
        </div>
      </section>
   
   
   </>
  )
}
