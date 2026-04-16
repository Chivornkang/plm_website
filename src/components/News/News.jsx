import { useState } from 'react'
import './News.css'

const allNews = [
  { emoji: '📚', category: 'Academic', tag: 'Academic / សិក្សា', titleEn: 'New School Year 2025–2026', titleKm: 'ឆ្នាំសិក្សា ២០២៥–២០២៦', desc: 'We warmly welcome all students back for a fresh year of learning, discovery, and growth together as a school community.', date: 'April 2026' },
  { emoji: '🎉', category: 'Event', tag: 'Event / ព្រឹត្តិការណ៍', titleEn: 'Khmer New Year Celebration', titleKm: 'បុណ្យចូលឆ្នាំខ្មែរ', desc: 'Students and teachers celebrated Khmer New Year with traditional games, dance performances, and a festive school ceremony.', date: 'April 2026' },
  { emoji: '🏆', category: 'Achievement', tag: 'Achievement / សមិទ្ធផល', titleEn: 'Regional Competition Success', titleKm: 'ជោគជ័យការប្រកួតតំបន់', desc: 'Our students achieved outstanding results in the regional academic competition, bringing pride to our entire school.', date: 'March 2026' },
  { emoji: '🌱', category: 'Project', tag: 'Project / គម្រោង', titleEn: 'School Garden Initiative', titleKm: 'គម្រោងចំការសាលា', desc: 'A community-driven school garden project is underway, teaching students about sustainability, nutrition, and caring for the environment.', date: 'February 2026' },
  { emoji: '📝', category: 'Academic', tag: 'Academic / សិក្សា', titleEn: 'End-of-Term Examinations', titleKm: 'ប្រឡងចប់ត្រីមាស', desc: 'All students are encouraged to review their notes and prepare well for the upcoming term examinations across all grades.', date: 'January 2026' },
  { emoji: '🤝', category: 'Community', tag: 'Community / សហគមន៍', titleEn: 'Parent-Teacher Meeting', titleKm: 'ប្រជុំ-គ្រូ', desc: 'An open day was held for parents to meet with teachers, discuss student progress, and share ideas to support learning at home.', date: 'December 2025' },
  { emoji: '🎨', category: 'Event', tag: 'Event / ព្រឹត្តិការណ៍', titleEn: 'Art & Culture Day', titleKm: 'ថ្ងៃសិល្បៈ និងវប្បធម៌', desc: 'Students showcased their creative talents through drawings, paintings, and cultural performances during the annual Art Day.', date: 'November 2025' },
  { emoji: '🏅', category: 'Achievement', tag: 'Achievement / សមិទ្ធផល', titleEn: 'Best Student Awards Ceremony', titleKm: 'ពិធីប្រគល់រង្វាន់', desc: 'Top-performing students from each grade were honored at the annual awards ceremony in front of families and staff.', date: 'October 2025' },
  { emoji: '📖', category: 'Academic', tag: 'Academic / សិក្សា', titleEn: 'Reading Month Campaign', titleKm: 'យុទ្ធនាការខែអានសៀវភៅ', desc: 'The school launched a reading month encouraging all students to read more books and develop a lifelong love of learning.', date: 'September 2025' },
]

const categories = ['All', 'Academic', 'Event', 'Achievement', 'Project', 'Community']

export default function News() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? allNews : allNews.filter(n => n.category === active)

  return (
    <div className="news-page">
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="badge animate-up">Updates / ព័ត៌មាន</span>
          <h1 className="page-hero-title animate-up delay-1">News &amp; Events</h1>
          <p className="page-hero-sub animate-up delay-2">ព័ត៌មានថ្មីៗ និងព្រឹត្តិការណ៍សាលា</p>
        </div>
      </div>

      <div className="container news-content">
        {/* Filter tabs */}
        <div className="filter-bar animate-up">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="news-count animate-up delay-1">
          {filtered.length} article{filtered.length !== 1 ? 's' : ''} found
          <span className="km"> / {filtered.length} អត្ថបទ</span>
        </p>

        <div className="news-full-grid">
          {filtered.map((item, i) => (
            <div key={`${active}-${i}`} className={`news-full-card card animate-up delay-${(i % 4) + 1}`}>
              <div className="nfc-left">
                <div className="nfc-emoji">{item.emoji}</div>
                <div className="nfc-date">{item.date}</div>
              </div>
              <div className="nfc-body">
                <span className="badge">{item.tag}</span>
                <h3 className="nfc-title">{item.titleEn}</h3>
                <p className="nfc-title-km">{item.titleKm}</p>
                <p className="nfc-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
