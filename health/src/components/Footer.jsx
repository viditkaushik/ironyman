import React from 'react';
import './Footer.css'; // Import the CSS for the Footer component

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a className="footer-link" href="#">For Patients</a>
          <a className="footer-link" href="#">For Providers</a>
          <a className="footer-link" href="#">Pricing</a>
          <a className="footer-link" href="#">About Us</a>
          <a className="footer-link" href="#">FAQs</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;