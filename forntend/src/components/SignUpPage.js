import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignUpPage.css';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Sign-up successful:', data);
      alert('Sign-up successful! Please log in.');
      navigate('/login'); // Redirect to the login page
    } else {
      console.error('Sign-up failed:', data.message);
      alert(data.message);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
    alert('Something went wrong. Please try again.');
  }
};


  return (
    <div className="signup-container">
      <header className="signup-header">
        <img src="logo.png" alt="AI Student Logo" className="logo" />
        <h1 className="title">EDU-STUDENT SPARK Learning Platform</h1>
      </header>

      <section className="signup-section">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="email" className="label">
            Email
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="password" className="label">
            Password
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label htmlFor="confirm-password" className="label">
            Confirm Password
            <input
              type="password"
              id="confirm-password"
              className="input-field"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUpPage;
