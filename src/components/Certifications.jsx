import React from 'react';
import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="section" style={{ minHeight: 'calc(100vh - 4.5rem)', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {certifications.map((cert) => (
            <div key={cert.id} className="card" style={{ textAlign: 'center', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                width: '100%', 
                height: '220px', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundColor: '#f1f5f9',
                borderRadius: '0.75rem'
              }}>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  style={{ 
                    maxHeight: '90%', 
                    maxWidth: '90%', 
                    objectFit: 'contain',
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
