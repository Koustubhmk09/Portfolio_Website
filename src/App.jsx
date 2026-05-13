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
          alignItems: 'center',
          padding: '4rem 1.5rem'
        }}>
          <div className="container" style={{ width: '100%' }}>
            <h2 className="section-title">Contact</h2>
            <div className="card" style={{ 
              maxWidth: '800px', 
              margin: '0 auto', 
              padding: '5rem 3rem', 
              textAlign: 'center',
              background: 'white',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              borderRadius: '2.5rem',
              border: '1px solid var(--border-color)'
            }}>
               <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Let's Start a Conversation</h3>
               <p style={{ color: 'var(--text-secondary)', marginBottom: '3.5rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
                 Interested in working together? Feel free to reach out via email or LinkedIn.
               </p>
               <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
                 <a href="mailto:koustubh.kulkarni.ds@gmail.com" className="btn btn-outline" style={{ padding: '1.2rem 4rem', fontSize: '1.1rem', minWidth: '220px' }}>Email</a>
                 <a href="https://www.linkedin.com/in/koustubh-kulkarni-24b298300/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1.2rem 4rem', fontSize: '1.1rem', minWidth: '220px' }}>LinkedIn</a>
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
