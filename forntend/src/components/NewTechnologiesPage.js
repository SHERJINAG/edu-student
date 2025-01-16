import React from "react";
import "./NewTechnologiesPage.css"; 
import edgeComputingImage from "../assets/edge_computing.png";// Import the CSS for consistent styling
import blockchainImage from "../assets/blockchain.png";
import quantumImage from "../assets/quantum_computing.png";
import fivegImage from "../assets/5g.png";
import { useNavigate } from "react-router-dom";
const NewTechnologiesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="new-technologies-container">
      {/* Header Section */}
      <header className="new-technologies-header">
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
      <div className="new-technologies-content">
        <h2>Explore New Technologies</h2>
        <p>Stay updated with the latest advancements in technology.</p>
        <div className="technologies-list">
          <div className="technology-card">
            <img
              src={blockchainImage}
              alt="Blockchain"
              className="technology-image"
            />
            <h3>Blockchain</h3>
            <p>
              Blockchain is a decentralized, distributed ledger technology that
              ensures secure and transparent transactions. It has applications
              in various industries, including finance, healthcare, and supply
              chains.
            </p>
            <a
              href="https://en.wikipedia.org/wiki/Blockchain"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>

          <div className="technology-card">
            <img
              src={quantumImage}
              alt="Quantum"
              className="technology-image"
            />
            <h3>Quantum Computing</h3>
            <p>
              Quantum computing leverages the principles of quantum mechanics
              to process information in ways that classical computers cannot. It
              holds the potential to revolutionize fields like cryptography,
              artificial intelligence, and more.
            </p>
            <a
              href="https://en.wikipedia.org/wiki/Quantum_computing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>

          <div className="technology-card">
            <img
              src={fivegImage}
              alt="5G Networks"
              className="technology-image"
            />
            <h3>5G Networks</h3>
            <p>
              5G is the fifth generation of mobile network technology, offering
              faster speeds, lower latency, and more reliable connectivity for
              devices like smartphones, IoT devices, and autonomous vehicles.
            </p>
            <a
              href="https://en.wikipedia.org/wiki/5G"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>

          <div className="technology-card">
            <img
              src={edgeComputingImage}
              alt="Edge AI"
              className="technology-image"
            />
            <h3>Edge AI</h3>
            <p>
              Edge AI involves processing data locally on devices like sensors
              and cameras, reducing the need for cloud computing. This enables
              real-time decision-making, crucial for applications like autonomous
              vehicles and smart cities.
            </p>
            <a
              href="https://en.wikipedia.org/wiki/Edge_computing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="new-technologies-footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NewTechnologiesPage;
