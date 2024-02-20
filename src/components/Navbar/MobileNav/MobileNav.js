import React from "react";
import "./MobileNav.css";
// import Logo from "../../../assets/images/ad.jpeg";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="logos">AdiTya</div>

          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>{" "}
            </li>
            <li>
              <a className="menu-item">Work Experience</a>{" "}
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
