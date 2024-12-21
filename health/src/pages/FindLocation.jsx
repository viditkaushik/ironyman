// LocationFinder.jsx
import React, { useEffect, useRef } from 'react';
import './FindLocation.css';
import { useTheme } from '../ThemeContext'; // Import the custom hook

function LocationFinder() {
  const { theme } = useTheme(); // Access current theme from context

  return (
    <div className={`location-finder-container ${theme}`}>
      <div className="layout-container">
        <Header theme={theme} />
        <MainContent />
      </div>
    </div>
  );
}

function Header({ theme }) {
  return (
    <div className={`header ${theme}`}>
      <h2 className="header-title">Location Finder</h2>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-container">
        <LocationSearchSection />
        <NearbyStoresSection />
        <MapSection />
      </div>
    </div>
  );
}

function LocationSearchSection() {
  return (
    <div className="search-section">
      <input className="location-search-input" placeholder="Search for stores..." />
    </div>
  );
}

function NearbyStoresSection() {
  return (
    <div className="stores-section">
      <h3 className="stores-title">Nearby Stores</h3>
      <div className="store-item">
        <div className="store-info">
          <div className="store-name">Store 1</div>
          <div className="store-distance">2 km away</div>
        </div>
        <button className="store-direction">→</button>
      </div>
    </div>
  );
}

function MapSection() {
  const mapRef = useRef(null); // Reference for the map container

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current && window.google) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 40.730610, lng: -73.935242 }, // Default location (New York)
          zoom: 12, // Default zoom level
        });

        const marker = new window.google.maps.Marker({
          position: { lat: 40.730610, lng: -73.935242 },
          map: map,
          title: "Store Location",
        });
      }
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      window.initMap = initMap;
    }
  }, []);

  return <div className="map-container" ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
}

export default LocationFinder;
