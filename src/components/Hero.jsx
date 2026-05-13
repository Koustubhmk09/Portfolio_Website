import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="section fade-in" style={{ 
      minHeight: 'calc(100vh - 4.5rem)', 
      display: 'flex', 
      alignItems: 'center' 
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
        <div className="hero-content">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>
            Hi, I’m <span style={{ color: 'var(--accent-primary)' }}>Koustubh Kulkarni</span>
          </h1>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Data Science Student & Aspiring Analytics Engineer
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
            Final-year B.Tech Data Science student and <strong>Data Analyst Intern at QualTech Software</strong>, specializing in building and deploying APIs in live production environments. I operate across the <strong>full data stack</strong>—engineering SQL and Python pipelines, developing AI systems, and architecting interactive dashboards. My focus is on leveraging analytical skills to drive high-impact decision-making.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '1rem' }}>
            <a href="#contact" className="btn btn-primary">Contact</a>
          </div>
        </div>
        <div className="hero-image" style={{ position: 'relative' }}>
          <div style={{ 
            width: '100%', 
            paddingBottom: '100%', 
            borderRadius: '15%', 
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <img 
              src="images/kk09.jpeg" 
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
