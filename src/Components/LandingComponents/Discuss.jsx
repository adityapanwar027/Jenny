import React from 'react'
import './Discuss.css'
import Mail from "/src/assets/sms.svg"
import Star from "/src/assets/star.svg"
import Awards from "/src/assets/star.svg"
import Product from "/src/assets/shield-tick.svg" 
function Discuss() {
  return (
    <div className="discuss-root">
      <div className="discuss-card">
        <h1 className="discuss-heading">
          Have an Awesome Project <br />
          Idea? <span>Let’s Discuss</span>
        </h1>

        <div className="input-wrapper">
          <div className="input-box">
            <div className="mail">
              <img src={Mail} alt="" />
            </div>
            <input type="email" placeholder="Enter Email Address" />
            <button>Send</button>
          </div>
        </div>

        <div className="stats">
          <div>
            <img src={Star} alt="" />
            <span>4.9/5 Average Ratings</span>
          </div>
          <div>
            <img src={Awards} alt="" />
            <span>25+ Winning Awards</span>
          </div>
          <div>
            <img src={Product}alt="" />
            <span>Certified Product Designer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discuss
