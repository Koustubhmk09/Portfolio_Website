import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Certifications />

        <section id="contact" className="section" style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          minHeight: 'calc(100vh - 4.5rem)', 
          display: 'flex', 
          alignItems: 'center' 
        }}>
          <div className="container" style={{ width: '100%' }}>
            <h2 className="section-title">Contact</h2>
            <div className="card" style={{ 
              maxWidth: '700px', 
              margin: '0 auto', 
              padding: '4rem 2rem', 
              textAlign: 'center',
              backgroundColor: 'var(--bg-primary)',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: '2rem'
            }}>
               <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Let's Build Something Together</h3>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                 I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
               </p>
               <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                 <a href="mailto:koustubh.kulkarni.ds@gmail.com" className="btn btn-outline" style={{ padding: '1rem 3rem', minWidth: '180px' }}>Email</a>
                 <a href="https://www.linkedin.com/in/koustubh-kulkarni-24b298300/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 3rem', minWidth: '180px' }}>LinkedIn</a>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Koustubh Kulkarni. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
