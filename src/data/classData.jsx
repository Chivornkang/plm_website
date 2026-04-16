// Shared data for all classes

export const classes = [
  { id: 'kg',  grade: 'Kindergarten', gradeKm: 'មត្តេយ្យ',   short: 'KG',  emoji: '🌸' },
  { id: 'g1',  grade: 'Grade 1',      gradeKm: 'ថ្នាក់ទី ១', short: 'G1',  emoji: '⭐' },
  { id: 'g2',  grade: 'Grade 2',      gradeKm: 'ថ្នាក់ទី ២', short: 'G2',  emoji: '🌟' },
  { id: 'g3',  grade: 'Grade 3',      gradeKm: 'ថ្នាក់ទី ៣', short: 'G3',  emoji: '🔥' },
  { id: 'g4',  grade: 'Grade 4',      gradeKm: 'ថ្នាក់ទី ៤', short: 'G4',  emoji: '💎' },
  { id: 'g5',  grade: 'Grade 5',      gradeKm: 'ថ្នាក់ទី ៥', short: 'G5',  emoji: '🏆' },
  { id: 'g6',  grade: 'Grade 6',      gradeKm: 'ថ្នាក់ទី ៦', short: 'G6',  emoji: '👑' },
]

export const teachers = {
  kg: { name: '[Teacher Name 1]', nameKm: 'ឈ្មោះ', gender: 'Female', genderKm: 'ស្រី', age: '28', exp: '5 years', edu: 'Bachelor in Education', eduKm: 'បរិញ្ញាបត្រអប់រំ', phone: '+855 xx xxx xxx', email: 'teacher1@school.com', emoji: '👩‍🏫' },
  g1: { name: '[Teacher Name 2]', nameKm: 'ឈ្មោះ', gender: 'Male',   genderKm: 'ប្រុស', age: '32', exp: '8 years', edu: 'Bachelor in Education', eduKm: 'បរិញ្ញាបត្រអប់រំ', phone: '+855 xx xxx xxx', email: 'teacher2@school.com', emoji: '👨‍🏫' },
  g2: { name: '[Teacher Name 3]', nameKm: 'ឈ្មោះ', gender: 'Female', genderKm: 'ស្រី', age: '30', exp: '6 years', edu: 'Bachelor in Education', eduKm: 'បរិញ្ញាបត្រអប់រំ', phone: '+855 xx xxx xxx', email: 'teacher3@school.com', emoji: '👩‍🏫' },
  g3: { name: '[Teacher Name 4]', nameKm: 'ឈ្មោះ', gender: 'Male',   genderKm: 'ប្រុស', age: '35', exp: '10 years', edu: 'Bachelor in Education', eduKm: 'បរិញ្ញាបត្រអប់រំ', phone: '+855 xx xxx xxx', email: 'teacher4@school.com', emoji: '👨‍🏫' },
  g4: { name: '[Teacher Name 5]', nameKm: 'ឈ្មោះ', gender: 'Female', genderKm: 'ស្រី', age: '29', exp: '5 years', edu: 'Bachelor in Education', eduKm: 'បរិញ្ញាបត្រអប់រំ', phone: '+855 xx xxx xxx', email: 'teacher5@school.com', emoji: '👩‍🏫' },
  g5: { name: '[Teacher Name 6]', nameKm: 'ឈ្មោះ', gender: 'Male',   genderKm: 'ប្រុស', age: '38', exp: '12 years', edu: 'Bachelor in Education', eduKm: 'បរិញ្ញាបត្រអប់រំ', phone: '+855 xx xxx xxx', email: 'teacher6@school.com', emoji: '👨‍🏫' },
  g6: { name: '[Teacher Name 7]', nameKm: 'ឈ្មោះ', gender: 'Female', genderKm: 'ស្រី', age: '33', exp: '9 years', edu: 'Bachelor in Education', eduKm: 'បរិញ្ញាបត្រអប់រំ', phone: '+855 xx xxx xxx', email: 'teacher7@school.com', emoji: '👩‍🏫' },
}

