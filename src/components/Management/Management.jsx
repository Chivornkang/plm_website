import './Management.css';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import TeacherCard from '../TeacherCard/TeacherCard';
import { classesData } from '../../data/classData';
import principlel from "../../../assets/teachers/principle.jpg";

/* ─── Data ─────────────────────────────────────────────────────────────── */
const leadership = [
  {
    id: 'principal',
    role: 'Principal',
    roleKh: 'នាយក',
    name: '[Principal Name]',
    nameKh: 'ឈ្មោះនាយក',
    avatar: principlel,
    tier: 'top',
  },
  {
    id: 'ex-principal',
    role: 'Ex-Principal',
    roleKh: 'អតីតនាយក',
    name: '[Ex-Principal Name]',
    nameKh: 'ឈ្មោះអតីតនាយក',
    avatar: principlel,
    tier: 'mid',
  },
];

const teachers = classesData?.map((c, i) => c.teacher) ?? [
  { id: 't0', name: '[Teacher 1]', nameKh: 'គ្រូទី ១', title: 'Kindergarten Teacher', titleKh: 'គ្រូមត្តេយ្យ', grade: 'Kindergarten', gradeKh: 'មត្តេយ្យ', avatar: null, phone: '', email: '', bio: '', bioKh: '', experience: '', experienceKh: '' },
  { id: 't1', name: '[Teacher 2]', nameKh: 'គ្រូទី ២', title: 'Grade 1 Teacher',       titleKh: 'គ្រូថ្នាក់ទី ១', grade: 'Grade 1',       gradeKh: 'ថ្នាក់ទី ១', avatar: null, phone: '', email: '', bio: '', bioKh: '', experience: '', experienceKh: '' },
  { id: 't2', name: '[Teacher 3]', nameKh: 'គ្រូទី ៣', title: 'Grade 2 Teacher',       titleKh: 'គ្រូថ្នាក់ទី ២', grade: 'Grade 2',       gradeKh: 'ថ្នាក់ទី ២', avatar: null, phone: '', email: '', bio: '', bioKh: '', experience: '', experienceKh: '' },
  { id: 't3', name: '[Teacher 4]', nameKh: 'គ្រូទី ៤', title: 'Grade 3 Teacher',       titleKh: 'គ្រូថ្នាក់ទី ៣', grade: 'Grade 3',       gradeKh: 'ថ្នាក់ទី ៣', avatar: null, phone: '', email: '', bio: '', bioKh: '', experience: '', experienceKh: '' },
  { id: 't4', name: '[Teacher 5]', nameKh: 'គ្រូទី ៥', title: 'Grade 4 Teacher',       titleKh: 'គ្រូថ្នាក់ទី ៤', grade: 'Grade 4',       gradeKh: 'ថ្នាក់ទី ៤', avatar: null, phone: '', email: '', bio: '', bioKh: '', experience: '', experienceKh: '' },
  { id: 't5', name: '[Teacher 6]', nameKh: 'គ្រូទី ៦', title: 'Grade 5 Teacher',       titleKh: 'គ្រូថ្នាក់ទី ៥', grade: 'Grade 5',       gradeKh: 'ថ្នាក់ទី ៥', avatar: null, phone: '', email: '', bio: '', bioKh: '', experience: '', experienceKh: '' },
  { id: 't6', name: '[Teacher 7]', nameKh: 'គ្រូទី ៧', title: 'Grade 6 Teacher',       titleKh: 'គ្រូថ្នាក់ទី ៦', grade: 'Grade 6',       gradeKh: 'ថ្នាក់ទី ៦', avatar: null, phone: '', email: '', bio: '', bioKh: '', experience: '', experienceKh: '' },
];

const ACCENT_COLORS = [
  '#e67e22', '#2980b9', '#27ae60', '#8e44ad',
  '#c0392b', '#16a085', '#d35400',
];

/* ─── OrgNode ──────────────────────────────────────────────────────────── */
function OrgNode({ person, color, onClick, variant = 'default' }) {
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
          : <span className="org-node-emoji">{variant === 'principal' ? '👑' : variant === 'ex' ? '⭐' : '👩‍🏫'}</span>}
      </div>
      <div className="org-node-info">
        <div className="org-node-role">{person.role || person.grade || person.gradeKh}</div>
        <div className="org-node-name">{person.name}</div>
        <div className="org-node-name-km">{person.nameKh}</div>
      </div>
      <span className="org-node-hint">View Profile</span>
    </button>
  );
}

