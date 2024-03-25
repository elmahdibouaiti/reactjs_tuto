// src/components/ServicesSection.js
import React from 'react';
import servicesData from './servicesData'; 
import './ServicesSectionStyles.css'; 

const ServiceItem = ({ title, description, icon }) => (
  <div className="service-item">
    <i className={icon}></i>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ServicesSection = () => (
  <section className="services-section">
    <h2>Our Services</h2>
    <div className="services-grid">
      {servicesData.map(service => (
        <ServiceItem key={service.id} {...service} />
      ))}
    </div>
  </section>
);

export default ServicesSection;
