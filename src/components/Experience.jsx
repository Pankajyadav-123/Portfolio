import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import portfolioData from '../mock';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;
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
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="timeline">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Briefcase size={20} />
                </div>
                {index < experience.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-position">{exp.position}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-date">
                      {exp.startDate} - {exp.endDate}
                    </span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="achievement-list">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
