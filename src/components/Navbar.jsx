import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <a href="/" className="nav-logo">Koustubh Kulkarni</a>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#certifications" className="nav-link">Certifications</a></li>
          <li><a href="#contact" className="btn" style={{ border: '1px solid var(--border-color)' }}>Contact</a></li>
        </ul>
        <div className="nav-actions">
            <a href="images/koustubh_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderRadius: '2.5rem' }}>Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
