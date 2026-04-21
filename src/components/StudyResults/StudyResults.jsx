// components/StudyResults.jsx
import { useState, useRef, useEffect } from "react"
import { useApp } from "../../AppContext"
import { RANK_CFG } from "../../data/classData"
import "./StudyResults.css"

function formatNow() {
  return new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })
}

function ScoreBadge({ score }) {
  const pct = score / 100
  const cls = pct >= 0.9 ? "badge-gold" : pct >= 0.8 ? "badge-green" : pct >= 0.7 ? "badge-blue" : "badge-grey"
  return <span className={`score-badge ${cls}`}>{score}</span>
}

function Podium({ top3, color }) {
  const { lang } = useApp()
  const kh = lang === 'km'
  const order = [top3[1], top3[0], top3[2]]
  const rankIdx = [1, 0, 2]
  return (
    <div className="podium-row">
      {order.map((s, pi) => {
        const ri = rankIdx[pi]
        const rc = RANK_CFG[ri]
        const isGold = ri === 0
        return (
          <div key={pi} className={`pod-col ${isGold ? "pod-gold" : ""}`}
            style={{ "--rc": rc.color, "--rcbg": rc.bg, "--rcbd": rc.border }}>
            <div className="pod-medal">{rc.medal}</div>
            <div className="cert">
              <div className="cert-rank">{kh ? rc.titleKh : rc.titleEn}</div>
              <div className="cert-stars">✦ ✦ ✦</div>
              <div className="cert-name">{kh ? s.nameKh : s.name}</div>
              <div className="cert-score">{s.score}<sup>/100</sup></div>
              <div className="cert-seal">🏫 {kh ? "ប្រឡាយមាស" : "Pralay Meas"}</div>
            </div>
            <div className={`pod-stand pod-stand-${ri + 1}`}
              style={{ background: `linear-gradient(to bottom, ${rc.border}, color-mix(in srgb, ${rc.border} 45%, white))` }}
            />
          </div>
        )
      })}
    </div>
  )
}

function ResultsPDF({ month, students, clsGrade, clsGradeKh, color }) {
  const { lang } = useApp()
  const kh = lang === 'km'
  return (
    <div className="pdf-wrap" style={{ "--cc": color }}>
      <div className="pdf-header">
        <div className="pdf-school">🏫 {kh ? "សាលាបឋមសិក្សាប្រឡាយមាស" : "Pralay Meas Primary School"}</div>
        <h2 className="pdf-title">{kh ? "របាយការណ៍លទ្ធផលប្រចាំខែ" : "Monthly Result Report"}</h2>
        <div className="pdf-meta-row">
          <span>📅 {kh ? month.monthKh : month.month}</span>
          <span>📚 {kh ? clsGradeKh : clsGrade}</span>
          <span>👦 {students.length} {kh ? "សិស្ស" : "students"}</span>
        </div>
        <div className="pdf-updated">🕐 {kh ? "ធ្វើបច្ចុប្បន្នភាព" : "Last updated"}: {formatNow()}</div>
      </div>

      <div className="pdf-table-wrap">
        <table className="pdf-table">
          <thead>
            <tr>
              <th>#</th>
              <th>{kh ? "លំដាប់" : "Rank"}</th>
              <th>{kh ? "ឈ្មោះសិស្ស" : "Student Name"}</th>
              <th>{kh ? "ពិន្យ" : "Score"}</th>
              <th>{kh ? "ថ្នាក់" : "Grade"}</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => {
              const rc = RANK_CFG[s.rank - 1]
              const pct = s.score / 100
              const gradeLabel = kh
                ? (pct >= 0.9 ? "ល្អប្រសើរ" : pct >= 0.8 ? "ល្អ" : pct >= 0.7 ? "ល្អបង្គួរ" : "ជាប់")
                : (pct >= 0.9 ? "Excellent" : pct >= 0.8 ? "Very Good" : pct >= 0.7 ? "Good" : "Pass")
              return (
                <tr key={i} className={s.rank <= 3 ? `pdf-top-${s.rank}` : ""}>
                  <td className="pdf-no">{i + 1}</td>
                  <td className="pdf-rank">{rc ? rc.medal : "—"}</td>
                  <td className="pdf-name">{kh ? s.nameKh : s.name}</td>
                  <td className="pdf-score">
                    <div className="pdf-score-row">
                      <ScoreBadge score={s.score} />
                      <div className="pdf-bar-track">
                        <div className="pdf-bar-fill" style={{ width: `${s.score}%`, background: color }} />
                      </div>
                    </div>
                  </td>
                  <td className="pdf-grade-label">{gradeLabel}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="pdf-footer">
        <div>{kh ? "ហត្ថលេខាគ្រូ:" : "Class Teacher Signature:"}</div>
        <div className="pdf-sig-line" />
        <div className="pdf-footer-school">
          {kh ? "សាលាបឋមសិក្សាប្រឡាយមាស • ឆ្នាំសិក្សា ២០២៤–២០២៥"
              : "Pralay Meas Primary School • Academic Year 2024–2025"}
        </div>
      </div>
    </div>
  )
}

export default function StudyResults({ monthlyResults, clsGrade, clsGradeKh, color }) {
  const { lang } = useApp()
  const kh = lang === 'km'
  const [selectedIdx, setSelectedIdx] = useState(monthlyResults.length - 1)
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef(null)
  const current = monthlyResults[selectedIdx]
  const top3 = current.students.slice(0, 3)

  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false) }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div className="sr-wrap" style={{ "--cc": color }}>

      <div className="sr-selector-row">
        <div className="sr-latest-badge">
          🕐 {kh ? "ចុងក្រោយ" : "Latest"}: <strong>{kh ? current.monthKh : current.month}</strong>
        </div>
        <div className="sr-dropdown" ref={dropRef}>
          <button className="sr-drop-btn" onClick={() => setDropOpen(!dropOpen)}>
            📅 {kh ? current.monthKh : current.month} <span className="sr-drop-caret">{dropOpen ? "▲" : "▼"}</span>
          </button>
          {dropOpen && (
            <div className="sr-drop-menu">
              <div className="sr-drop-label">{kh ? "ជ្រើសខែផ្សេង" : "View another month"}</div>
              {monthlyResults.map((mr, i) => (
                <button key={i}
                  className={`sr-drop-item ${i === selectedIdx ? "sr-drop-active" : ""}`}
                  onClick={() => { setSelectedIdx(i); setDropOpen(false) }}>
                  {kh ? mr.monthKh : mr.month}
                  {i === monthlyResults.length - 1 && (
                    <span className="sr-drop-new">{kh ? "ចុងក្រោយ" : "Latest"}</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="sr-section-label">🏆 {kh ? "សិស្សពូកែ ៣ នាក់" : "Top 3 Students"}</div>
      <Podium top3={top3} color={color} />

      <div className="sr-pdf-divider">
        <span>📄 {kh ? "លទ្ធផលពេញថ្នាក់" : "Full Class Results"}</span>
      </div>

      <ResultsPDF month={current} students={current.students}
        clsGrade={clsGrade} clsGradeKh={clsGradeKh} color={color} />
    </div>
  )
}
