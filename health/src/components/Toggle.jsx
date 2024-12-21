import React from 'react';

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div className="toggle-container" style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === 'dark' ? '#333' : '#fff',
          color: theme === 'dark' ? '#fff' : '#333',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default Toggle;
