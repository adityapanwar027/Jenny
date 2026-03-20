import React from 'react'
import './Discuss.css'

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
              <img src="/src/assets/sms.svg" alt="" />
            </div>
            <input type="email" placeholder="Enter Email Address" />
            <button>Send</button>
          </div>
        </div>

        <div className="stats">
          <div>
            <img src="/src/assets/star.svg" alt="" />
            <span>4.9/5 Average Ratings</span>
          </div>
          <div>
            <img src="/src/assets/award.svg" alt="" />
            <span>25+ Winning Awards</span>
          </div>
          <div>
            <img src="/src/assets/shield-tick.svg" alt="" />
            <span>Certified Product Designer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discuss
