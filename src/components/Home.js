import React, { useState } from "react";
import { 
  FaBars, 
  FaTimes, 
  FaEnvelope, 
  FaPhone,
  FaShieldAlt,
  FaChartBar,
  FaGlobe
} from "react-icons/fa";
import "./Home.css";
import logo from "./logo1.png";
import heroBg from "./logo1.png"; // Add your background image
import Stats from './Stats';
import Testimonials from './Testimonials';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
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

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Examination Process</h1>
          <p>Secure, Reliable, and Advanced Online Testing Platform for Educational Institutions</p>
          
          <div className="hero-features">
            <div className="feature">
              <FaShieldAlt className="feature-icon" />
              <h3>Exams Security</h3>
              <p>Advanced anti-cheating measures with AI-powered proctoring</p>
            </div>
            <div className="feature">
              <FaChartBar className="feature-icon" />
              <h3>Real-time Analytics</h3>
              <p>Comprehensive performance tracking and insights</p>
            </div>
            <div className="feature">
              <FaGlobe className="feature-icon" />
              <h3>Survey Analysis</h3>
              <p>Conduct exams anywhere, anytime with 24/7 support</p>
            </div>
          </div>

          <button 
            className="try-demo-btn" 
            onClick={() => navigate('/login')}
            style={{ cursor: 'pointer' }}
          >
            Login
          </button>
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

export default Home;
