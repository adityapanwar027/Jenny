import React from 'react'
import './Slider.css'

function Slider() {
  return (
    <section className="banner">
      <div className="white-strip">
        <div className="slide-track">
          <div className="slide-text">
            <img src="/src/assets/Star 7 (1).svg" alt="" /> Wireframe 
            <span><img src="/src/assets/Star 7 (1).svg" alt="" /></span> User Research 
            <span><img src="/src/assets/Star 7 (1).svg" alt="" /></span> UX Design 
            <span><img src="/src/assets/Star 7 (1).svg" alt="" /></span> App Design 
            <span><img src="/src/assets/Star 7 (1).svg" alt="" /></span> Dashboard
          </div>
                  {/* copy the cards for animation */}
          <div className="slide-text">
            <img src="/src/assets/Star 7 (1).svg" alt="" /> Wireframe 
            <span><img src="/src/assets/Star 7 (1).svg" alt="" /></span> User Research 
            <span><img src="/src/assets/Star 7 (1).svg" alt="" /></span> UX Design 
            <span><img src="/src/assets/Star 7 (1).svg" alt="" /></span> App Design 
            <span><img src="/src/assets/Star 7 (1).svg" alt="" /></span> Dashboard
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
