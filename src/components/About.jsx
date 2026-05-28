import React, { useEffect, useRef } from 'react';
import portfolioData from '../mock';
import './About.css';

const About = () => {
  const { personal, stats } = portfolioData;
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
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get To Know More</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">{personal.bio}</p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Email:</span>
                <a href={`mailto:${personal.email}`} className="info-value">
                  {personal.email}
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{personal.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <a href={`tel:${personal.phone}`} className="info-value">
                  {personal.phone}
                </a>
              </div>
            </div>

            <a href={personal.resume} download className="download-resume-btn">
              Download Resume
            </a>
          </div>

          <div className="about-photo">
            <img src={personal.image} alt={personal.name} className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
