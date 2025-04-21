import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUser, FaLock, FaBars, FaTimes, FaEnvelope, FaPhone } from "react-icons/fa";
import axios from 'axios';
import { AuthContext } from '../App'; // Adjust path based on your folder structure
import "./Login.css";
import logo from "./logo1.png";
import Clients from "./Clients.js";
import Stats from './Stats';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, handleLogin, handleLogout } = useContext(AuthContext);

  const handleNavigation = (path) => {
    console.log('Navigating to:', path);
    navigate(path);
  };

  const [activeTab, setActiveTab] = useState("candidate");
  const [menuOpen, setMenuOpen] = useState(false);
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePassword, setCandidatePassword] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState("");

  useEffect(() => {
    // Check for registration success message
    if (location.state?.message) {
      alert(location.state.message);
      // Pre-fill email if available
      if (location.state.email) {
        setCandidateEmail(location.state.email);
      }
      // Clear the state to prevent showing message on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const isValidEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorObj = {};
    let isValid = true;

    if (activeTab === "candidate") {
      if (!candidateEmail) {
        errorObj.email = "Email is required";
        isValid = false;
      } else if (!isValidEmail(candidateEmail)) {
        errorObj.email = "Invalid email format";
        isValid = false;
      }
      if (!candidatePassword) {
        errorObj.password = "Password is required";
        isValid = false;
      }
    } else {
      if (!adminEmail) {
        errorObj.email = "Email is required";
        isValid = false;
      } else if (!isValidEmail(adminEmail)) {
        errorObj.email = "Invalid email format";
        isValid = false;
      }
      if (!adminPassword) {
        errorObj.password = "Password is required";
        isValid = false;
      }
    }

    if (!isValid) {
      setErrors(errorObj);
      return;
    }

    setErrors({});
    setBackendError("");

    const email = activeTab === "candidate" ? candidateEmail : adminEmail;
    const password = activeTab === "candidate" ? candidatePassword : adminPassword;
    const rememberMe = document.getElementById("rememberMe").checked;

    try {
      const response = await axios.post('https://localhost:44352/api/log', {
        Email: email,
        Password: password,
        RememberMe: rememberMe,
        Role: activeTab === "admin" ? "Admin" : "Candidate" // Add role to request
      });

      console.log("Login successful:", response.data);
      handleLogin(); // Update global authentication state

      // Clear form data
      if (activeTab === "admin") {
        setAdminEmail("");
        setAdminPassword("");
        // Redirect to admin dashboard
        navigate('/dashboardAd', { replace: true });
      } else {
        setCandidateEmail("");
        setCandidatePassword("");
        // Redirect to candidate dashboard
        navigate('/dashboard', { replace: true });
      }

    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message || "Invalid credentials. Please try again.";
        setBackendError(errorMessage);
      } else {
        setBackendError("Failed to connect to the server. Please try again later.");
      }
    }
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
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a onClick={() => handleNavigation('/ETS-1')}>HOME</a></li>
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

      {/* Login Container */}
      <div className="container">
        <div className="clients-section">
          <Clients />
        </div>
        <div className="login-section">
          <div className="tabs">
            <button
              className={activeTab === "candidate" ? "active" : ""}
              onClick={() => setActiveTab("candidate")}
            >
              Candidate Login
            </button>
           
            <button
            className={activeTab === "admin" ? "active" : ""}
            onClick={() => setActiveTab("admin")}
          >
            Admin Login
          </button>
          </div>

          <form className="login-box" onSubmit={handleSubmit}>
            <h2>{activeTab === "candidate" ? "Candidate Login" : "Admin Login"}</h2>
            {backendError && <div className="error-message">{backendError}</div>}

            <div className="input-container">
              <FaUser className="input-icon" />
              <input
                type="email"
                placeholder={`Enter ${activeTab} email`}
                required
                value={activeTab === "candidate" ? candidateEmail : adminEmail}
                onChange={(e) =>
                  activeTab === "candidate"
                    ? setCandidateEmail(e.target.value)
                    : setAdminEmail(e.target.value)
                }
              />
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}

            <div className="input-container">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={activeTab === "candidate" ? candidatePassword : adminPassword}
                onChange={(e) =>
                  activeTab === "candidate"
                    ? setCandidatePassword(e.target.value)
                    : setAdminPassword(e.target.value)
                }
              />
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}

            <div className="checkbox-container">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <button type="submit" className="btn-sm">LOGIN</button>
            <a onClick={() => handleNavigation('/forgot-password')}>Forgot Password?</a>
            <a onClick={() => handleNavigation(activeTab === "candidate" ? "/register-candidate" : "/register-admin")}>
              {activeTab === "candidate"
                ? "Register Now (Candidate Access)"
                : "Register Now (Organization / Institution Access)"}
            </a>
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

export default Login;