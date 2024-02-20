import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  const handleIconClick = () => {
    if (text.startsWith("http")) {
      window.open(text, "_blank");
    } else {
      window.location.href = `mailto:${text}`;
    }
  };
  return (
    <div className="contact-details-card" onClick={handleIconClick}>
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p style={{ cursor: "pointer" }}>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
