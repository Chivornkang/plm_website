// components/TeacherCard.jsx
import "./TeacherCard.css";

export default function TeacherCard({ teacher, color, lang }) {
  const t = (en, kh) => lang === "en" ? en : kh;

  return (
    <div className="tc-wrap" style={{ "--cc": color }}>
      <div className="tc-top">
        {/* <div className="tc-avatar">{teacher.avatar}</div> */}
        <div className="tc-avatar">
          <img src={teacher.avatar} alt="teacher" class="tc-pf"/>
        </div>
        <div className="tc-identity">
          <div className="tc-title-badge">{t(teacher.title, teacher.titleKh)}</div>
          <h3 className="tc-name">{t(teacher.name, teacher.nameKh)}</h3>
          <p className="tc-bio">{t(teacher.bio, teacher.bioKh)}</p>
        </div>
      </div>

      <div className="tc-divider" />

      <div className="tc-details">
        <div className="tc-detail">
          <span className="tc-detail-icon">🎓</span>
          <div>
            <div className="tc-detail-label">{t("Experience", "បទពិសោធ")}</div>
            <div className="tc-detail-val">{t(teacher.experience, teacher.experienceKh)}</div>
          </div>
        </div>
        <div className="tc-detail">
          <span className="tc-detail-icon">📞</span>
          <div>
            <div className="tc-detail-label">{t("Phone", "ទូរស័ព្ទ")}</div>
            <div className="tc-detail-val">{teacher.phone}</div>
          </div>
        </div>
        <div className="tc-detail">
          <span className="tc-detail-icon">📧</span>
          <div>
            <div className="tc-detail-label">{t("Email", "អ៊ីម៉ែល")}</div>
            <div className="tc-detail-val tc-email">{teacher.email}</div>
          </div>
        </div>
        <div className="tc-detail">
          <span className="tc-detail-icon">F</span>
          <div>
            <div className="tc-detail-label">{t("Facebook", "ហ្វេសប៊ុក")}</div>
            <div className="tc-detail-val tc-email">{teacher.facebook}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
