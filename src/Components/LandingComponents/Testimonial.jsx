import React from "react";
import styles from "./Testimonial.module.css";

import Test0 from "../../assets/Vector 1.svg";
import Test1 from "../../assets/Vector (1).svg";
import Test2 from "../../assets/cardimg.png";
import Test3 from "../../assets/Star copy.svg";
import Profile from "../../assets/cardimg.png";

const testimonials = [
  {
    name: "Fawzi Sayed",
    role: "UI UX Designer",
    text: "Consectetur adipiscing elit. Sed congue interdum ligula a dignissim."
  },
  {
    name: "John Doe",
    role: "Frontend Developer",
    text: "Amazing work and smooth communication. Highly recommended."
  },
  {
    name: "Sarah Khan",
    role: "Product Designer",
    text: "Clean UI and great UX thinking."
  }
];

const allTestimonials = [...testimonials, ...testimonials];

function Testimonial() {
  return (
    <section className={styles["testimonials-section"]}>
      <div className={styles["ts-container"]}>

        {/* HEADER */}
        <div className={styles["ts-header"]}>
          <h2>
            <span className={styles["text-move"]}>Testimonials That</span>
            <img className={styles.vector1} src={Test0} alt="" />
            <br />
            Speak to <span>My Results</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* SLIDER */}
        <div className={styles["ts-slider"]}>
          <div className={styles["ts-cards"]}>

            {allTestimonials.map((item, i) => (
              <div className={styles["ts-card"]} key={i}>

                <div className={styles["ts-user"]}>
                  <img src={i % 3 === 0 ? Test2 : Profile} alt="user" />
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>

                <div className={styles["ts-rating"]}>
                  {[...Array(5)].map((_, idx) => (
                    <img key={idx} src={Test3} alt="" />
                  ))}
                  <span>5.0</span>
                </div>

                <p className={styles["ts-text"]}>{item.text}</p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonial;