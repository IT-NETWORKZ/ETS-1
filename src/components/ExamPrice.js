import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./ExamPrice.css";
import logo from "./logo1.png";
import Stats from './Stats';
import Testimonials from './Testimonials';
import Footer from './Footer';
import aboutBanner from "./exam-banner.png";

const About = () => {
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
        <img src={aboutBanner} alt="About Banner" />
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <div className="pricing-card">
          <h3>INTERN</h3>
          <ul>
            <li>₹ 1100</li>
            <li>100 Exams</li>
            <li>1 Month Validity</li>
            <li>Question bank upload facility</li>
            <li>Ready made question banks available</li>
            <li>Terms & conditions apply</li>
          </ul>
          <button className="pay-now">PAY NOW</button>
        </div>

        <div className="pricing-card">
          <h3>PROFESSIONAL</h3>
          <ul>
            <li>₹ 6000</li>
            <li>1000 Exams</li>
            <li>18 Months Validity</li>
            <li>Question bank upload facility</li>
            <li>Ready made question banks available</li>
            <li>Terms & conditions apply</li>
          </ul>
          <button className="pay-now">PAY NOW</button>
        </div>

        <div className="pricing-card">
          <h3>MASTER</h3>
          <ul>
            <li>₹ 25000</li>
            <li>5000 Exams</li>
            <li>24 Months Validity</li>
            <li>Question bank upload facility</li>
            <li>Ready made question banks available</li>
            <li>Terms & conditions apply</li>
          </ul>
          <button className="pay-now">PAY NOW</button>
        </div>

        <div className="pricing-card">
          <h3>EXPERT</h3>
          <ul>
            <li>₹ 100000</li>
            <li>25000 Exams</li>
            <li>30 Months Validity</li>
            <li>Question bank upload facility</li>
            <li>Ready made question banks available</li>
            <li>Terms & conditions apply</li>
          </ul>
          <button className="pay-now">PAY NOW</button>
        </div>

        <div className="pricing-card">
          <h3>CHIEF</h3>
          <ul>
            <li>₹ 125000</li>
            <li>50000 Exams</li>
            <li>36 Months Validity</li>
            <li>Question bank upload facility</li>
            <li>Ready made question banks available</li>
            <li>Terms & conditions apply</li>
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

export default About;
