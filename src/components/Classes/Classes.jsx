// Classes.jsx  —  main list page
import { useApp } from "../../AppContext"
import { t } from "../../data/lang_data"
import { classesData } from "../../data/classData"
import ClassDetail from "../ClassDetail/ClassDetail"
import { useState } from "react"
import "./Classes.css"

function ClassCard({ cls, lang, onClick }) {
  const tx = t(lang)
  const kh = lang === 'km'
  return (
    <button className="cc-card" style={{ "--cc": cls.color }} onClick={onClick}>
      <div className="cc-emoji">
        <h2 className="cc-grade">{kh ? cls.gradeKh : cls.grade}</h2>
      </div>
      <div className="cc-body">
        <h2 className="cc-grade">{kh ? cls.teacher.nameKh : cls.teacher.name}</h2>
        <div className="cc-chips">
          <span className="cc-chip">
             {cls.monthlyResults[0]?.students?.length ?? "—"} {tx.classes.students}
          </span>
        </div>
      </div>
      <span className="cc-arrow">›</span>
      <div className="cc-bar" />
    </button>
  )
}

export default function Classes() {
  const { lang } = useApp()
  const [selected, setSelected] = useState(null)
  const tx = t(lang)

  const goTo  = (cls) => { setSelected(cls); window.scrollTo({ top: 0, behavior: "smooth" }) }
  const goBack = ()   => { setSelected(null); window.scrollTo({ top: 0, behavior: "smooth" }) }

  return (
    <section className="classes-section">

      {/* ═══ LIST PAGE ═══ */}
      {!selected && (
        <>
          <header className="page-header">
            <h1 className="page-title">{tx.classes.pageTitle}</h1>
          </header>
          <div className="cards-list">
            {classesData.map((cls, i) => (
              <div key={cls.id} className="card-anim" style={{ "--di": i }}>
                <ClassCard cls={cls} lang={lang} onClick={() => goTo(cls)} />
              </div>
            ))}
          </div>
        </>
      )}

      {/* ═══ DETAIL PAGE ═══ */}
      {selected && (
        <ClassDetail cls={selected} lang={lang} onBack={goBack} />
      )}
    </section>
  )
}
