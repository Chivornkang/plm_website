import { useState, useEffect } from 'react'
import Navbar     from './components/Navbar/Navbar'
import Footer     from './components/Footer/Footer'
import Home       from './components/Home/Home'
import Classes    from './components/Classes/Classes'
import About      from './components/About/About'
import Management from './components/Management/Management'
import News       from './components/News/News'
import Contact    from './components/Contact/Contact'
import Loader     from './components/Loader/Loader'
import { AppProvider } from './AppContext'
import './App.css'

const pages = { home: Home, classes: Classes, about: About, management: Management, news: News, contact: Contact }

function getPageFromPath() {
  const path = window.location.pathname.replace('/', '').toLowerCase()
  return pages[path] ? path : 'home'
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath)
  const [loading, setLoading] = useState(true)
  const [pageTransition, setPageTransition] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Sync URL → state when user hits back/forward
  useEffect(() => {
    const onPopState = () => {
      const newPage = getPageFromPath()
      setPageTransition(true)
      setTimeout(() => {
        setPage(newPage)
        setPageTransition(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 250)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (newPage) => {
    if (newPage === page) return
    // Push the new path into browser history
    window.history.pushState({ page: newPage }, '', `/${newPage}`)
    setPageTransition(true)
    setTimeout(() => {
      setPage(newPage)
      setPageTransition(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 250)
  }

  const PageComponent = pages[page]

  return (
    <AppProvider>
      {loading && <Loader />}
      <div className={`app-wrapper ${pageTransition ? 'page-exit' : 'page-enter'}`}>
        <Navbar currentPage={page} navigate={navigate} />
        <main className="main-content">
          <PageComponent navigate={navigate} />
        </main>
        <Footer navigate={navigate} />
      </div>
    </AppProvider>
  )
}