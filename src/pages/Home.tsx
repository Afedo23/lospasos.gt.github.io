import React from 'react'
import './pages.css'

const Home: React.FC = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Los Pasos GT</h1>
          <p className="tagline">Fotografía Sacra y Devocional</p>
          <p>Capturamos la esencia espiritual de tus momentos más importantes con respeto y arte.</p>
          <button className="btn" onClick={() => document.getElementById('servicios')?.scrollIntoView({behavior: 'smooth'})}>
            Conoce nuestros servicios
          </button>
        </div>
      </section>

      <section id="servicios" className="services-section">
        <h2>Servicios Fotográficos</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">⛪</div>
            <h3>Fotografía Sacra</h3>
            <p>Ceremonias religiosas, misas, retiros espirituales y eventos parroquiales.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💍</div>
            <h3>Bodas Religiosas</h3>
            <p>El día más importante bajo la bendición de Dios, capturado con devoción.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🍞</div>
            <h3>Primeras Comuniones</h3>
            <p>La pureza y alegría de este sacramento especial.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🕊️</div>
            <h3>Confirmaciones</h3>
            <p>El momento de fortalecer la fe y recibir el Espíritu Santo.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>Graduaciones</h3>
            <p>Tu esfuerzo y logros celebrados con elegancia.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💧</div>
            <h3>Bautizos</h3>
            <p>El nacimiento a la vida cristiana, un recuerdo para siempre.</p>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <h2>Testimonios</h2>
        <div className="testimonial-card">
          <p>"Capturaron la esencia espiritual de la confirmación de mi hija. Fotos que atesoramos por siempre."</p>
          <span>- Familia López</span>
        </div>
      </section>
    </div>
  )
}

export default Home