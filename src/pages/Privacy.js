import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Privacy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to [Foundation Name]. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.",
    },
    {
      title: "2. Information We Collect",
      content: (
        <>
          We may collect the following types of information:
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, etc.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, pages
              visited, etc.
            </li>
            <li>
              <strong>Cookies:</strong> Small data files stored on your device.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <>
          We use your information for the following purposes:
          <ul>
            <li>To provide and maintain our services.</li>
            <li>To improve your experience on our website.</li>
            <li>To communicate with you about updates and events.</li>
            <li>To process donations and contributions.</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Sharing Your Information",
      content: (
        <>
          We do not sell or rent your personal information to third parties.
          However, we may share your information with:
          <ul>
            <li>Service providers who assist us in operating our website.</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Data Security",
      content:
        "We implement industry-standard security measures to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.",
    },
    {
      title: "6. Your Rights",
      content: (
        <>
          You have the right to:
          <ul>
            <li>Access and update your personal information.</li>
            <li>Request deletion of your data.</li>
            <li>Opt-out of receiving communications from us.</li>
          </ul>
        </>
      ),
    },
    {
      title: "7. Cookies",
      content:
        "We use cookies to enhance your experience on our website. You can disable cookies in your browser settings, but this may affect the functionality of the website.",
    },
    {
      title: "8. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated 'Last Updated' date.",
    },
    {
      title: "9. Contact Us",
      content: (
        <>
          If you have any questions about this Privacy Policy, please contact us
          at:
          <div className="privacy-contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@foundation.org">privacy@foundation.org</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890">+123 456 7890</a>
            </p>
            <p>
              <strong>Address:</strong> 123 Foundation Street, City, Country
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div classname="screen-container">
        <Navbar />

        <div className="content">
          <div className="privacy-policy">
            <div className="privacy-header">
              <h1>Privacy Policy</h1>
              <span>
                Last Updated: <strong>October 30, 2023</strong>
              </span>
            </div>

            <div className="privacy-content">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`privacy-section ${
                    expandedSection === index ? "privacy-expanded" : ""
                  }`}
                  onClick={() => toggleSection(index)}
                >
                  <h2>
                    {section.title}
                    <span className="privacy-arrow">
                      {expandedSection === index ? "▲" : "▼"}
                    </span>
                  </h2>
                  {expandedSection === index && (
                    <div className="privacy-section-content">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
