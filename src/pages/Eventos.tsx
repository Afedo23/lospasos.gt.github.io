import React from 'react'
import './pages.css'

interface EventosProps {
  setCurrentPage?: (page: 'home' | 'eventos' | 'sacra' | 'galeria' | 'contacto' | 'cotizaciones') => void
}

const Eventos: React.FC<EventosProps> = ({ setCurrentPage }) => {
  const eventos = [
    { nombre: "Semana Santa 2026", fecha: "2-9 Abril 2026", descripcion: "Cobertura especial de procesiones y celebraciones." },
    { nombre: "Fiesta Patronal", fecha: "15 Agosto 2026", descripcion: "Misa solemne y procesión." },
    { nombre: "Retiro de Jóvenes", fecha: "20-22 Noviembre 2026", descripcion: "Jornada de fe y convivencia." }
  ]

  return (
    <div className="page">
      <h1>Próximos Eventos</h1>
      <div className="eventos-lista">
        {eventos.map((evento, index) => (
          <div key={index} className="evento-card">
            <h3>{evento.nombre}</h3>
            <p className="fecha">📅 {evento.fecha}</p>
            <p>{evento.descripcion}</p>
          </div>
        ))}
      </div>
      
      <section className="contacto-rapido">
        <h2>¿Quieres que capturemos tu evento?</h2>
        <p>Contáctanos para reservar tu fecha y conocer nuestros paquetes.</p>
        {setCurrentPage && (
          <button className="btn" onClick={() => setCurrentPage('contacto')}>
            Solicitar información
          </button>
        )}
      </section>
    </div>
  )
}

export default Eventos