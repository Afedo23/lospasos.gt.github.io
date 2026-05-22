import React from 'react'
import './pages.css'

const Sacra: React.FC = () => {
  return (
    <div className="page">
      <h1>¿Qué es la Fotografía Sacra?</h1>
      
      <div className="sacra-content">
        <p>La fotografía sacra es una disciplina que busca capturar la esencia espiritual, la devoción y el respeto en los momentos litúrgicos y religiosos.</p>
        
        <div className="sacra-caracteristicas">
          <div className="caracteristica">
            <h3>📜 Respeto Litúrgico</h3>
            <p>Nos integramos sin interrumpir, respetando los tiempos y espacios sagrados.</p>
          </div>
          <div className="caracteristica">
            <h3>✨ Luz Simbólica</h3>
            <p>Utilizamos la luz natural y ambiental para realzar la espiritualidad.</p>
          </div>
          <div className="caracteristica">
            <h3>🙏 Emoción y Recogimiento</h3>
            <p>Capturamos gestos, miradas y momentos de oración auténticos.</p>
          </div>
        </div>
        
        <div className="cita">
          <p>"La fotografía sacra es un ministerio visual: ayudar a las familias a conservar la memoria de su encuentro con Dios en los sacramentos."</p>
        </div>
      </div>
    </div>
  )
}

export default Sacra