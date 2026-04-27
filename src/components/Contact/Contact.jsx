import './Contact.css'
import { useApp } from '../../AppContext'
import { t } from '../../data/lang_data'
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa"

function SocialIcons({ teacher }) {
  const links = [
    { key: "metafb", Icon: FaFacebook, label: "Facebook", cls: "tc-social--fb" },
    { key: "telegram", Icon: FaTelegram, label: "Telegram", cls: "tc-social--tg" },
    { key: "youtube", Icon: FaYoutube, label: "YouTube", cls: "tc-social--yt" },
  ]
  const visible = links.filter(({ key }) => teacher[key])
  if (!visible.length) return null
  return (
    <div className="tc-socials">
      {visible.map(({ key, Icon, label, cls }) => (
        <a key={key} href={teacher[key]} target="_blank" rel="noopener noreferrer"
          className={`tc-social-btn ${cls}`} aria-label={label} title={label}>
          <Icon /><span>{label}</span>
        </a>
      ))}
    </div>
  )
}
export default function Contact() {
  const { lang } = useApp()
  const tx = t(lang)
  const ct = tx.contact

  const contactInfo = [
    { icon: '', label: ct.phone, val: ct.phoneVal, note: ct.phoneHours },
    { icon: '', label: ct.email, val: ct.emailVal, note: ct.emailNote },
    // { icon: '', label: ct.facebook, val: ct.facebookVal, note: ct.facebookName },
  ]

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="badge animate-up">{ct.badge}</span>
          <h1 className="page-hero-title animate-up delay-1">{ct.pageTitle}</h1>
          <p className="page-hero-sub animate-up delay-2">{ct.pageSubtitle}</p>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-grid">

          {/* Left column */}
          <div className="contact-left">
            <div className="contact-info-list animate-up delay-1">
              {contactInfo.map((c, i) => (
                <div key={i} className="contact-info-item">
                  <div className="ci-icon">{c.icon}</div>
                  <div className="ci-body">
                    <div className="ci-label">{c.label}</div>
                    <div className="ci-val">{c.val}</div>
                    <div className="ci-val-km">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
{/* <SocialIcons teacher={teacher} /> */}
            {/* School Hours */}
            <div className="hours-block animate-up delay-2">
              <h3 className="hours-title">{ct.hoursTitle}</h3>
              <div className="hours-table">
                {ct.hours.map((h, i) => (
                  <div key={i} className={`hours-row ${h.closed ? 'closed' : ''}`}>
                    <div className="hours-day">
                      <span>{lang === 'km' ? h.dayKm : h.dayEn}</span>
                    </div>
                    <div className="hours-times">
                      <div>{h.morning}</div>
                      {!h.closed && <div>{h.afternoon}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — address + map */}
          <div className="contact-info-list animate-up delay-1">
            <div className="contact-info-item">
              <div className="ci-body">
                <div className="ci-label">{ct.address}</div>
                <div className="ci-val">{lang === 'km' ? ct.addressValEn.km : ct.addressValEn.en}</div>
              </div>
            </div>
            <div className="contact-right">
              <div className="map-section animate-up delay-1">
                <div className="map-embed">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.2159254143647!2d104.62558871136227!3d12.38971513544448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ef53aa4566149%3A0x57f79f0f7105c97d!2z4Z6f4Z624Z6b4Z624Z6U4Z6L4Z6Y4Z6f4Z634Z6A4Z-S4Z6f4Z624Z6U4Z-S4Z6a4Z6h4Z624Z6Z4Z6Y4Z624Z6f!5e1!3m2!1sen!2skh!4v1776560867240!5m2!1sen!2skh"
                    width="100%"
                    height="420"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pralay Meas Primary School Location"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
