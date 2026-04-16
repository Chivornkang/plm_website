// Classes.jsx  —  main list page
import { useState } from "react";
import { classesData } from "../../data/classData";
import ClassDetail from "../ClassDetail/ClassDetail"; // detail page component     
import "./Classes.css";

function ClassCard({ cls, lang, onClick }) {
  const t = (en, kh) => lang === "en" ? en : kh;
  return (
    <button className="cc-card" style={{ "--cc": cls.color }} onClick={onClick}>
      <div className="cc-emoji">
        { <h2 className="cc-grade">{t(cls.grade, cls.gradeKh)}</h2>}
      </div>
      <div className="cc-body">
        <h2 className="cc-grade">{t(cls.teacher.name, cls.teacher.nameKh)}</h2>
        {/* <p className="cc-teacher">{t(cls.teacher.name, cls.teacher.nameKh)}</p> */}
        <div className="cc-chips">
          <span className="cc-chip">{t(cls.room, cls.roomKh)}</span>
          <span className="cc-chip">👦 {cls.monthlyResults[0]?.students?.length ?? "—"} {t("students","សិស្ស")}</span>
        </div>
      </div>
      <span className="cc-arrow">›</span>
      <div className="cc-bar" />
    </button>
  );
}

export default function Classes() {
  const [lang, setLang]     = useState("en");
  const [selected, setSelected] = useState(null);
  const t = (en, kh) => lang === "en" ? en : kh;

  const goTo = (cls) => { setSelected(cls); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goBack = ()  => { setSelected(null); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <section className="classes-section">

      {/* Language toggle */}
      <div className="topbar">
        <button className="lang-btn" onClick={() => setLang(lang === "en" ? "kh" : "en")}>
          {lang === "en" ? "🇰🇭 ខ្មែរ" : "🇬🇧 English"}
        </button>
      </div>

      {/* ═══ LIST PAGE ═══ */}
      {!selected && (
        <>
          <header className="page-header">
            <div className="page-badge">🏫 {t("Pralay Meas Primary School","សាលាបឋមសិក្សាប្រឡាយមាស")}</div>
            <h1 className="page-title">{t("Classes & Grades","ថ្នាក់ និង ថ្នាក់ទី")}</h1>
            <p className="page-sub">
              {t(
                "Click any class card to explore teacher profile, weekly schedule, cleaning groups & monthly results.",
                "ចុចលើប័ណ្ណថ្នាក់ ដើម្បីមើលប្រវត្តិគ្រូ កាលវិភាគ ក្រុមសំអាត និងលទ្ធផលសិក្សា។"
              )}
            </p>
            <div className="stats-row">
              <div className="stat"><span className="stat-n">6</span><span className="stat-l">{t("Grades","ថ្នាក់ទី")}</span></div>
              <div className="stat-div"/>
              <div className="stat"><span className="stat-n">332</span><span className="stat-l">{t("Students","សិស្ស")}</span></div>
              <div className="stat-div"/>
              <div className="stat"><span className="stat-n">11</span><span className="stat-l">{t("Teachers","គ្រូ")}</span></div>
            </div>
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
  );
}
