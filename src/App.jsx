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
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="card" style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', border: 'none', background: 'transparent' }}>
               <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                 <a href="mailto:koustubh.kulkarni.ds@gmail.com" className="btn btn-outline" style={{ flex: 1 }}>Email</a>
                 <a href="https://www.linkedin.com/in/koustubh-kulkarni-24b298300/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1 }}>LinkedIn</a>
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
