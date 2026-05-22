import React, { useState } from 'react'
import './pages.css'

type Categoria = 'confirmaciones' | 'primeras comuniones' | 'bodas' | 'graduaciones' | 'sesiones' | 'bautizos'

const GaleriaPorTipo: React.FC = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('bodas')
  
  // Aquí irían tus imágenes reales. Coloca las rutas correctas en /assets
  const imagenesPorCategoria = {
    confirmaciones: ['/assets/conf1.jpg', '/assets/conf2.jpg'],
    'primeras comuniones': ['/assets/comunion1.jpg', '/assets/comunion2.jpg'],
    bodas: ['/assets/boda1.jpg', '/assets/boda2.jpg', '/assets/boda3.jpg'],
    graduaciones: ['/assets/grad1.jpg', '/assets/grad2.jpg'],
    sesiones: ['/assets/sesion1.jpg', '/assets/sesion2.jpg'],
    bautizos: ['/assets/bautizo1.jpg', '/assets/bautizo2.jpg']
  }

  const categorias: { id: Categoria; label: string }[] = [
    { id: 'confirmaciones', label: 'Confirmaciones' },
    { id: 'primeras comuniones', label: 'Primeras Comuniones' },
    { id: 'bodas', label: 'Bodas' },
    { id: 'graduaciones', label: 'Graduaciones' },
    { id: 'sesiones', label: 'Sesiones' },
    { id: 'bautizos', label: 'Bautizos' }
  ]

  return (
    <div className="page">
      <h1>Galería Fotográfica</h1>
      
      <div className="categorias-tabs">
        {categorias.map(cat => (
          <button 
            key={cat.id}
            className={`tab-btn ${categoriaActiva === cat.id ? 'active' : ''}`}
            onClick={() => setCategoriaActiva(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      
      <div className="galeria-grid">
        {imagenesPorCategoria[categoriaActiva].map((img, idx) => (
          <div className="galeria-item" key={idx}>
            <img src={img} alt={`${categoriaActiva} - ${idx+1}`} />
          </div>
        ))}
      </div>
      
      <p className="aviso-galeria">* Las imágenes son referenciales. Contáctanos para ver nuestro portafolio completo.</p>
    </div>
  )
}

export default GaleriaPorTipo