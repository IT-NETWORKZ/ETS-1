// src/components/Navbar.js
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/Navbardash.css';

const Navbardash = () => {
  return (
    <div className="navbarr">
      <div className="navbar-logo">
        <h4>Candidate Dashboard</h4>
        
      </div>
      <div className="navbar-items">
        <div className="candidate-id">
          
          <h4>Candidate ID: CDM123456</h4>
        </div>  </div>
      <div className="user-info">
        <FaUserCircle className="user-icon" />
        <h4 className="user-text">User</h4>
      </div>
  
    </div>
  );
};

export default Navbardash;