import React from 'react'
import styles from './Discuss.module.css'

import Mail from "/src/assets/sms.svg"
import Star from "/src/assets/star.svg"
import Awards from "/src/assets/star.svg"
import Product from "/src/assets/shield-tick.svg" 

function Discuss() {
  return (
    <div className={styles.discussRoot}>
      <div className={styles.discussCard}>

        <h1 className={styles.discussHeading}>
          Have an Awesome Project <br />
          Idea? <span>Let’s Discuss</span>
        </h1>

        <div className={styles.inputWrapper}>
          <div className={styles.inputBox}>

            <div className={styles.mail}>
              <img src={Mail} alt="" />
            </div>

            <input type="email" placeholder="Enter Email Address" />

            <button>Send</button>

          </div>
        </div>

        <div className={styles.stats}>
          <div>
            <img src={Star} alt="" />
            <span>4.9/5 Average Ratings</span>
          </div>

          <div>
            <img src={Awards} alt="" />
            <span>25+ Winning Awards</span>
          </div>

          <div>
            <img src={Product} alt="" />
            <span>Certified Product Designer</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Discuss