import React from 'react';
import './Home.css'; // Import the CSS for the Home component

function Home() {
  return (
    <div className="home-container">
      <div className="layout-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_330)">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor"></path>
            </g>
            <defs>
              <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="logo-text">Health AI</h2>
      </div>
      <nav className="nav">
        <div className="nav-links">
          <a className="nav-link" href="#">Services</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Blog</a>
        </div>
        <div className="nav-buttons">
          <button className="sign-up-button">Sign Up</button>
          <button className="log-in-button">Log In</button>
        </div>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-container">
        <HeroSection />
        <FeaturesSection />
        <AnemiaTestSection />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Revolutionizing Healthcare with AI</h1>
          <h2 className="hero-subtitle">We provide personalized health insights, doctor-reviewed reports, and a range of services to help you live your best life.</h2>
        </div>
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="features-section">
      <div className="features-content">
        <h1 className="features-title">Features</h1>
        <p className="features-description">We offer a range of features to help you manage your health, including AI anemia detection, generic medicine alternatives, and personalized diet recommendations. Our doctors review all reports before they're sent to you, so you can trust that the information you receive is accurate and reliable.</p>
      </div>
    </div>
  );
}

function AnemiaTestSection() {
  return (
    <div className="anemia-test-section">
      <div className="anemia-test-content">
        <h1 className="anemia-test-title">Take a free anemia test</h1>
        <div className="anemia-test-button-container">
          <button className="get-started-button grow">Get Started</button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a className="footer-link" href="#">Terms of Use</a>
          <a className="footer-link" href="#">Privacy Policy</a>
          <a className="footer-link" href="#">Accessibility</a>
          <a className="footer-link" href="#">Security</a>
        </div>
        <p className="footer-text">@2022 Health AI</p>
      </div>
    </footer>
  );
}

export default Home;