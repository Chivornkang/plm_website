// components/TeacherCard.jsx
import "./TeacherCard.css"
import { useApp } from "../../AppContext"
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa"

function SocialIcons({ teacher }) {
  const links = [
    { key: "metafb",   Icon: FaFacebook, label: "Facebook", cls: "tc-social--fb" },
    { key: "telegram", Icon: FaTelegram, label: "Telegram", cls: "tc-social--tg" },
    { key: "youtube",  Icon: FaYoutube,  label: "YouTube",  cls: "tc-social--yt" },
  ]
  const visible = links.filter(({ key }) => teacher[key])
  if (!visible.length) return null
  return (
    <div className="tc-socials">
      {visible.map(({ key, Icon, label, cls }) => (
        <a key={key} href={teacher[key]} target="_blank" rel="noopener noreferrer"
          className={`tc-social-btn ${cls}`} aria-label={label} title={label}>
          <Icon /><span>{label}</span>
        </a>
      ))}
    </div>
  )
}

export default function TeacherCard({ teacher, color }) {
  const { lang } = useApp()
  const kh = lang === 'km'

  return (
    <div className="tc-wrap" style={{ "--cc": color }}>
      <div className="tc-top">
        <div className="tc-avatar">
          <img src={teacher.avatar} alt="teacher" className="tc-pf" />
        </div>
        <div className="tc-identity">
          <div className="tc-title-badge">{kh ? teacher.titleKh : teacher.title}</div>
          <h3 className="tc-name">{kh ? teacher.nameKh : teacher.name}</h3>
          <p className="tc-bio">{kh ? teacher.bioKh : teacher.bio}</p>
        </div>
      </div>

      <div className="tc-divider" />

      <div className="tc-details">
        <div className="tc-detail">
          <span className="tc-detail-icon">🎓</span>
          <div>
            <div className="tc-detail-label">{kh ? "បទពិសោធ" : "Experience"}</div>
            <div className="tc-detail-val">{kh ? teacher.experienceKh : teacher.experience}</div>
          </div>
        </div>
        <div className="tc-detail">
          <span className="tc-detail-icon">📞</span>
          <div>
            <div className="tc-detail-label">{kh ? "ទូរស័ព្ទ" : "Phone"}</div>
            <div className="tc-detail-val">{teacher.phone}</div>
          </div>
        </div>
        <div className="tc-detail">
          <span className="tc-detail-icon">📧</span>
          <div>
            <div className="tc-detail-label">{kh ? "អ៊ីម៉ែល" : "Email"}</div>
            <div className="tc-detail-val tc-email">{teacher.email}</div>
          </div>
        </div>
      </div>

      <SocialIcons teacher={teacher} />
    </div>
  )
}
