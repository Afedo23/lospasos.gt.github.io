import React, { useState } from 'react'
import './SidebarMenu.css'

interface SidebarMenuProps {
  setCurrentPage: (page: 'home' | 'eventos' | 'sacra' | 'galeria' | 'contacto' | 'cotizaciones') => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ setCurrentPage, menuOpen, setMenuOpen }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen)
  }

  const navigateTo = (page: 'home' | 'eventos' | 'sacra' | 'galeria' | 'contacto' | 'cotizaciones') => {
    setCurrentPage(page)
    setMenuOpen(false)
    setSubmenuOpen(false)
  }

  return (
    <>
      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Los Pasos GT</h2>
          <p>Fotografía Sacra</p>
        </div>
        
        <nav className="sidebar-nav">
          <button onClick={() => navigateTo('home')} className="nav-item">Inicio</button>
          
          <div className="nav-item-with-submenu">
            <button onClick={toggleSubmenu} className="nav-item submenu-trigger">
              📸 Galerías ▸
            </button>
            <div className={`submenu ${submenuOpen ? 'open' : ''}`}>
              <button onClick={() => navigateTo('galeria')}>Confirmaciones</button>
              <button onClick={() => navigateTo('galeria')}>Primeras Comuniones</button>
              <button onClick={() => navigateTo('galeria')}>Bodas</button>
              <button onClick={() => navigateTo('galeria')}>Graduaciones</button>
              <button onClick={() => navigateTo('galeria')}>Sesiones</button>
              <button onClick={() => navigateTo('galeria')}>Bautizos</button>
            </div>
          </div>
          
          <button onClick={() => navigateTo('eventos')} className="nav-item">Eventos</button>
          <button onClick={() => navigateTo('sacra')} className="nav-item">¿Qué es la fotografía sacra?</button>
          <button onClick={() => navigateTo('contacto')} className="nav-item">Contacto</button>
          <button onClick={() => navigateTo('cotizaciones')} className="nav-item cotizar">📩 Solicitar Cotización</button>
        </nav>
      </aside>
    </>
  )
}

export default SidebarMenu