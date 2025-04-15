import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import "./Demo.css";
import logo from "./logo1.png";

const Demo = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [isSubjectAdded, setIsSubjectAdded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const subjects = ["Mathematics", "Science", "English", "History", "Geography"];
  const difficultyLevels = ["Easy", "Medium", "Hard"];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleAddSubject = () => {
    if (selectedSubject) {
      setIsSubjectAdded(true);
      setShowSuccessPopup(true);
      // Hide success popup after 2 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 2000);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="top-info-bar">
        <div className="info-container">
          <span>
            <FaEnvelope className="email-icon" /> support@ex-am.com | <FaPhone className="phone-icon" /> +91 9665999900 (India) / 00027-11-1002598 (South Africa)
          </span>
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

            <li><a onClick={() => handleNavigation('/')}>HOME</a></li>
            <li><a onClick={() => handleNavigation('/about')}>ABOUT</a></li>
            <li><a onClick={() => handleNavigation('/tech-support')}>TECH SUPPORT</a></li>
            <li><a onClick={() => handleNavigation('/exam-price')}>EXAM PRICE</a></li>
            <li><a onClick={() => handleNavigation('/survey-price')}>SURVEY PRICE</a></li>
          </ul>
        </div>
      </nav>

      {/* Demo Exam Content */}
      <div className="demo-container">
        <div className="subject-selection">
          <div className="select-group">
            <label>Subject Name</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Select Subject Name</option>
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <button 
              onClick={handleAddSubject} 
              disabled={!selectedSubject}
              className={!selectedSubject ? 'disabled-btn' : ''}
            >
              Add Subject
            </button>
          </div>

          {isSubjectAdded && (
            <div className="select-group">
              <label>Difficulty Level</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="">Select Difficulty Level</option>
                {difficultyLevels.map((level, index) => (
                  <option key={index} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {showSuccessPopup && (
          <div className="success-popup">
            Subject added successfully!
          </div>
        )}

        <div className="exam-details">
          <h3>Demo Exam</h3>
          <table>
            <tbody>
              <tr>
                <td>1</td>
                <td>Exam</td>
                <td>Demo Exam</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Subject</td>
                <td>{selectedSubject || "Not Selected"}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Difficulty Level</td>
                <td>{difficulty || "Not Selected"}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Duration</td>
                <td><b>10 min.</b></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Next Re-take</td>
                <td>Available</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Passing Score</td>
                <td>50.00%</td>
              </tr>
              <tr>
                <td>7</td>
                <td>No. of Questions</td>
                <td><b>10</b></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="instructions">
          <h3>Terms and Conditions</h3>
          <p>To Kindly do not refresh exam page.</p>

          <h3>Take Assessment</h3>
          {!isSubjectAdded && (
            <p className="error-message">First select a subject to begin assessment.</p>
          )}
          <button onClick={() => setIsModalOpen(true)} disabled={!isSubjectAdded}>
            Read Instructions
          </button>
        </div>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Exam Instructions</h2>
              <div className="instructions-list">
                <ol>
                  <li>Total duration of examination is 10 minutes.</li>
                  <li>The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination.</li>
                  <li>The question palette displayed on the right side of screen will show the status of each question using one of the following symbols:
                    <ul>
                      <li><span className="not-visited">❓</span> Not Visited - Question not viewed yet</li>
                      <li><span className="not-answered">⭕</span> Not Answered - Question viewed but not answered</li>
                      <li><span className="answered">✓</span> Answered - Question has been answered</li>
                      <li><span className="marked">⭐</span> Marked for Review - Question marked for later review</li>
                    </ul>
                  </li>
                  <li>The examination consists of 10 Multiple Choice Questions (MCQs).</li>
                  <li>Each question has 4 options, and only ONE is correct.</li>
                  <li>Each question carries equal marks (1 mark each).</li>
                  <li>There is NO NEGATIVE marking for wrong answers.</li>
                  <li>You can navigate between questions by:
                    <ul>
                      <li>Clicking on the question number in the question palette</li>
                      <li>Using the Next/Previous buttons</li>
                    </ul>
                  </li>
                  <li>You can review and modify your answers at any time during the exam.</li>
                  <li>The exam will automatically submit when the timer reaches zero.</li>
                </ol>

                <div className="important-notes">
                  <h3>Important Notes:</h3>
                  <ul>
                    <li>Do not refresh the page during the exam.</li>
                    <li>Ensure stable internet connectivity.</li>
                    <li>Keep the browser window active/focused during the exam.</li>
                  </ul>
                </div>
              </div>
              <div className="modal-buttons">
                <button onClick={() => setIsModalOpen(false)}>Close</button>
                <button 
                  className="begin-assessment"
                  onClick={() => {
                    setIsModalOpen(false);
                    setIsConfirmationOpen(true); // Open confirmation popup
                  }}
                >
                  Begin Assessment
                </button>
              </div>
            </div>
          </div>
        )}

        {isConfirmationOpen && (
          <div className="confirmation-popup">
            <div className="popup-content">
              <h3>Are you ready to start your exam?</h3>
              <div className="popup-buttons">
                <button onClick={() => setIsConfirmationOpen(false)}>Cancel</button>
                <button 
                  onClick={() => {
                    setIsConfirmationOpen(false);
                    navigate('/start-exam', { 
                      state: { 
                        subject: selectedSubject,
                        difficulty: difficulty,
                        duration: 10,
                        questions: 10
                      }
                    });
                  }}
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;