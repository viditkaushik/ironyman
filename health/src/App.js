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
import './assets/css/themes.css'; // Import themes.css
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className={`relative flex size-full min-h-screen flex-col overflow-x-hidden theme-${theme}`} style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
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
          <Footer theme={theme} />
        </div>
      </div>
    </Router>
  );
};

export default App;