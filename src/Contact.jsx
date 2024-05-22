import React from 'react';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, please feel free to reach out to us using the contact information below:</p>
        <div className="contact-info">
          <p>Email: contact@ravianai.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div className="social-links">
          <a href="https://twitter.com/ravianai" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://www.facebook.com/ravianai" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.linkedin.com/company/ravianai" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
