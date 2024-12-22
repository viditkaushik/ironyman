import React, { useState, useEffect } from 'react';
import './Upload.css';

const Upload = ({ theme }) => {
  // Apply background and text color based on the theme
  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#121212'; // Dark background
      document.body.style.color = '#fff'; // Light text for dark theme
    } else {
      document.body.style.backgroundColor = '#ffffff'; // White background for light theme
      document.body.style.color = '#000'; // Dark text for light theme
    }
  }, [theme]);

  return (
    <div className={`upload-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="content">
        <div className="upload-instructions">
          <h2 className="upload-title" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
            Upload Palm or Eye Photos
          </h2>
          <p className="upload-description" style={{ color: theme === 'dark' ? '#ddd' : '#333' }}>
            To help us detect anemia, upload photos of your palm or eyes. Make sure the lighting is good and that the area is clear of any obstructions.
          </p>
        </div>

        <div className="image-grid">
          <div className="image-item" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/9d0d5ee7-813c-4718-a27c-ee01b26635d1.png")' }}></div>
          <div className="image-item" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/cbe7d85d-0195-42a6-956f-ebdbcab7b2a3.png")' }}></div>
        </div>

        <div className="upload-input-container">
          <label className="upload-label">
            <p className="upload-label-text">Upload Image</p>
            <input className="upload-input" type="file" />
          </label>
        </div>

        <div className="click-picture-container">
          <button className="upload-button">Click Picture</button>
        </div>

        <p className="photo-advice" style={{ color: theme === 'dark' ? '#ddd' : '#333' }}>
          We recommend using a high-quality camera and taking the photo in natural light.
        </p>

        <h3 className="why-title" style={{ color: theme === 'dark' ? '#ddd' : '#333' }}>
          Why are we asking for this?
        </h3>
        <p className="why-description" style={{ color: theme === 'dark' ? '#ddd' : '#333' }}>
          Anemia is a condition in which there is a deficiency of red cells or of hemoglobin in the blood, resulting in pallor and weariness. The AI model will use these images to detect whether you have this condition.
        </p>

        {/* Submit button */}
        <div className="submit-button-container">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
