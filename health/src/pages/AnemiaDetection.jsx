import React, { useContext } from 'react';
import './AnemiaDetection.css'; // Ensure this CSS file contains the necessary styles
import { ThemeContext } from '../ThemeContext'; // Context to handle dark/light themes
import { CameraIcon, ChatCircleDotsIcon, ClockIcon, EnvelopeOpenIcon, MagnifyingGlassIcon, MapPinIcon, OrangeSliceIcon, PhoneIcon, PillIcon } from '../components/Icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const AnemiaDetection = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate(); // Use navigate to redirect to the Upload page

  // Function to redirect to the Upload page when the camera icon is clicked
  const handleCameraClick = () => {
    navigate('/upload'); // Redirect to the Upload page
  };

  return (
    <div className={`anemia-detection ${theme}`}>
      <div className="layout-container">
        {/* Header Section */}
        <header className="header">
          <div className="header-left">
            <h2>Ironyman</h2>
          </div>
          <div className="header-right">
            <div className="header-buttons">
              <button><MagnifyingGlassIcon /></button>
              <button><ClockIcon /></button>
              <button><ChatCircleDotsIcon /></button>
              <button><EnvelopeOpenIcon /></button>
              <div className="user-avatar" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/replicate/44054395-3f26-4fc6-b930-e2ca89e11e0c.png")' }}></div>
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <div className="content">
          <div className="content-main">
            <h1>Anemia Detection Report</h1>
            <h2>AI Result</h2>
            <div className="ai-result">
              <div className="ai-result-step">
                <CameraIcon />
                <p>You submitted a photo of your palm and eye</p>
              </div>
              <div className="ai-result-step">
                <MagnifyingGlassIcon />
                <p>AI detected your hemoglobin level</p>
              </div>
              <div className="ai-result-step">
                <OrangeSliceIcon />
                <p>AI suggested a diet plan to improve your health</p>
              </div>
            </div>

            {/* Big Camera Icon to Upload */}
            <div className="big-camera-icon" onClick={handleCameraClick}>
              <CameraIcon style={{ fontSize: '80px', cursor: 'pointer' }} />
              <p>Click here to upload your photo</p>
            </div>

            {/* Hemoglobin Trend Chart */}
            <h2>Hemoglobin Level Trend</h2>
            <div className="hemoglobin-trend">
              <p>Your hemoglobin level over time</p>
              <div className="hemoglobin-chart">
                <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                    fill="url(#paint0_linear_1131_5935)"
                  ></path>
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                    stroke="#ABABAB"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <defs>
                    <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#292929"></stop>
                      <stop offset="1" stopColor="#292929" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="chart-labels">
                  <p>Nov 2021</p>
                  <p>Dec 2021</p>
                  <p>Jan 2022</p>
                  <p>Feb 2022</p>
                  <p>Mar 2022</p>
                  <p>Apr 2022</p>
                  <p>May 2022</p>
                </div>
              </div>
            </div>

            {/* Diet Plan */}
            <h2>Your Diet Plan</h2>
            <p className="diet-plan-description">
              Follow the diet plan suggested to improve your hemoglobin levels. Regular tests will help track your progress.
            </p>
            <div className="diet-plan">
              <div className="diet-item" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/12750659-a835-4cae-a38c-3076c07ece97.png")' }}></div>
              <div className="diet-item" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/509db217-644a-406c-8bcc-80aacf8982ee.png")' }}></div>
              <div className="diet-item" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/7e1b07a0-d1df-4851-9e55-f07f41edc1da.png")' }}></div>
            </div>

            {/* Medicine Alternatives */}
            <h2>Medicine Alternatives</h2>
            <div className="medicine-alternatives">
              <div className="medicine-item">
                <PillIcon />
                <div className="medicine-info">
                  <p className="medicine-name">Qingming Capsules</p>
                  <p className="medicine-type">Generic medicine</p>
                </div>
                <p className="medicine-price">$25.00</p>
              </div>
              <div className="medicine-item">
                <PillIcon />
                <div className="medicine-info">
                  <p className="medicine-name">Qingming Capsules</p>
                  <p className="medicine-type">Generic medicine</p>
                </div>
                <p className="medicine-price">$25.00</p>
              </div>
            </div>

            {/* Nearest Medicine Store */}
            <h2>Nearest Generic Medicine Store</h2>
            <div className="nearest-store">
              <MapPinIcon />
              <div className="store-info">
                <p className="store-name">Generic Medicine Store</p>
                <p className="store-address">Store address</p>
              </div>
              <button className="get-directions">Get Directions</button>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="content-sidebar">
            <div className="sidebar-section">
              <div className="sidebar-info">
                <p>Hemoglobin Level</p>
                <p className="sidebar-value">12.3 g/dL</p>
                <p>Normal: 12.0-16.0 g/dL</p>
              </div>
              <div className="sidebar-image" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/8e64f0bf-5c83-4666-bfe4-bf890a77e8d2.png")' }}></div>
            </div>
            <div className="sidebar-section">
              <div className="sidebar-info">
                <p>Diet Plan</p>
                <p className="sidebar-value">Eat more iron-rich foods</p>
                <p>Spinach, lentils, tofu, pumpkin seeds, quinoa, turkey, beef, chicken, fish, oysters</p>
              </div>
              <div className="sidebar-image" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/2deb028a-a813-435b-9ee5-a6c6f0e90241.png")' }}></div>
            </div>
            <button className="download-report">Download Report</button>
            <button className="start-chat">
              <ChatCircleDotsIcon />
              Start Chat
            </button>
            <h3>Need Help?</h3>
            <div className="support-info">
              <div className="support-item">
                <ClockIcon />
                <div className="support-text">
                  <p>Support Hours</p>
                  <p>Mon-Fri, 9am-5pm (PST)</p>
                </div>
              </div>
              <div className="support-item">
                <PhoneIcon />
                <div className="support-text">
                  <p>Phone</p>
                  <p>+1-800-555-1234</p>
                </div>
              </div>
              <div className="support-item">
                <EnvelopeOpenIcon />
                <div className="support-text">
                  <p>Email</p>
                  <p>support@ironyman.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnemiaDetection;
