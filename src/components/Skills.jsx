import React, { useEffect, useRef } from 'react';
import { 
  Code2, Server, Database, Cloud, Package, GitBranch, Paintbrush, Layers, Cpu,
  Zap, Terminal, Container, Layout, Workflow, Sparkles, Code, ServerCog
} from 'lucide-react';
import portfolioData from '../mock';
import './Skills.css';

const Skills = () => {
  const { skillCategories } = portfolioData;
  const sectionRef = useRef(null);

  const iconMap = {
    Code2: Code2,
    Server: Server,
    Database: Database,
    Cloud: Cloud,
    Package: Package,
    GitBranch: GitBranch,
    Paintbrush: Paintbrush
  };

  const categoryConfig = {
    frontend: {
      icon: <Layout size={28} />,
      title: 'Frontend Development',
      subtitle: 'Creating responsive, interactive user interfaces',
      expertise: {
        icon: <Layers />,
        title: 'UI/UX Excellence',
        desc: 'Building intuitive, accessible interfaces with modern design patterns'
      }
    },
    backend: {
      icon: <ServerCog size={28} />,
      title: 'Backend Development',
      subtitle: 'Building robust server-side solutions',
      expertise: {
        icon: <Cpu />,
        title: 'System Architecture',
        desc: 'Designing scalable, secure APIs and microservices'
      }
    },
    tools: {
      icon: <Terminal size={28} />,
      title: 'DevOps & Tools',
      subtitle: 'Streamlining development workflows',
      expertise: {
        icon: <Zap />,
        title: 'Automation',
        desc: 'CI/CD pipelines and development efficiency'
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.skill-progress-fill');
            progressBars.forEach((bar) => {
              const percentage = bar.getAttribute('data-percentage');
              setTimeout(() => {
                bar.style.width = percentage + '%';
              }, 200);
            });
          }
        });
      },
      { threshold: 0.15 }
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

  const renderSkills = (skills, delay = 0) => {
    return skills.map((skill, index) => {
      const Icon = iconMap[skill.icon] || Code;
      return (
        <div
          key={skill.id}
          className="skill-item"
          style={{ animationDelay: `${(delay + index) * 0.08}s` }}
        >
          <div className="skill-header">
            <div className="skill-info">
              <div className="skill-icon-wrapper">
                <Icon size={18} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
            <span className="skill-percentage">{skill.percentage}%</span>
          </div>
          <div className="skill-progress-container">
            <div className="skill-progress-bar">
              <div
                className="skill-progress-fill"
                data-percentage={skill.percentage}
                style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` }}
              ></div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderCategory = (categoryKey, skills, baseDelay) => {
    const config = categoryConfig[categoryKey];
    return (
      <div className="skill-category">
        <div className="category-header">
          <div className="category-icon-wrapper">
            {config.icon}
          </div>
          <div className="category-info">
            <h3 className="category-title">{config.title}</h3>
            <p>{config.subtitle}</p>
          </div>
        </div>
        <div className="skills-grid">
          {renderSkills(skills, baseDelay)}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className="skills-categories">
          {renderCategory('frontend', skillCategories.frontend, 0)}
          {renderCategory('backend', skillCategories.backend, 4)}
          {renderCategory('tools', skillCategories.tools, 8)}
        </div>

        {/* Expertise Summary */}
        <div className="expertise-summary">
          <div className="expertise-card">
            <div className="expertise-icon">
              <Layers size={28} />
            </div>
            <h4 className="expertise-title">Full Stack Development</h4>
            <p className="expertise-desc">
              End-to-end development from frontend interfaces to backend APIs
            </p>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon">
              <Sparkles size={28} />
            </div>
            <h4 className="expertise-title">Modern Frameworks</h4>
            <p className="expertise-desc">
              Expert in React, Node.js, and cutting-edge web technologies
            </p>
          </div>
          <div className="expertise-card">
            <div className="expertise-icon">
              <Container size={28} />
            </div>
            <h4 className="expertise-title">Scalable Solutions</h4>
            <p className="expertise-desc">
              Building robust applications optimized for performance and growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
