import { useState } from 'react'
import './Contact.css'

const contactInfo = [
  { icon: '📍', labelEn: 'Address', labelKm: 'អាសយដ្ឋាន', valEn: '[Street / Village, Commune, District]', valKm: '[ភូមិ, ឃុំ, ស្រុក], កម្ពុជា' },
  { icon: '📞', labelEn: 'Phone', labelKm: 'ទូរស័ព្ទ', valEn: '[+855 xx xxx xxx]', valKm: 'Mon – Fri, 7 AM – 5 PM' },
  { icon: '📧', labelEn: 'Email', labelKm: 'អ៊ីម៉ែល', valEn: '[school@example.com]', valKm: 'We reply within 1–2 days' },
  { icon: '📘', labelEn: 'Facebook', labelKm: 'ហ្វេសប៊ុក', valEn: 'facebook.com/[page-name]', valKm: '[ទំព័រ Facebook]' },
]

const hours = [
  { day: 'Monday – Friday', dayKm: 'ច័ន្ទ – សុក្រ', morning: '7:00 – 11:30 AM', afternoon: '1:30 – 5:00 PM' },
  { day: 'Saturday', dayKm: 'សៅរ៍', morning: 'Closed / បិទ', afternoon: '—' },
  { day: 'Sunday', dayKm: 'អាទិត្យ', morning: 'Closed / បិទ', afternoon: '—' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!formData.name || !formData.message) return
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="badge animate-up">Get In Touch / ទំនាក់ទំនង</span>
          <h1 className="page-hero-title animate-up delay-1">Contact Us</h1>
          <p className="page-hero-sub animate-up delay-2">ទំនាក់ទំនង និងទីតាំងសាលា</p>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-grid">

          {/* Left column */}
          <div className="contact-left">
            {/* Info cards */}
            <div className="section-header animate-up" style={{paddingTop:0}}>
              <p className="badge">Contact Details</p>
              <h2 className="section-title" style={{marginTop:'0.5rem', fontSize:'1.3rem'}}>Find Us</h2>
              <div className="gold-line" />
            </div>

            <div className="contact-info-list animate-up delay-1">
              {contactInfo.map((c, i) => (
                <div key={i} className="contact-info-item">
                  <div className="ci-icon">{c.icon}</div>
                  <div className="ci-body">
                    <div className="ci-label">{c.labelEn} <span className="km">/ {c.labelKm}</span></div>
                    <div className="ci-val">{c.valEn}</div>
                    <div className="ci-val-km">{c.valKm}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="hours-block animate-up delay-2">
              <h3 className="hours-title">🕐 School Hours <span className="km">/ ម៉ោងសិក្សា</span></h3>
              <div className="hours-table">
                {hours.map((h, i) => (
                  <div key={i} className={`hours-row ${h.morning.includes('Closed') ? 'closed' : ''}`}>
                    <div className="hours-day">
                      <span>{h.day}</span>
                      <span className="km">{h.dayKm}</span>
                    </div>
                    <div className="hours-times">
                      <span>{h.morning}</span>
                      {h.afternoon !== '—' && <span>{h.afternoon}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="contact-right">
            {/* Map */}
            <div className="map-section animate-up delay-1">
              <h3 className="map-title">📍 Our Location <span className="km">/ ទីតាំង</span></h3>
              <div className="map-embed">
                <div className="map-placeholder">
                  <div className="map-pin-anim">
                    <span className="map-pin">📍</span>
                    <div className="map-pin-ripple" />
                    <div className="map-pin-ripple delay" />
                  </div>
                  <p className="map-note">Pralay Meas Primary School</p>
                  <p className="map-note-km">សាលាបឋមសិក្សាប្រឡាយមាស</p>
                  <a
                    href="https://maps.google.com/?q=Pralay+Meas+Primary+School+Cambodia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold map-btn"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Message form */}
            <div className="form-section animate-up delay-2">
              <h3 className="form-title">✉️ Send a Message <span className="km">/ ផ្ញើសារ</span></h3>
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✅</div>
                  <p>Thank you! Your message has been sent.</p>
                  <p className="km">អរគុណ! សារបានផ្ញើរួចរាល់ហើយ។</p>
                  <button className="btn btn-outline" style={{marginTop:'1rem'}} onClick={() => { setSubmitted(false); setFormData({ name:'', email:'', message:'' }) }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <div className="contact-form">
                  <div className="form-group">
                    <label className="form-label">Name / ឈ្មោះ <span className="required">*</span></label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Your full name / ឈ្មោះពេញ"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email / អ៊ីម៉ែល</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message / សារ <span className="required">*</span></label>
                    <textarea
                      name="message"
                      className="form-input form-textarea"
                      rows={4}
                      placeholder="Write your message here... / សូមសរសេរសារ..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="btn btn-gold"
                    style={{width:'100%', justifyContent:'center'}}
                    onClick={handleSubmit}
                  >
                    Send Message / ផ្ញើសារ →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
