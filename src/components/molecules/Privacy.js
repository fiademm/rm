

import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Privacy = () => {
  return (
    <>
      <div classname="screen-container">
        <Navbar />
        <div className="privacy-policy">
          <div className="privacy-header">
            <h1>Privacy Policy</h1>
            <p>
              Last Updated: <strong>October 30, 2023</strong>
            </p>
          </div>

          <div className="privacy-content">
            <section className="privacy-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to <strong>[Foundation Name]</strong>. We are committed
                to protecting your privacy and ensuring that your personal
                information is handled in a safe and responsible manner. This
                Privacy Policy outlines how we collect, use, and protect your
                information when you visit our website.
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, etc.
                </li>
                <li>
                  <strong>Usage Data:</strong> IP address, browser type, pages
                  visited, etc.
                </li>
                <li>
                  <strong>Cookies:</strong> Small data files stored on your
                  device.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>To provide and maintain our services.</li>
                <li>To improve your experience on our website.</li>
                <li>To communicate with you about updates and events.</li>
                <li>To process donations and contributions.</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>4. Sharing Your Information</h2>
              <p>
                We do not sell or rent your personal information to third
                parties. However, we may share your information with:
              </p>
              <ul>
                <li>
                  Service providers who assist us in operating our website.
                </li>
                <li>Legal authorities if required by law.</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your
                information from unauthorized access, alteration, or
                destruction. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </section>

            <section className="privacy-section">
              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and update your personal information.</li>
                <li>Request deletion of your data.</li>
                <li>Opt-out of receiving communications from us.</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>7. Cookies</h2>
              <p>
                We use cookies to enhance your experience on our website. You
                can disable cookies in your browser settings, but this may
                affect the functionality of the website.
              </p>
            </section>

            <section className="privacy-section">
              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated "Last Updated" date.
              </p>
            </section>

            <section className="privacy-section">
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="privacy-contact-info">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@foundation.org">
                    privacy@foundation.org
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+1234567890">+123 456 7890</a>
                </p>
                <p>
                  <strong>Address:</strong> 123 Foundation Street, City, Country
                </p>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;