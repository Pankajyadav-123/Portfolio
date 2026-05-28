import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import portfolioData from '../mock';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <Button className="view-project-btn">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="project-content">
                {project.featured && (
                  <Badge className="featured-badge">Featured</Badge>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="project-dialog">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="dialog-title">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="dialog-body">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="dialog-image"
                />
                <p className="dialog-description">{selectedProject.description}</p>
                <div className="dialog-technologies">
                  <h4 className="dialog-subtitle">Technologies Used:</h4>
                  <div className="dialog-tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} className="dialog-tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="dialog-actions">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dialog-link"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dialog-link primary"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
