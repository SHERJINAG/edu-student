import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          setError('No token found. Please log in.');
          return;
        }

        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        setUpdatedUser({
          firstName: response.data.firstName || '',
          lastName: response.data.lastName || '',
          age: response.data.age || '',
          phoneNumber: response.data.phoneNumber || '',
        });
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        setError('No token found. Please log in.');
        return;
      }

      const response = await axios.put(
        'http://localhost:5000/api/profile',
        updatedUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="profile-container">
      <header className="dashboard-header">
        <img src="logo.png" alt="AI Student Logo" className="logo" />
        <h1 className="title">EDU-STUDENT SPARK Learning Platform</h1>
      </header>

      <section className="profile-section">
        {user && (
          <div>
            <h2 className="profile-title">Welcome, {user.firstName}</h2>
            <p className="profile-info">Email: {user.email}</p>

            {isEditing ? (
              <div className="profile-edit-form">
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    value={updatedUser.firstName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={updatedUser.lastName}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="number"
                    name="age"
                    value={updatedUser.age}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Phone Number:
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={updatedUser.phoneNumber}
                    onChange={handleInputChange}
                  />
                </label>
                <button className="save-button" onClick={handleSaveChanges}>Save Changes</button>
              </div>
            ) : (
              <div className="profile-info">
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Age: {user.age}</p>
                <p>Phone Number: {user.phoneNumber}</p>
                <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
              </div>
            )}
          </div>
        )}
      </section>

      <footer className="footer">
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
