import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TripDetailsPage from "./pages/TripDetailsPage";
import AccountPage from "./pages/AccountPage";
import PreferencePage from "./pages/PreferencePage";
import NotoficationsPage from "./pages/NotificationsPage";
import HelpAndSupportPage from "./pages/HelpAndSupportPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tripDetails" element={<TripDetailsPage/>} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/preference" element={<PreferencePage/>} />
        <Route path="/notifications" element={<NotoficationsPage/>} />
        <Route path="/help" element={<HelpAndSupportPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
