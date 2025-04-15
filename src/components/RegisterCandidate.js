import React, { useState, useEffect, useContext } from "react";
import { FaUser, FaLock, FaEnvelope, FaBars, FaTimes, FaPhone, FaCheckCircle, FaCalendarAlt, FaCity, FaGenderless } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../App'; // Adjust path based on your folder structure
import "./RegisterCandidate.css";
import logo from "./logo1.png";
import Clients from "./Clients.js";
import Stats from './Stats';
import Testimonials from './Testimonials';
import Footer from './Footer';

const RegisterCandidate = () => {
  debugger;
  const navigate = useNavigate();
  const { isAuthenticated, handleLogout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [sFName, setsFName] = useState("");
  const [sLName, setsLName] = useState("");
  const [sEmail, setsEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const generateCaptcha = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  // Reset errors before new submission
  setErrors({});
  setBackendError("");

  // Ensure the passwords match
  if (password !== confirmPassword) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: "Passwords do not match",
    }));
    setLoading(false);
    return;
  }

  try {
    const response = await axios.post('https://localhost:44352/api/reg', {
      sFName,
      sLName,
      sEmail,
      sMobile: phone,
      sPassword: password,
      sCPassword: confirmPassword,
      Dob: dob, // Ensure this is in the correct format for your API
      sGender: gender,
      sCity: city,
      sAddress: address,
    });

    if (response.data && response.data.message === "Register Successful") {
      setSuccessMessage("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate('/login');
        // Reset form fields after success
        setsFName("");
        setsLName("");
        setsEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        setDob("");
        setGender("");
        setCity("");
        setAddress("");
        setCaptchaInput("");
        setCaptcha(generateCaptcha());
      }, 2000);
    } 
    else 
    {
      setBackendError("Unexpected response from server.");
    }
  } catch (error) {
    console.error("Registration error:", error);
    if (error.response) {
      setBackendError(error.response.data.message || "Registration failed.");
    } else {
      setBackendError("Failed to connect to server.");
    }
  } finally {
    setLoading(false);
  }
};
  const isValidsEmail = (sEmail) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(sEmail);
  };

  return (
    <div>
      {/* Top Info Bar */}
      <div className="top-info-bar">
        <div className="info-container">
          <span>
            <FaEnvelope className="sEmail-icon" /> support@ex-am.com |
            <FaPhone className="phone-icon" /> +91 9665999900 (India) / 00027-11-1002598 (South Africa)
          </span>
          <button className="demo-button" onClick={() => navigate("/demo")}>
            DEMO EXAM
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="Exam Logo" />
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a onClick={() => handleNavigation('/')}>HOME</a></li>
            <li><a onClick={() => handleNavigation('/about')}>ABOUT</a></li>
            <li><a onClick={() => handleNavigation('/tech-support')}>TECH SUPPORT</a></li>
            <li><a onClick={() => handleNavigation('/exam-price')}>EXAM PRICE</a></li>
            <li><a onClick={() => handleNavigation('/survey-price')}>SURVEY PRICE</a></li>
            {isAuthenticated && (
              <li>
                <a onClick={() => { handleLogout(); handleNavigation('/login'); }}>
                  LOGOUT
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Main Container */}
      <div className="container">
        <div className="clients-section">
          <Clients />
        </div>
        <div className="register-section">
          <form className="register-box" onSubmit={handleSubmit}>
            <h2>Candidate Registration</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {backendError && <div className="error-message">{backendError}</div>}
            {loading && <div className="loading-message">Processing...</div>}

            <div className="input-container">
              <input
                type="text"
                placeholder="First Name"
                required
                value={sFName}
                onChange={(e) => setsFName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={sLName}
                onChange={(e) => setsLName(e.target.value)}
              />
            </div>

            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                required
                value={sEmail}
                onChange={(e) => setsEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="input-container">
              <input
                type="date"
                placeholder="Date of Birth"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <div className="gender-container">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Other
                </label>
              </div>
            </div>

            <div className="input-container">
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <button type="submit" disabled={loading}>REGISTER</button>
          </form>

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

export default RegisterCandidate;