/* ─── Modal ────────────────────────────────────────────────────────────── */
function Modal({ person, color, lang, onClose }) {
  if (!person) return null;
  return createPortal(
    <div className="mgmt-modal-overlay" onClick={onClose}>
      <div className="mgmt-modal-inner" onClick={e => e.stopPropagation()}>
        <button className="mgmt-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <TeacherCard teacher={person} color={color} lang={lang} />
      </div>
    </div>,
    document.body
  );
}

/* ─── Main ─────────────────────────────────────────────────────────────── */
export default function Management({ lang = 'en' }) {
  const [selected, setSelected] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#FF8C00');

  // Lock body scroll while modal is open, restore exact position on close
  useEffect(() => {
    if (!selected) return;
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'scroll'; // keep scrollbar width to prevent layout shift
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      window.scrollTo(0, scrollY);
    };
  }, [selected]);

  const open = (person, color) => { setSelected(person); setSelectedColor(color); };
  const close = () => setSelected(null);

  // Split teachers: top 4, bottom 3
  const topRow    = teachers.slice(0, 4);
  const bottomRow = teachers.slice(4);

  return (
    <div className="mgmt-page">

      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="badge animate-up">Our People / ក្រុមការងារ</span>
          <h1 className="page-hero-title animate-up delay-1">Leadership &amp; Teachers</h1>
          <p className="page-hero-sub animate-up delay-2">រចនាសម្ព័ន្ធគ្រប់គ្រង និងគ្រូបង្រៀន</p>
        </div>
      </div>

      <div className="container mgmt-content">

        {/* <div className="section-header animate-up">
          <p className="badge">Structure / រចនាសម្ព័ន្ធ</p>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>Management Structure</h2>
          <p className="section-subtitle">រចនាសម្ព័ន្ធការគ្រប់គ្រង</p>
          <div className="gold-line" />
        </div> */}

        {/* ══════════════════════════════════════════
            ORG CHART  —  mirrors the hand-drawn sketch
            ══════════════════════════════════════════ */}
        <div className="org-chart animate-up delay-1">

          {/* ROW 1 — Principal  ─  Ex-Principal (side by side, horizontal connector) */}
          <div className="org-row org-row--top">
            <OrgNode
              person={{ ...leadership[0], role: lang === 'en' ? leadership[0].role : leadership[0].roleKh }}
              color="#c9971e"
              variant="principal"
              onClick={p => open(p, '#c9971e')}
            />
            <div className="org-h-line" />
            <OrgNode
              person={{ ...leadership[1], role: lang === 'en' ? leadership[1].role : leadership[1].roleKh }}
              color="#a07830"
              variant="ex"
              onClick={p => open(p, '#a07830')}
            />
          </div>

          {/* V-connector down from center */}
          <div className="org-v-stub" />

          {/* ROW 2 — School box (center node in sketch) */}
          <div className="org-school-node">
            <span className="org-school-node-icon">🏫</span>
            <div>
              <div className="org-school-node-name">Pralay Meas Primary School</div>
              <div className="org-school-node-km">សាលាបឋមសិក្សាប្រឡាយមាស</div>
            </div>
          </div>

          {/* V-connector + wide H-bar */}
          <div className="org-v-stub" />
          <div className="org-h-bar" />

          {/* TEACHER ROWS — top 4 + bottom 3 */}
          <div className="org-teachers-block">
            <div className="org-teachers-row">
              {topRow.map((t, i) => (
                <div key={t.id ?? i} className="org-teacher-col">
                  <div className="org-drop-line" />
                  <OrgNode
                    person={{
                      ...t,
                      role: lang === 'kh' ? (t.grade ?? t.title) : (t.gradeKh ?? t.titleKh),
                    }}
                    color={ACCENT_COLORS[i % ACCENT_COLORS.length]}
                    variant="teacher"
                    onClick={p => open(t, ACCENT_COLORS[i % ACCENT_COLORS.length])}
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
                      person={{
                        ...t,
                        role: lang === 'kh' ? (t.grade ?? t.title) : (t.gradeKh ?? t.titleKh),
                      }}
                      color={ACCENT_COLORS[(i + 4) % ACCENT_COLORS.length]}
                      variant="teacher"
                      onClick={p => open(t, ACCENT_COLORS[(i + 4) % ACCENT_COLORS.length])}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* /org-chart */}

      </div>

      {/* ── Modal ── */}
      <Modal person={selected} color={selectedColor} lang={lang} onClose={close} />
    </div>
  );
}
