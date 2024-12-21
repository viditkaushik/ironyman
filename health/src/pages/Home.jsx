import React from 'react';
import './Home.css'; // Import the CSS for the Home component
import Header from '../components/Header'; // Adjust the path as necessary
import Footer from '../components/Footer';

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

export default Home;