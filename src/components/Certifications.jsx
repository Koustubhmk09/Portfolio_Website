import React from 'react';
import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {certifications.map((cert) => (
            <div key={cert.id} className="card" style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ 
                width: '100%', 
                height: '240px', 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  style={{ 
                    maxHeight: '100%', 
                    maxWidth: '100%', 
                    objectFit: cert.id === 6 ? 'cover' : 'contain',
                    objectPosition: cert.id === 6 ? 'top' : 'center',
                    transform: cert.id === 7 ? 'rotate(90deg)' : 'none',
                    borderRadius: '0.25rem'
                  }}
                />
              </div>
              <p style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{cert.title}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
