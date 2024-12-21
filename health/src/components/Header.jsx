import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS for the Header component
import './assets/css/themes.css';
function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_330)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
              ></path>
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
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about-us">About Us</Link>
          <Link className="nav-link" to="/anemia-detection">Anemia Detection</Link> {/* New Link Added */}
          <Link className="nav-link" to="/find-location">Find Location</Link>
        </div>
        <Link to="/login">
          <button className="login-button">
            <span className="truncate">Log in</span>
          </button>
        </Link>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-button">
          Switch to {theme === 'dark' ? 'light' : 'dark'} theme
        </button>
    </header>
  );
}

export default Header;