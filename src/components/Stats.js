import React, { useState, useEffect } from 'react';
import { FaUserGraduate, FaUserTie, FaQuestion, FaList } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({
    candidates: 0,
    admins: 0,
    mcqs: 0,
    questions: 0
  });

  const targets = {
    candidates: 15000,
    admins: 500,
    mcqs: 25000,
    questions: 10000
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prevCounts => ({
        candidates: prevCounts.candidates < targets.candidates ? 
          Math.min(prevCounts.candidates + Math.ceil(targets.candidates/steps), targets.candidates) : prevCounts.candidates,
        admins: prevCounts.admins < targets.admins ? 
          Math.min(prevCounts.admins + Math.ceil(targets.admins/steps), targets.admins) : prevCounts.admins,
        mcqs: prevCounts.mcqs < targets.mcqs ? 
          Math.min(prevCounts.mcqs + Math.ceil(targets.mcqs/steps), targets.mcqs) : prevCounts.mcqs,
        questions: prevCounts.questions < targets.questions ? 
          Math.min(prevCounts.questions + Math.ceil(targets.questions/steps), targets.questions) : prevCounts.questions
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="stats-container">
      <div className="stat-item">
        <FaUserGraduate className="stat-icon" />
        <div className="stat-info">
          <h3>{counts.candidates.toLocaleString()}+</h3>
          <p>Candidates</p>
        </div>
      </div>
      <div className="stat-item">
        <FaUserTie className="stat-icon" />
        <div className="stat-info">
          <h3>{counts.admins.toLocaleString()}+</h3>
          <p>Admins</p>
        </div>
      </div>
      <div className="stat-item">
        <FaQuestion className="stat-icon" />
        <div className="stat-info">
          <h3>{counts.mcqs.toLocaleString()}+</h3>
          <p>MCQs</p>
        </div>
      </div>
      <div className="stat-item">
        <FaList className="stat-icon" />
        <div className="stat-info">
          <h3>{counts.questions.toLocaleString()}+</h3>
          <p>Questions</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;