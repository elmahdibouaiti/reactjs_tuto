// src/components/featureSection/FeatureSection.js
import React from 'react';
import './FeatureSectionStyles.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-container">
        <div className="feature">
          <i className="feature-icon fas fa-code"></i>
          <h3>High-Quality Code</h3>
          <p>Our project emphasizes clean, maintainable code.</p>
        </div>
        <div className="feature">
          <i className="feature-icon fas fa-mobile-alt"></i>
          <h3>Responsive Design</h3>
          <p>Designed to work on all devices and screen sizes.</p>
        </div>
        <div className="feature">
          <i className="feature-icon fas fa-users"></i>
          <h3>User-Centric</h3>
          <p>We prioritize the user experience in every design decision.</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
