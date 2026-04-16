import './Loader.css'

export default function Loader() {
  return (
    <div className="page-loader">
      <div className="loader-emblem-wrap">
        <div className="loader-ring" />
        <div className="loader-emblem">
           <img src="assets/logo/logo_sala.png" alt="School logo" />
        </div>
      </div>
      <div className="loader-brand">
        <div className="loader-name">Pralay Meas Primary School</div>
        <div className="loader-khmer">សាលាបឋមសិក្សាប្រឡាយមាស</div>
      </div>
      <div className="loader-dots">
        <span /><span /><span />
      </div>
    </div>
  )
}
