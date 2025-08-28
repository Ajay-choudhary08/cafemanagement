import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
          {/* Cafe Info */}
          <div className="footer-section">
            <h2 className="footer-logo">☕ My Cafe</h2>
            <p>
              Serving Happiness in Every Cup. Freshly brewed coffee and delicious bites made with love ❤
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123, Main Street, Indore</p>
            <p><i className="fas fa-phone"></i> ‪+91 98765 43210‬</p>
            <p><i className="fas fa-envelope"></i> mycafe@gmail.com</p>
          </div>

          {/* Opening Hours */}
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <p>Mon - Sat: 9:00 AM - 10:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 My Cafe. All Rights Reserved.
        </div>
      </footer>
  )
}
export default Footer
