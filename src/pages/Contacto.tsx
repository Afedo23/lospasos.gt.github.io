import React, { useState } from 'react'
import './pages.css'

const Contacto: React.FC = () => {
  const [enviado, setEnviado] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí integrarías un servicio de email o WhatsApp
    setEnviado(true)
    setTimeout(() => setEnviado(false), 5000)
  }

  return (
    <div className="page">
      <h1>Contacto</h1>
      
      <div className="contacto-grid">
        <div className="info-contacto">
          <h2>📞 Información de contacto</h2>
          <p><strong>Teléfono/WhatsApp:</strong> +502 1234 5678</p>
          <p><strong>Email:</strong> info@lospasosgt.com</p>
          <p><strong>Ubicación:</strong> Ciudad de Guatemala</p>
          <div className="redes-contacto">
            <p><strong>Síguenos:</strong></p>
            <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">WhatsApp</a>
          </div>
        </div>
        
        <div className="formulario-contacto">
          <h2>Escríbenos</h2>
          {enviado && <div className="mensaje-exito">¡Mensaje enviado! Te contactaremos pronto.</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre completo</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input type="tel" />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea rows={4} required></textarea>
            </div>
            <button type="submit" className="btn">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto