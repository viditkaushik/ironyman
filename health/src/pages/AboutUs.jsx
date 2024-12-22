import React, { useState, useEffect } from 'react';
import './AboutUs.css';

function AboutUs() {
  const [theme, setTheme] = useState('theme-light'); // Default theme

  useEffect(() => {
    // Update the body class whenever the theme changes
    document.documentElement.className = theme; // Use documentElement to apply CSS variables globally
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme((prevTheme) =>
      prevTheme === 'theme-light' ? 'theme-dark' : 'theme-light'
    );
  };

  return (
    <div className="aboutus-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/video-2.mp4" type="video/mp4" />
      </video>
      <div className="layout-container">
        <MainContent toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

function MainContent({ toggleTheme }) {
  return (
    <div className="main-content">
      <div className="content-container">
        <HeroSection toggleTheme={toggleTheme} />
        <HowItWorksSection />
      </div>
    </div>
  );
}

function HeroSection({ toggleTheme }) {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title text-center">
          We're on a mission to make healthcare more affordable and accessible
        </h1>
        <div className="hero-buttons">
          <button onClick={toggleTheme} className="get-started-button">
            <span className="truncate">Toggle Theme</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="how-it-works-section">
      <h1 className="section-title">How it works</h1>
    </div>
  );
}

export default AboutUs;
