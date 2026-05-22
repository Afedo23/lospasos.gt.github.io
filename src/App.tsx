import { useState } from 'react'
import SidebarMenu from './components/SidebarMenu'
import Footer from './components/Footer'
import Home from './pages/Home'
import Eventos from './pages/Eventos'
import Sacra from './pages/Sacra'
import GaleriaPorTipo from './pages/GaleriaPorTipo'
import Contacto from './pages/Contacto'
import Cotizaciones from './pages/Cotizaciones'

type Page = 'home' | 'eventos' | 'sacra' | 'galeria' | 'contacto' | 'cotizaciones'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [menuOpen, setMenuOpen] = useState(false)

const renderPage = () => {
  switch (currentPage) {
    case 'home':
      return <Home />
    case 'eventos':
      return <Eventos setCurrentPage={setCurrentPage} />
    case 'sacra':
      return <Sacra />
    case 'galeria':
      return <GaleriaPorTipo />
    case 'contacto':
      return <Contacto />
    case 'cotizaciones':
      return <Cotizaciones />
    default:
      return <Home />
  }
}

  return (
    <div className="app">
      <SidebarMenu 
        setCurrentPage={setCurrentPage} 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main className={`main-content ${menuOpen ? 'shifted' : ''}`}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App