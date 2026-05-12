import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <a href="/" className="nav-logo">Koustubh K.</a>
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#certifications" className="nav-link">Certifications</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="nav-actions">
           <a href="/backup_old_site/images/Koustubh_Kulkarni_Resume.pdf" target="_blank" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
