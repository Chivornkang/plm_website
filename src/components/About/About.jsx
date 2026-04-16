import './About.css'

const values = [
  { emoji: '🌟', en: 'Excellence', km: 'ភាពល្អ', desc: 'Striving for the highest standards in education and character.' },
  { emoji: '🤝', en: 'Respect', km: 'គោរព', desc: 'Honoring every student, teacher, parent, and community member.' },
  { emoji: '🌱', en: 'Growth', km: 'ការលូតលាស់', desc: 'Fostering continuous learning and personal development.' },
  { emoji: '❤️', en: 'Community', km: 'សហគមន៍', desc: 'Building a warm, inclusive school family together.' },
  { emoji: '💡', en: 'Creativity', km: 'ច្នៃប្រឌិត', desc: 'Encouraging curiosity, innovation, and original thinking.' },
  { emoji: '⚖️', en: 'Integrity', km: 'សុចរិតភាព', desc: 'Acting with honesty and strong moral principles in all things.' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Page header */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="badge animate-up">About Us / អំពីយើង</span>
          <h1 className="page-hero-title animate-up delay-1">Our School</h1>
          <p className="page-hero-sub animate-up delay-2">សាលាបឋមសិក្សាប្រឡាយមាស</p>
        </div>
      </div>

      <div className="container about-content">
        {/* Info grid */}
        <div className="about-grid animate-up delay-1">
          <div className="about-info-card">
            <div className="about-info-header">
              <span className="about-info-icon">🏫</span>
              <h2>School Information</h2>
              <p>ព័ត៌មានសាលា</p>
            </div>
            <div className="about-info-rows">
              {[
                ['School Name', 'Pralay Meas Primary School', 'ឈ្មោះ', 'សាលាបឋមសិក្សាប្រឡាយមាស'],
                ['Level', 'Kindergarten to Grade 6', 'កម្រិត', 'មត្តេយ្យ ដល់ ថ្នាក់ទី ៦'],
                ['Total Staff', '9 Members', 'បុគ្គលិក', '៩ នាក់'],
                ['Location', 'Cambodia', 'ទីតាំង', 'កម្ពុជា'],
                ['Language', 'Khmer / English', 'ភាសា', 'ខ្មែរ / អង់គ្លេស'],
              ].map(([labelEn, valEn, labelKm, valKm], i) => (
                <div key={i} className="about-info-row">
                  <div className="about-info-label">
                    <span>{labelEn}</span>
                    <span className="km">{labelKm}</span>
                  </div>
                  <div className="about-info-val">
                    <span>{valEn}</span>
                    <span className="km">{valKm}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mission-block">
            <div className="mission-card animate-up delay-2">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p className="km-small">បេសកកម្មរបស់យើង</p>
              <p className="mission-text">To provide quality primary education that builds strong foundations in knowledge, character, and creativity — empowering every child to reach their full potential.</p>
              <p className="mission-text km">ផ្តល់ការអប់រំបឋមសិក្សាប្រកបដោយគុណភាព ដើម្បីបង្កើតគ្រឹះដ៏រឹងមាំ ក្នុងចំណេះដឹង នឹងគុណធម៌ ចំពោះកុមារគ្រប់រូប។</p>
            </div>
            <div className="mission-card animate-up delay-3">
              <div className="mission-icon">👁️</div>
              <h3>Our Vision</h3>
              <p className="km-small">ចក្ខុវិស័យ</p>
              <p className="mission-text">A school where every child discovers their unique gifts, grows in wisdom and character, and becomes a proud contributor to Cambodian society.</p>
              <p className="mission-text km">សាលាដែលកុមារគ្រប់រូបស្វែងយល់ពីទេពកោសល្យ លូតលាស់ ហើយក្លាយជាកម្លាំងរបស់សង្គមខ្មែរ។</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="section-header animate-up">
          <p className="badge">Core Values</p>
          <h2 className="section-title" style={{marginTop:'0.5rem'}}>What We Stand For</h2>
          <p className="section-subtitle">គុណតម្លៃស្នូលរបស់សាលា</p>
          <div className="gold-line" />
        </div>

        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className={`value-card card animate-up delay-${(i % 4) + 1}`}>
              <div className="value-emoji">{v.emoji}</div>
              <h3 className="value-title">{v.en}</h3>
              <p className="value-km">{v.km}</p>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
