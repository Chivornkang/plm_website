import './Footer.css'
import { useApp } from '../../AppContext'
import { t } from '../../data/lang_data'

export default function Footer({ navigate }) {
  const { lang } = useApp()
  const tx = t(lang)
  const ft = tx.footer

  const navLinks = [
    { id: 'home', label: ft.navHome },
    { id: 'about', label: ft.navAbout },
    { id: 'management', label: ft.navManagement },
    { id: 'contact', label: ft.navContact },
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-emblem">
              <img src="assets/logo/logo_sala.png" alt="School logo" />
            </div>
            <div>
              <div className="footer-name-km">{ft.schoolNameKm}</div>
              {/* <div className="footer-name">{ft.schoolNameEn}</div> */}
              <p className="footer-desc">{ft.tagline}</p>
            </div>
          </div>
          <div className="school-management">
            <h4>{ft.mgmtHeading}</h4>
            <div className="footer-contact-members">
              <h5>{ft.principalName}</h5>
              <p>{ft.principal}</p>
            </div>
            <div className="footer-contact-item">{ft.principalPhone}</div>
            <div className="footer-contact-item">{ft.principalEmail}</div>
            <div className="footer-contact-members">
              <h5>{ft.viceNameKm}</h5>
              <p>{ft.vicePrincipal}</p>
            </div>
            <div className="footer-contact-item">{ft.vicePhone}</div>
            <div className="footer-contact-item">{ft.viceEmail}</div>
          </div>
          <div className="footer-links">
            {navLinks.map(({ id, label }) => (
              <button key={id} className="footer-link" onClick={() => navigate(id)}>
                {label}
              </button>
            ))}
          </div>

          <div className="footer-contact">

            {/* <div className="footer-contact-item">{ft.address}</div>
            <div className="footer-contact-item">{ft.email}</div> */}
          </div>
        </div>
      </div>



      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-km">{ft.copyright}</span>
        </div>
      </div>
    </footer>
  )
}
