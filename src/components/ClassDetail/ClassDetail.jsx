// ClassDetail.jsx
import { useState } from "react"
import { useApp } from "../../AppContext"
import { t } from "../../data/lang_data"
import TeacherCard    from "../TeacherCard/TeacherCard"
import WeeklySchedule from "../WeeklySchedule/WeeklySchedule"
import CleaningGroups from "../CleaningGroups/CleaningGroups"
import StudyResults   from "../StudyResults/StudyResults"
import "./ClassDetail.css"

export default function ClassDetail({ cls, onBack }) {
  const { lang } = useApp()
  const [tab, setTab] = useState("info")
  const tx = t(lang)
  const kh = lang === 'km'

  return (
    <div className="cd-wrap" style={{ "--cc": cls.color }}>

      {/* ── Back ── */}
      <button className="cd-back" onClick={onBack}>
        {tx.classes.backBtn}
      </button>

      {/* ── Tab bar ── */}
      <div className="cd-tab-bar">
        <button
          className={`cd-tab ${tab === "info" ? "cd-tab-active" : ""}`}
          onClick={() => setTab("info")}
        >
          <span>{tx.classes.weeklySchedule}</span>
        </button>
      </div>

      {/* ══ TAB: CLASS INFORMATION ══ */}
      {tab === "info" && (
        <div className="cd-tab-content" key="info">

          <section className="cd-section">
            <h3 className="cd-section-title">
              {tx.classes.teacher}
            </h3>
            <TeacherCard teacher={cls.teacher} color={cls.color} />
          </section>

          <section className="cd-section">
            <h3 className="cd-section-title">
              🗓 {tx.classes.weeklySchedule}
              <span className="cd-section-note">{kh ? "ច – ស" : "Mon – Sat"}</span>
            </h3>
            <WeeklySchedule weeklySchedule={cls.weeklySchedule} color={cls.color} />
          </section>

          <section className="cd-section">
            <h3 className="cd-section-title">
              🧹 {tx.classes.cleaningGroups}
              <span className="cd-section-note">7 {kh ? "នាក់ / ក្រុម" : "students / group"}</span>
            </h3>
            <CleaningGroups cleaningGroups={cls.cleaningGroups} color={cls.color} />
          </section>
        </div>
      )}

      {/* ══ TAB: STUDY RESULTS ══ */}
      {tab === "results" && (
        <div className="cd-tab-content" key="results">
          <StudyResults
            monthlyResults={cls.monthlyResults}
            clsGrade={cls.grade}
            clsGradeKh={cls.gradeKh}
            color={cls.color}
          />
        </div>
      )}

    </div>
  )
}
