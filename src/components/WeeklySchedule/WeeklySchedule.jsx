// components/WeeklySchedule.jsx
import { useState } from "react";
// import { DAYS_EN, DAYS_KH } from ".../";
import { DAYS_EN, DAYS_KH } from "../../data/classData";
import "./WeeklySchedule.css";

const SUBJECT_COLORS = {
  "Khmer":           "#e84545",
  "Math":            "#4169e1",
  "English":         "#22a67a",
  "Science":         "#9b59b6",
  "Social Studies":  "#e67e22",
  "Art":             "#e91e8c",
  "PE":              "#27ae60",
  "Computer":        "#2980b9",
  "Moral Education": "#795548",
  "Break":           "#aaaaaa",
  "Khmer Review":    "#c0392b",
  "Math Review":     "#2c3e8c",
  "English Review":  "#1a7a5a",
  "Science Review":  "#7d3c98",
  "Exam Prep":       "#c0392b",
  "Computer Lab":    "#1a6090",
};
const subjectColor = (subj) => {
  for (const [key, val] of Object.entries(SUBJECT_COLORS)) {
    if (subj.includes(key)) return val;
  }
  return "#888";
};

export default function WeeklySchedule({ weeklySchedule, color, lang }) {
  const t = (en, kh) => lang === "en" ? en : kh;
  const [activeDay, setActiveDay] = useState("Monday");
  const slots = weeklySchedule[activeDay] || [];

  return (
    <div className="ws-wrap" style={{ "--cc": color }}>

      {/* Day tabs */}
      <div className="ws-day-tabs">
        {DAYS_EN.map((day, i) => (
          <button
            key={day}
            className={`ws-day-btn ${activeDay === day ? "ws-day-active" : ""}`}
            onClick={() => setActiveDay(day)}
          >
            <span className="ws-day-short">{t(day.slice(0, 3), DAYS_KH[i].slice(0, 2))}</span>
            <span className="ws-day-full">{t(day, DAYS_KH[i])}</span>
            {day === "Saturday" && <span className="ws-sat-badge">Sat</span>}
          </button>
        ))}
      </div>

      {/* Full day label */}
      <div className="ws-day-heading">
        <span className="ws-day-dot" />
        {t(activeDay, DAYS_KH[DAYS_EN.indexOf(activeDay)])}
        <span className="ws-slot-count">{slots.filter(s => s.subject !== "Break").length} {t("classes","មុខវិជ្ជា")}</span>
      </div>

      {/* Slot list */}
      <div className="ws-slots">
        {slots.map((slot, i) => {
          const isBreak = slot.subject === "Break";
          const sc = subjectColor(slot.subject);
          return (
            <div
              key={i}
              className={`ws-slot ${isBreak ? "ws-slot-break" : ""}`}
              style={{ "--sc": sc, animationDelay: `${i * 0.055}s` }}
            >
              <div className="ws-slot-time">{slot.time}</div>
              {isBreak ? (
                <div className="ws-slot-break-inner">
                  ☕ {t("Break", "សម្រាក")}
                </div>
              ) : (
                <div className="ws-slot-body">
                  <div className="ws-slot-dot" />
                  <div className="ws-slot-name">
                    {t(slot.subject, slot.subjectKh)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mini legend */}
      <div className="ws-legend">
        {Object.entries(SUBJECT_COLORS)
          .filter(([k]) => slots.some(s => s.subject.includes(k) && s.subject !== "Break"))
          .map(([subj, col]) => (
            <span key={subj} className="ws-legend-item" style={{ "--lc": col }}>
              <span className="ws-legend-dot" />
              {subj}
            </span>
          ))}
      </div>
    </div>
  );
}
