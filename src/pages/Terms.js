import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By using this website, you confirm that you are at least 18 years old or have the legal capacity to enter into a binding agreement. You also agree to comply with all applicable laws and regulations.",
    },
    {
      title: "2. Use of the Website",
      content: (
        <>
          The content on this website is for general information and use only.
          It is subject to change without notice. You agree to use the website
          only for lawful purposes and in a way that does not infringe the
          rights of others or restrict their use of the website.
          <h3>Prohibited Activities Include:</h3>
          <ul>
            <li>Using the website for any illegal or unauthorized purpose.</li>
            <li>
              Attempting to gain unauthorized access to the website or its
              systems.
            </li>
            <li>
              Uploading or transmitting harmful or malicious content (e.g.,
              viruses, malware).
            </li>
            <li>
              Engaging in any activity that disrupts or interferes with the
              website's functionality.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Intellectual Property",
      content:
        "All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of [Foundation Name] or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or modify any content without prior written consent from [Foundation Name].",
    },
    {
      title: "4. Donations and Contributions",
      content: (
        <>
          If you choose to make a donation or contribution through this website:
          <ul>
            <li>
              You agree to provide accurate and complete payment information.
            </li>
            <li>Donations are non-refundable unless otherwise stated.</li>
            <li>
              [Foundation Name] reserves the right to refuse or cancel any
              donation at its discretion.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "5. Privacy Policy",
      content:
        "Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using this website, you consent to the practices described in the Privacy Policy.",
    },
    {
      title: "6. Third-Party Links",
      content:
        "This website may contain links to third-party websites. These links are provided for your convenience only. [Foundation Name] does not endorse or assume responsibility for the content, privacy policies, or practices of any third-party websites. Accessing these links is at your own risk.",
    },
    {
      title: "7. Disclaimer of Warranties",
      content:
        "This website is provided 'as is' and 'as available' without any warranties, express or implied. [Foundation Name] does not guarantee that the website will be error-free, secure, or uninterrupted. Your use of the website is at your own risk.",
    },
    {
      title: "8. Limitation of Liability",
      content:
        "To the fullest extent permitted by law, [Foundation Name] and its affiliates, officers, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of this website.",
    },
    {
      title: "9. Indemnification",
      content:
        "You agree to indemnify and hold harmless [Foundation Name], its affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of or related to your use of the website or violation of these Terms and Conditions.",
    },
    {
      title: "10. Changes to Terms and Conditions",
      content:
        "[Foundation Name] reserves the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website after any changes constitutes your acceptance of the revised terms.",
    },
    {
      title: "11. Governing Law",
      content:
        "These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising out of or related to these terms shall be resolved exclusively in the courts of [Your Country/State].",
    },
    {
      title: "12. Contact Information",
      content: (
        <>
          If you have any questions about these Terms and Conditions, please
          contact us at:
          <div className="terms-contact-info">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@foundation.org">info@foundation.org</a>
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
          <div className="terms-and-conditions">
            <div className="terms-header">
              <h1>Terms and Conditions</h1>
              <span>
                Last Updated: <strong>October 30, 2023</strong>
              </span>
            </div>

            <div className="terms-content">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`terms-section ${
                    expandedSection === index ? "expanded" : ""
                  }`}
                  onClick={() => toggleSection(index)}
                >
                  <h2>
                    {section.title}
                    <span className="terms-arrow">
                      {expandedSection === index ? "▲" : "▼"}
                    </span>
                  </h2>
                  {expandedSection === index && (
                    <div className="terms-section-content">
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

export default Terms;
