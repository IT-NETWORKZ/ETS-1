import React, { useState } from 'react';
import NavbarAd from './NavbarAd';
import SidebarAd from './SidebarAd';
import DashboardCard from './DashboardCard';
import '../styles/DashboardAd.css';

import { 
  FaUsers, 
  FaShoppingCart, 
  FaBook, 
  FaQuestionCircle, 
  FaTag, 
  FaLayerGroup 
} from 'react-icons/fa';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import Navbardash from './Navbardash';
import Sidebardash from './Sidebardash';

const DashboardAd = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const lineChartData = [
    { month: 'Jan', candidates: 400, exams: 240 },
    { month: 'Feb', candidates: 300, exams: 139 },
    { month: 'Mar', candidates: 520, exams: 280 },
    { month: 'Apr', candidates: 450, exams: 298 },
    { month: 'May', candidates: 600, exams: 320 },
    { month: 'Jun', candidates: 580, exams: 400 }
  ];

  const barChartData = [
    { subject: 'Math', questions: 4000 },
    { subject: 'Science', questions: 3000 },
    { subject: 'English', questions: 2000 },
    { subject: 'History', questions: 2780 },
    { subject: 'Geography', questions: 1890 }
  ];

  return (
    <div className="app">
      <SidebarAd isCollapsed={isSidebarCollapsed} />
      <div className={`main-content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <NavbarAd toggleSidebar={toggleSidebar} title="SUPERADMIN DASHBOARD" />
        <div className="dashboard-content">
          <div className="dashboard-grid">
            <DashboardCard title="Total Live Exam" value="5594" icon={<FaUsers />} iconColor="#3498db" />
            <DashboardCard title="Total candidates" value="111" icon={<FaShoppingCart />} iconColor="#e74c3c" />
            <DashboardCard title="Total Subjects" value="250" icon={<FaShoppingCart />} iconColor="#1abc9c" />
            <DashboardCard title="Total Questions" value="290" icon={<FaUsers />} iconColor="#9b59b6" />
            <DashboardCard title="Total Notices" value="480" icon={<FaLayerGroup />} iconColor="#3498db" />
            <DashboardCard title="Que. Uploaded" value="776" icon={<FaTag />} iconColor="#9b59b6" />
            <DashboardCard title="Total Surveys" value="2902" icon={<FaBook />} iconColor="#9b59b6" />
            {/* <DashboardCard title="Total Questions" value="250726" icon={<FaQuestionCircle />} iconColor="#9b59b6" />
            <DashboardCard title="Total Exams" value="1816" icon={<FaBook />} iconColor="#9b59b6" /> */}
          </div>

          <div className="charts-container">
            <div className="chart-card">
              <h3>Registration Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="candidates" stroke="#3498db" name="Candidates" />
                  <Line type="monotone" dataKey="exams" stroke="#e74c3c" name="Exams" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Questions by Subject</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="questions" fill="#9b59b6" name="Questions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAd;