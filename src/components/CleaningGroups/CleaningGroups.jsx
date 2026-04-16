// components/CleaningGroups.jsx
// import { DAYS_EN, DAYS_KH } from "../classData";
import { DAYS_EN, DAYS_KH } from "../../data/classData";
import "./CleaningGroups.css";

export default function CleaningGroups({ cleaningGroups, color, lang }) {
  const t = (en, kh) => lang === "en" ? en : kh;

  return (
    <div className="cg-wrap" style={{ "--cc": color }}>
      <div className="cg-note">
        🧹 {t(
          "Each group is responsible for cleaning the classroom on their assigned day.",
          "ក្រុមនីមួយៗទទួលខុសត្រូវក្នុងការសំអាតថ្នាក់រៀននៅថ្ងៃដែលត្រូវបានកំណត់។"
        )}
      </div>

      <div className="cg-grid">
        {cleaningGroups.map((group, gi) => (
          <div key={gi} className="cg-card" style={{ animationDelay: `${gi * 0.065}s` }}>
            <div className="cg-day-header">
              <span className="cg-day-icon">
                {["🌤","⛅","🌥","🌦","☀️","🌈"][gi]}
              </span>
              <div>
                <div className="cg-day-name">
                  {t(DAYS_EN[gi] ?? `Day ${gi+1}`, DAYS_KH[gi] ?? `ថ្ងៃ ${gi+1}`)}
                </div>
                <div className="cg-member-count">{group.length} {t("students","នាក់")}</div>
              </div>
            </div>
            <div className="cg-members">
              {group.map((name, ni) => (
                <div key={ni} className="cg-member" style={{ animationDelay: `${gi * 0.065 + ni * 0.03}s` }}>
                  <span className="cg-member-avatar">{["🧑","👦","👧","🧒"][ni % 4]}</span>
                  <span className="cg-member-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
