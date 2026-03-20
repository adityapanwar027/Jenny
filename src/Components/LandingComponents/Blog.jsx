import React from 'react'
import './Blog.css'
function Blog() {
  return (
<>

{/* Header */}
<section className="blogHeaderSection">
      <div className="blogHeaderContainer">
<div className="blogHeaderLeft">
          <h1>
            From my <br />
            blog post
          </h1>
        </div>
   <div className="blogHeaderRight">
   <button className="blogSeeBtn">See All</button>
        </div>
  </div>
 </section>

  {/* Card Section */}
{/* Card1 */}
   <div className="portfolioCardsWrapper">
 {/* Card 1 */}
  <div className="portfolioCardContainer">
    <div className="portfolioCardShape">
      <img src="/src/assets/blog.jpg" alt="" className="portfolioCardImage" />
    </div>
<div className="portfolioCardArrow">
  <img src="/src/assets/up right copy.svg" alt="" /> 
        <path d="M21 51L51 21" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21H51V51" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* </svg> */}
    </div>
  </div>
{/* Card 2 */}
  <div className="portfolioCardContainer">
    <div className="portfolioCardShape">
      <img src="/src/assets/blog2.png" alt="" className="portfolioCardImage" />
    </div>
<div className="portfolioCardArrow">
  <img src="/src/assets/up right copy.svg" alt="" /> 
        <path d="M21 51L51 21" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21H51V51" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* </svg> */}
    </div>
  </div>
{/* Card 3 */}
  <div className="portfolioCardContainer">
    <div className="portfolioCardShape">
      <img src="/src/assets/blog.png" alt="" className="portfolioCardImage" />
    </div>
<div className="portfolioCardArrow">
 <img src="/src/assets/up right copy.svg" alt="" /> 
        <path d="M21 51L51 21" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21H51V51" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      {/* </svg> */}
    </div>
  </div>
</div>

    {/* // section 2 of blog post */}
<section className="blogSec">
      <div className="blogWrapper">

       {/* bottom 1 */}
        <div className="blogItem">
          <div className="blogTag">UI/ UX Design</div>

          <div className="blogInfo">
            <span className="blogDot"></span>
            <span className="blogAuthor">Jayesh Patil</span>

            <span className="blogDot"></span>
            <span className="blogDate">10 Nov, 2023</span>
          </div>

          <h2 className="blogHeading">
            Design Unraveled: Behind the Scenes of UI/UX Magic
          </h2>
        </div>

     {/* bottom 2 */}
        <div className="blogItem">
          <div className="blogTag">App Design</div>

          <div className="blogInfo">
            <span className="blogDot"></span>
            <span className="blogAuthor">Jayesh Patil</span>

            <span className="blogDot"></span>
            <span className="blogDate">09 Oct, 2023</span>
          </div>

          <h2 className="blogHeading">
            Sugee: Loan Management System for Rural Sector.
          </h2>
        </div>

       {/* bottom 3 */}
        <div className="blogItem">
          <div className="blogTag">App Design</div>

          <div className="blogInfo">
            <span className="blogDot"></span>
            <span className="blogAuthor">Jayesh Patil</span>

            <span className="blogDot"></span>
            <span className="blogDate">13 Aug, 2023</span>
          </div>

          <h2 className="blogHeading">
            Cinetrade: Innovative way to invest in Digital Media
          </h2>
        </div>

      </div>
    </section>
    </>
  )
}

export default Blog