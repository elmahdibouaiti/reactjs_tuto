// src/components/hero/Hero.js
import React from 'react';
import './HeroStyles.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Welcome to Our React Project</h1>
      <p>Discover the amazing world of React.</p>
      <button className="hero-btn">Learn More</button>
    </div>
  );
}

export default Hero;
