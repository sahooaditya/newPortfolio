import React from "react";
import "./Hero.css";
import Logo from "../../assets/images/Aditya.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={js} alt="" />
          </div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src={html} alt="" />
          </div>
          <div className="tech-icon">
            <img src={css} alt="" />
          </div>
          <div className="tech-icon">
            <img src={js} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
