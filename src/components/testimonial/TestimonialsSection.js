// src/components/TestimonialsSection.js
import React from 'react';
import testimonialsData from './testimonialsData'; // Adjust the path as necessary
import './TestimonialsSectionStyles.css'; // Path to your CSS file

const TestimonialItem = ({ name, position, testimonial }) => (
  <div className="testimonial-item">
    <p className="testimonial">{testimonial}</p>
    <h3 className="name">{name}</h3>
    <p className="position">{position}</p>
  </div>
);

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <h2>What Our Clients Say</h2>
    <div className="testimonials-grid">
      {testimonialsData.map(testimonial => (
        <TestimonialItem key={testimonial.id} {...testimonial} />
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
