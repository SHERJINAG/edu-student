import React, { useState, useEffect } from "react";
import "./LiveClassesPage.css";
import { useNavigate } from "react-router-dom";

const LiveClassesPage = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [error, setError] = useState("");
 const navigate = useNavigate();

  // Fetch leaderboard data
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");

        if (!token) {
          throw new Error("No token found. Please log in again.");
        }

        const response = await fetch("http://localhost:5000/api/leaderboard", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            throw new Error("Invalid or expired token. Please log in again.");
          }
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        setLeaderboardData(data);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <div className="leaderboard-container">
      {/* Header Section */}
      <header className="leaderboard-header">
        <img src="logo.png" alt="AI Student Logo" className="logo" />
        <h1 className="title">Leaderboard</h1>
       <div className="profile">
          <img
            src="profile-icon.png"
            alt="Profile Icon"
            className="profile-icon"
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="leaderboard-content">
        <h2>Top Performers</h2>
        {error && <p className="error">{error}</p>}
        {!error && leaderboardData.length === 0 && <p>Loading...</p>}
        {!error && leaderboardData.length > 0 && (
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Email</th>
                <th>Total Marks</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                  <td>{user.totalMarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer Section */}
      <footer className="leaderboard-footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LiveClassesPage;
