import React, { useState } from "react";
import "./ContactForm.css";
import { db } from "../../../firebase";
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

const ContactForm = () => {
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const dbref = collection(db, "contact_details");

  const add = async () => {
    const adddata = await addDoc(dbref, {
      First_name: first,
      Last_name: last,
      Email: email,
      Message: message,
    });
    if (adddata) {
      alert("success full message send");
    } else {
      alert(" not send message");
    }
  };

  return (
    <div className="contact-form-content">
      <contact>
        <div className="name-container">
          <input
            type="text"
            name="first"
            placeholder="First Name"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <input
            type="text"
            name="last"
            value={last}
            placeholder="Last Name"
            onChange={(e) => setLast(e.target.value)}
          />
        </div>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          value={message}
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={add}>SEND</button>
      </contact>
    </div>
  );
};

export default ContactForm;
