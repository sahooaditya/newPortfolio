import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import EmailIcon from "@mui/icons-material/Email";
import ContactForm from "./ContactForm/ContactForm";
import email from "../../assets/images/email.png";
import git from "../../assets/images/git.png";

const ContactMe = () => {
  return (
    <section className="contact-container" id="contact">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={email} text="sahooaditya370@gmail.com" />
          <ContactInfoCard
            iconUrl={git}
            text="https://github.com/sahooaditya"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
