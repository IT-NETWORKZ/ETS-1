import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./ForgotPassword.css";
import logo from "./logo1.png";
import ForgotPasswordBanner from "./forgot-banner.png";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorObj = {};

    if (!email) errorObj.email = "Email is required";
    else if (!isValidEmail(email)) errorObj.email = "Invalid email format";

    if (Object.keys(errorObj).length > 0) {
      setErrors(errorObj);
      return;
    }

    setErrors({});
    setIsLoading(true);
    setMessage('');

    try {
      const response = await axios.post('https://localhost:7196/api/auth/forgot-password', {
        email: email
      });

      if (response.status === 200) {
        setMessage('Password reset instructions have been sent to your email.');
        setEmail(''); // Clear the email input
        // Optionally redirect after a delay
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      let errorMessage = "Failed to process your request.";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      setErrors({ email: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  return (
    <div>
      {/* Top Info Bar */}
      <div className="top-info-bar">
        <div className="info-container">
          <span>
            <FaEnvelope className="email-icon" /> support@ex-am.com | <FaPhone className="phone-icon" /> +91 9665999900 (India) / 00027-11-1002598 (South Africa)
          </span>
          <button className="demo-button">DEMO EXAM</button>
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
            <li><a onClick={() => handleNavigation('/')}>HOME</a></li>
            <li><a onClick={() => handleNavigation('/about')}>ABOUT</a></li>
            <li><a onClick={() => handleNavigation('/tech-support')}>TECH SUPPORT</a></li>
            <li><a onClick={() => handleNavigation('/exam-price')}>EXAM PRICE</a></li>
            <li><a onClick={() => handleNavigation('/survey-price')}>SURVEY PRICE</a></li>
          </ul>
        </div>
      </nav>

      {/* Forgot Banner */}
            <div className="Forgot-banner">
              <img src={ForgotPasswordBanner} alt="Forgot Banner" />
            </div>

      {/* Forgot Password Form */}
      <div className="forgot-password-container">
        <div className="forgot-password-box">
          <div className="logo">
            <img src={logo} alt="Exam Logo" />
          </div>
          <h2>Recover Password</h2>
          {message && <div className="success-message">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}
            <button 
              type="submit" 
              disabled={isLoading}
              className={isLoading ? 'loading' : ''}
            >
              {isLoading ? 'Processing...' : 'Recover Password'}
            </button>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default ForgotPassword;