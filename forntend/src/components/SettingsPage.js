import React from "react";
import { useNavigate } from "react-router-dom";
import "./SettingsPage.css"; // Import the CSS file

const SettingsPage = () => {
   const navigate = useNavigate(); 
  return (
    <div className="settings-container">
      {/* Header Section */}
      <header className="settings-header">
        <img src="logo.png" alt="AI Student Logo" className="logo" />
        <h1 className="title">AI-Powered Student Learning Platform</h1>
        <div className="profile">
          <img src="profile.png" alt="Profile" className="profile-icon" onClick={() => navigate("/profile")}/>
        </div>
      </header>

      {/* Main Content */}
      <div className="settings-content">
        <h2>Settings</h2>
        <p>Customize your experience.</p>
        <ul className="settings-list">
          <li>Change Password</li>
          <li>Update Profile</li>
          <li>Notification Preferences</li>
        </ul>
      </div>

      {/* Footer Section */}
      <footer className="settings-footer">
        <p>&copy; 2024 AI Student Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SettingsPage;
