import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firsename" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="Enter your Email" />
        <textarea type="text" name="message" placeholder="Message" rows={3} />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
