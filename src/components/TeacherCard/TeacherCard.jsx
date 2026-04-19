// components/TeacherCard.jsx
import "./TeacherCard.css";
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";

function SocialIcons({ teacher }) {
  const links = [
    { key: "metafb",   Icon: FaFacebook,  label: "Facebook",  cls: "tc-social--fb"  },
    { key: "telegram", Icon: FaTelegram,  label: "Telegram",  cls: "tc-social--tg"  },
    { key: "youtube",  Icon: FaYoutube,   label: "YouTube",   cls: "tc-social--yt"  },
  ];

  const visible = links.filter(({ key }) => teacher[key]);
  if (!visible.length) return null;

  return (
    <div className="tc-socials">
      {visible.map(({ key, Icon, label, cls }) => (
        <a
          key={key}
          href={teacher[key]}
          target="_blank"
          rel="noopener noreferrer"
          className={`tc-social-btn ${cls}`}
          aria-label={label}
          title={label}
        >
          <Icon />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

export default function TeacherCard({ cls, teacher, color, lang }) {
  const t = (en, kh) => (lang === "en" ? en : kh);

  return (
    <div className="tc-wrap" style={{ "--cc": color }}>
      <div className="tc-top">
        <div className="tc-avatar">
          <img src={teacher.avatar} alt="teacher" className="tc-pf" />
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
      </div>

      <SocialIcons teacher={teacher} />
    </div>
  );
}
