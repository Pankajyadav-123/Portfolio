import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import portfolioData from '../mock';
import './Testimonials.css';

const Testimonials = () => {
  const { testimonials } = portfolioData;
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What People Say</span>
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
