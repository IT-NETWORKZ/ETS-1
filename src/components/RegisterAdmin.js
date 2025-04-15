import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaEnvelope, FaBars, FaTimes, FaPhone, FaCheckCircle, FaCity } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./RegisterAdmin.css";
import logo from "./logo1.png";
import Clients from "./Clients.js";
import Stats from './Stats';
import Testimonials from './Testimonials';
import Footer from './Footer';

const RegisterAdmin = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Function to generate Captcha
  const generateCaptcha = () => Math.random().toString(36).substring(2, 8);

  // Generate captcha on component mount
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Update the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorObj = {};

    // Validation
    if (!organizationName) errorObj.organizationName = "Organization name is required";
    if (!email) errorObj.email = "Email is required";
    else if (!isValidEmail(email)) errorObj.email = "Invalid email format";
    if (!phone) errorObj.phone = "Phone number is required";
    if (!password) errorObj.password = "Password is required";
    if (password !== confirmPassword) errorObj.confirmPassword = "Passwords do not match";
    if (!city) errorObj.city = "City is required";
    if (!address) errorObj.address = "Address is required";
    if (captchaInput.toLowerCase() !== captcha.toLowerCase()) {
        errorObj.captcha = "Captcha does not match";
        setCaptcha(generateCaptcha()); // Generate new captcha only if validation fails
        setCaptchaInput("");
        return;
    }

    if (Object.keys(errorObj).length > 0) {
        setErrors(errorObj);
        return;
    }

    setErrors({});
    setIsLoading(true);

    try {
        const response = await axios.post('https://localhost:7196/api/auth/register-organization', {
            organizationName: organizationName,
            email: email,
            password: password,
            phone: phone,
            city: city,
            address: address
        });

        if (response.status === 200 || response.status === 201) {
            // Clear form data
            setOrganizationName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setConfirmPassword("");
            setCity("");
            setAddress("");
            setCaptchaInput("");
            
            // Show success message and redirect to admin login
            alert("Registration successful! Redirecting to admin login page.");
            
            // Navigate to admin login page
            navigate('/admin-login', { 
                state: { 
                    message: "Registration successful! Please login with your admin credentials.",
                    email: email,
                    isNewRegistration: true
                },
                replace: true
            });
        }
    } catch (error) {
        let errorMessage = "Registration failed. Please try again.";
        if (error.response?.data?.message) {
            errorMessage = error.response.data.message;
        } else if (error.response?.status === 400) {
            errorMessage = "Invalid data provided. Please check your inputs.";
        } else if (!error.response) {
            errorMessage = "Network error. Please check your connection.";
        }
        alert(errorMessage);
        // Generate new captcha on error
        setCaptcha(generateCaptcha());
        setCaptchaInput("");
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
            <FaEnvelope className="email-icon" /> support@ex-am.com | 
            <FaPhone className="phone-icon" /> +91 9665999900 (India) / 00027-11-1002598 (South Africa)
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

      {/* Main Container */}
      <div className="container">
        {/* Clients Section on Left */}
        <div className="clients-section">
          <Clients />
        </div>

        {/* Registration Form Section on Right */}
        <div className="register-section">
          <form className="register-box" onSubmit={handleSubmit}>
            <h2>Organization / Institution Registration</h2>

            <div className="input-container">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Organization Name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
              />
            </div>
            {errors.organizationName && <div className="error-message">{errors.organizationName}</div>}

            <div className="input-container">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}

            <div className="input-container">
              <FaPhone className="input-icon" />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errors.phone && <div className="error-message">{errors.phone}</div>}

            <div className="input-container">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}

            <div className="input-container">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}

            <div className="input-container">
              <FaCity className="input-icon" />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            {errors.city && <div className="error-message">{errors.city}</div>}

            <div className="input-container">
              <FaCity className="input-icon" />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {errors.address && <div className="error-message">{errors.address}</div>}

            <div className="input-container">
              <FaCheckCircle className="input-icon" />
              <input
                type="text"
                placeholder="Verification Code"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
              <div className="captcha">{captcha}</div>
            </div>
            {errors.captcha && <div className="error-message">{errors.captcha}</div>}

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Registering..." : "REGISTER"}
            </button>

            <div className="login-link">
              Already have an account? <a onClick={() => navigate('/login')}>Admin Login</a>
            </div>
          </form>
        </div>
      </div>

      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default RegisterAdmin;