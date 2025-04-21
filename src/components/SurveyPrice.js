import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./ExamPrice.css";
import logo from "./logo1.png";
import Stats from './Stats';
import Testimonials from './Testimonials';
import Footer from './Footer';
import aboutBanner from "./survey-banner.png";

const SurveyPrice = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      {/* Top Info Bar */}
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

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="Exam Logo" />
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a onClick={() => handleNavigation('/ETS-1')}>HOME</a></li>
            <li><a onClick={() => handleNavigation('/about')}>ABOUT</a></li>
            <li><a onClick={() => handleNavigation('/tech-support')}>TECH SUPPORT</a></li>
            <li><a onClick={() => handleNavigation('/exam-price')}>EXAM PRICE</a></li>
            <li><a onClick={() => handleNavigation('/survey-price')}>SURVEY PRICE</a></li>
          </ul>
        </div>
      </nav>

      {/* About Banner */}
      <div className="about-banner">
        <img src={aboutBanner} alt="Survey Price Banner" />
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <div className="pricing-card">
          <h3>BASIC</h3>
          <ul>
            <li>₹ 2500</li>
            <li>500 Survey Responses</li>
            <li>3 Months Validity</li>
            <li>Basic Question Types</li>
            <li>Email Support</li>
            <li>Basic Analytics</li>
          </ul>
          <button className="pay-now">PAY NOW</button>
        </div>

        <div className="pricing-card">
          <h3>STANDARD</h3>
          <ul>
            <li>₹ 7500</li>
            <li>2000 Survey Responses</li>
            <li>6 Months Validity</li>
            <li>Advanced Question Types</li>
            <li>Priority Support</li>
            <li>Advanced Analytics</li>
          </ul>
          <button className="pay-now">PAY NOW</button>
        </div>

        <div className="pricing-card featured">
          <h3>PREMIUM</h3>
          <ul>
            <li>₹ 15000</li>
            <li>5000 Survey Responses</li>
            <li>12 Months Validity</li>
            <li>Custom Question Types</li>
            <li>24/7 Priority Support</li>
            <li>Premium Analytics Dashboard</li>
          </ul>
          <button className="pay-now">PAY NOW</button>
        </div>

        <div className="pricing-card">
          <h3>ENTERPRISE</h3>
          <ul>
            <li>₹ 35000</li>
            <li>Unlimited Responses</li>
            <li>24 Months Validity</li>
            <li>White Label Solutions</li>
            <li>Dedicated Support Manager</li>
            <li>Custom Integration</li>
          </ul>
          <button className="pay-now">PAY NOW</button>
        </div>
      </div>

      {/* Other Sections */}
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

export default SurveyPrice;
