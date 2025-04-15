import React from 'react';
import './Testimonials.css';
import malePhoto from './male-testimonial.jpeg';  // Add these images to your components folder
import femalePhoto from './female-testimonial.jpeg';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonial-card">
        <div className="testimonial-image">
          <img src={malePhoto} alt="John Doe" />
        </div>
        <div className="testimonial-content">
          <h3>John Doe</h3>
          <p className="designation">Senior Software Engineer</p>
          <p className="description">
            "The exam platform provided an excellent experience. The interface was 
            intuitive and the questions were well-structured. I highly recommend 
            this platform for professional certifications."
          </p>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-image">
          <img src={femalePhoto} alt="Jane Smith" />
        </div>
        <div className="testimonial-content">
          <h3>Jane Smith</h3>
          <p className="designation">Project Manager</p>
          <p className="description">
            "Outstanding platform for online assessments. The system is reliable 
            and user-friendly. It has helped our organization streamline the 
            certification process significantly."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;