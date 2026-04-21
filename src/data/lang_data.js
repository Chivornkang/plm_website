/**
 * lang_data.js
 * Bilingual text data for Pralay Meas Primary School website.
 * Usage:  import { t } from '../../data/lang_data'
 *         const tx = t(lang)          // lang = 'en' | 'km'
 *         tx.navbar.home              // → 'Home'  or  'ទំព័រដើម'
 */

const data = {
  /* ─── NAVBAR ─────────────────────────────────────────────────────────── */
  navbar: {
    home:       { en: 'Home',    km: 'ទំព័រដើម' },
    classes:    { en: 'Classes', km: 'ថ្នាក់រៀន' },
    management: { en: 'Team',    km: 'ក្រុមការងារ' },
    news:       { en: 'News',    km: 'ព័ត៌មាន' },
    about:      { en: 'About',   km: 'អំពីសាលា' },
    contact:    { en: 'Contact', km: 'ទំនាក់ទំនង' },
    langToggle: { en: 'ខ្មែរ',   km: 'ENG' },
  },

  /* ─── HOME PAGE ──────────────────────────────────────────────────────── */
  home: {
    heroTitle:   { en: 'Pralay Meas Primary School', km: 'សាលាបឋមសិក្សាប្រឡាយមាស' },
    heroTagline: {
      en: 'Nurturing Children with Knowledge, Values, and Excellence.',
      km: 'អប់រំកុមារ ជាមួយចំណេះដឹង គុណធម៌ និងភាពល្អប្រសើរ',
    },
    btnAbout:   { en: 'About Us →',  km: 'អំពីសាលា →' },
    btnContact: { en: 'Contact',     km: 'ទំនាក់ទំនងសាលា' },
    marquee1: {
      en: 'As Cambodians, let us support Cambodian-made products — they drive our national economy and improve the lives of our people.',
      km: 'យើងជាខ្មែរ សូមគាំទ្រផលិតផលខ្មែរទាំងអស់គ្នា ព្រោះវាជាកម្លាំងជំរុញសេដ្ឋកិច្ចជាតិ និងជួយលើកកម្ពស់ជីវភាពប្រជាពលរដ្ឋរបស់យើង។',
    },
    marquee2: {
      en: 'Never give up on your studies — not for a moment of laziness or short-term gain. Continue learning for your future, for our nation.',
      km: 'សូមកុំបោះបង់ការសិក្សា ព្រោះអារម្មណ៍ខ្ជិលមួយឆាវ ឬ ដើម្បីប្រយោជន៍រយៈពេលខ្លីនោះទេ។ បន្តការសិក្សាដើម្បីអនាគតអ្នក ដើម្បីអនាគតជាតិយើង។',
    },
  },

  /* ─── ABOUT PAGE ─────────────────────────────────────────────────────── */
  about: {
    pageTitle:    { en: 'Kingdom of Cambodia',         km: 'ព្រះរាជាណាចក្រកម្ពុជា' },
    pageSubtitle: { en: 'Nation · Religion · King',   km: 'ជាតិ សាសនា ព្រះមហាក្សត្រ' },

    infoHeading:  { en: 'School Information', km: 'ព័ត៌មានសាលា' },
    infoRows: [
      {
        labelEn: 'School Name', labelKm: 'ឈ្មោះ',
        valEn:   'Pralay Meas Primary School',
        valKm:   'សាលាបឋមសិក្សាប្រឡាយមាស',
      },
      {
        labelEn: 'Level', labelKm: 'កម្រិត',
        valEn:   'Kindergarten to Grade 6',
        valKm:   'មត្តេយ្យ ដល់ ថ្នាក់ទី ៦',
      },
      {
        labelEn: 'Total Staff', labelKm: 'បុគ្គលិក',
        valEn:   '11 Members',
        valKm:   '១១ នាក់',
      },
      {
        labelEn: 'Location', labelKm: 'ទីតាំង',
        valEn:   'Pralay Meas Commune, Kampong Laeang District, Kampong Chhnang Province',
        valKm:   'ឃុំប្រឡាយមាស ស្រុកកំពង់លែង ខេត្តកំពង់ឆ្នាំង',
      },
    ],

    missionHeading: { en: 'Our Mission', km: 'បេសកកម្ម' },
    missionText: {
      en: [
        'Strengthen the construction and improvement of the learning environment, as well as school health.',
        'Maintain transparency and quality through the mobilization of resources from all stakeholders.',
        'Encourage full support to enhance student learning outcomes.',
        'Strengthen and increase the quality of education to ensure high standards and effectiveness.',
        'Foster close relationships with parents and stakeholders in teaching and learning using a student-centered approach to meet the standards of the Child-Friendly School program.',
      ],
      km: [
        'ពង្រឹងការកសាង និង កែលម្អបរិស្ថានសិក្សា ព្រមទាំង សុខភាពសិក្សា',
        'រក្សាតម្លាភាព និង គុណភាព តាមរយៈការកៀរគរធនធានពីគ្រប់អ្នកពាក់ព័ន្ធ',
        'ជំរុញការគាំទ្រឱ្យបានពេញលេញ ដើម្បីបង្កើនលទ្ធផលសិក្សា',
        'ពង្រឹង និងបង្កើនគុណភាពសិក្សា ឱ្យមានគុណភាព និងប្រសិទ្ធភាពខ្ពស់',
        'បង្កើនទំនាក់ទំនងយ៉ាងជិតស្និទ្ធ ជាមួយមាតាបិតាសិស្ស អ្នកពាក់ព័ន្ធក្នុងការរៀន និងបង្រៀនតាមបែបគោលវិធីសិស្សមជ្ឈមណ្ឌល ឱ្យឆ្លើយតបនឹងកម្មវិធីសាលាកុមារមេត្រី។',
      ],
    },

    visionHeading: { en: 'Our Vision', km: 'ចក្ខុវិស័យ' },
    visionText: {
      en: [
        'Ensure that children within the community have access to education with equity, quality in knowledge, practical skills, and morality to develop the nation.',
        'Transform Pralay Meas Primary School into a Child-Friendly School.',
        'Ensure all children are enrolled in school with equity.',
        'Strengthen the prevention of student dropout rates.',
        'Empower students with the capability to continue their education to secondary school.',
        'Engage the community in improving and developing the school.',
        "Enhance teachers' knowledge to ensure quality in both teaching and learning.",
      ],
      km: [
        'ធានាឱ្យកុមារនៅក្នុងសហគមន៍ បានចូលរៀន ប្រកបដោយសមភាព គុណភាពទាំងចំណេះដឹង ចំណេះធ្វើ សីលធម៌ ដើម្បីអភិវឌ្ឍន៍ប្រទេសជាតិ។',
        'សាលាបឋមសិក្សា ប្រឡាយមាសក្លាយជាសាលាកុមារមេត្រី',
        'កុមារបានចូលរៀនគ្រប់ៗគ្នា ដោយសមធម៌',
        'បង្កើនការទប់ស្កាត់ការបោះបង់ការសិក្សារបស់សិស្ស',
        'សិស្សមានសមត្ថភាព បន្តការសិក្សា ទៅមធ្យមសិក្សា',
        'សហគមន៍មានចូលរួមជួយកែលម្អ និងអភិវឌ្ឍសាលារៀន',
        'គ្រូបង្រៀនបង្កើននូវចំណេះដឹងដើម្បីឱ្យមានគុណភាព ក្នុងការបង្រៀន និងរៀន។',
      ],
    },
  },

  /* ─── CLASSES PAGE ───────────────────────────────────────────────────── */
  classes: {
    pageTitle:  { en: 'Our Classes',  km: 'ថ្នាក់រៀនរបស់យើង' },
    students:   { en: 'students',     km: 'សិស្ស' },
    backBtn:    { en: '← Back',       km: '← ថយក្រោយ' },
    weeklySchedule: { en: 'Weekly Schedule', km: 'កាលវិភាគប្រចាំសប្តាហ៍' },
    cleaningGroups: { en: 'Cleaning Groups', km: 'ក្រុមសំអាត' },
    studyResults:   { en: 'Study Results',   km: 'លទ្ធផលសិក្សា' },
    teacher:        { en: 'Teacher',         km: 'គ្រូបង្រៀន' },
  },

  /* ─── MANAGEMENT PAGE ────────────────────────────────────────────────── */
  management: {
    badge:        { en: 'Our Team',              km: 'ក្រុមការងារ' },
    pageTitle:    { en: 'Leadership & Teachers',   km: 'គ្រប់គ្រង និងគ្រូបង្រៀន' },
    pageSubtitle: { en: 'Management structure and teachers', km: 'រចនាសម្ព័នសាលារៀន' },
    schoolNode:   { en: 'Pralay Meas Primary School', km: 'សាលាបឋមសិក្សាប្រឡាយមាស' },
    viewProfile:  { en: 'View Profile', km: 'មើលប្រវត្តិ' },
    principal:    { en: 'Principal',    km: 'នាយក' },
    exPrincipal:  { en: 'Ex-Principal', km: 'អតីតនាយក' },
  },

  /* ─── CONTACT PAGE ───────────────────────────────────────────────────── */
  contact: {
    badge:        { en: 'Get In Touch',    km: 'ទំនាក់ទំនង' },
    pageTitle:    { en: 'Contact Us',      km: 'ទំនាក់ទំនងមកយើង' },
    pageSubtitle: { en: 'Contact information and school location', km: 'ទំនាក់ទំនង និងទីតាំងសាលា' },
    address:      { en: 'Address',  km: 'អាសយដ្ឋាន' },
    addressValEn: { en: 'Pralay Meas Commune, Kampong Laeng District, Kampong Chhnang Province', km: 'ឃុំប្រឡាយមាស ស្រុកកំពង់លែង ខេត្តកំពង់ឆ្នាំង' },
    phone:        { en: 'Phone',    km: 'ទូរស័ព្ទ' },
    phoneVal:     { en: '+855 31 636 3963', km: '+855 31 636 3963' },
    phoneHours:   { en: 'Mon – Sat, 7 AM – 5 PM', km: 'ច័ន្ទ – សៅរ៍ ម៉ោង ៧ – ៥' },
    email:        { en: 'Email',     km: 'អ៊ីម៉ែល' },
    emailVal:     { en: 'pralaymeas@gmail.com', km: 'pralaymeas@gmail.com' },
    emailNote:    { en: 'We reply within 1–2 days', km: 'ឆ្លើយតបក្នុង ១–២ ថ្ងៃ' },
    facebook:     { en: 'Facebook',  km: 'ហ្វេសប៊ុក' },
    facebookVal:  { en: 'facebook.com/PralayMeasPrimarySchool', km: 'facebook.com/PralayMeasPrimarySchool' },
    facebookName: { en: 'Pralay Meas Primary School', km: 'សាលាបឋមសិក្សាប្រឡាយមាស' },
    hoursTitle:   { en: '🕐 School Hours', km: '🕐 ម៉ោងសិក្សា' },
    hours: [
      {
        dayEn: 'Monday – Saturday', dayKm: 'ច័ន្ទ – សៅរ៍',
        morning: { en: 'Morning 7:00 – 11:00', km: 'ព្រឹក ៧:០០ – ១១:០០' },
        afternoon: { en: 'Afternoon 1:00 – 5:00', km: 'ល្ងាច ១:០០ – ៥:០០' },
        closed: false,
      },
      {
        dayEn: 'Sunday', dayKm: 'អាទិត្យ',
        morning: { en: 'Closed', km: 'ឈប់សម្រាក' },
        afternoon: { en: '', km: '' },
        closed: true,
      },
    ],
  },

  /* ─── FOOTER ─────────────────────────────────────────────────────────── */
  footer: {
    schoolNameKm:  { en: 'Pralay Meas Primary School', km: 'សាលាបឋមសិក្សាប្រឡាយមាស' },
    schoolNameEn:  { en: 'Pralay Meas Primary School', km: 'Pralay Meas Primary School' },
    tagline:       { en: 'Nurturing Children with Knowledge, Values, and Excellence.', km: 'អប់រំកុមារ ជាមួយចំណេះដឹង គុណធម៌ និងភាពល្អប្រសើរ' },
    navHome:       { en: 'Home',    km: 'ទំព័រដើម' },
    navAbout:      { en: 'About',   km: 'អំពីសាលា' },
    navManagement: { en: 'Team',    km: 'ក្រុមការងារ' },
    navContact:    { en: 'Contact', km: 'ទំនាក់ទំនង' },
    address:       { en: 'Pralay Meas Commune, Kampong Laeng District, Kampong Chhnang Province', km: 'ឃុំប្រឡាយមាស ស្រុកកំពង់លែង​​ ខេត្តកំពង់ឆ្នាំង' },
    email:         { en: 'Pralaymeaspms@gmail.com', km: 'Pralaymeaspms@gmail.com' },
    mgmtHeading:   { en: 'School Management', km: 'គណៈគ្រប់គ្រងសាលា' },
    principal:     { en: '( Principal )',  km: '( នាយកសាលា )' },
    principalName: { en: 'Mr. Saeb Sochan', km: 'លោក សែប សុចាន់ ' },
    principalPhone:{ en: '088 600 5465', km: '088 600 5465' },
    principalEmail:{ en: 'Sebsochann@email.com', km: 'Sebsochann@email.com' },
    vicePrincipal: { en: '( Vice Principal )', km: '( នាយករង )' },
    viceNameKm:    { en: 'Mr. Kek Sophann', km: ' លោក កិក សុភ័ណ្ឌ ' },
    vicePhone:     { en: '088 267 8006', km: '088 267 8006' },
    viceEmail:     { en: 'keksophann@email.com', km: 'keksophann@email.com' },
    copyright:     { en: '© 2026 Pralay Meas Primary School. All rights reserved.', km: '© ២០២៦ រៀបចំដោយ ICT សាលាបឋមសិក្សាប្រឡាយមាស' },
  },
}

/**
 * t(lang) returns a proxy where every leaf { en, km } resolves to the correct string.
 * Works recursively — t('en').home.heroTitle  →  'Pralay Meas Primary School'
 */
function resolve(node, lang) {
  if (node && typeof node === 'object' && 'en' in node && 'km' in node) {
    return node[lang] ?? node.en
  }
  if (node && typeof node === 'object') {
    const out = Array.isArray(node) ? [] : {}
    for (const key of Object.keys(node)) {
      out[key] = resolve(node[key], lang)
    }
    return out
  }
  return node
}

export function t(lang = 'en') {
  return resolve(data, lang)
}

/** Raw data export — useful if you need both languages at once */
export default data