export const schedules = {
  kg: [
    { time: '7:00–8:00',   mon: 'Khmer', tue: 'Math', wed: 'Drawing', thu: 'Khmer', fri: 'Music' },
    { time: '8:00–9:00',   mon: 'Math',  tue: 'Khmer', wed: 'Khmer',  thu: 'Math',  fri: 'Khmer' },
    { time: '9:00–10:00',  mon: 'Play',  tue: 'Drawing', wed: 'Math', thu: 'Science', fri: 'Play' },
    { time: '10:00–11:30', mon: 'Story', tue: 'Music',  wed: 'Story',  thu: 'Music', fri: 'Drawing' },
    { time: '13:30–15:00', mon: 'Nap/Play', tue: 'Nap/Play', wed: 'Nap/Play', thu: 'Nap/Play', fri: 'Nap/Play' },
    { time: '15:00–17:00', mon: 'Khmer', tue: 'Math', wed: 'Drawing', thu: 'Story', fri: 'Free Activity' },
  ],
  g1: [
    { time: '7:00–8:00',   mon: 'Khmer',   tue: 'Math',    wed: 'Science', thu: 'Khmer',   fri: 'Moral' },
    { time: '8:00–9:00',   mon: 'Math',    tue: 'Khmer',   wed: 'Khmer',   thu: 'Math',    fri: 'Khmer' },
    { time: '9:00–10:00',  mon: 'Science', tue: 'Social',  wed: 'Math',    thu: 'Art',     fri: 'Math' },
    { time: '10:00–11:30', mon: 'Art',     tue: 'Moral',   wed: 'Social',  thu: 'Science', fri: 'Social' },
    { time: '13:30–15:00', mon: 'English', tue: 'English', wed: 'English', thu: 'English', fri: 'PE' },
    { time: '15:00–17:00', mon: 'Khmer',   tue: 'Math',    wed: 'Science', thu: 'Khmer',   fri: 'Moral' },
  ],
  g2: [
    { time: '7:00–8:00',   mon: 'Khmer',   tue: 'Math',    wed: 'Science', thu: 'Khmer',   fri: 'English' },
    { time: '8:00–9:00',   mon: 'Math',    tue: 'Khmer',   wed: 'Khmer',   thu: 'Math',    fri: 'Khmer' },
    { time: '9:00–10:00',  mon: 'English', tue: 'Science', wed: 'Math',    thu: 'English', fri: 'Math' },
    { time: '10:00–11:30', mon: 'Social',  tue: 'Moral',   wed: 'Art',     thu: 'Science', fri: 'Social' },
    { time: '13:30–15:00', mon: 'English', tue: 'English', wed: 'Khmer',   thu: 'English', fri: 'PE' },
    { time: '15:00–17:00', mon: 'Math',    tue: 'Science', wed: 'Social',  thu: 'Moral',   fri: 'Art' },
  ],
  g3: [
    { time: '7:00–8:00',   mon: 'Khmer',   tue: 'Math',    wed: 'English', thu: 'Khmer',   fri: 'Science' },
    { time: '8:00–9:00',   mon: 'Math',    tue: 'English', wed: 'Khmer',   thu: 'Math',    fri: 'Khmer' },
    { time: '9:00–10:00',  mon: 'English', tue: 'Science', wed: 'Math',    thu: 'English', fri: 'Math' },
    { time: '10:00–11:30', mon: 'Science', tue: 'Social',  wed: 'Science', thu: 'Art',     fri: 'Social' },
    { time: '13:30–15:00', mon: 'Moral',   tue: 'English', wed: 'English', thu: 'Moral',   fri: 'PE' },
    { time: '15:00–17:00', mon: 'Math',    tue: 'Khmer',   wed: 'Social',  thu: 'Science', fri: 'English' },
  ],
  g4: [
    { time: '7:00–8:00',   mon: 'Khmer',   tue: 'Math',    wed: 'English', thu: 'Science', fri: 'Khmer' },
    { time: '8:00–9:00',   mon: 'Math',    tue: 'English', wed: 'Khmer',   thu: 'Math',    fri: 'English' },
    { time: '9:00–10:00',  mon: 'English', tue: 'Khmer',   wed: 'Science', thu: 'English', fri: 'Math' },
    { time: '10:00–11:30', mon: 'Science', tue: 'Social',  wed: 'Math',    thu: 'Social',  fri: 'Science' },
    { time: '13:30–15:00', mon: 'Moral',   tue: 'Art',     wed: 'English', thu: 'Moral',   fri: 'PE' },
    { time: '15:00–17:00', mon: 'Math',    tue: 'Khmer',   wed: 'Social',  thu: 'English', fri: 'Khmer' },
  ],
  g5: [
    { time: '7:00–8:00',   mon: 'Khmer',   tue: 'Math',    wed: 'English', thu: 'Science', fri: 'Khmer' },
    { time: '8:00–9:00',   mon: 'Math',    tue: 'English', wed: 'Khmer',   thu: 'Math',    fri: 'English' },
    { time: '9:00–10:00',  mon: 'English', tue: 'Science', wed: 'Math',    thu: 'English', fri: 'Math' },
    { time: '10:00–11:30', mon: 'Science', tue: 'Social',  wed: 'Science', thu: 'Khmer',   fri: 'Social' },
    { time: '13:30–15:00', mon: 'Moral',   tue: 'English', wed: 'Moral',   thu: 'Art',     fri: 'PE' },
    { time: '15:00–17:00', mon: 'Math',    tue: 'Khmer',   wed: 'English', thu: 'Science', fri: 'Social' },
  ],
  g6: [
    { time: '7:00–8:00',   mon: 'Khmer',   tue: 'Math',    wed: 'English', thu: 'Science', fri: 'History' },
    { time: '8:00–9:00',   mon: 'Math',    tue: 'English', wed: 'Khmer',   thu: 'Math',    fri: 'Khmer' },
    { time: '9:00–10:00',  mon: 'English', tue: 'Science', wed: 'Math',    thu: 'English', fri: 'Math' },
    { time: '10:00–11:30', mon: 'Science', tue: 'History', wed: 'Science', thu: 'History', fri: 'Social' },
    { time: '13:30–15:00', mon: 'Moral',   tue: 'English', wed: 'Moral',   thu: 'Art',     fri: 'PE' },
    { time: '15:00–17:00', mon: 'Math',    tue: 'Khmer',   wed: 'English', thu: 'Science', fri: 'Revision' },
  ],
}

