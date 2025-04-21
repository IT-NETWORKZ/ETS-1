import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Preloader from "./components/Preloader";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import TechSupport from "./components/TechSupport";
import RegisterCandidate from "./components/RegisterCandidate";
import RegisterAdmin from "./components/RegisterAdmin";
import Clients from "./components/Clients";
import ExamPrice from "./components/ExamPrice";
import SurveyPrice from "./components/SurveyPrice";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import Demo from "./components/Demo";
import AdminDashboard from './components/AdminDashboard';
import AddNewCandidate from "./Organization/AddNewCandidate";
import AddNew from "./Organization/AddNewInner";
import AddcandidatetoExam from "./Organization/AddCandidateToExam";
import CandidateList from "./Organization/CandidateList";
import ExamCandidateList from "./Organization/ExamCandidateList";
import ExamHistoryList from "./Organization/ExamHistory";
import ExamListt from "./Organization/ExamList";
import ExamResultList from "./Organization/ExamResult";
import ReExamCandidate from "./Organization/ReExamCandidate";
import Sidebardash from "./components/Sidebardash";
import Navbardash from "./components/Navbardash";
import DashboardAd from './components/DashboardAd';
import SidebarAd from './components/SidebarAd';
import NavbarAd from './components/NavbarAd';


// Create Authentication Context
export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate initial load (e.g., check localStorage or API for auth status)
    const token = localStorage.getItem("token"); // Example: Check for a token
    if (token) setIsAuthenticated(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Show preloader for 2 seconds
  }, []);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!loading && !isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  // Update authentication state after login
  const handleLogin = () => {
    setIsAuthenticated(true);
    // Optionally save token or user data to localStorage
    // localStorage.setItem("token", "your-jwt-token"); // Example
  };

  // Logout function
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token"); // Example
    Navigate("/login"); // Redirect to login
  };

  // Show preloader while loading
  if (loading) {
    return <Preloader />;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>
      <Router>
        <Routes>
          <Route path="/ETS-1" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tech-support" element={<TechSupport />} />
          <Route path="/register-candidate" element={<RegisterCandidate />} />
          <Route path="/register-admin" element={<RegisterAdmin />} />
          <Route path="/exam-price" element={<ExamPrice />} />
          <Route path="/survey-price" element={<SurveyPrice />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/addnewcandidate" element={<AddNewCandidate />} />
          <Route path="/AddcandidatetoExam" element={<AddcandidatetoExam/>} />
          <Route path="/CandidateList" element={<CandidateList/>} />
          <Route path="/ExamCandidateList" element={<ExamCandidateList/>} />
          <Route path="/ExamHistoryList" element={<ExamHistoryList/>} />
          <Route path="/ExamListt" element={<ExamListt/>} />
          <Route path="/ExamResultList" element={<ExamResultList/>} />
          <Route path="/ReExamCandidate" element={<ReExamCandidate/>} />
          <Route path="/addnew" element={<AddNew/>} />
           <Route path="/sidebardash" element={<Sidebardash/>} />
           <Route path="/navbardash" element={<Navbardash/>} />
           <Route path="/dashboardAd" element={<DashboardAd />} />
           <Route path="/sidebarad" element={<SidebarAd />} />
            <Route path="/navbarad" element={<NavbarAd />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;