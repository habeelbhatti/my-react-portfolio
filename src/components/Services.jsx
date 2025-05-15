import React from 'react';
import './Services.css'; // Custom CSS for styling

const Services = () => {
  return (
    <div className="services-container">
      {/* Landing Section */}
      <div className="services-landing">
        <h1 className="services-heading">My Professional Services</h1>
        <p className="services-description">
          I provide high-quality services in Full-Stack Development, Web Design, and more. My aim is to deliver innovative solutions that meet client expectations.
        </p>
      </div>

      {/* Services Cards */}
      <div className="services-cards">
        <div className="service-card">
          <i className="fas fa-code service-icon"></i>
          <h3 className="service-title">Web Development</h3>
          <p className="service-description">
            I create responsive and fast-loading websites using the latest technologies like React, Django, and Node.js.
          </p>
        </div>

        <div className="service-card">
          <i className="fas fa-database service-icon"></i>
          <h3 className="service-title">Backend Development</h3>
          <p className="service-description">
            I offer backend solutions using Python, Django, and SQL to build secure and scalable web applications.
          </p>
        </div>

        <div className="service-card">
          <i className="fas fa-mobile-alt service-icon"></i>
          <h3 className="service-title">App Development</h3>
          <p className="service-description">
            I build full-featured mobile applications for both iOS and Android using React Native.
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-info">Phone: <a href="tel:+923291069830" className="contact-link">03291069830</a></p>
        <p className="contact-info">Email: <a href="mailto:habeelbhatti980@gmail.com" className="contact-link">habeelbhatti980@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Services;
