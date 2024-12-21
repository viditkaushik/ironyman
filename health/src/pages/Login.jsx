import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS for the Login component

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('theme-light'); // Default theme
  const navigate = useNavigate();

  useEffect(() => {
    // Update the body class whenever the theme changes
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme((prevTheme) =>
      prevTheme === 'theme-light' ? 'theme-dark' : 'theme-light'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here

    // Redirect to the user dashboard after successful login
    navigate('/user-dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-title">Log in to your account</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <button onClick={toggleTheme} className="login-button">Toggle Theme</button>
      </div>
    </div>
  );
}

export default Login;
