import { createContext, useContext, useState, useEffect } from 'react'

export const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('plm-lang') || 'en')
  const [theme, setTheme] = useState(() => localStorage.getItem('plm-theme') || 'dark')

  useEffect(() => {
    localStorage.setItem('plm-lang', lang)
  }, [lang])

  useEffect(() => {
    localStorage.setItem('plm-theme', theme)
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  const toggleLang = () => setLang(l => l === 'en' ? 'km' : 'en')
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
