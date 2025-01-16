import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate(); // Use the navigate hook

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src="logo.png" alt="AI Student Logo" className="logo" />
        <h1 className="title">EDU-STUDENT SPARK Learning Platform</h1>
        <div className="profile">
          <img
            src="profile-icon.png"
            alt="Profile Icon"
            className="profile-icon"
            onClick={() => navigate("/profile")} // Navigate to the profile page
          />
        </div>
      </header>

      <div className="dashboard-content">
        <div className="card" onClick={() => navigate("/track-progress")}>
          <h2>Track Progress</h2>
          <p>Monitor your learning journey and analyze your growth.</p>
        </div>
        <div className="card" onClick={() => navigate("/recommended-courses")}>
          <h2>View Recommended Courses</h2>
          <p>Discover personalized courses tailored to your interests.</p>
        </div>
        <div className="card" onClick={() => navigate("/interactive-quizzes")}>
          <h2>Interactive Quizzes</h2>
          <p>Test your knowledge with engaging quizzes and assignments.</p>
        </div>
        <div className="card" onClick={() => navigate("/ai-chatbot")}>
          <h2>WIKI Chatbot Support</h2>
          <p>Get instant help and guidance from our WIKI-powered chatbot.</p>
        </div>
        
        <div className="card" onClick={() => navigate("/new-technologies")}>
          <h2>Explore New Technologies</h2>
          <p>Stay updated with the latest advancements in technology.</p>
        </div>
        <div className="card" onClick={() => navigate("/live-classes")}>
            <h2>Leaderboard</h2>
  <p>Track your performance and see how you rank among others.</p>

        </div>
        <div className="card" onClick={() => navigate("/discussion-forums")}>
          <h2>Discussion Forums</h2>
          <p>Join conversations and collaborate with peers and mentors.</p>
        </div>
        <div className="card" onClick={() => navigate("/certifications")}>
          <h2>Relax and Recharge</h2>
<p>Engage in creative drawing, enjoy motivational quotes, and lighten up with jokes to release mental pressure.</p>

        </div>
        <div className="card" onClick={() => navigate("/saved-resources")}>
          <h2>Saved Resources</h2>
          <p>Access your saved materials for quick reference.</p>
        </div>
      </div>

      <footer className="dashboard-footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
