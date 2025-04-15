import React, { useState } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./About.css";
import logo from "./logo1.png";

import Clients from "./Clients.js";
import Stats from './Stats';
import Testimonials from './Testimonials';
import Footer from './Footer';
import aboutBanner from "./about-banner.jpeg";


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

      {/* Add About Banner */}
      <div className="about-banner">
        <img src={aboutBanner} alt="About Banner" />
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Clients Section on Left */}
        <div className="clients-section">
          <Clients />
        </div>

        {/* About Section on Right */}
        <div className="about-section">
         

      {/* About Content */}
      <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ color: "red", marginBottom: "20px" }}>About EXAM :</h1>
        <p style={{ marginBottom: "20px" }}>
          Exam is an online exam facility service for Primary, Secondary, Higher Secondary, UG, PG, Research Scholars,
          Working Professionals and Govt Job Seekers to make best exam practices to assess their IQ and also to increase
          subject knowledge. It is highly suggested for IT Organizations, Examining Labs, Research Institutions, Schools,
          Colleges, Private Coaching Institutions, and Individuals from Primary students to working professionals.
        </p>
        <p style={{ marginBottom: "20px" }}>
          The sole purpose is to provide an excellent platform for an online assessment of all Academic subjects and
          Professional Skills to institutions and individuals.
        </p>
        <p style={{ marginBottom: "20px" }}>
          <strong>Admin Users:</strong> An admin user is an Organization/Institution that wants to conduct online exams
          (assessments) for their employees, seekers, or students. They can take exam access by selecting the number of
          exams as per their requirement, which is a paid subscription. Exams can be conducted for any number of
          participants just by scheduling a new exam on the required day and time, and adding all participants' details
          through a form or by respective registration IDs. Exam info is sent directly to participants via email; they
          just need to check the schedule and can start accordingly. History, including exams, participant details, and
          certificates, is available in the admin dashboard.
        </p>
        <p style={{ marginBottom: "20px" }}>
          <strong>Candidate Users:</strong> A candidate is an individual who wants to improve their speed and knowledge in
          a targeted subject through online assessment. Candidates can access practice exams as per their requirements,
          which is a paid option. If candidates are added directly by the admin, then a paid subscription is not required
          for them. Practice exam records and other exam records are available in the candidate's "History/Result"
          dashboard.
        </p>
        <p style={{ marginBottom: "20px" }}>
          The platform also provides an own question bank and a ready-made question bank option that can be
          accessed by both admins and candidates as per their needs.
        </p>
        <p style={{ marginBottom: "20px" }}>
          Admins and candidates can renew their subscriptions multiple times with Beginner, Master, or Expert options.
        </p>
        <p style={{ marginBottom: "20px" }}>
          <strong>Happy Learning:</strong> Services for organizations and candidates were offered free until July 31,
          2020. Take maximum advantage of this opportunity!
        </p>
      </div>
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

export default About;
