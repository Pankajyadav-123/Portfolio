import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import portfolioData from '../mock';
import './Hero.css';

const Hero = () => {
  const { personal, social } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter,
    Mail: Mail
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-label">
            <span className="label-dot"></span>
            <span>Hello, I'm</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-name">{personal.name}</span>
            <span className="hero-title-text">{personal.title}</span>
          </h1>
          <p className="hero-tagline">{personal.tagline}</p>

          

          <div className="hero-actions">
            <Button
              className="hero-btn primary-btn"
              onClick={handleContactClick}
            >
              Get In Touch
              <ArrowRight className="btn-icon" size={20} />
            </Button>
            <Button
              className="hero-btn secondary-btn"
              onClick={handleProjectsClick}
            >
              View Projects
            </Button>
          </div>

          <div className="hero-social">
            <span className="social-label">Follow Me:</span>
            {social.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <a
                  key={index}
                  href={item.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className={`hero-image-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="hero-image-container">
            <div className="image-glow"></div>
            <div className="image-frame">
              <img
                src={personal.image}
                alt={personal.name}
                className="hero-image"
              />
            </div>
            <div className="geometric-shape shape-1"></div>
            <div className="geometric-shape shape-2"></div>
            <div className="geometric-shape shape-3"></div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
