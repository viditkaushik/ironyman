import React from 'react';
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

const App = () => {
  return (
    <Router>
      <div className="relative flex size-full min-h-screen flex-col bg-black dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/anemia-detection" element={<AnemiaDetection />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/find-location" element={<FindLocation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/tos" element={<TermsOfService />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
