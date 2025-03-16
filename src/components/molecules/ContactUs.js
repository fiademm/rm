import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fy8v51r", // Replace with EmailJS Service ID
        "template_8ntj9ip", // Replace with EmailJS Template ID
        formData,
        "I4bYjUg1hgiojQOal" // Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          alert("Message sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="contact-container">
          <h2>Contact Us for Assistance</h2>
          <form onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
