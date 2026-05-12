import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="section fade-in" style={{ paddingBottom: '2rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
        <div className="hero-content">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>
            Hi, I’m <span style={{ color: 'var(--accent-primary)' }}>Koustubh Kulkarni</span>
          </h1>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Data Science Student & Aspiring Analytics Engineer
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
            I’m a B.Tech Computer Science (Data Science) student with a strong interest in data analytics and data-driven problem solving. I enjoy preparing, analyzing, and interpreting datasets to derive meaningful insights.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn" style={{ border: '1px solid var(--border-color)' }}>Get in Touch</a>
          </div>
        </div>
        <div className="hero-image" style={{ position: 'relative' }}>
          <div style={{ 
            width: '100%', 
            paddingBottom: '100%', 
            borderRadius: '2rem', 
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <img 
              src="/images/kk09.jpeg" 
              alt="Koustubh Kulkarni" 
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
