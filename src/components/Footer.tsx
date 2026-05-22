import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
          <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
          <a href="https://wa.me/502XXXXXXXX" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
        </div>
        <div className="copyright">
          <p>© 2026 Los Pasos GT - Fotografía Sacra y Devocional</p>
          <p className="license">Todos los derechos reservados. Las imágenes y contenido de este sitio están protegidos por derechos de autor.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer