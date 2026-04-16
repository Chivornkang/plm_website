// ClassDetail.jsx
import { useState } from "react";
import TeacherCard    from "../TeacherCard/TeacherCard";
import WeeklySchedule from "../WeeklySchedule/WeeklySchedule";
import CleaningGroups from "../CleaningGroups/CleaningGroups";
import StudyResults   from "../StudyResults/StudyResults";
import "./ClassDetail.css";

export default function ClassDetail({ cls, lang, onBack }) {
  const [tab, setTab] = useState("info");
  const t = (en, kh) => lang === "en" ? en : kh;

  return (
    <div className="cd-wrap" style={{ "--cc": cls.color }}>

      {/* ── Back ── */}
      <button className="cd-back" onClick={onBack}>
        ← {t("All Classes", "ថ្នាក់ទាំងអស់")}
      </button>

      {/* ── Hero ── */}
      {/* <div className="cd-hero">
        <div className="cd-hero-emoji">{cls.emoji}</div>
        <div className="cd-hero-text">
          <h2 className="cd-hero-grade">{t(cls.grade, cls.gradeKh)}</h2>
          <div className="cd-hero-chips">
            <span className="cd-chip">{t(cls.room, cls.roomKh)}</span>
            <span className="cd-chip">👦 {cls.monthlyResults[0]?.students?.length ?? "—"} {t("students","សិស្ស")}</span>
            <span className="cd-chip">👩‍🏫 {t(cls.teacher.name, cls.teacher.nameKh)}</span>
          </div>
        </div>
      </div> */}

      {/* ── Tab bar ── */}
      <div className="cd-tab-bar">
        <button
          className={`cd-tab ${tab === "info" ? "cd-tab-active" : ""}`}
          onClick={() => setTab("info")}
        >
          <span>📋</span>
          <span>{t("Class Information", "ព័ត៌មានថ្នាក់")}</span>
        </button>
        <button
          className={`cd-tab ${tab === "results" ? "cd-tab-active" : ""}`}
          onClick={() => setTab("results")}
        >
          <span>📊</span>
          <span>{t("Study Results", "លទ្ធផលសិក្សា")}</span>
        </button>
      </div>

      {/* ══ TAB: CLASS INFORMATION ══ */}
      {tab === "info" && (
        <div className="cd-tab-content" key="info">

          <section className="cd-section">
            <h3 className="cd-section-title">
              👩‍🏫 {t("Teacher Profile", "ប្រវត្តិគ្រូ")}
            </h3>
            <TeacherCard teacher={cls.teacher} color={cls.color} lang={lang} />
          </section>

          <section className="cd-section">
            <h3 className="cd-section-title">
              🗓 {t("Weekly Schedule", "កាលវិភាគប្រចាំសប្ដាហ៍")}
              <span className="cd-section-note">{t("Mon – Sat","ច – ស")}</span>
            </h3>
            <WeeklySchedule weeklySchedule={cls.weeklySchedule} color={cls.color} lang={lang} />
          </section>

          <section className="cd-section">
            <h3 className="cd-section-title">
              🧹 {t("Daily Cleaning Groups", "ក្រុមសំអាតប្រចាំថ្ងៃ")}
              <span className="cd-section-note">7 {t("students / group","នាក់ / ក្រុម")}</span>
            </h3>
            <CleaningGroups cleaningGroups={cls.cleaningGroups} color={cls.color} lang={lang} />
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
            lang={lang}
          />
        </div>
      )}

    </div>
  );
}
