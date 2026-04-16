import { useState } from "react";
import "./Classes.css";

// ─── DATA ────────────────────────────────────────────────────────────────────

const DAYS_EN = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
const DAYS_KH = ["ច័ន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ"];

const RANK_CFG = [
  { medal:"🥇", color:"#B8860B", bg:"#FFFBE6", border:"#FFD700", titleEn:"1st Place", titleKh:"លំដាប់ទី១" },
  { medal:"🥈", color:"#707070", bg:"#F5F5F5", border:"#C0C0C0", titleEn:"2nd Place", titleKh:"លំដាប់ទី២" },
  { medal:"🥉", color:"#8B4513", bg:"#FFF3E6", border:"#CD7F32", titleEn:"3rd Place", titleKh:"លំដាប់ទី៣" },
];

const classesData = [
  {
    id: 1,
    grade:"Grade 1", gradeKh:"ថ្នាក់ទី១",
    emoji:"🌱", color:"#FF8C00",
    room:"Room 101", roomKh:"បន្ទប់ ១០១",
    students:28,
    teacher:{
      name:"Mrs. Sokha Chea", nameKh:"លោកគ្រូ សុខា ជា",
      experience:"8 years", experienceKh:"៨ ឆ្នាំ",
      phone:"012 345 678", email:"sokha@pralaymeas.edu.kh", avatar:"👩‍🏫",
      bio:"Passionate early childhood educator with a warm approach to learning.",
      bioKh:"គ្រូដែលស្រឡាញ់ការអប់រំកុមារវ័យដំបូង ជាមួយនឹងវិធីសាស្ត្រសិក្សាដ៏ស្រស់ស្រាយ។",
    },
    schedule:[
      { time:"7:00–8:00",  subject:"Khmer",           subjectKh:"ភាសាខ្មែរ" },
      { time:"8:00–9:00",  subject:"Math",            subjectKh:"គណិតវិទ្យា" },
      { time:"9:00–9:30",  subject:"Break",           subjectKh:"សម្រាក" },
      { time:"9:30–10:30", subject:"Moral Education", subjectKh:"សីលធម៌" },
      { time:"10:30–11:00",subject:"Art",             subjectKh:"សិល្បៈ" },
    ],
    cleaningGroups:[
      ["Dara","Sreyla","Kosal","Chantha","Mony","Pisey","Bopha"],
      ["Veasna","Ratana","Sophea","Kunthy","Lida","Panha","Tola"],
      ["Rithy","Sreymom","Chanra","Vanna","Makara","Sothea","Phally"],
      ["Kimly","Bunthoeun","Sovannary","Leakena","Channary","Sambath","Kanha"],
      ["Sokha","Bunly","Sreynich","Dyna","Nakry","Chanvary","Sophal"],
    ],
    monthlyResults:[
      { month:"January",  monthKh:"មករា",   top:[{rank:1,name:"Dara",   nameKh:"ដារ៉ា",  score:98},{rank:2,name:"Sreyla", nameKh:"ស្រីឡា",score:95},{rank:3,name:"Kosal",  nameKh:"គោសល", score:93}] },
      { month:"February", monthKh:"កុម្ភៈ",  top:[{rank:1,name:"Sreyla", nameKh:"ស្រីឡា",score:97},{rank:2,name:"Dara",   nameKh:"ដារ៉ា",  score:96},{rank:3,name:"Chantha",nameKh:"ចន្ទា", score:91}] },
      { month:"March",    monthKh:"មីនា",    top:[{rank:1,name:"Kosal",  nameKh:"គោសល", score:99},{rank:2,name:"Sreyla", nameKh:"ស្រីឡា",score:95},{rank:3,name:"Mony",   nameKh:"មុនី",  score:92}] },
    ],
  },
  {
    id: 2,
    grade:"Grade 2", gradeKh:"ថ្នាក់ទី២",
    emoji:"🌿", color:"#FFA500",
    room:"Room 102", roomKh:"បន្ទប់ ១០២",
    students:30,
    teacher:{
      name:"Mr. Veasna Pov", nameKh:"លោកគ្រូ វាសនា ប៉ូវ",
      experience:"12 years", experienceKh:"១២ ឆ្នាំ",
      phone:"011 234 567", email:"veasna@pralaymeas.edu.kh", avatar:"👨‍🏫",
      bio:"Dedicated teacher who makes Math and Science exciting for young learners.",
      bioKh:"គ្រូដែលធ្វើឱ្យគណិតវិទ្យា និងវិទ្យាសាស្ត្រគួរឱ្យចាប់អារម្មណ៍សម្រាប់សិស្ស។",
    },
    schedule:[
      { time:"7:00–8:00",  subject:"Math",    subjectKh:"គណិតវិទ្យា" },
      { time:"8:00–9:00",  subject:"Khmer",   subjectKh:"ភាសាខ្មែរ" },
      { time:"9:00–9:30",  subject:"Break",   subjectKh:"សម្រាក" },
      { time:"9:30–10:30", subject:"Science", subjectKh:"វិទ្យាសាស្ត្រ" },
      { time:"10:30–11:00",subject:"Art",     subjectKh:"សិល្បៈ" },
    ],
    cleaningGroups:[
      ["Pisey","Ratanak","Sophal","Dyna","Menghour","Sreynich","Chanmoly"],
      ["Raksmey","Vira","Sokunthea","Lyda","Ponleak","Thida","Narith"],
      ["Samnang","Chankrisna","Boranin","Visal","Mengly","Sotheavy","Chamroeun"],
      ["Chhorvy","Bunna","Sovanda","Leakena","Channitha","Sambath","Kanha"],
      ["Rithy","Sreymom","Chanra","Vanna","Makara","Sothea","Phally"],
    ],
    monthlyResults:[
      { month:"January",  monthKh:"មករា",   top:[{rank:1,name:"Pisey",  nameKh:"ពិសី",  score:97},{rank:2,name:"Ratanak",nameKh:"រតនៈ", score:94},{rank:3,name:"Sophal",nameKh:"សុផល", score:91}] },
      { month:"February", monthKh:"កុម្ភៈ",  top:[{rank:1,name:"Ratanak",nameKh:"រតនៈ", score:98},{rank:2,name:"Pisey",  nameKh:"ពិសី",  score:95},{rank:3,name:"Dyna",  nameKh:"ឌីណា", score:90}] },
      { month:"March",    monthKh:"មីនា",    top:[{rank:1,name:"Pisey",  nameKh:"ពិសី",  score:99},{rank:2,name:"Sophal", nameKh:"សុផល", score:93},{rank:3,name:"Ratanak",nameKh:"រតនៈ",score:91}] },
    ],
  },
  {
    id: 3,
    grade:"Grade 3", gradeKh:"ថ្នាក់ទី៣",
    emoji:"🌻", color:"#FFB700",
    room:"Room 201", roomKh:"បន្ទប់ ២០១",
    students:32,
    teacher:{
      name:"Mrs. Channary Lim", nameKh:"លោកគ្រូ ចន្ទារី លីម",
      experience:"6 years", experienceKh:"៦ ឆ្នាំ",
      phone:"096 567 890", email:"channary@pralaymeas.edu.kh", avatar:"👩‍🏫",
      bio:"Creative and energetic, bringing life to Social Studies and Science.",
      bioKh:"ច្នៃប្រឌិត និងមានទឹកចិត្ត ធ្វើឱ្យសិក្សាសង្គម និងវិទ្យាសាស្ត្រមានជីវិតជីវា។",
    },
    schedule:[
      { time:"7:00–8:00",   subject:"Khmer",         subjectKh:"ភាសាខ្មែរ" },
      { time:"8:00–9:00",   subject:"Math",          subjectKh:"គណិតវិទ្យា" },
      { time:"9:00–9:30",   subject:"Break",         subjectKh:"សម្រាក" },
      { time:"9:30–10:15",  subject:"Science",       subjectKh:"វិទ្យាសាស្ត្រ" },
      { time:"10:15–11:00", subject:"Social Studies",subjectKh:"សិក្សាសង្គម" },
      { time:"11:00–11:30", subject:"Art",           subjectKh:"សិល្បៈ" },
    ],
    cleaningGroups:[
      ["Sreynit","Bopha","Chanveasna","Kolap","Malis","Chenda","Srey"],
      ["Virak","Daro","Tola","Boren","Menghor","Ratana","Sopheap"],
      ["Lyma","Sokhom","Chanthy","Vanny","Makra","Sothy","Phany"],
      ["Kimba","Bunthan","Sovanny","Leka","Channy","Sambo","Kanhy"],
      ["Nary","Borey","Sovath","Chanty","Pheary","Kunthy","Vibol"],
    ],
    monthlyResults:[
      { month:"January",  monthKh:"មករា",   top:[{rank:1,name:"Sreynit",nameKh:"ស្រីនិត",score:96},{rank:2,name:"Bopha",nameKh:"បុប្ផា",score:94},{rank:3,name:"Virak",nameKh:"វីរៈ",  score:90}] },
      { month:"February", monthKh:"កុម្ភៈ",  top:[{rank:1,name:"Bopha", nameKh:"បុប្ផា", score:98},{rank:2,name:"Sreynit",nameKh:"ស្រីនិត",score:95},{rank:3,name:"Daro", nameKh:"ដារ៉ូ",score:89}] },
      { month:"March",    monthKh:"មីនា",    top:[{rank:1,name:"Virak", nameKh:"វីរៈ",   score:97},{rank:2,name:"Bopha", nameKh:"បុប្ផា", score:94},{rank:3,name:"Kolap",nameKh:"កុលាប",score:91}] },
    ],
  },
  {
    id: 4,
    grade:"Grade 4", gradeKh:"ថ្នាក់ទី៤",
    emoji:"🌸", color:"#E8900A",
    room:"Room 202", roomKh:"បន្ទប់ ២០២",
    students:29,
    teacher:{
      name:"Mr. Dara Noun", nameKh:"លោកគ្រូ តារា នួន",
      experience:"15 years", experienceKh:"១៥ ឆ្នាំ",
      phone:"077 890 123", email:"dara@pralaymeas.edu.kh", avatar:"👨‍🏫",
      bio:"Veteran educator specializing in English and Social Studies integration.",
      bioKh:"គ្រូបទពិសោធច្រើនឆ្នាំ ជំនាញខាងអង់គ្លេស និងការបង្រួបបង្រួមជាមួយសិក្សាសង្គម។",
    },
    schedule:[
      { time:"7:00–8:00",   subject:"Khmer",         subjectKh:"ភាសាខ្មែរ" },
      { time:"8:00–8:45",   subject:"Math",          subjectKh:"គណិតវិទ្យា" },
      { time:"8:45–9:30",   subject:"English",       subjectKh:"អង់គ្លេស" },
      { time:"9:30–10:00",  subject:"Break",         subjectKh:"សម្រាក" },
      { time:"10:00–10:45", subject:"Science",       subjectKh:"វិទ្យាសាស្ត្រ" },
      { time:"10:45–11:30", subject:"Social Studies",subjectKh:"សិក្សាសង្គម" },
    ],
    cleaningGroups:[
      ["Sopheak","Chanvary","Nakry","Bunly","Sreynich","Dyna","Ratana"],
      ["Vichet","Sivhorn","Sokunthea","Lyda","Ponleak","Thida","Narith"],
      ["Samnang","Chankrisna","Boranin","Visal","Mengly","Sotheavy","Chamroeun"],
      ["Chhorvy","Bunna","Sovanda","Leakena","Channitha","Sambath","Kanha"],
      ["Pisey","Ratanak","Sophal","Tola","Menghour","Chanmoly","Raksmey"],
    ],
    monthlyResults:[
      { month:"January",  monthKh:"មករា",   top:[{rank:1,name:"Sopheak", nameKh:"សុភ័ក",      score:95},{rank:2,name:"Chanvary",nameKh:"ចន្ទ្រាវ៉ារី",score:93},{rank:3,name:"Nakry",  nameKh:"នាក្រី",score:91}] },
      { month:"February", monthKh:"កុម្ភៈ",  top:[{rank:1,name:"Chanvary",nameKh:"ចន្ទ្រាវ៉ារី",score:97},{rank:2,name:"Sopheak", nameKh:"សុភ័ក",      score:94},{rank:3,name:"Bunly",  nameKh:"បុណ្យលី",score:88}] },
      { month:"March",    monthKh:"មីនា",    top:[{rank:1,name:"Nakry",   nameKh:"នាក្រី",     score:98},{rank:2,name:"Chanvary",nameKh:"ចន្ទ្រាវ៉ារី",score:95},{rank:3,name:"Sopheak",nameKh:"សុភ័ក", score:90}] },
    ],
  },
  {
    id: 5,
    grade:"Grade 5", gradeKh:"ថ្នាក់ទី៥",
    emoji:"⭐", color:"#D4780A",
    room:"Room 301", roomKh:"បន្ទប់ ៣០១",
    students:27,
    teacher:{
      name:"Mrs. Sreymom Keo", nameKh:"លោកគ្រូ ស្រីម៉ុម កែវ",
      experience:"10 years", experienceKh:"១០ ឆ្នាំ",
      phone:"089 456 789", email:"sreymom@pralaymeas.edu.kh", avatar:"👩‍🏫",
      bio:"Enthusiastic teacher blending English, PE and creative exploration.",
      bioKh:"គ្រូដែលភ្ជាប់អង់គ្លេស កីឡា និងការស្វែងរកបទពិសោធសិក្សា។",
    },
    schedule:[
      { time:"7:00–8:00",   subject:"Khmer",         subjectKh:"ភាសាខ្មែរ" },
      { time:"8:00–8:45",   subject:"Math",          subjectKh:"គណិតវិទ្យា" },
      { time:"8:45–9:30",   subject:"English",       subjectKh:"អង់គ្លេស" },
      { time:"9:30–10:00",  subject:"Break",         subjectKh:"សម្រាក" },
      { time:"10:00–10:45", subject:"Science",       subjectKh:"វិទ្យាសាស្ត្រ" },
      { time:"10:45–11:30", subject:"Social Studies",subjectKh:"សិក្សាសង្គម" },
      { time:"11:30–12:00", subject:"PE",            subjectKh:"កីឡា" },
    ],
    cleaningGroups:[
      ["Sreynich","Dyna","Ratana","Sophal","Pisey","Chanvary","Nakry"],
      ["Virak","Daro","Tola","Boren","Menghor","Sopheap","Samnang"],
      ["Lyma","Sokhom","Chanthy","Vanny","Makra","Sothy","Phany"],
      ["Kimba","Bunthan","Sovanny","Leka","Channy","Sambo","Kanhy"],
      ["Bopha","Sreynit","Kolap","Malis","Chenda","Chanveasna","Srey"],
    ],
    monthlyResults:[
      { month:"January",  monthKh:"មករា",   top:[{rank:1,name:"Sreynich",nameKh:"ស្រីនិច",score:97},{rank:2,name:"Dyna",   nameKh:"ឌីណា",  score:95},{rank:3,name:"Ratana",nameKh:"រតនា",score:92}] },
      { month:"February", monthKh:"កុម្ភៈ",  top:[{rank:1,name:"Dyna",   nameKh:"ឌីណា",  score:98},{rank:2,name:"Sreynich",nameKh:"ស្រីនិច",score:95},{rank:3,name:"Sophal",nameKh:"សុផល", score:90}] },
      { month:"March",    monthKh:"មីនា",    top:[{rank:1,name:"Ratana", nameKh:"រតនា",  score:99},{rank:2,name:"Dyna",    nameKh:"ឌីណា",  score:95},{rank:3,name:"Sreynich",nameKh:"ស្រីនិច",score:91}] },
    ],
  },
  {
    id: 6,
    grade:"Grade 6", gradeKh:"ថ្នាក់ទី៦",
    emoji:"🏆", color:"#C46B09",
    room:"Room 302", roomKh:"បន្ទប់ ៣០២",
    students:25,
    teacher:{
      name:"Mr. Piseth Heng", nameKh:"លោកគ្រូ ពិសិទ្ធ ហេង",
      experience:"18 years", experienceKh:"១៨ ឆ្នាំ",
      phone:"085 123 456", email:"piseth@pralaymeas.edu.kh", avatar:"👨‍🏫",
      bio:"Senior teacher, expert in Computer literacy and exam preparation.",
      bioKh:"គ្រូជាន់ខ្ពស់ ជំនាញខាងកុំព្យូទ័រ និងការត្រៀមប្រឡង។",
    },
    schedule:[
      { time:"7:00–7:45",   subject:"Khmer",         subjectKh:"ភាសាខ្មែរ" },
      { time:"7:45–8:30",   subject:"Math",          subjectKh:"គណិតវិទ្យា" },
      { time:"8:30–9:15",   subject:"English",       subjectKh:"អង់គ្លេស" },
      { time:"9:15–9:45",   subject:"Break",         subjectKh:"សម្រាក" },
      { time:"9:45–10:30",  subject:"Science",       subjectKh:"វិទ្យាសាស្ត្រ" },
      { time:"10:30–11:15", subject:"Social Studies",subjectKh:"សិក្សាសង្គម" },
      { time:"11:15–11:45", subject:"Computer",      subjectKh:"កុំព្យូទ័រ" },
      { time:"11:45–12:00", subject:"PE",            subjectKh:"កីឡា" },
    ],
    cleaningGroups:[
      ["Piseth","Chanda","Vanna","Sophorn","Ratana","Bunly","Sreynich"],
      ["Virak","Daro","Tola","Boren","Menghor","Sopheap","Samnang"],
      ["Lyma","Sokhom","Chanthy","Vanny","Makra","Sothy","Phany"],
      ["Kimba","Bunthan","Sovanny","Leka","Channy","Sambo","Kanhy"],
      ["Sopheak","Nakry","Chanvary","Bunly2","Dyna","Sreynit","Bopha"],
    ],
    monthlyResults:[
      { month:"January",  monthKh:"មករា",   top:[{rank:1,name:"Piseth",nameKh:"ពិសិទ្ធ",score:99},{rank:2,name:"Chanda",nameKh:"ចន្ទ",score:96},{rank:3,name:"Vanna",  nameKh:"វណ្ណ", score:93}] },
      { month:"February", monthKh:"កុម្ភៈ",  top:[{rank:1,name:"Chanda",nameKh:"ចន្ទ",  score:98},{rank:2,name:"Piseth",nameKh:"ពិសិទ្ធ",score:97},{rank:3,name:"Sophorn",nameKh:"សុភ័ណ",score:92}] },
      { month:"March",    monthKh:"មីនា",    top:[{rank:1,name:"Piseth",nameKh:"ពិសិទ្ធ",score:100},{rank:2,name:"Vanna",nameKh:"វណ្ណ",score:95},{rank:3,name:"Chanda",nameKh:"ចន្ទ",score:93}] },
    ],
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const useT = (lang) => (en, kh) => lang === "en" ? en : kh;

// ─── CLASS CARD (list page) ──────────────────────────────────────────────────

function ClassCard({ cls, lang, onClick }) {
  const t = useT(lang);
  return (
    <button className="class-card" style={{ "--cc": cls.color }} onClick={onClick}>
      <div className="cc-emoji">{cls.emoji}</div>
      <div className="cc-body">
        <h2 className="cc-grade">{t(cls.grade, cls.gradeKh)}</h2>
        <p className="cc-teacher">{t(cls.teacher.name, cls.teacher.nameKh)}</p>
        <div className="cc-chips">
          <span className="cc-chip">{t(cls.room, cls.roomKh)}</span>
          <span className="cc-chip">👦 {cls.students} {t("students","សិស្ស")}</span>
        </div>
      </div>
      <span className="cc-arrow">›</span>
      <div className="cc-bar" />
    </button>
  );
}

// ─── CLASS DETAIL PAGE ───────────────────────────────────────────────────────

function ClassDetail({ cls, lang, onBack }) {
  const [tab, setTab] = useState("info");
  const t = useT(lang);

  return (
    <div className="detail-wrap" style={{ "--cc": cls.color }}>

      {/* ── Back ── */}
      <button className="back-btn" onClick={onBack}>
        ← {t("All Classes", "ថ្នាក់ទាំងអស់")}
      </button>

      {/* ── Hero banner ── */}
      <div className="det-hero">
        <div className="det-hero-emoji">{cls.emoji}</div>
        <div>
          <h2 className="det-hero-grade">{t(cls.grade, cls.gradeKh)}</h2>
          <div className="det-hero-chips">
            <span className="det-chip">{t(cls.room, cls.roomKh)}</span>
            <span className="det-chip">👦 {cls.students} {t("students","សិស្ស")}</span>
          </div>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="tab-bar">
        <button
          className={`tab-btn ${tab === "info" ? "tab-active" : ""}`}
          onClick={() => setTab("info")}
        >
          📋 {t("Class Information", "ព័ត៌មានថ្នាក់")}
        </button>
        <button
          className={`tab-btn ${tab === "results" ? "tab-active" : ""}`}
          onClick={() => setTab("results")}
        >
          📊 {t("Study Results", "លទ្ធផលសិក្សា")}
        </button>
      </div>

      {/* ══════════════════════════════════════
          TAB 1 — CLASS INFORMATION
      ══════════════════════════════════════ */}
      {tab === "info" && (
        <div className="tab-content" key="info">

          {/* Teacher card */}
          <div className="info-card">
            <h3 className="info-title">👩‍🏫 {t("Teacher Profile","ប្រវត្តិគ្រូ")}</h3>
            <div className="teacher-card">
              <div className="teacher-ava">{cls.teacher.avatar}</div>
              <div className="teacher-body">
                <div className="teacher-name">{t(cls.teacher.name, cls.teacher.nameKh)}</div>
                <div className="teacher-bio">{t(cls.teacher.bio, cls.teacher.bioKh)}</div>
                <div className="teacher-metas">
                  <span>🎓 {t(cls.teacher.experience, cls.teacher.experienceKh)}</span>
                  <span>📞 {cls.teacher.phone}</span>
                  <span>📧 {cls.teacher.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="info-card">
            <h3 className="info-title">🕖 {t("Daily Schedule","កាលវិភាគប្រចាំថ្ងៃ")}</h3>
            <div className="sched-table">
              <div className="sched-head">
                <span>{t("Time","ម៉ោង")}</span>
                <span>{t("Subject","មុខវិជ្ជា")}</span>
              </div>
              {cls.schedule.map((row, i) => (
                <div
                  key={i}
                  className={`sched-row ${row.subject === "Break" ? "sched-break" : ""}`}
                  style={{ animationDelay: `${i * 0.055}s` }}
                >
                  <span className="sched-time">{row.time}</span>
                  <span className="sched-subj">
                    {row.subject === "Break" ? "☕" : "📚"} {t(row.subject, row.subjectKh)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cleaning groups */}
          <div className="info-card">
            <h3 className="info-title">
              🧹 {t("Daily Cleaning Groups","ក្រុមសំអាតប្រចាំថ្ងៃ")}
              <span className="info-badge">7 {t("per group","នាក់/ក្រុម")}</span>
            </h3>
            <div className="clean-grid">
              {cls.cleaningGroups.map((group, gi) => (
                <div key={gi} className="clean-card" style={{ animationDelay: `${gi * 0.07}s` }}>
                  <div className="clean-day">{t(DAYS_EN[gi] ?? `Day ${gi+1}`, DAYS_KH[gi] ?? `ថ្ងៃ ${gi+1}`)}</div>
                  <div className="clean-members">
                    {group.map((name, ni) => (
                      <span key={ni} className="clean-name">👤 {name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          TAB 2 — STUDY RESULTS
      ══════════════════════════════════════ */}
      {tab === "results" && (
        <div className="tab-content" key="results">
          {cls.monthlyResults.map((mr, mi) => (
            <div key={mi} className="month-block" style={{ animationDelay: `${mi * 0.1}s` }}>
              <h3 className="month-heading">
                📅 {t(mr.month, mr.monthKh)} — {t("Top Students","សិស្សពូកែ")}
              </h3>

              {/* Podium — order: 2nd | 1st | 3rd */}
              <div className="podium">
                {[mr.top[1], mr.top[0], mr.top[2]].map((s, pi) => {
                  const ri = pi === 0 ? 1 : pi === 1 ? 0 : 2; // rank index
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
                      <div className={`pod-stand pod-stand-${ri + 1}`} />
                    </div>
                  );
                })}
              </div>

              {/* Score bars */}
              <div className="score-list">
                {mr.top.map((s) => (
                  <div key={s.rank} className="score-row">
                    <span className="score-medal">{RANK_CFG[s.rank - 1].medal}</span>
                    <span className="score-name">{t(s.name, s.nameKh)}</span>
                    <div className="score-track">
                      <div className="score-fill"
                        style={{ width: `${s.score}%`, background: `linear-gradient(90deg,${cls.color},#FFD166)` }} />
                    </div>
                    <span className="score-num">{s.score}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function Classes() {
  const [lang, setLang]       = useState("en");
  const [selected, setSelected] = useState(null); // cls object or null
  const t = useT(lang);

  const handleSelect = (cls) => {
    setSelected(cls);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelected(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="classes-section">

      {/* ── Language toggle (always visible) ── */}
      <div className="topbar">
        <button className="lang-btn" onClick={() => setLang(lang === "en" ? "kh" : "en")}>
          {lang === "en" ? "🇰🇭 ខ្មែរ" : "🇬🇧 English"}
        </button>
      </div>

      {/* ═══════════════ CLASSES LIST PAGE ═══════════════ */}
      {!selected && (
        <>
          <header className="page-header">
            <div className="page-badge">🏫 {t("Pralay Meas Primary School","សាលាបឋមសិក្សាប្រឡាយមាស")}</div>
            <h1 className="page-title">{t("Classes & Grades","ថ្នាក់ និង ថ្នាក់ទី")}</h1>
            <p className="page-sub">
              {t(
                "Click any class to view teacher info, daily schedule, cleaning groups, and monthly study results.",
                "ចុចលើថ្នាក់ណាមួយ ដើម្បីមើលព័ត៌មានគ្រូ កាលវិភាគ ក្រុមសំអាត និងលទ្ធផលសិក្សាប្រចាំខែ។"
              )}
            </p>
            <div className="stats-row">
              <div className="stat"><span className="stat-n">6</span><span className="stat-l">{t("Grades","ថ្នាក់ទី")}</span></div>
              <div className="stat-div"/>
              <div className="stat"><span className="stat-n">171</span><span className="stat-l">{t("Students","សិស្ស")}</span></div>
              <div className="stat-div"/>
              <div className="stat"><span className="stat-n">6</span><span className="stat-l">{t("Teachers","គ្រូ")}</span></div>
            </div>
          </header>

          <div className="cards-grid">
            {classesData.map((cls, i) => (
              <div key={cls.id} className="card-anim" style={{ "--di": i }}>
                <ClassCard cls={cls} lang={lang} onClick={() => handleSelect(cls)} />
              </div>
            ))}
          </div>
        </>
      )}

      {/* ═══════════════ DETAIL PAGE ═══════════════ */}
      {selected && (
        <ClassDetail cls={selected} lang={lang} onBack={handleBack} />
      )}

    </section>
  );
}
