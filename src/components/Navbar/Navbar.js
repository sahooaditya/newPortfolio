import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/images/ad.jpeg";
import MobileNav from "./MobileNav/MobileNav";
import resumePDF from "../../assets/images/AdityaKumarSahu(update resume1).pdf";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.setAttribute("download", "AdityaKumarSahu_resume.pdf"); // Adjusted file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper ">
        <div className="nav-content">
          <div className="logo">AdiTya</div>

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
            <button className="contact-btn" onClick={handleDownload}>
              {" "}
              Hire Me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span style={{ fontSize: "1.8rem" }}>
              {openMenu ? <CloseIcon /> : <MenuIcon />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
