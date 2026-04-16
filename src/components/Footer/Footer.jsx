import './Footer.css'

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-emblem">
              <img src="assets/logo/logo_sala.png" alt="School logo" />
            </div>
            <div><div className="footer-name-km">សាលាបឋមសិក្សាប្រឡាយមាស</div>
              <div className="footer-name">Pralay Meas Primary School</div>
              
              <p className="footer-desc"> Nurturing Children with Knowledge, Values, and Excellence.</p>

            </div>
          </div>

          <div className="footer-links">
            {/* <h4>Navigation / ផ្លូវ</h4> */}
            {[
              ['home', 'Home / ទំព័រដើម'],
              ['about', 'About / អំពីសាលា'],
              ['management', 'Team / ក្រុមការងារ'],
              ['news', 'News / ព័ត៌មាន'],
              ['contact', 'Contact / ទំនាក់ទំនង'],
            ].map(([id, label]) => (
              <button key={id} className="footer-link" onClick={() => navigate(id)}>{label}</button>
            ))}
          </div>

          <div className="footer-contact">
            <h4>Contact / ទំនាក់ទំនង</h4>
            <div className="footer-contact-item">📍 ប្រឡាយមាស ប្រឡាយមាស កំពង់លែង​​ កំពង់ឆ្នាំង</div>
            {/* <div onClick={() => window.location.href='mailto:pralaymeaspms@email.com'} className="footer-contact-item">📧 pralaymeaspms@email.com</div> */}
            <div className="footer-contact-item">📧 Pralaymeaspms@email.com</div>

          </div>

          {/* <div className="footer-contact">
            <h4>គណៈគ្រប់គ្រងសាលា</h4>
            <div className="footer-contact-members">
              <h5>នាយកសាលា</h5>
              <p>( លោក សែប សុចាន់ )</p>
            </div>

            <div className="footer-contact-item">📞 088 600 5465</div>
            <div className="footer-contact-item">📧 Sebsochann@email.com</div>
            <div className="footer-contact-members">
              <h5>នាយករង</h5>
              <p>( លោក កិក សុភ័ណ្ឌ )</p>
            </div>

            <div className="footer-contact-item">📞 088 267 8006</div>
            <div className="footer-contact-item">📧 keksophann@email.com</div>
            <div className="footer-contact-members">
              <h5>ជំនួយការបច្ចេកទេស ICT</h5>
              <p>( លោក គាំង ជីវ័ន )</p>
            </div>

            <div className="footer-contact-item">📞 031 636 396 3</div>
            <div className="footer-contact-item">📧 chivorn.tc@email.com</div>
          </div> */}
        </div>
      </div>
      <div className="school-management">
         <h4>គណៈគ្រប់គ្រងសាលា</h4>
        <div className="footer-contact-members">
         <h5>នាយកសាលា</h5>
              <p>( លោក សែប សុចាន់ )</p>
        </div>
        <div className="footer-contact-item">📞 088 600 5465</div>
            <div className="footer-contact-item">📧 Sebsochann@email.com</div>
        <div className="footer-contact-members">
              <h5>នាយករង</h5>
              <p>( លោក កិក សុភ័ណ្ឌ )</p>
            </div>

            <div className="footer-contact-item">📞 088 267 8006</div>
            <div className="footer-contact-item">📧 keksophann@email.com</div>
        <div className="footer-contact-members">
          <h5>ជំនួយការបច្ចេកទេស ICT</h5>
          <p>( លោក គាំង ជីវ័ន )</p>
        </div>
        <div className="footer-contact-item">📞 031 636 396 3</div>
        <div className="footer-contact-item">📧 chivorn.tc@email.com</div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          {/* <span>© 2026 Pralay Meas Primary School. All rights reserved.</span> */}
          <span className="footer-km">© ២០២៦ រៀបចំដោយផ្នែក ICT សាលាបឋមសិក្សាប្រឡាយមាស </span>
        </div>
      </div>
    </footer>
  )
}
