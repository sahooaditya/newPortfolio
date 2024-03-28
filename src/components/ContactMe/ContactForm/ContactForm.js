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
import CircularProgress from "@mui/material/CircularProgress";

const ContactForm = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const dbref = collection(db, "contact_details");

  const validateForm = () => {
    const errors = {};

    if (!first.trim()) {
      errors.first = "First name is required";
    }
    if (!last.trim()) {
      errors.last = "Last name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const add = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await addDoc(dbref, {
        First_name: first,
        Last_name: last,
        Email: email,
        Message: message,
      });
      setSuccessMessage("Successfully sent message");

      setTimeout(() => {
        setFirst("");
        setLast("");
        setEmail("");
        setMessage("");
        setSuccessMessage("");
        setIsLoading(false);
      }, 700);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message");
      setIsLoading(false);
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
          {errors.first && (
            <div
              style={{
                color: "orange",
                marginTop: "0.5rem",
                fontSize: "0.8rem",
              }}
            >
              {errors.first}
            </div>
          )}
        </div>
        <div className="name-container">
          <input
            type="text"
            name="last"
            value={last}
            placeholder="Last Name"
            onChange={(e) => setLast(e.target.value)}
          />
          {errors.last && (
            <div
              style={{
                color: "orange",
                marginTop: "0.5rem",
                fontSize: "0.8rem",
              }}
            >
              {errors.last}
            </div>
          )}
        </div>

        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <div
            style={{ color: "orange", marginTop: "-1rem", fontSize: "0.8rem" }}
          >
            {errors.email}
          </div>
        )}
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          value={message}
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && (
          <div
            style={{ color: "orange", marginTop: "-1rem", fontSize: "0.8rem" }}
          >
            {errors.message}
          </div>
        )}
        <button onClick={add}>
          {isLoading ? <CircularProgress size={24} /> : "SEND"}
        </button>
        {successMessage && (
          <div style={{ color: "green" }}>{successMessage}</div>
        )}
      </contact>
    </div>
  );
};

export default ContactForm;
