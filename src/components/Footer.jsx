import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, MapPin, Phone, ArrowUp } from 'lucide-react';
import portfolioData from '../mock';
import './Footer.css';

const Footer = () => {
  const { personal, social } = portfolioData;
  const currentYear = new Date().getFullYear();

  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter,
    Mail: Mail
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top-bar">
        <div className="container">
          <div className="footer-cta">
            <h3>Let's Work Together</h3>
            <p>Have a project in mind? Let's create something amazing.</p>
            <button className="footer-cta-btn" onClick={() => scrollToSection('#contact')}>
              Start a Project
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Pankaj Yadav</h3>
            <p className="footer-tagline">{personal.tagline}</p>
            <div className="footer-social">
              {social.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={index}
                    href={item.url}
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links-list">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-contact-title">Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <Mail size={16} />
                <a href={`mailto:${personal.email}`} className="footer-contact-link">
                  {personal.email}
                </a>
              </li>
              <li>
                <Phone size={16} />
                <a href={`tel:${personal.phone}`} className="footer-contact-link">
                  {personal.phone}
                </a>
              </li>
              <li>
                <MapPin size={16} />
                <span className="footer-contact-text">{personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart className="heart-icon" size={16} fill="#FF6B35" color="#FF6B35" /> by {personal.name}
          </p>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
