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

  const experience = kh ? teacher.experienceKh : teacher.experience
  const bio        = kh ? teacher.bioKh        : teacher.bio

  return (
    <div className="tc-wrap" style={{ "--cc": color }}>
      <div className="tc-top">
        <div className="tc-avatar">
          <img src={teacher.avatar} alt="teacher" className="tc-pf" />
        </div>
        <div className="tc-identity">
          <div className="tc-title-badge">{kh ? teacher.titleKh : teacher.title}</div>
          <h3 className="tc-name">{kh ? teacher.nameKh : teacher.name}</h3>
          {bio && <p className="tc-bio">{bio}</p>}
        </div>
      </div>

      <div className="tc-divider" />

      <div className="tc-details">
        {experience && (
          <div className="tc-detail">
            <span className="tc-detail-icon"></span>
            <div>
              <div className="tc-detail-label">{kh ? "បទពិសោធ" : "Experience"}</div>
              <div className="tc-detail-val">{experience}</div>
            </div>
          </div>
        )}
        {teacher.phone && (
          <div className="tc-detail">
            <span className="tc-detail-icon"></span>
            <div>
              <div className="tc-detail-label">{kh ? "ទូរស័ព្ទ" : "Phone"}</div>
              <a href={`tel:${teacher.phone}`} className="tc-detail-val tc-link">
                {teacher.phone}
              </a>
            </div>
          </div>
        )}
        {teacher.email && (
          <div className="tc-detail">
            <span className="tc-detail-icon"></span>
            <div>
              <div className="tc-detail-label">{kh ? "អ៊ីម៉ែល" : "Email"}</div>
              <a href={`mailto:${teacher.email}`} className="tc-detail-val tc-email tc-link">
                {teacher.email}
              </a>
            </div>
          </div>
        )}
      </div>

      <SocialIcons teacher={teacher} />
    </div>
  )
}