import React, { useState } from 'react'
import './pages.css'

type TipoEvento = 'boda' | 'comunion' | 'confirmacion' | 'bautizo' | 'graduacion' | 'sesion'

const Cotizaciones: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: 'boda' as TipoEvento,
    fechaEvento: '',
    invitados: '',
    mensaje: ''
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí enviarías los datos a tu sistema
    console.log('Cotización solicitada:', formData)
    setEnviado(true)
    setTimeout(() => setEnviado(false), 5000)
    setFormData({
      nombre: '', email: '', telefono: '', tipoEvento: 'boda', fechaEvento: '', invitados: '', mensaje: ''
    })
  }

  return (
    <div className="page">
      <h1>Solicitar Cotización</h1>
      <p className="subtitulo">Cuéntanos sobre tu evento y te enviaremos un presupuesto personalizado en menos de 24h.</p>
      
      {enviado && <div className="mensaje-exito">✅ ¡Cotización enviada! Revisaremos tus datos y te contactaremos.</div>}
      
      <form className="cotizacion-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre completo *</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Teléfono *</label>
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Tipo de evento *</label>
            <select name="tipoEvento" value={formData.tipoEvento} onChange={handleChange} required>
              <option value="boda">Boda religiosa</option>
              <option value="comunion">Primera Comunión</option>
              <option value="confirmacion">Confirmación</option>
              <option value="bautizo">Bautizo</option>
              <option value="graduacion">Graduación</option>
              <option value="sesion">Sesión de fotos</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Fecha estimada del evento *</label>
            <input type="date" name="fechaEvento" value={formData.fechaEvento} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Número aproximado de invitados</label>
            <input type="number" name="invitados" value={formData.invitados} onChange={handleChange} />
          </div>
        </div>
        
        <div className="form-group">
          <label>Requerimientos especiales o mensaje adicional</label>
          <textarea name="mensaje" rows={4} value={formData.mensaje} onChange={handleChange} placeholder="Horarios, lugares, ideas que tengas..."></textarea>
        </div>
        
        <button type="submit" className="btn btn-enviar">📩 Enviar solicitud de cotización</button>
      </form>
    </div>
  )
}

export default Cotizaciones