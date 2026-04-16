// components/StudyResults.jsx
import { useState, useRef, useEffect } from "react";
// import { RANK_CFG } from "../classData";
import { RANK_CFG } from "../../data/classData";
import "./StudyResults.css";

// ── helpers ──────────────────────────────────────────────────────────────────

function formatNow() {
  return new Date().toLocaleDateString("en-GB", {
    day: "2-digit", month: "long", year: "numeric",
  });
}

function ScoreBadge({ score }) {
  const pct = score / 100;
  const cls = pct >= 0.9 ? "badge-gold" : pct >= 0.8 ? "badge-green" : pct >= 0.7 ? "badge-blue" : "badge-grey";
  return <span className={`score-badge ${cls}`}>{score}</span>;
}

// ── Podium ────────────────────────────────────────────────────────────────────

function Podium({ top3, color, lang }) {
  const t = (en, kh) => lang === "en" ? en : kh;
  // order: 2nd | 1st | 3rd
  const order = [top3[1], top3[0], top3[2]];
  const rankIdx = [1, 0, 2];

  return (
    <div className="podium-row">
      {order.map((s, pi) => {
        const ri = rankIdx[pi];
        const rc = RANK_CFG[ri];
        const isGold = ri === 0;
        return (
          <div key={pi} className={`pod-col ${isGold ? "pod-gold" : ""}`}
            style={{ "--rc": rc.color, "--rcbg": rc.bg, "--rcbd": rc.border }}>
            <div className="pod-medal">{rc.medal}</div>
            <div className="cert">
              <div className="cert-rank">{t(rc.titleEn, rc.titleKh)}</div>
              <div className="cert-stars">✦ ✦ ✦</div>
              <div className="cert-name">{t(s.name, s.nameKh)}</div>
              <div className="cert-score">{s.score}<sup>/100</sup></div>
              <div className="cert-seal">🏫 {t("Pralay Meas","ប្រឡាយមាស")}</div>
            </div>
            <div className={`pod-stand pod-stand-${ri + 1}`}
              style={{ background: `linear-gradient(to bottom, ${rc.border}, color-mix(in srgb, ${rc.border} 45%, white))` }}
            />
          </div>
        );
      })}
    </div>
  );
}

// ── Full results PDF-style table ──────────────────────────────────────────────

function ResultsPDF({ month, students, clsGrade, clsGradeKh, color, lang }) {
  const t = (en, kh) => lang === "en" ? en : kh;

  return (
    <div className="pdf-wrap" style={{ "--cc": color }}>
      {/* PDF Header */}
      <div className="pdf-header">
        <div className="pdf-school">🏫 {t("Pralay Meas Primary School","សាលាបឋមសិក្សាប្រឡាយមាស")}</div>
        <h2 className="pdf-title">
          {t("Monthly Result Report","របាយការណ៍លទ្ធផលប្រចាំខែ")}
        </h2>
        <div className="pdf-meta-row">
          <span>📅 {t(month.month, month.monthKh)}</span>
          <span>📚 {t(clsGrade, clsGradeKh)}</span>
          <span>👦 {students.length} {t("students","សិស្ស")}</span>
        </div>
        <div className="pdf-updated">
          🕐 {t("Last updated","ធ្វើបច្ចុប្បន្នភាព")}: {formatNow()}
        </div>
      </div>

      {/* Table */}
      <div className="pdf-table-wrap">
        <table className="pdf-table">
          <thead>
            <tr>
              <th>#</th>
              <th>{t("Rank","លំដាប់")}</th>
              <th>{t("Student Name","ឈ្មោះសិស្ស")}</th>
              <th>{t("Score","ពិន្យ")}</th>
              <th>{t("Grade","ថ្នាក់")}</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => {
              const rc = RANK_CFG[s.rank - 1];
              const pct = s.score / 100;
              const gradeLabel = pct >= 0.9 ? t("Excellent","ល្អប្រសើរ") : pct >= 0.8 ? t("Very Good","ល្អ") : pct >= 0.7 ? t("Good","ល្អបង្គួរ") : t("Pass","ជាប់");
              return (
                <tr key={i} className={s.rank <= 3 ? `pdf-top-${s.rank}` : ""}>
                  <td className="pdf-no">{i + 1}</td>
                  <td className="pdf-rank">{rc ? rc.medal : "—"}</td>
                  <td className="pdf-name">{t(s.name, s.nameKh)}</td>
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
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="pdf-footer">
        <div>{t("Class Teacher Signature:","ហត្ថលេខាគ្រូ:")}</div>
        <div className="pdf-sig-line" />
        <div className="pdf-footer-school">
          {t("Pralay Meas Primary School • Academic Year 2024–2025",
             "សាលាបឋមសិក្សាប្រឡាយមាស • ឆ្នាំសិក្សា ២០២៤–២០២៥")}
        </div>
      </div>
    </div>
  );
}

// ── Main StudyResults component ───────────────────────────────────────────────

export default function StudyResults({ monthlyResults, clsGrade, clsGradeKh, color, lang }) {
  const t = (en, kh) => lang === "en" ? en : kh;

  // Default to latest (last) month
  const [selectedIdx, setSelectedIdx] = useState(monthlyResults.length - 1);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  const current = monthlyResults[selectedIdx];
  const top3 = current.students.slice(0, 3);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="sr-wrap" style={{ "--cc": color }}>

      {/* ── Month selector ── */}
      <div className="sr-selector-row">
        <div className="sr-latest-badge">
          🕐 {t("Latest","ចុងក្រោយ")}: <strong>{t(current.month, current.monthKh)}</strong>
        </div>

        <div className="sr-dropdown" ref={dropRef}>
          <button className="sr-drop-btn" onClick={() => setDropOpen(!dropOpen)}>
            📅 {t(current.month, current.monthKh)} <span className="sr-drop-caret">{dropOpen ? "▲" : "▼"}</span>
          </button>
          {dropOpen && (
            <div className="sr-drop-menu">
              <div className="sr-drop-label">{t("View another month","ជ្រើសខែផ្សេង")}</div>
              {monthlyResults.map((mr, i) => (
                <button
                  key={i}
                  className={`sr-drop-item ${i === selectedIdx ? "sr-drop-active" : ""}`}
                  onClick={() => { setSelectedIdx(i); setDropOpen(false); }}
                >
                  {t(mr.month, mr.monthKh)}
                  {i === monthlyResults.length - 1 && (
                    <span className="sr-drop-new">{t("Latest","ចុងក្រោយ")}</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Podium ── */}
      <div className="sr-section-label">🏆 {t("Top 3 Students","សិស្សពូកែ ៣ នាក់")}</div>
      <Podium top3={top3} color={color} lang={lang} />

      {/* ── Divider ── */}
      <div className="sr-pdf-divider">
        <span>📄 {t("Full Class Results","លទ្ធផលពេញថ្នាក់")}</span>
      </div>

      {/* ── Full PDF table ── */}
      <ResultsPDF
        month={current}
        students={current.students}
        clsGrade={clsGrade}
        clsGradeKh={clsGradeKh}
        color={color}
        lang={lang}
      />
    </div>
  );
}
