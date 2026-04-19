import { useState } from 'react'
import './Contact.css'

const contactInfo = [
  { 
    icon: '📍', 
    labelEn: 'Address', 
    labelKm: 'អាសយដ្ឋាន', 
    valEn: 'Pralay Meas Commune, Kampong Laeng District', 
    valKm: 'ឃុំប្រឡាយមាស ស្រុកកំពង់លែង ខេត្តកំពង់ឆ្នាំង' 
  },
  { 
    icon: '📞', 
    labelEn: 'Phone', 
    labelKm: 'ទូរស័ព្ទ', 
    valEn: '+855 31 636 3963', 
    valKm: 'Mon – Sat, 7 AM – 5 PM' 
  },
  { 
    icon: '📧', 
    labelEn: 'Email', 
    labelKm: 'អ៊ីម៉ែល', 
    valEn: 'pralaymeas@gmail.com', 
    valKm: 'We reply within 1–2 days' 
  },
  { 
    icon: '📘', 
    labelEn: 'Facebook', 
    labelKm: 'ហ្វេសប៊ុក', 
    valEn: 'facebook.com/PralayMeasPrimarySchool', 
    valKm: 'សាលាបឋមសិក្សាប្រឡាយមាស' 
  },
]

const hours = [
  { 
    day: 'Monday – Saturday', 
    dayKm: 'ច័ន្ទ – សៅរ៍', 
    morning: 'ព្រឹក 7:00 – 11:00', 
    afternoon: 'ល្ងាច 1:00 – 5:00' 
  },
  { 
    day: 'Sunday', 
    dayKm: 'អាទិត្យ', 
    morning: 'ឈប់សម្រាក', 
    afternoon: 'Closed' 
  },
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

          {/* Left Column - Info & Hours */}
          <div className="contact-left">
            <div className="section-header animate-up">
              <p className="badge">Contact Details</p>
              <h2 className="section-title">Find Us</h2>
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

            {/* School Hours */}
            <div className="hours-block animate-up delay-2">
              <h3 className="hours-title">🕐 School Hours <span className="km">/ ម៉ោងសិក្សា</span></h3>
              <div className="hours-table">
                {hours.map((h, i) => (
                  <div key={i} className={`hours-row ${h.morning.includes('ឈប់សម្រាក') ? 'closed' : ''}`}>
                    <div className="hours-day">
                      <span>{h.day}</span>
                      <span className="km">{h.dayKm}</span>
                    </div>
                    <div className="hours-times">
                      <div><span className="time-label">ព្រឹក</span> {h.morning}</div>
                      {h.afternoon !== 'Closed' && <div><span className="time-label">ល្ងាច</span> {h.afternoon}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Map + Form */}
          <div className="contact-right">
            <div className="map-section animate-up delay-1">
              <h3 className="map-title">📍 Our Location <span className="km">/ ទីតាំង</span></h3>
              <div className="map-embed">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.2159254143647!2d104.62558871136227!3d12.38971513544448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ef53aa4566149%3A0x57f79f0f7105c97d!2z4Z6f4Z624Z6b4Z624Z6U4Z6L4Z6Y4Z6f4Z634Z6A4Z-S4Z6f4Z624Z6U4Z-S4Z6a4Z6h4Z624Z6Z4Z6Y4Z624Z6f!5e1!3m2!1sen!2skh!4v1776560867240!5m2!1sen!2skh" 
                  width="100%" 
                  height="420" 
                  style={{border:0}} 
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
  )
}