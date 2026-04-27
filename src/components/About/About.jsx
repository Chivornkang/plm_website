import './About.css'
import { useApp } from '../../AppContext'
import { t } from '../../data/lang_data'

/** Renders an array (or newline-separated string) as a <ul> */
function TextList({ text, className }) {
  const items = Array.isArray(text)
    ? text.filter(Boolean)
    : text.split('\n').map(l => l.trim()).filter(Boolean)

  return (
    <ul className={`mission-list ${className ?? ''}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export default function About() {
  const { lang } = useApp()
  const tx = t(lang)
  const ab = tx.about

  return (
    <div className="about-page">
      {/* Page header */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <h1 className="page-hero-title animate-up delay-1">{ab.pageTitle}</h1>
          <h1 className="page-hero-title animate-up delay-1">{ab.pageSubtitle}</h1>
          <div className="grid-three-flags flags animate-up delay-3">
            <img className="animate-up delay-1" src="assets/logo/cambodia_flag.png" alt="" />
            <img className="animate-up delay-2" src="assets/logo/buddhist.png" alt="" />
            <img className="animate-up delay-3" src="assets/logo/royal.png" alt="" />
          </div>
          <div className="grid-three-flags kings animate-up delay-3">
            <img src="assets/royals_Fam/king.png" alt="" />
            <img src="assets/royals_Fam/king_fa.png" alt="" />
            <img src="assets/royals_Fam/king_mo.png" alt="" />
          </div>
        </div>
      </div>

      <div className="container about-content">

        {/* <div className="about-info-card animate-up delay-1">
          <div className="about-info-header">
            <h2>{ab.infoHeading}</h2>
          </div>
          <div className="about-info-rows">
            {ab.infoRows.map((row, i) => (
              <div key={i} className="about-info-row">
                <div className="about-info-label">
                  <span>{lang === 'km' ? row.labelKm : row.labelEn}</span>
                </div>
                <div className="about-info-val">
                  <span>{lang === 'km' ? row.valKm : row.valEn}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* ── Mission + Vision — side by side ── */}
        <div className="mv-row">
          <div className="mission-card animate-up delay-2">
            <h3 className="about-info-header">{ab.missionHeading}</h3>
            <TextList
              text={ab.missionText}
              className={lang === 'km' ? 'km' : ''}
            />
          </div>
          <div className="mission-card animate-up delay-3">
            <h3 className="about-info-header">{ab.visionHeading}</h3>
            <TextList
              text={ab.visionText}
              className={lang === 'km' ? 'km' : ''}
            />
          </div>
        </div>

      </div>
    </div>
  )
}