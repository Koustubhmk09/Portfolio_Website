import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)', minHeight: 'calc(100vh - 4.5rem)' }}>
      <div className="container">
        <h2 className="section-title">Projects and Experience</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {projects.map((project) => (
            <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                width: '100%', 
                height: '220px', 
                borderRadius: '0.75rem', 
                overflow: 'hidden',
                marginBottom: '1.5rem',
                backgroundColor: '#eee'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{project.title}</h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                marginBottom: '1.5rem', 
                flex: 1,
                fontSize: '0.95rem',
                color: 'var(--text-secondary)'
              }}>
                {project.points.map((point, index) => (
                  <li key={index} style={{ 
                    position: 'relative', 
                    paddingLeft: '1.5rem', 
                    marginBottom: '0.75rem',
                    lineHeight: '1.4'
                  }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      color: 'var(--accent-primary)',
                      fontWeight: 'bold'
                    }}>•</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: 'var(--accent-light)', 
                    color: 'var(--accent-primary)',
                    borderRadius: '2rem',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '0.6rem' }}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
