import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import App from './App';
import './assets/css/main.css';  // Ensure the path is correct
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';
import './assets/css/themes.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(console.log);