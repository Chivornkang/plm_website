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
import './App.css'

export default function App() {
  const [page, setPage] = useState('home')
  const [loading, setLoading] = useState(true)
  const [pageTransition, setPageTransition] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const navigate = (newPage) => {
    if (newPage === page) return
    setPageTransition(true)
    setTimeout(() => {
      setPage(newPage)
      setPageTransition(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 250)
  }

  const pages = { home: Home,classes:Classes, about: About, management: Management, news: News, contact: Contact }
  const PageComponent = pages[page]

  return (
    <>
      {loading && <Loader />}
      <div className={`app-wrapper ${pageTransition ? 'page-exit' : 'page-enter'}`}>
        <Navbar currentPage={page} navigate={navigate} />
        <main className="main-content">
          <PageComponent navigate={navigate} />
        </main>
        <Footer navigate={navigate} />
      </div>
    </>
  )
}
