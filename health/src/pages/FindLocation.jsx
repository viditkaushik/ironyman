import React from 'react';
import './FindLocation.css'; // Import the CSS for the FindLocation component

function FindLocation() {
  return (
    <div className="location-container">
      <div className="layout-container">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="logo-text">Pharmacy</h2>
      </div>
      <div className="search-container">
        <label className="search-label">
          <div className="search-input-container">
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input className="search-input" placeholder="Search" />
          </div>
        </label>
        <div className="profile-picture" style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/5409398a-59f9-47bc-90e1-1f2dd84e2fcb.png")' }}></div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-container">
        <MapSection />
        <NearbyStores />
      </div>
    </div>
  );
}

function MapSection() {
  return (
    <div className="map-section">
      <div className="map-container">
        <label className="map-search-label">
          <div className="map-search-input-container">
            <div className="map-search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input className="map-search-input" />
          </div>
        </label>
        <div className="map-controls">
          <div className="zoom-controls">
            <button className="zoom-button">
              <div className="zoom-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                </svg>
              </div>
            </button>
            <button className="zoom-button">
              <div className="zoom-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
                </svg>
              </div>
            </button>
          </div>
          <button className="navigation-button">
            <div className="navigation-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" transform="scale(-1, 1)">
                <path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function NearbyStores() {
  return (
    <div className="stores-section">
      <h2 className="stores-title">Nearby Stores</h2>
      {[
        { name: 'CVS Pharmacy', distance: '1.5 miles away' },
        { name: 'Walgreens', distance: '2.3 miles away' },
        { name: 'Rite Aid', distance: '3.5 miles away' },
        { name: 'Walmart Pharmacy', distance: '4.2 miles away' },
        { name: 'Kaiser Permanente', distance: '5.0 miles away' },
      ].map(store => (
        <div className="store-item" key={store.name}>
          <div className="store-info">
            <p className="store-name">{store.name}</p>
            <p className="store-distance">{store.distance}</p>
          </div>
          <div className="store-direction">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FindLocation;