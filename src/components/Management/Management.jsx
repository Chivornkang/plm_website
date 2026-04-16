import './Management.css'

const leadership = [
  { emoji: '👑', role: 'Principal', roleKm: 'នាយក', name: '[Principal Name]', nameKm: 'ឈ្មោះនាយក', tier: 'top' },
  { emoji: '⭐', role: 'Ex-Principal', roleKm: 'អតីតនាយក', name: '[Ex-Principal Name]', nameKm: 'ឈ្មោះអតីតនាយក', tier: 'mid' },
]

const teachers = [
  { emoji: '👩‍🏫', name: '[Teacher Name 1]', nameKm: 'ឈ្មោះ', grade: 'Kindergarten', gradeKm: 'មត្តេយ្យ', subject: 'All Subjects' },
  { emoji: '👨‍🏫', name: '[Teacher Name 2]', nameKm: 'ឈ្មោះ', grade: 'Grade 1', gradeKm: 'ថ្នាក់ទី ១', subject: 'All Subjects' },
  { emoji: '👩‍🏫', name: '[Teacher Name 3]', nameKm: 'ឈ្មោះ', grade: 'Grade 2', gradeKm: 'ថ្នាក់ទី ២', subject: 'All Subjects' },
  { emoji: '👨‍🏫', name: '[Teacher Name 4]', nameKm: 'ឈ្មោះ', grade: 'Grade 3', gradeKm: 'ថ្នាក់ទី ៣', subject: 'All Subjects' },
  { emoji: '👩‍🏫', name: '[Teacher Name 5]', nameKm: 'ឈ្មោះ', grade: 'Grade 4', gradeKm: 'ថ្នាក់ទី ៤', subject: 'All Subjects' },
  { emoji: '👨‍🏫', name: '[Teacher Name 6]', nameKm: 'ឈ្មោះ', grade: 'Grade 5', gradeKm: 'ថ្នាក់ទី ៥', subject: 'All Subjects' },
  { emoji: '👩‍🏫', name: '[Teacher Name 7]', nameKm: 'ឈ្មោះ', grade: 'Grade 6', gradeKm: 'ថ្នាក់ទី ៦', subject: 'All Subjects' },
]

export default function Management() {
  return (
    <div className="mgmt-page">
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="badge animate-up">Our People / ក្រុមការងារ</span>
          <h1 className="page-hero-title animate-up delay-1">Leadership &amp; Teachers</h1>
          <p className="page-hero-sub animate-up delay-2">រចនាសម្ព័ន្ធគ្រប់គ្រង និងគ្រូបង្រៀន</p>
        </div>
      </div>

      <div className="container mgmt-content">

        {/* Org Chart */}
        <div className="section-header animate-up">
          <p className="badge">Structure / រចនាសម្ព័ន្ធ</p>
          <h2 className="section-title" style={{marginTop:'0.5rem'}}>Management Structure</h2>
          <p className="section-subtitle">រចនាសម្ព័ន្ធការគ្រប់គ្រង</p>
          <div className="gold-line" />
        </div>

        <div className="org-chart animate-up delay-1">
          {/* School at top */}
          <div className="org-school-box">
            <div className="org-school-icon">🏫</div>
            <div>
              <div className="org-school-name">Pralay Meas Primary School</div>
              <div className="org-school-km">សាលាបឋមសិក្សាប្រឡាយមាស</div>
            </div>
          </div>

          <div className="org-connector-v" />

          {/* Leadership row */}
          <div className="org-leadership-row">
            {leadership.map((l, i) => (
              <div key={i} className={`org-card ${l.tier === 'top' ? 'org-card--principal' : 'org-card--ex'}`}>
                <div className="org-avatar">
                  <span>{l.emoji}</span>
                </div>
                <div className="org-role-badge">{l.role}</div>
                <div className="org-name">{l.name}</div>
                <div className="org-name-km">{l.nameKm}</div>
                <div className="org-role-km">{l.roleKm}</div>
              </div>
            ))}
          </div>

          <div className="org-connector-v" />
          <div className="org-connector-h" />

          {/* Teachers boxes */}
          <div className="org-teachers-row">
            {teachers.map((t, i) => (
              <div key={i} className="org-teacher-mini">
                <span className="org-teacher-emoji">{t.emoji}</span>
                <span className="org-teacher-grade">{t.grade}</span>
                <span className="org-teacher-grade-km">{t.gradeKm}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Teachers detailed grid */}
        <div className="section-header animate-up" style={{marginTop:'2rem'}}>
          <p className="badge">Teaching Staff / គ្រូបង្រៀន</p>
          <h2 className="section-title" style={{marginTop:'0.5rem'}}>Our Teachers</h2>
          <p className="section-subtitle">គ្រូចំនួន ៧ រូប ពីមត្តេយ្យ ដល់ ថ្នាក់ទី ៦</p>
          <div className="gold-line" />
        </div>

        <div className="teachers-grid">
          {teachers.map((t, i) => (
            <div key={i} className={`teacher-card card animate-up delay-${(i % 4) + 1}`}>
              <div className="teacher-avatar-wrap">
                <div className="teacher-avatar">{t.emoji}</div>
                <div className="teacher-avatar-ring" />
              </div>
              <div className="teacher-grade-badge">{t.grade}</div>
              <h3 className="teacher-name">{t.name}</h3>
              <p className="teacher-name-km">{t.nameKm}</p>
              <div className="teacher-divider" />
              <div className="teacher-meta">
                <span className="badge">{t.gradeKm}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
