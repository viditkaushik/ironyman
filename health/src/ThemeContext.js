// src/ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the theme
export const ThemeContext = createContext();

// Custom hook to access theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  useEffect(() => {
    // Check if a theme is stored in localStorage, if so, use it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default theme is light if nothing is stored in localStorage
      localStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    // Check the user's system theme preference
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      // If the theme is not manually set, update based on system preference
      if (!localStorage.getItem('theme')) {
        setTheme(matchMedia.matches ? 'dark' : 'light');
      }
    };

    // Set initial theme based on system preference if not set by the user
    handleThemeChange();

    // Add listener to handle system theme changes
    matchMedia.addEventListener('change', handleThemeChange);

    // Cleanup listener on component unmount
    return () => {
      matchMedia.removeEventListener('change', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    // Apply the theme to the body element
    document.body.className = theme;
    // Store the selected theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle the theme and update the state
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
