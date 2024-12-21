import React from 'react';
import './AboutUs.css'; // Import the CSS for the AboutUs component

function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="layout-container">
        <div className="main-content">
          <div className="content-container">
            <HeroSection />
            <HowItWorksSection />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title text-center">
          We're on a mission to make healthcare more affordable and accessible
        </h1>
        <div className="hero-buttons">
          <button className="get-started-button">
            <span className="truncate">Get started</span>
          </button>
          <button className="learn-more-button">
            <span className="truncate">Learn more</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="how-it-works-section">
      <h1 className="section-title">
        How it works
      </h1>
    </div>
  );
}

export default AboutUs;