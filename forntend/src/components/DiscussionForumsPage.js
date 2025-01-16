import React, { useState, useEffect } from "react";
import "./DiscussionForumsPage.css";
import { useNavigate } from "react-router-dom";

const DiscussionForumsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (token) {
      fetchQuestions();
    }
  }, [token]);

  const fetchQuestions = async () => {
    try {
      const apiUrl = "https://backend-1-mr8x.onrender.com" || "http://localhost:5000"; 
      const response = await fetch(`${apiUrl}/api/questions`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch questions.");
      }

      const data = await response.json();
      setQuestions(data);
    } catch (err) {
      setError("Failed to fetch questions.");
    }
  };

  const handleSubmitQuestion = async (e) => {
    e.preventDefault();

    if (!newQuestion) {
      setError("Please enter a question.");
      return;
    }

    const userId = localStorage.getItem("userId"); // Retrieve stored `userId`

    try {
      const apiUrl = "https://backend-1-mr8x.onrender.com" || "http://localhost:5000"; 
      const response = await fetch(`${apiUrl}/api/questions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: newQuestion, userId }), // Include userId
      });

      if (!response.ok) {
        throw new Error("Failed to submit the question.");
      }

      const data = await response.json();
      setQuestions([...questions, data]);
      setNewQuestion(""); // Reset input field
    } catch (err) {
      setError("Failed to submit the question.");
    }
  };

  const handleSubmitAnswer = async (e, questionId) => {
    e.preventDefault();

    if (!answer) {
      setError("Please enter an answer.");
      return;
    }

    const userId = localStorage.getItem("userId"); // Retrieve stored `userId`

    try {
      const apiUrl = "https://backend-1-mr8x.onrender.com" || "http://localhost:5000"; 
      const response = await fetch(`${apiUrl}/api/questions/${questionId}/answers`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer, userId }), // Include userId
      });

      if (!response.ok) {
        throw new Error("Failed to submit the answer.");
      }

      const data = await response.json();
      const updatedQuestions = questions.map((question) =>
        question._id === questionId ? { ...question, answers: [...question.answers, data] } : question
      );
      setQuestions(updatedQuestions);
      setAnswer(""); // Reset input field
      setSelectedQuestionId(null);
    } catch (err) {
      setError("Failed to submit the answer.");
    }
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
      <div className="discussion-forums-container">
        <h1>Discussion Forum</h1>

        {error && <p className="error-message">{error}</p>}

        <div className="new-question-form">
          <h2>Ask a Question</h2>
          <form onSubmit={handleSubmitQuestion}>
            <textarea
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Write your question here..."
            />
            <button type="submit">Submit Question</button>
          </form>
        </div>

        <div className="questions-list">
          <h2>Questions</h2>
          {questions.length === 0 ? (
            <p>No questions available.</p>
          ) : (
            questions.map((question) => (
              <div key={question._id} className="question-card">
                <p className="question-text">{question.question}</p>
                <p className="question-author">
                  {question.email ? `Asked by: ${question.email}` : "Anonymous"}
                </p>

                <button onClick={() => setSelectedQuestionId(question._id)}>Answer</button>

                {selectedQuestionId === question._id && (
                  <div className="answer-form">
                    <textarea
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Write your answer here..."
                    />
                    <button onClick={(e) => handleSubmitAnswer(e, question._id)}>
                      Submit Answer
                    </button>
                  </div>
                )}

                <div className="answers">
                  <h3>Answers:</h3>
                  {question.answers.length === 0 ? (
                    <p>No answers yet.</p>
                  ) : (
                    question.answers.map((ans, index) => (
                      <div key={index} className="answer">
                        <p>{ans.answer}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        
        <footer className="discussion-forums-footer">
          <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default DiscussionForumsPage;
