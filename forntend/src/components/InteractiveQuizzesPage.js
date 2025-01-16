import React, { useState } from 'react';
import './InteractiveQuizzesPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import quizData from './quizData';  // Importing the quiz data

const InteractiveQuizzesPage = () => {
  const [selectedField, setSelectedField] = useState("Programming Basics");
  const [answers, setAnswers] = useState(Array(5).fill(""));
  const [marks, setMarks] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [timestamp, setTimestamp] = useState("");
  const [error, setError] = useState("");  // To handle error messages

  // Handle answer change
  const handleAnswerChange = (index, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = selectedOption;
    setAnswers(updatedAnswers);
  };

  // Calculate the total marks based on correct answers


  // Handle quiz submission
const handleSubmit = async () => {
  // Calculate marks locally
  let score = 0;
  quizData[selectedField].forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      score += 1;
    }
  });

  setMarks(score); // Update the state for UI display
  setSubmitted(true);
  const currentTimestamp = new Date().toLocaleString(); // Get current timestamp
  setTimestamp(currentTimestamp);

  // Send the results to the backend
  const quizTitle = selectedField; // Dynamic quiz title based on field
const userData = {
  username: "user@example.com", // Replace with the actual logged-in user's email
  quizTitle: selectedField,     // Dynamic quiz title
  marks: score,                 // Calculated score
  timestamp: currentTimestamp,  // Include timestamp
  attempts: 1                   // Set the number of attempts
};


  console.log("Sending the following data:", userData); // Log the data to be sent

  // Retrieve the JWT token from localStorage (or sessionStorage)
  const token = localStorage.getItem("jwtToken"); // Assuming the token is stored after login

  if (!token) {
    console.error("JWT token is missing.");
    setError("You are not logged in. Please log in to submit the quiz.");
    return;
  }

  try {
    const apiUrl = "https://backend-1-mr8x.onrender.com" || "http://localhost:5000"; 
    await axios.post(`${apiUrl}/api/quiz/save-result`, userData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include token in the Authorization header
      },
    });
  } catch (error) {
    console.error("Error submitting results:", error);
    if (error.response && error.response.status === 403) {
      setError("You are not authorized to submit this quiz. Please log in again.");
    } else if (error.response && error.response.status === 400) {
      setError("There was an error submitting your results. Please check the data.");
    } else {
      setError("There was an error submitting your results.");
    }
  }
};


  return (
    <div className="quizzes-container">
      <header className="quizzes-header">
        <img src="logo.png" alt="Logo" className="logo" />
        <h1 className="title">Interactive Quizzes</h1>
      </header>
      <div className="quizzes-content">
        <h2>Select a Quiz</h2>
        <select 
          value={selectedField} 
          onChange={(e) => setSelectedField(e.target.value)}
        >
          {Object.keys(quizData).map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
        <h2>{selectedField} Quiz</h2>
        <ul className="quiz-list">
          {quizData[selectedField].map((question, index) => (
            <li key={index} className="quiz-item">
              <h3>{question.question}</h3>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="quiz-option">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleAnswerChange(index, option)}
                    disabled={submitted}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </li>
          ))}
        </ul>
        <button className="submit-btn" onClick={handleSubmit} disabled={submitted}>
          {submitted ? "Submitted" : "Submit Answers"}
        </button>
        {submitted && (
          <div className="quiz-result">
            <h3>Your Score: {marks} / 5</h3>
            <p><strong>Timestamp:</strong> {timestamp}</p>
          </div>
        )}
        {error && <p className="error-message">{error}</p>}  {/* Show error if any */}
      </div>
      <footer className="quizzes-footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
        <Link to="/">Back to Home</Link>
      </footer>
    </div>
  );
};

export default InteractiveQuizzesPage;
