import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./TechSupport.css";
import logo from "./logo1.png";
import Stats from './Stats';
import Testimonials from './Testimonials';
import Footer from './Footer';
import supportBanner from "./support-banner.png";

const TechSupport = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPricing, setOpenPricing] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const togglePricing = (index) => {
    setOpenPricing(openPricing === index ? null : index);
  };

  return (
    <div>
      <div className="top-info-bar">
        <div className="info-container">
          <span>
            <FaEnvelope className="email-icon" /> support@ex-am.com | <FaPhone className="phone-icon" /> +91 9665999900 (India) / 00027-11-1002598 (South Africa)
          </span>
          <button onClick={() => navigate("/demo")} className="btn btn-primary">
      Demo Exam
    </button>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="Exam Logo" />
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a onClick={() => handleNavigation('/ETS-1')}>HOME</a></li>
            <li><a onClick={() => handleNavigation('/about')}>ABOUT</a></li>
            <li><a onClick={() => handleNavigation('/tech-support')}>TECH SUPPORT</a></li>
            <li><a onClick={() => handleNavigation('/exam-price')}>EXAM PRICE</a></li>
            <li><a onClick={() => handleNavigation('/survey-price')}>SURVEY PRICE</a></li>
          </ul>
        </div>
      </nav>

      <div className="support-banner">
        <img src={supportBanner} alt="Technical Support" />
      </div>

      <div className="support-container">
        <div className="tech-support-form">
          <h2>Tech Support:</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Enter First Name" required />
              <input type="text" placeholder="Enter Last Name" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter Phone Number" required />
              <input type="email" placeholder="Enter Email Id" required />
            </div>
            <div className="form-group">
              <select required>
                <option>Select Your Need</option>
                <option>Technical Issue</option>
                <option>Billing Issue</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Add number own or write" required></textarea>
            </div>
            <button type="submit" className="submit-button">SEND MESSAGE</button>
          </form>
        </div>

        <div className="pricing-container">
          <h2>Pricing:</h2>
          <p>Exam Pricing List</p>
          {['Intern', 'Professional', 'Master', 'Expert', 'Chief'].map((level, index) => (
            <div key={index} className={`pricing-item ${openPricing === index ? "active" : ""}`} onClick={() => togglePricing(index)}>
              <span>{level}</span>
              {openPricing === index ? <FaMinus /> : <FaPlus />}
              {openPricing === index && (
                <div className="pricing-content">
                  <p>₹ 1100</p>
                  <p>100 Exams</p>
                  <p>1 Month Validity</p>
                  <p>Question banks upload facility</p>
                  <p>Ready-made question banks available</p>
                  <button className="apply-button">Terms & conditions apply</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

            <div className="contact-info-section">
        <div className="contact-card">
          <h3>India Operations</h3>
          <p><strong>IT-NetworkZ Infosystems Pvt. Ltd.</strong></p>
          <p>102/201 Akanksha Building, RPTS Rd, Laxmi Nagar,</p>
          <p>Nagpur – 22, India</p>
          <p>📞 +91 9665999900</p>
          <p>📠 +91 7276064645</p>
          <p>📧 <a href="mailto:contact@ex-am.com">contact@ex-am.com</a></p>
        </div>

        <div className="contact-card">
          <h3>International Operations</h3>
          <p><strong>Kavin SA Pty. Ltd.</strong></p>
          <p>21 - Bonaire Complex, Denise Street,</p>
          <p>Johannesburg – 2196, South Africa</p>
          <p>📞 +27 11- 2346183</p>
          <p>📠 0846933267</p>
          <p>📧 <a href="mailto:contact@kavin.co.za">contact@kavin.co.za</a></p>
        </div>
      </div>

      


      <div className="stats-section">
        <Stats />
      </div>

      <div className="testimonials-section">
        <Testimonials />
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default TechSupport;