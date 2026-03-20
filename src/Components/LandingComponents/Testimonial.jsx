import React from 'react'
import './Testimonial.css'
function Testimonial() {
  return (
    <>
    
 <section className="testimonials-section">
      <div className="ts-container">
        <div className="ts-header">
          <h2>
            <span className='text-move'>Testimonials That</span>
            <img className='vector1'  src="/src/assets/Vector 1.svg" alt=""/> 
            <br />
            Speak to <span>My Results</span>
          </h2>
          <img className='statr1'  src="/src/assets/Vector (1).svg" alt="" /> 
          <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius exercitationem quidemiure 
           at, voluptates saepe similique! Ipsa, cupiditate explicabo, quae 
           asperiores iure ratione
           quis qui tempore, omnis in at cumque!
           <img className='statr2'  src="/src/assets/Vector (1).svg" alt="" />

          </p>
        </div>

        <div className="ts-slider">
          <div className="ts-cards">
            {/* Original 3 cards */}
            <div className="ts-card">
              <div className="ts-user">
                <img src="/src/assets/cardimg.png" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
                <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
            <div className="ts-card">
              <div className="ts-user">
                <img src="/src/assets/cardimg.png" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">
               <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
                <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
            <div className="ts-card">
              <div className="ts-user">
                <img src="/src/assets/cardimg.png" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">
               <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
                <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>

            {/* Duplicate same 3 cards for infinite scroll */}
            <div className="ts-card">
              <div className="ts-user">
                <img src="/src/assets/cardimg.png" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
                <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
            <div className="ts-card">
              <div className="ts-user">
                <img src="/src/assets/cardimg.png" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">
               <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
                <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
            <div className="ts-card">
              <div className="ts-user">
                <img src="/src/assets/cardimg.png" alt="user" />
                <div>
                  <h4>Fawzi Sayed</h4>
                  <span>UI UX Designer</span>
                </div>
              </div>
              <div className="ts-rating">
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
              <img src="/src/assets/Star copy.svg" alt="" />
                <span>5.0</span></div>
              <p className="ts-text">Consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
  
}

export default Testimonial
