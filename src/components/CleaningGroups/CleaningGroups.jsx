// components/CleaningGroups.jsx
import { useApp } from "../../AppContext"
import { DAYS_EN, DAYS_KH } from "../../data/classData"
import "./CleaningGroups.css"


export default function CleaningGroups({ cleaningGroups, color }) {
  const { lang } = useApp()
  const kh = lang === 'km'

  return (
    <div className="cg-wrap" style={{ "--cc": color }}>
      <div className="cg-note">
        🧹 {kh
          ? "ក្រុមនីមួយៗទទួលខុសត្រូវក្នុងការសំអាតថ្នាក់រៀននៅថ្ងៃដែលត្រូវបានកំណត់។"
          : "Each group is responsible for cleaning the classroom on their assigned day."}
      </div>

      <div className="cg-grid">
        {cleaningGroups.map((group, gi) => {
          const isThursday = gi === 3 

          if (isThursday) {
            return (
              <div
                key={gi}
                className="cg-card cg-card--together"
                style={{ animationDelay: `${gi * 0.065}s` }}
              >
                {/* Rotated label */}
                <div className="cg-together-label">
                  <span>{kh ? "សម្អាតរួមគ្នា" : "Cleaning Together"}</span>
                </div>

                {/* Day header */}
                <div className="cg-day-header">
                  {/* <span className="cg-day-icon">{DAY_ICONS[gi]}</span> */}
                  <div>
                    <div className="cg-day-name">
                      {kh ? (DAYS_KH[gi] ?? `ថ្ងៃ ${gi + 1}`) : (DAYS_EN[gi] ?? `Day ${gi + 1}`)}
                    </div>
                    <div className="cg-member-count">
                      {kh ? "ទាំងអស់" : "All students"} 
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          return (
            <div key={gi} className="cg-card" style={{ animationDelay: `${gi * 0.065}s` }}>
              <div className="cg-day-header">
                {/* <span className="cg-day-icon">{DAY_ICONS[gi]}</span> */}
                <div>
                  <div className="cg-day-name">
                      {kh ? `ក្រុមទី ${gi + 1}` : `Group ${gi + 1}`}
                  </div>
                  <div className="cg-member-count">{group.length} {kh ? "នាក់" : "students"}</div>
                </div>
              </div>
              <div className="cg-members">
                {group.map((name, ni) => (
                  <div key={ni} className="cg-member" style={{ animationDelay: `${gi * 0.065 + ni * 0.03}s` }}>
                    <span className="cg-member-num">{ni + 1}</span>
                    <span className="cg-member-name">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}