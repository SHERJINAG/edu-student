import React from "react";
import { useNavigate } from "react-router-dom";
import "./SavedResourcesPage.css";

const SavedResourcesPage = () => {
  const navigate = useNavigate();
  const apiUrl = "https://backend-1-mr8x.onrender.com" || "http://localhost:5000";


  return (
    <div className="saved-resources-container">
      {/* Header Section */}
      <header className="saved-resources-header">
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

      {/* Main Content */}
      <div className="saved-resources-content">
        <h2>Saved Resources</h2>
        <p>Access your saved documents, and notes.</p>

        {/* Download Links for PDFs */}
        <div className="pdf-download-section">
      <a href={`${apiUrl}/downloads/download/program.pdf`} download>
        <button className="download-btn">Download Program PDF</button>
      </a>
      <a href={`${apiUrl}/downloads/download/python_cheat_sheet.pdf`} download>
        <button className="download-btn">Download Python Cheat Sheet</button>
      </a>
      <a href={`${apiUrl}/downloads/download/web_dev_guide.pdf`} download>
        <button className="download-btn">Download Web Dev Guide</button>
      </a>
      <a href={`${apiUrl}/downloads/download/ai_lecture_notes.pdf`} download>
        <button className="download-btn">Download AI Lecture Notes</button>
      </a>
      <a href={`${apiUrl}/downloads/download/machine_learning_guide.pdf`} download>
        <button className="download-btn">Download Machine Learning Guide</button>
      </a>
      <a href={`${apiUrl}/downloads/download/interactive_tools.pdf`} download>
        <button className="download-btn">Download Interactive Tools</button>
      </a>
      <a href={`${apiUrl}/downloads/download/data_science_cheat_sheet.pdf`} download>
        <button className="download-btn">Download Data Science Cheat Sheet</button>
      </a>
      <a href={`${apiUrl}/downloads/download/coding_interview_guide.pdf`} download>
        <button className="download-btn">Download Coding Interview Guide</button>
      </a>
      <a href={`${apiUrl}/downloads/download/java_cheat_sheet.pdf`} download>
        <button className="download-btn">Download Java Cheat Sheet</button>
      </a>
      <a href={`${apiUrl}/downloads/download/web_development_notes.pdf`} download>
        <button className="download-btn">Download Web Development Notes</button>
      </a>
      <a href={`${apiUrl}/downloads/download/react_guide.pdf`} download>
        <button className="download-btn">Download React Guide</button>
      </a>
      <a href={`${apiUrl}/downloads/download/js_cheat_sheet.pdf`} download>
        <button className="download-btn">Download JS Cheat Sheet</button>
      </a>
      <a href={`${apiUrl}/downloads/download/database_design_guide.pdf`} download>
        <button className="download-btn">Download Database Design Guide</button>
      </a>
      <a href={`${apiUrl}/downloads/download/python_notes.pdf`} download>
        <button className="download-btn">Download Python Notes</button>
      </a>
      <a href={`${apiUrl}/downloads/download/dsa_notes.pdf`} download>
        <button className="download-btn">Download DSA Notes</button>
      </a>
      <a href={`${apiUrl}/downloads/download/cpp_cheat_sheet.pdf`} download>
        <button className="download-btn">Download C++ Cheat Sheet</button>
      </a>
      <a href={`${apiUrl}/downloads/download/csharp_cheat_sheet.pdf`} download>
        <button className="download-btn">Download C# Cheat Sheet</button>
      </a>
      <a href={`${apiUrl}/downloads/download/advanced_sql_guide.pdf`} download>
        <button className="download-btn">Download Advanced SQL Guide</button>
      </a>
    </div>
      </div>

      {/* Footer Section */}
      <footer className="saved-resources-footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SavedResourcesPage;
