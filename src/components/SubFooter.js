import React from "react";

const SubFooter = () => {
  return (
    <footer className="sub-footer-container">
      <div className="sub-footer-content">
        <div className="sub-footer-contact-info">
          <h3>Contact Us</h3>

          <div className="sub-footer-contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <p>
                <a href="tel:+233302520769">+233 30 252 0769</a>
              </p>
              <p>
                <a href="tel:+233554467866">+233 554 467 866</a>
              </p>
            </div>
          </div>

          <div className="sub-footer-contact-item">
            <i className="fas fa-envelope"></i>
            <p>
              <a href="mailto:rmf@gmail.com">rmf@gmail.com</a>
            </p>
          </div>

          <div className="sub-footer-contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              Development Challenge (DC)
              <br />
              #10 Accam Str
              <br />
              Adjiringanor-Accra
            </p>
          </div>

          <div className="sub-footer-contact-item" style={{ display: "none" }}>
            <i className="fas fa-clock"></i>
            <div>
              <p>
                <strong>Operating Hours:</strong>
              </p>
              <p>Monday-Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="sub-footer-map-container">
          <iframe
            title="Development Challenge "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4687395721735!2d-0.1423636!3d5.6451115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf84a83282e0b5%3A0x737102957cc873e1!2sDevelopment%20Challenge!5e0!3m2!1sen!2sgh!4v1743427551789!5m2!1sen!2sgh"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default SubFooter;
