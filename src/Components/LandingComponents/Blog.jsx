import React from "react";
import "./Blog.css";

import Blog1 from "/src/assets/blog.jpg";
import Blog2 from "/src/assets/up right copy.svg";
import Blog3 from "/src/assets/blog2.png";
import Blog4 from "/src/assets/blog.png";

function Blog() {
  const cards = [Blog1, Blog3, Blog4];

  return (
    <>
      {/* HEADER */}
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

      {/* CARDS */}
      <section className="blogCardsSection">
        <div className="portfolioCardsWrapper">
          {cards.map((img, i) => (
            <div className="portfolioCardContainer" key={i}>
              <div className="portfolioCardShape">
                <img
                  src={img}
                  alt="Blog preview"
                  className="portfolioCardImage"
                />
              </div>

              <div className="portfolioCardArrow">
                <img src={Blog2} alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="blogSec">
        <div className="blogWrapper">
          {/* ITEM 1 */}
          <div className="blogItem">
            <div className="blogTag">UI/ UX Design</div>

            <div className="blogInfo">
              <span className="blogDot"></span>
              <span>Jayesh Patil</span>

              <span className="blogDot"></span>
              <span>10 Nov, 2023</span>
            </div>

            <h2 className="blogHeading">
              Design Unraveled: Behind the Scenes of UI/UX Magic
            </h2>
          </div>

          {/* ITEM 2 */}
          <div className="blogItem">
            <div className="blogTag">App Design</div>

            <div className="blogInfo">
              <span className="blogDot"></span>
              <span>Jayesh Patil</span>

              <span className="blogDot"></span>
              <span>09 Oct, 2023</span>
            </div>

            <h2 className="blogHeading">
              Sugee: Loan Management System for Rural Sector.
            </h2>
          </div>

          {/* ITEM 3 */}
          <div className="blogItem">
            <div className="blogTag">App Design</div>

            <div className="blogInfo">
              <span className="blogDot"></span>
              <span>Jayesh Patil</span>

              <span className="blogDot"></span>
              <span>13 Aug, 2023</span>
            </div>

            <h2 className="blogHeading">
              Cinetrade: Innovative way to invest in Digital Media
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;