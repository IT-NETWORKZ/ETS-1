// src/components/Navbar.js
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/Navbardash.css';

const NavbarAd = () => {
  return (
    <div className="navbarr">
      <div className="navbar-logo">
        <h4>Admin Dashboard</h4>
      </div>
      <div className="navbar-items">
        <div className="candidate-id">
          
          <h4>Admin ID: ADM123456</h4>
        </div>  </div>
      <div className="user-info">
        <FaUserCircle className="user-icon" />
        <span className="user-text">User</span>
      </div>
    </div>
  );
};

export default NavbarAd;