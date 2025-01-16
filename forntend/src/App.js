import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/Mainpage";
import LoginPage from "./components/Loginpage";
import SignUpPage from "./components/SignUpPage"; // Import SignUpPage
import DashboardPage from "./components/Dashboard";
import TrackProgressPage from "./components/TrackProgressPage";
import RecommendedCoursesPage from "./components/RecommendedCoursesPage";
import  InteractiveQuizzesPage from './components/InteractiveQuizzesPage';
import AIChatbotPage from "./components/AIChatbotPage";
import SettingsPage from "./components/SettingsPage";
import NewTechnologiesPage from "./components/NewTechnologiesPage";
import LiveClassesPage from "./components/LiveClassesPage";
import DiscussionForumsPage from "./components/DiscussionForumsPage";
import CertificationsPage from "./components/CertificationsPage";
import SavedResourcesPage from "./components/SavedResourcesPage";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* MainPage handles all sections (Home, Features, About, Contact) */}
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Route for SignUp */}
        <Route path="/dashboard" element={<DashboardPage />} />
         <Route path="/track-progress" element={<TrackProgressPage />} />
        <Route path="/recommended-courses" element={<RecommendedCoursesPage />} />

        <Route path="/interactive-quizzes" element={<InteractiveQuizzesPage />} />
        <Route path="/ai-chatbot" element={<AIChatbotPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/new-technologies" element={<NewTechnologiesPage />} />
        <Route path="/live-classes" element={<LiveClassesPage />} />
        <Route path="/discussion-forums" element={<DiscussionForumsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/saved-resources" element={<SavedResourcesPage />} />
       <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
