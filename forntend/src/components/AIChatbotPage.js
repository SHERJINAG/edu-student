import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AIChatbotPage.css";

const AIChatbotPage = () => {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([]); // Store conversation history
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChat = async () => {
    if (!userInput.trim()) return;

    // Add the user message to the conversation
    setConversation((prev) => [...prev, { sender: "user", message: userInput }]);

    setLoading(true);

    try {
      const apiUrl = "https://backend-1-mr8x.onrender.com" || "http://localhost:5000"; 
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });
      const data = await response.json();

      // Add the AI's response to the conversation
      setConversation((prev) => [
        ...prev,
        { sender: "ai", message: data.response || "No response from AI." },
      ]);
    } catch (error) {
      setConversation((prev) => [
        ...prev,
        { sender: "ai", message: "Error connecting to the server." },
      ]);
    } finally {
      setLoading(false);
    }

    setUserInput(""); // Clear the input field
  };

  return (
    <div className="container">
      {/* AI Chatbot Section */}
      <div className="chatbot-container">
        <header className="chatbot-header">
          <img src="logo.png" alt="AI Logo" className="logo" />
          <h1 className="title">WIKI Chatbot</h1>
<div className="profile">
          <img
            src="profile-icon.png"
            alt="Profile Icon"
            className="profile-icon"
            onClick={() => navigate("/profile")} // Navigate to the profile page
          />
        </div>
        </header>

        <div className="chatbot-content">
          <h2 className="ask-anything">Ask Anything</h2>
          <div className="conversation-history">
            {/* Render conversation history */}
            {conversation.map((entry, index) => (
              <div key={index} className={`chat-message ${entry.sender === "user" ? "user" : "ai"}`}>
                <strong>{entry.sender === "user" ? "You" : "AI"}:</strong> {entry.message}
              </div>
            ))}
          </div>

          <textarea
            className="user-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your question here..."
          ></textarea>
          <button className="chat-now-button" onClick={handleChat} disabled={loading}>
            {loading ? "Loading..." : "Chat"}
          </button>
        </div>

        <footer className="chatbot-footer">
          <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform . All rights reserved.</p>
        </footer>
      </div>
    </div> 
  );
};

export default AIChatbotPage;
