import './Home.css'

const stats = [
  { num: '១១​ នាក់',   labelEn: 'គ្រូបង្រៀនសររុប',   labelKm: 'ឆ្នាំ​២០២៦' },
  { num: '៧ ថ្នាក់', labelEn: 'ទី១-ទី៦',     labelKm: 'កម្រិតបឋម' },
  { num: '៣៣២',   labelEn: 'ថ្នាក់កុមារតូច',    labelKm: 'កម្រិតមត្តេយ្យ' },
  // { num: '%', labelEn: 'Dedication', labelKm: 'ការឧទ្ទិស' },
]

const latestNews = [
  { emoji: '📚', tag: 'Academic / សិក្សា', titleEn: 'New School Year 2025–2026', titleKm: 'ឆ្នាំសិក្សា ២០២៥–២០២៦', desc: 'We warmly welcome all students back for a year full of learning and new discoveries.', date: 'April 2026' },
  { emoji: '🏆', tag: 'Achievement / សមិទ្ធផល', titleEn: 'Regional Competition Success', titleKm: 'ជោគជ័យការប្រកួតតំបន់', desc: 'Our students achieved outstanding results in the regional academic competition this term.', date: 'March 2026' },
  { emoji: '🎉', tag: 'Event / ព្រឹត្តិការណ៍', titleEn: 'Khmer New Year Festival', titleKm: 'បុណ្យចូលឆ្នាំខ្មែរ', desc: 'Students and teachers celebrated Khmer New Year with traditional performances and games.', date: 'April 2026' },
]

export default function Home({ navigate }) {
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-circle hero-circle-1" />
        <div className="hero-circle hero-circle-2" />
        <div className="hero-circle hero-circle-3" />

        <div className="container hero-content">
          <div className="hero-emblem animate-scale">
            <div className="hero-emblem-ring" />
            <div className="hero-emblem-inner">
              <img src="assets/logo/logo_sala.png" alt="School logo" />
            </div>
          </div>

          <h1 className="hero-title animate-up delay-1">
            Pralay Meas Primary School
          </h1>
          <p className="hero-title-km animate-up delay-2">
            សាលាបឋមសិក្សាប្រឡាយមាស
          </p>
          <p className="hero-tagline animate-up delay-3">
            អប់រំកុមារ ជាមួយចំណេះដឹង គុណធម៌ និងភាពល្អប្រសើរ<br />
            <span>
              Nurturing Children with Knowledge, Values, and Excellence.
            </span>
          </p>

          <div className="hero-actions animate-up delay-4">
            <button className="btn btn-gold" onClick={() => navigate('about')}>
              អំពីសាលា &nbsp;→
            </button>
            <button className="btn btn-outline" onClick={() => navigate('contact')}>
              ទំនាក់ទំនង
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats animate-up delay-5">
          <div className="container stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-num">{s.num}</span>
                <span className="stat-en">{s.labelEn}</span>
                <span className="stat-km">{s.labelKm}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="home-news">
        <div className="container">
          <div className="section-header animate-up">
            <p className="badge">Latest Updates</p>
            <h2 className="section-title" style={{marginTop:'0.5rem'}}>
              News &amp; Events
            </h2>
            <p className="section-subtitle">ព័ត៌មានថ្មីៗ និងព្រឹត្តិការណ៍សាលា</p>
            <div className="gold-line" />
          </div>

          <div className="news-grid">
            {latestNews.map((item, i) => (
              <div key={i} className={`news-card card animate-up delay-${i + 2}`}>
                <div className="news-card-top">
                  <div className="news-emoji">{item.emoji}</div>
                  <div className="badge">{item.tag}</div>
                </div>
                <div className="news-card-body">
                  <h3 className="news-title">{item.titleEn}</h3>
                  <p className="news-title-km">{item.titleKm}</p>
                  <p className="news-desc">{item.desc}</p>
                  <div className="news-footer">
                    <span className="news-date">📅 {item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-wrap animate-up delay-5">
            <button className="btn btn-outline" onClick={() => navigate('news')}>
              View All News &nbsp;→
            </button>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="info-strip animate-up">
        <div className="container info-strip-inner">
          <div className="info-strip-item">
            <span className="strip-icon">🕐</span>
            <div>
               <div className="strip-label">School Hours Morning/ ម៉ោងសិក្សាពេលព្រឹក</div>
              <div className="strip-val">1:00 PM – 5:00 PM</div>
            </div>
          </div>
          <div className="info-strip-divider" />
          <div className="info-strip-item">
            <span className="strip-icon">🕐</span>
            <div>
              <div className="strip-label">School Hours Afternoon/ ម៉ោងសិក្សាពេលថ្ងៃ</div>
              <div className="strip-val">7:00 AM – 11:00 AM</div>
            </div>
          </div>
          <div className="info-strip-divider" />
          <div className="info-strip-item">
            <span className="strip-icon">📞</span>
            <div>
              <div className="strip-label">Phone / ទូរស័ព្ទសាលា</div>
              <div className="strip-val">[+855 031 636 396 3]</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
