import { useState, useEffect } from 'react'
import { useApp } from '../../AppContext'
import { t } from '../../data/lang_data'
import './Navbar.css'

export default function Navbar({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLang, theme, toggleTheme } = useApp()
  const tx = t(lang)

  const navItems = [
    { id: 'home',       label: tx.navbar.home },
    { id: 'classes',    label: tx.navbar.classes },
    { id: 'management', label: tx.navbar.management },
    { id: 'about',      label: tx.navbar.about },
    { id: 'contact',    label: tx.navbar.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => { navigate(id); setMenuOpen(false) }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-row">
        <img src="assets/royals_Fam/flag_gif.gif" alt="" />
         <div className="header-txt">{tx.navbar.headerText1}</div>
          <img src="assets/royals_Fam/flag_gif.gif" alt="" />
      </div>
    
     {/* <div className="header-text">{tx.navbar.headerText}</div> */}
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => handleNav('home')}>
          <div className="nav-emblem">
            <img src="assets/logo/logo_sala.png" alt="School logo" />
          </div>
          <div className="nav-brand">
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
              <span className="nav-en">{item.label}</span>
            </button>
          ))}

          {/* Mobile controls inside drawer */}
          <div className="nav-controls nav-controls--mobile">
            <button className="ctrl-btn lang-btn" onClick={toggleLang} title="Toggle language">
              <span className="ctrl-label">{tx.navbar.langToggle}</span>
            </button>
            <button className="ctrl-btn theme-btn" onClick={toggleTheme} title="Toggle theme">
              <span>{theme === 'dark' ? '☀' : '☽'}</span>
            </button>
          </div>
        </nav>

        {/* Desktop controls */}
        <div className="nav-controls nav-controls--desktop">
          <button className="ctrl-btn lang-btn" onClick={toggleLang} title="Toggle language">
            <span className="ctrl-label">{tx.navbar.langToggle}</span>
          </button>
          <button className="ctrl-btn theme-btn" onClick={toggleTheme} title="Toggle theme">
            <span>{theme === 'dark' ? '☀' : '☽'}</span>
          </button>
        </div>

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
