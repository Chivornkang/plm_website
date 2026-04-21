import './Management.css'
import { useState, useEffect } from 'react'
import { useApp } from '../../AppContext'
import { t } from '../../data/lang_data'
import { createPortal } from 'react-dom'
import TeacherCard from '../TeacherCard/TeacherCard'
import { classesData } from '../../data/classData'
import principlel from "../../../assets/teachers/principle.jpg"


const leadership = [
  {
    id: 'Committee',
    role: 'Management Committee', roleKh: 'គណៈកម្មការសាលា',
    name: '', nameKh: '',
    avatar: principlel, tier: 'top',
  },
  {
    id: 'principal',
    role: 'Principal', roleKh: 'នាយក',
    name: '[Ex-Principal Name]', nameKh: 'ឈ្មោះអតីតនាយក',
    avatar: principlel, tier: 'mid',
  },
]

// const teachers = classesData?.map(c => c.teacher) ?? []
const teachers = classesData?.map(c => ({ ...c.teacher, grade: c.grade, gradeKh: c.gradeKh })) ?? []
const ACCENT_COLORS = [
  '#e67e22', '#2980b9', '#27ae60', '#8e44ad',
  '#c0392b', '#16a085', '#d35400',
]

/* ─── OrgNode — uses useApp so it always reads current lang ─────────────── */
function OrgNode({ person, color, onClick, variant = 'default' }) {
  const { lang } = useApp()
  const tx = t(lang)

  return (
    <button
      className={`org-node org-node--${variant}`}
      style={{ '--nc': color }}
      onClick={() => onClick(person)}
      title={`View ${person.name}`}
    >
      <div className="org-node-photo">
        {person.avatar
          ? <img src={person.avatar} alt={person.name} />
          : <span className="org-node-emoji">
            {variant === 'principal' ? '👑' : variant === 'ex' ? '⭐' : '👩‍🏫'}
          </span>}
      </div>
      <div className="org-node-info">
        <div className="org-node-role">{person.role || person.grade || person.gradeKh}</div>
        <div className="org-node-name">{person.name}</div>
        <div className="org-node-name-km">{person.nameKh}</div>
      </div>
      {/* <span className="org-node-hint">{tx.management.viewProfile}</span> */}
    </button>
  )
}

/* ─── Modal ────────────────────────────────────────────────────────────── */
function Modal({ person, color, onClose }) {
  if (!person) return null
  return createPortal(
    <div className="mgmt-modal-overlay" onClick={onClose}>
      <div className="mgmt-modal-inner" onClick={e => e.stopPropagation()}>
        <button className="mgmt-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <TeacherCard teacher={person} color={color} />
      </div>
    </div>,
    document.body
  )
}

/* ─── Main ─────────────────────────────────────────────────────────────── */
export default function Management() {
  const { lang } = useApp()
  const tx = t(lang)
  const mg = tx.management
  const kh = lang === 'km'

  const [selected, setSelected] = useState(null)
  const [selectedColor, setSelectedColor] = useState('#FF8C00')

  useEffect(() => {
    if (!selected) return
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overflowY = 'scroll'
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflowY = ''
      window.scrollTo(0, scrollY)
    }
  }, [selected])

  const open = (person, color) => { setSelected(person); setSelectedColor(color) }
  const close = () => setSelected(null)

  const topRow = teachers.slice(0, 4)
  const bottomRow = teachers.slice(4)

  return (
    <div className="mgmt-page">

      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="badge animate-up">{mg.badge}</span>
          <h1 className="page-hero-title animate-up delay-1">{mg.pageSubtitle}</h1>
          {/* <p className="page-hero-sub animate-up delay-2">{mg.pageSubtitle}</p> */}
        </div>
      </div>

      <div className="container mgmt-content">
        <div className="org-chart animate-up delay-1">

          {/* ROW 1 — Principal + Ex-Principal */}
          <div className="org-row org-row--top">
            <OrgNode
              person={{ ...leadership[0], role: kh ? leadership[0].roleKh : leadership[0].role }}
              color="#c9971e" variant="principal"
              onClick={p => open(p, '#c9971e')}
            />
            <div className="org-v-stub" />
            <div className="org-h-line" />
            {/* <div className="org-v-stub" /> */}
            <OrgNode
              person={{ ...leadership[1], role: kh ? leadership[1].roleKh : leadership[1].role }}
              color="#a07830" variant="ex"
              onClick={p => open(p, '#a07830')}
            />
          </div>
   {/* <div className="org-h-line" /> */}
          <div className="org-v-stub" />
          <OrgNode
            person={{ ...leadership[1], role: kh ? leadership[1].roleKh : leadership[1].role }}
            color="#a07830" variant="ex"
            onClick={p => open(p, '#a07830')}
          />

          <div className="org-v-stub" />
          <div className="org-h-bar" />

          {/* Teacher rows */}
          <div className="org-teachers-block">
            <div className="org-teachers-row">
              {topRow.map((t, i) => (
                <div key={t.id ?? i} className="org-teacher-col">
                  <div className="org-drop-line" />
                  <OrgNode
                    person={{ ...t, role: kh ? (t.gradeKh ?? t.titleKh) : (t.grade ?? t.title) }}
                    color={ACCENT_COLORS[i % ACCENT_COLORS.length]}
                    variant="teacher"
                    onClick={() => open(t, ACCENT_COLORS[i % ACCENT_COLORS.length])}
                  />
                </div>
              ))}
            </div>
            {bottomRow.length > 0 && (
              <div className="org-teachers-row org-teachers-row--bottom">
                {bottomRow.map((t, i) => (
                  <div key={t.id ?? i + 4} className="org-teacher-col">
                    <div className="org-drop-line org-drop-line--short" />
                    <OrgNode
                      person={{ ...t, role: kh ? (t.gradeKh ?? t.titleKh) : (t.grade ?? t.title) }}
                      color={ACCENT_COLORS[(i + 4) % ACCENT_COLORS.length]}
                      variant="teacher"
                      onClick={() => open(t, ACCENT_COLORS[(i + 4) % ACCENT_COLORS.length])}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal person={selected} color={selectedColor} onClose={close} />
    </div>
  )
}
