import { useState } from "react";
import "./MyService.css";

import backgroundImage from "../../assets/backgroundimage.jpg";
import aboveBg1 from "../../assets/abovebg1.png";
import aboveBg2 from "../../assets/abovebg2.png";
import aboveBg3 from "../../assets/abovebg3.png";

import webDesignCard from "../../assets/images/WEb Design Latest.png";
import landingPageCard from "../../assets/images/Landing Latest.png";
import uiUxCard from "../../assets/images/UI UX LATEST.png";
const cards = [
  { src: uiUxCard, alt: "UI UX Design", title: "UI/ UX Design" },
  { src: webDesignCard, alt: "Web Design", title: "Web Design" },
  { src: landingPageCard, alt: "Landing Page", title: "Landing Page" },
];

export default function MyServices() {
  const [sectionActive, setSectionActive] = useState(false);

  return (
    <section
      className={`my-services ${sectionActive ? "my-services--active" : ""}`}
      id="services"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onMouseEnter={() => setSectionActive(true)}
      onMouseLeave={() => setSectionActive(false)}
    >
      <div className="my-services__shapes-wrapper">
        <img
          src={aboveBg1}
          alt=""
          aria-hidden="true"
          className="my-services__shape my-services__shape--left"
        />

        <img
          src={aboveBg2}
          alt=""
          aria-hidden="true"
          className="my-services__shape my-services__shape--top"
        />

        <img
          src={aboveBg3}
          alt=""
          aria-hidden="true"
          className="my-services__shape my-services__shape--right"
        />
      </div>

      <div className="my-services__top">
        <h2 className="my-services__title">
          My <span>Services</span>
        </h2>

        <p className="my-services__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
          posuere in justo vulputate, bibendum sodales.
        </p>
      </div>

      <div className="my-services__cards">
        {cards.map((card) => (
          <div className="single-card-container" key={card.alt}>
            <div className="my-services__card-wrap">
              <div className="my-services__card-header-mask" />
              <div className="my-services__card-top-hover" />

              <div className="my-services__card-title-wrap">
                <h3 className="my-services__card-title">{card.title}</h3>
              </div>

              <div className="my-services__card-line" />

              <div className="my-services__card--zoom" aria-hidden="true">
                <div className="mockup-stack">
                  <div className="mockup-card rect-9" />
                  <div className="mockup-card rect-8" />
                  <img
                    src={card.src}
                    alt=""
                    className="mockup-card rect-7"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="my-services__card-arrow"
              aria-label={`Open ${card.title}`}
            >
              <svg
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-services__card-arrow-icon"
                aria-hidden="true"
              >
                <path
                  d="M21 51L51 21"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21H51V51"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="my-services__dots" aria-hidden="true">
        <span className="my-services__dot my-services__dot--active" />
        <span className="my-services__dot" />
        <span className="my-services__dot" />
        <span className="my-services__dot" />
      </div>
    </section>
  );
}
