import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./TrackProgressPage.css";
import { useNavigate } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TrackProgressPage = () => {
  const [progressData, setProgressData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem("jwtToken");

        if (!token) {
          throw new Error("No token found. Please log in again.");
        }

        const response = await fetch(
          "http://localhost:5000/api/trackProgress/track-progress",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            throw new Error("Invalid or expired token. Please log in again.");
          }
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json();
        setProgressData(data);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      }
    };

    fetchProgress();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const chartData = {
    labels: progressData.map((item) => item.quizTitle),
    datasets: [
      {
        label: "Highest Marks",
        data: progressData.map((item) => item.highestMarks),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Quiz Progress Chart",
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Quiz Titles",
        },
      },
      y: {
        beginAtZero: true,
        max: 5,
        title: {
          display: true,
          text: "Marks",
        },
      },
    },
  };

  return (
    <div className="track-progress-container">
      <header className="track-progress-header">
        <img src="logo.png" alt="AI Student Logo" className="logo" />
        <h1 className="title">EDU-STUDENT SPARK Learning Platform</h1>
        <div className="profile">
          <img
            src="profile-icon.png"
            alt="Profile Icon"
            className="profile-icon"
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      <div className="track-progress-content">
        <h2>Track Progress</h2>

        {progressData.length > 0 ? (
          <>
            <Bar data={chartData} options={chartOptions} />
            <ul>
              {progressData.map((item, index) => (
                <li key={index}>
                  {item.quizTitle}: {item.highestMarks} marks
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>No progress data available</p>
        )}
      </div>

      <footer className="track-progress-footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TrackProgressPage;
