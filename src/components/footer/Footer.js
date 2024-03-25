import React from 'react';
import './FooterStyles.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>React Project</h3>
        <p>This is a simple footer for a React project.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy;{new Date().getFullYear()} React Project - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
