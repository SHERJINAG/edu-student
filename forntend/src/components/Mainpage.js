import { useLocation } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/logo.png"; // Your logo

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <img src={myLogo} alt="AI Student Logo" style={styles.logo} />
        <h1 style={styles.title}>EDU-STUDENT SPARK Learning Platform</h1>
      </header>

      {/* Navigation Links */}
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#features" style={styles.navLink}>Features</a>
        <a href="#about" style={styles.navLink}>About Us</a>
        <a href="#contact" style={styles.navLink}>Contact Us</a>
        <Link to="/login" style={styles.navLink}>Login</Link>
      </nav>

      {/* Home Section */}
      <section id="home" style={styles.section}>
        <h2 style={styles.sectionTitle}>Welcome to the AI-Powered Student Dashboard</h2>
        <p style={styles.description}>
          Personalized learning experience, real-time analytics, interactive quizzes, and more.
        </p>
        <Link to="/signup">
          <button style={styles.getStartedButton}>Get Started</button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.section}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <div style={styles.cardContainer}>
          {/* Feature Card 1 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Personalized Learning</h3>
            <p style={styles.cardDescription}>
              Tailored learning experiences that adapt to the individual needs of each student.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Real-Time Analytics</h3>
            <p style={styles.cardDescription}>
              Get live feedback and data on your learning progress and areas for improvement.
            </p>
          </div>
          {/* Feature Card 3 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Interactive Quizzes</h3>
            <p style={styles.cardDescription}>
              Engage in quizzes that test your knowledge, helping you retain information better.
            </p>
          </div>
          {/* Feature Card 4 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Gamification</h3>
            <p style={styles.cardDescription}>
              Earn points and rewards as you complete tasks, making learning more fun and engaging.
            </p>
          </div>
          {/* Feature Card 5 */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>AI-Powered Recommendations</h3>
            <p style={styles.cardDescription}>
              Receive suggestions for further reading and exercises based on your performance and interests.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.aboutDescription}>
          The AI Student Dashboard is a platform designed to enhance student learning with personalized
          recommendations, real-time analytics, and adaptive learning paths. We are passionate about using
          Artificial Intelligence to help students learn more efficiently and effectively.
        </p>
        <p style={styles.aboutDescription}>
          Our platform leverages state-of-the-art AI technologies, including machine learning and natural
          language processing, to provide an experience that adapts to each student’s learning style and
          progress. We believe in empowering students to take control of their learning journey.
        </p>
      </section>

      {/* Contact Us Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.contactDescription}>
          For any inquiries or support, feel free to reach out to us at:
        </p>
        <p style={styles.contactDescription}>
          <strong>Email:</strong> <a href="mailto:support@aistudentdashboard.com" style={styles.contactLink}>support@aistudentdashboard.com</a>
        </p>
        <p style={styles.contactDescription}>
          <strong>Phone:</strong> +1 234 567 890
        </p>
        <p style={styles.contactDescription}>
          You can also follow us on social media for updates and more:
        </p>
        <div style={styles.socialLinks}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>LinkedIn</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2025 EDU-STUDENT SPARK Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#007BFF",
    padding: "20px 50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    width: "50px",
    height: "auto",
  },
  title: {
    color: "white",
    marginTop: "10px",
    fontSize: "30px",
    textAlign: "center",
  },
 nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
    backgroundColor: "#007BFF",
    padding: "10px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    flexWrap: "wrap", // Ensures wrapping on smaller screens
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
    textAlign: "center", // Ensures proper alignment
  },
  // Media Query for Mobile View
  '@media (max-width: 768px)': {
    navLink: {
      fontSize: "14px",
      padding: "5px 10px", // Compact padding
    },
  },
  section: {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #ccc",
  },
  sectionTitle: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "20px",
  },
  getStartedButton: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "16px",
    color: "#555",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  aboutDescription: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "20px",
  },
  contactDescription: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "20px",
  },
  contactLink: {
    color: "#007BFF",
    textDecoration: "none",
  },
  footer: {
    backgroundColor: "#343a40",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  socialLinks: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  socialLink: {
    color: "#007BFF",
    textDecoration: "none",
    fontSize: "18px",
  },

};

export default MainPage;
