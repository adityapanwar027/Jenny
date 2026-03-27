import React from "react";
import styles from "./Blog.module.css";

import Blog1 from "/src/assets/blog.jpg";
import Blog2 from "/src/assets/up right copy.svg";
import Blog3 from "/src/assets/blog2.png";
import Blog4 from "/src/assets/blog.png";

function Blog() {
  const cards = [Blog1, Blog3, Blog4];

  return (
    <>
      {/* HEADER */}
      <section className={styles.blogHeaderSection}>
        <div className={styles.blogHeaderContainer}>
          <div className={styles.blogHeaderLeft}>
            <h1>
              From my <br />
              blog post
            </h1>
          </div>

          <div>
            <button className={styles.blogSeeBtn}>See All</button>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className={styles.blogCardsSection}>
        <div className={styles.portfolioCardsWrapper}>
          {cards.map((img, i) => (
            <div className={styles.portfolioCardContainer} key={i}>
              <div className={styles.portfolioCardShape}>
                <img
                  src={img}
                  alt="Blog preview"
                  className={styles.portfolioCardImage}
                />
              </div>

              <div className={styles.portfolioCardArrow}>
                <img src={Blog2} alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG LIST */}
      <section className={styles.blogSec}>
        <div className={styles.blogWrapper}>

          <div className={styles.blogItem}>
            <div className={styles.blogTag}>UI/ UX Design</div>

            <div className={styles.blogInfo}>
              <span className={styles.blogDot}></span>
              <span>Jayesh Patil</span>

              <span className={styles.blogDot}></span>
              <span>10 Nov, 2023</span>
            </div>

            <h2 className={styles.blogHeading}>
              Design Unraveled: Behind the Scenes of UI/UX Magic
            </h2>
          </div>

          <div className={styles.blogItem}>
            <div className={styles.blogTag}>App Design</div>

            <div className={styles.blogInfo}>
              <span className={styles.blogDot}></span>
              <span>Jayesh Patil</span>

              <span className={styles.blogDot}></span>
              <span>09 Oct, 2023</span>
            </div>

            <h2 className={styles.blogHeading}>
              Sugee: Loan Management System for Rural Sector.
            </h2>
          </div>

          <div className={styles.blogItem}>
            <div className={styles.blogTag}>App Design</div>

            <div className={styles.blogInfo}>
              <span className={styles.blogDot}></span>
              <span>Jayesh Patil</span>

              <span className={styles.blogDot}></span>
              <span>13 Aug, 2023</span>
            </div>

            <h2 className={styles.blogHeading}>
              Cinetrade: Innovative way to invest in Digital Media
            </h2>
          </div>

        </div>
      </section>
    </>
  );
}

export default Blog;