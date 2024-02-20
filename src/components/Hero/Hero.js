import React from "react";
import "./Hero.css";
import Logo from "../../assets/images/Aditya.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <h2>React Fronted Developer</h2>
        <p>
          "Hello! 👋 I'm Aditya Kumar Sahu, a dedicated React.js developer with
          a proven track record of delivering high-quality and innovative web
          solutions. Over the past 2.7+ years, I've had the privilege of working
          on diverse projects, honing my skills in front-end development, and
          building robust, user-friendly applications.
          <b style={{ color: "#96b951" }}>
            {" "}
            I am actively seeking new job opportunities."
          </b>
        </p>
      </div>
      <div className="hero-img">
        <div>
          {/* <div className="tech-icon">
            <img src={js} alt="" />
          </div> */}
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
