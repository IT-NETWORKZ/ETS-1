import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={() => navigate('/logout')}>Logout</button>
    </div>
  );
};

export default AdminDashboard;