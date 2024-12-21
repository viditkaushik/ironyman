import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import App from './App';
import './assets/css/main.css';  // Ensure the path is correct
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(console.log);