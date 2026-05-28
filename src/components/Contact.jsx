import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import portfolioData from '../mock';
import { portfolioApi } from '../services/api';
import './Contact.css';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await portfolioApi.submitContact(formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-description">
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="detail-label">Email</h4>
                  <a href={`mailto:${personal.email}`} className="detail-value">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="detail-label">Phone</h4>
                  <a href={`tel:${personal.phone}`} className="detail-value">
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="detail-label">Location</h4>
                  <p className="detail-value">{personal.location}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject *
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder="Tell me about your project..."
                rows={6}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