// 7 cleaning groups, each 7 students, rotating daily Mon–Sat
export const cleaningGroups = {
  kg: [
    { group: 1, day: 'Monday / ច័ន្ទ',    members: ['[Student 1]','[Student 2]','[Student 3]','[Student 4]','[Student 5]','[Student 6]','[Student 7]'] },
    { group: 2, day: 'Tuesday / អង្គារ',  members: ['[Student 8]','[Student 9]','[Student 10]','[Student 11]','[Student 12]','[Student 13]','[Student 14]'] },
    { group: 3, day: 'Wednesday / ពុធ',   members: ['[Student 15]','[Student 16]','[Student 17]','[Student 18]','[Student 19]','[Student 20]','[Student 21]'] },
    { group: 4, day: 'Thursday / ព្រហស្បតិ៍', members: ['[Student 22]','[Student 23]','[Student 24]','[Student 25]','[Student 26]','[Student 27]','[Student 28]'] },
    { group: 5, day: 'Friday / សុក្រ',    members: ['[Student 29]','[Student 30]','[Student 31]','[Student 32]','[Student 33]','[Student 34]','[Student 35]'] },
    { group: 6, day: 'Saturday / សៅរ៍',   members: ['[Student 36]','[Student 37]','[Student 38]','[Student 39]','[Student 40]','[Student 41]','[Student 42]'] },
    { group: 7, day: 'Weekly Rotation / វេន', members: ['[Student 43]','[Student 44]','[Student 45]','[Student 46]','[Student 47]','[Student 48]','[Student 49]'] },
  ],
}
// Use same structure for all grades (placeholder)
['g1','g2','g3','g4','g5','g6'].forEach(id => {
  cleaningGroups[id] = cleaningGroups.kg.map(g => ({ ...g }))
})

// Monthly results – 3 months sample per class
export const monthlyResults = {
  kg: [
    { month: 'January / មករា', students: [
      { rank: 1, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '98', medal: '🥇' },
      { rank: 2, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '95', medal: '🥈' },
      { rank: 3, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '92', medal: '🥉' },
    ]},
    { month: 'February / កុម្ភៈ', students: [
      { rank: 1, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '97', medal: '🥇' },
      { rank: 2, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '94', medal: '🥈' },
      { rank: 3, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '91', medal: '🥉' },
    ]},
    { month: 'March / មីនា', students: [
      { rank: 1, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '99', medal: '🥇' },
      { rank: 2, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '96', medal: '🥈' },
      { rank: 3, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '93', medal: '🥉' },
    ]},
    { month: 'April / មេសា', students: [
      { rank: 1, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '100', medal: '🥇' },
      { rank: 2, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '97', medal: '🥈' },
      { rank: 3, name: '[Student Name]', nameKm: 'ឈ្មោះ', score: '94', medal: '🥉' },
    ]},
  ],
}
;['g1','g2','g3','g4','g5','g6'].forEach(id => {
  monthlyResults[id] = monthlyResults.kg.map(m => ({ ...m, students: m.students.map(s => ({ ...s })) }))
})
