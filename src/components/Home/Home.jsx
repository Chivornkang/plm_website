import './Home.css'
import { useState, useEffect } from 'react'
import { useApp } from '../../AppContext'
import { t } from '../../data/lang_data'

const heroImages = [
  'assets/slider/plm1.jpg',
  'assets/slider/plm2.jpg',
  'assets/slider/plm3.jpg',
  'assets/slider/plm4.jpg',
  'assets/slider/plm5.jpg',
  'assets/slider/plm6.jpg',
]

export default function Home({ navigate }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { lang } = useApp()
  const tx = t(lang)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-slideshow">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="hero-bg-pattern" />
        <div className="hero-circle hero-circle-1" />
        <div className="hero-circle hero-circle-2" />
        <div className="hero-circle hero-circle-3" />
        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-emblem animate-scale">
            <div className="hero-emblem-inner">
              <img src="assets/logo/logo_sala.png" alt="School logo" />
            </div>
          </div>

          <h1 className="hero-title animate-up delay-1">
            {tx.home.heroTitle}
          </h1>
          <p className="hero-tagline animate-up delay-3">
            {tx.home.heroTagline}
          </p>

          <div className="hero-actions animate-up delay-4">
            <button className="btn btn-gold btn-29" onClick={() => navigate('about')}>
              {tx.home.btnAbout}
            </button>
            <button className="btn btn-outline btn-29" onClick={() => navigate('contact')}>
              {tx.home.btnContact}
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="hero-marquee animate-up delay-5">
        <div className="marquee-track">
          <span className="marquee-text">{tx.home.marquee1}</span>
          <span className="marquee-text">{tx.home.marquee2}</span>
          <span className="marquee-text">{tx.home.marquee1}</span>
          <span className="marquee-text">{tx.home.marquee2}</span>
        </div>
      </div>
    </div>
  )
}
