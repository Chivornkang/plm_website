import { useState, useEffect } from 'react'
import './Navbar.css'

const navItems = [
  { id: 'home', en: 'Home', km: 'ទំព័រដើម' },
  { id: 'classes', en: 'Classes', km: 'ថ្នាក់រៀន' },
  { id: 'about', en: 'About', km: 'អំពីសាលា' },
  { id: 'management', en: 'Team', km: 'ក្រុមការងារ' },
  { id: 'news', en: 'News', km: 'ព័ត៌មាន' },
  { id: 'contact', en: 'Contact', km: 'ទំនាក់ទំនង' },
]

export default function Navbar({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    navigate(id)
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => handleNav('home')}>
          <div className="nav-emblem">
            <img src="assets/logo/logo_sala.png" alt="School logo" />
          </div>
          <div className="nav-brand">
            {/* <span className="brand-en">Pralay Meas</span> */}
            <span className="brand-km">សាលាបឋមសិក្សាប្រឡាយមាស</span>
          </div>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNav(item.id)}
            >
              <span className="nav-en">{item.en}</span>
              <span className="nav-km">{item.km}</span>
            </button>
          ))}
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
