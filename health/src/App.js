import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AnemiaDetection from './pages/AnemiaDetection';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import FindLocation from './pages/FindLocation';
import Login from './pages/Login';
import Upload from './pages/Upload';
import TermsOfService from './pages/TermsOfService';
import UserDashboard from './pages/UserDashboard';
import './assets/css/main.css';
import './assets/css/themes.css'; // Import themes.css for theme switching
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  useEffect(() => {
    // Apply the correct theme class to the body
    document.body.className = `theme-${theme}`;
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between dark and light themes
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          {/* Pass the current theme and toggle function to Header */}
          <Header theme={theme} toggleTheme={toggleTheme} />
          
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/about-us" element={<AboutUs theme={theme} />} />
            <Route path="/anemia-detection" element={<AnemiaDetection theme={theme} />} />
            <Route path="/contact-us" element={<ContactUs theme={theme} />} />
            <Route path="/faq" element={<FAQ theme={theme} />} />
            <Route path="/find-location" element={<FindLocation theme={theme} />} />
            <Route path="/login" element={<Login theme={theme} />} />
            <Route path="/upload" element={<Upload theme={theme} />} />
            <Route path="/tos" element={<TermsOfService theme={theme} />} />
            <Route path="/user-dashboard" element={<UserDashboard theme={theme} />} />
          </Routes>
          
          {/* Pass the theme to Footer */}
          <Footer theme={theme} />
        </div>
      </div>
    </Router>
  );
};

export default App;
