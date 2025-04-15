import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronRight
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import logo from './logo1.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="footer-waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Ex-am Logo" className="footer-logo" />
          <p className="footer-description">
            Leading online examination platform providing secure and reliable assessment solutions worldwide.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><FaFacebookF /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaLinkedinIn /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <FaChevronRight className="link-icon" />
              <a onClick={() => handleNavigation('/about')} style={{ cursor: 'pointer' }}>
                About Us
              </a>
            </li>
            <li><FaChevronRight className="link-icon" /><a href="#">Services</a></li>
            <li><FaChevronRight className="link-icon" /><a href="#">Pricing</a></li>
            <li><FaChevronRight className="link-icon" /><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><FaChevronRight className="link-icon" /><a href="#">Online Exams</a></li>
            <li><FaChevronRight className="link-icon" /><a href="#">Remote Proctoring</a></li>
            <li><FaChevronRight className="link-icon" /><a href="#">Result Analysis</a></li>
            <li><FaChevronRight className="link-icon" /><a href="#">Custom Solutions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p><FaEnvelope className="contact-icon" /> support@ex-am.com</p>
            <p><FaPhone className="contact-icon" /> +91 9665999900 (India)</p>
            <p className="indent">00027-11-1002598 (South Africa)</p>
            <p><FaMapMarkerAlt className="contact-icon" /> 123 Business Avenue, Tech Park</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;