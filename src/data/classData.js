// ─── classData.js ────────────────────────────────────────────────────────────
// Central data source for all class pages.
// Schedule: Mon–Sat per grade (6 days).
// Monthly results: Jan–Mar with full student list + top 3.

import chivornAvatar from "../../assets/teachers/chivorn.png";


export const DAYS_EN = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
export const DAYS_KH = ["ច័ន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"];

export const RANK_CFG = [
  { medal:"🥇", color:"#B8860B", bg:"#FFFBE6", border:"#FFD700", titleEn:"1st Place", titleKh:"លំដាប់ទី១" },
  { medal:"🥈", color:"#606060", bg:"#F5F5F5", border:"#C0C0C0", titleEn:"2nd Place", titleKh:"លំដាប់ទី២" },
  { medal:"🥉", color:"#8B4513", bg:"#FFF3E6", border:"#CD7F32", titleEn:"3rd Place", titleKh:"លំដាប់ទី៣" },
];

// Helper: build a full weekly schedule (Mon–Sat).
// satSubjects = shorter Saturday morning list.
const mkSchedule = (slots, satSlots) => {
  const week = {};
  DAYS_EN.forEach((d, i) => { week[d] = i < 5 ? slots : satSlots; });
  return week; // { Monday:[...], ..., Saturday:[...] }
};

// Helper: build a monthly result entry
const mkMonth = (month, monthKh, students) => ({
  month, monthKh,
  // students: [{name, nameKh, score}] ordered by score desc
  students: [...students].sort((a, b) => b.score - a.score).map((s, i) => ({ ...s, rank: i + 1 })),
});

export const classesData = [
  // ─────────────────────────────────────────── GRADE 1
  {
    id: 1,
    grade: "Grade 1", gradeKh: "ថ្នាក់ទី១",
    emoji: "🌱", color: "#FF8C00",
    room: "Room 101", roomKh: "បន្ទប់ ១០១",
    teacher: {
      name: "Miss. Say Kory", nameKh: "អ្នកគ្រូ សាយ កយ",
      title: "Class Teacher", titleKh: "គ្រូប្រចាំថ្នាក់",
      experience: "8 years", experienceKh: "៨ ឆ្នាំ",
      phone: "012 345 678", email: "sokha@pralaymeas.edu.kh", avatar: "👩‍🏫",
      bio: "Passionate early childhood educator with a warm, nurturing approach to learning.",
      bioKh: "គ្រូដែលស្រឡាញ់ការអប់រំកុមារវ័យដំបូង ជាមួយវិធីសាស្ត្រសិក្សាដ៏ស្រស់ស្រាយ។",
    },
    weeklySchedule: {
      Monday:    [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–9:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Moral Education",subjectKh:"សីលធម៌"},{time:"10:20–11:00",subject:"Art",subjectKh:"សិល្បៈ"}],
      Tuesday:   [{time:"7:00–8:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:00–9:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Art",subjectKh:"សិល្បៈ"},{time:"10:20–11:00",subject:"Moral Education",subjectKh:"សីលធម៌"}],
      Wednesday: [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–9:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Moral Education",subjectKh:"សីលធម៌"},{time:"10:20–11:00",subject:"PE",subjectKh:"កីឡា"}],
      Thursday:  [{time:"7:00–8:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:00–9:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Art",subjectKh:"សិល្បៈ"},{time:"10:20–11:00",subject:"Moral Education",subjectKh:"សីលធម៌"}],
      Friday:    [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–9:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Moral Education",subjectKh:"សីលធម៌"},{time:"10:20–11:00",subject:"Art",subjectKh:"សិល្បៈ"}],
      Saturday:  [{time:"7:00–8:30",subject:"Khmer Review",subjectKh:"ត្រួតពិនិត្យខ្មែរ"},{time:"8:30–9:00",subject:"Break",subjectKh:"សម្រាក"},{time:"9:00–10:00",subject:"Math Review",subjectKh:"ត្រួតពិនិត្យគណិត"}],
    },
    cleaningGroups: [
      ["Dara","Sreyla","Kosal","Chantha","Mony","Pisey","Bopha"],
      ["Veasna","Ratana","Sophea","Kunthy","Lida","Panha","Tola"],
      ["Rithy","Sreymom","Chanra","Vanna","Makara","Sothea","Phally"],
      ["Kimly","Bunthoeun","Sovannary","Leakena","Channary","Sambath","Kanha"],
      ["Sokha","Bunly","Sreynich","Dyna","Nakry","Chanvary","Sophal"],
      ["Mealea","Rotanak","Chanpiseth","Sovath","Vicheth","Borin","Solida"],
    ],
    monthlyResults: [
      mkMonth("January","មករា",[
        {name:"Dara",nameKh:"ដារ៉ា",score:98},{name:"Sreyla",nameKh:"ស្រីឡា",score:95},{name:"Kosal",nameKh:"គោសល",score:93},
        {name:"Chantha",nameKh:"ចន្ទា",score:91},{name:"Mony",nameKh:"មុនី",score:89},{name:"Pisey",nameKh:"ពិសី",score:88},
        {name:"Bopha",nameKh:"បុប្ផា",score:86},{name:"Veasna",nameKh:"វាសនា",score:85},{name:"Ratana",nameKh:"រតនា",score:84},
        {name:"Sophea",nameKh:"សុភា",score:83},{name:"Kunthy",nameKh:"គន្ធី",score:81},{name:"Lida",nameKh:"លីដា",score:80},
      ]),
      mkMonth("February","កុម្ភៈ",[
        {name:"Sreyla",nameKh:"ស្រីឡា",score:97},{name:"Dara",nameKh:"ដារ៉ា",score:96},{name:"Chantha",nameKh:"ចន្ទា",score:91},
        {name:"Kosal",nameKh:"គោសល",score:90},{name:"Mony",nameKh:"មុនី",score:88},{name:"Pisey",nameKh:"ពិសី",score:87},
        {name:"Bopha",nameKh:"បុប្ផា",score:85},{name:"Veasna",nameKh:"វាសនា",score:84},{name:"Ratana",nameKh:"រតនា",score:83},
        {name:"Sophea",nameKh:"សុភា",score:82},{name:"Kunthy",nameKh:"គន្ធី",score:80},{name:"Lida",nameKh:"លីដា",score:79},
      ]),
      mkMonth("March","មីនា",[
        {name:"Kosal",nameKh:"គោសល",score:99},{name:"Sreyla",nameKh:"ស្រីឡា",score:95},{name:"Mony",nameKh:"មុនី",score:92},
        {name:"Dara",nameKh:"ដារ៉ា",score:91},{name:"Chantha",nameKh:"ចន្ទា",score:89},{name:"Pisey",nameKh:"ពិសី",score:88},
        {name:"Bopha",nameKh:"បុប្ផា",score:87},{name:"Veasna",nameKh:"វាសនា",score:86},{name:"Ratana",nameKh:"រតនា",score:84},
        {name:"Sophea",nameKh:"សុភា",score:83},{name:"Kunthy",nameKh:"គន្ធី",score:82},{name:"Lida",nameKh:"លីដា",score:80},
      ]),
    ],
  },

  // ─────────────────────────────────────────── GRADE 2
  {
    id: 2,
    grade:"Grade 2", gradeKh:"ថ្នាក់ទី២",
    emoji:chivornAvatar, color:"#FFA500",
    room:"Room 102", roomKh:"បន្ទប់ ១០២",
    teacher:{
      name:"Mr. CHIVORN KANG", nameKh:"លោកគ្រូ គាំង ជីវ័ន",
      title:"Class Teacher", titleKh:"គ្រូប្រចាំថ្នាក់",
      experience:"12 years", experienceKh:"១២ ឆ្នាំ",
      phone:"011 234 567", email:"veasna@pralaymeas.edu.kh", avatar:chivornAvatar,
      bio:"Dedicated teacher who makes Math and Science exciting for young learners.",
      bioKh:"គ្រូដែលធ្វើឱ្យគណិតវិទ្យា និងវិទ្យាសាស្ត្រគួរឱ្យចាប់អារម្មណ៍សម្រាប់សិស្ស។",
    },
    weeklySchedule:{
      Monday:    [{time:"7:00–8:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:00–9:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"10:20–11:00",subject:"Art",subjectKh:"សិល្បៈ"}],
      Tuesday:   [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–9:00",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"10:20–11:00",subject:"Moral Education",subjectKh:"សីលធម៌"}],
      Wednesday: [{time:"7:00–8:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:00–9:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Art",subjectKh:"សិល្បៈ"},{time:"10:20–11:00",subject:"PE",subjectKh:"កីឡា"}],
      Thursday:  [{time:"7:00–8:00",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"8:00–9:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"10:20–11:00",subject:"Art",subjectKh:"សិល្បៈ"}],
      Friday:    [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–9:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:20",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"10:20–11:00",subject:"Moral Education",subjectKh:"សីលធម៌"}],
      Saturday:  [{time:"7:00–8:30",subject:"Math Review",subjectKh:"ត្រួតពិនិត្យគណិត"},{time:"8:30–9:00",subject:"Break",subjectKh:"សម្រាក"},{time:"9:00–10:00",subject:"Khmer Review",subjectKh:"ត្រួតពិនិត្យខ្មែរ"}],
    },
    cleaningGroups:[
      ["Pisey","Ratanak","Sophal","Dyna","Menghour","Sreynich","Chanmoly"],
      ["Raksmey","Vira","Sokunthea","Lyda","Ponleak","Thida","Narith"],
      ["Samnang","Chankrisna","Boranin","Visal","Mengly","Sotheavy","Chamroeun"],
      ["Chhorvy","Bunna","Sovanda","Leakena","Channitha","Sambath","Kanha"],
      ["Rithy","Sreymom","Chanra","Vanna","Makara","Sothea","Phally"],
      ["Mealea","Rotanak","Chanpiseth","Sovath","Vicheth","Borin","Solida"],
    ],
    monthlyResults:[
      mkMonth("January","មករា",[
        {name:"Pisey",nameKh:"ពិសី",score:97},{name:"Ratanak",nameKh:"រតនៈ",score:94},{name:"Sophal",nameKh:"សុផល",score:91},
        {name:"Dyna",nameKh:"ឌីណា",score:89},{name:"Menghour",nameKh:"ម៉េងហ័រ",score:88},{name:"Sreynich",nameKh:"ស្រីនិច",score:86},
        {name:"Chanmoly",nameKh:"ចន្ទ្រាម៉ូលី",score:84},{name:"Raksmey",nameKh:"រស្មី",score:83},{name:"Vira",nameKh:"វីរៈ",score:81},
        {name:"Sokunthea",nameKh:"សុគន្ធា",score:80},
      ]),
      mkMonth("February","កុម្ភៈ",[
        {name:"Ratanak",nameKh:"រតនៈ",score:98},{name:"Pisey",nameKh:"ពិសី",score:95},{name:"Dyna",nameKh:"ឌីណា",score:90},
        {name:"Sophal",nameKh:"សុផល",score:89},{name:"Menghour",nameKh:"ម៉េងហ័រ",score:87},{name:"Sreynich",nameKh:"ស្រីនិច",score:86},
        {name:"Chanmoly",nameKh:"ចន្ទ្រាម៉ូលី",score:84},{name:"Raksmey",nameKh:"រស្មី",score:82},{name:"Vira",nameKh:"វីរៈ",score:81},
        {name:"Sokunthea",nameKh:"សុគន្ធា",score:79},
      ]),
      mkMonth("March","មីនា",[
        {name:"Pisey",nameKh:"ពិសី",score:99},{name:"Sophal",nameKh:"សុផល",score:93},{name:"Ratanak",nameKh:"រតនៈ",score:91},
        {name:"Dyna",nameKh:"ឌីណា",score:90},{name:"Sreynich",nameKh:"ស្រីនិច",score:88},{name:"Menghour",nameKh:"ម៉េងហ័រ",score:86},
        {name:"Chanmoly",nameKh:"ចន្ទ្រាម៉ូលី",score:84},{name:"Raksmey",nameKh:"រស្មី",score:83},{name:"Vira",nameKh:"វីរៈ",score:81},
        {name:"Sokunthea",nameKh:"សុគន្ធា",score:80},
      ]),

    ],
  },

  // ─────────────────────────────────────────── GRADE 3
  {
    id: 3,
    grade:"Grade 3", gradeKh:"ថ្នាក់ទី៣",
    emoji:"🌻", color:"#FFB700",
    room:"Room 201", roomKh:"បន្ទប់ ២០១",
    teacher:{
      name:"Mrs. Channary Lim", nameKh:"លោកគ្រូ ចន្ទារី លីម",
      title:"Class Teacher", titleKh:"គ្រូប្រចាំថ្នាក់",
      experience:"6 years", experienceKh:"៦ ឆ្នាំ",
      phone:"096 567 890", email:"channary@pralaymeas.edu.kh", avatar:"👩‍🏫",
      bio:"Creative and energetic, bringing Social Studies and Science to life.",
      bioKh:"ច្នៃប្រឌិត និងមានទឹកចិត្ត ធ្វើឱ្យសិក្សាសង្គម និងវិទ្យាសាស្ត្រមានជីវិតជីវា។",
    },
    weeklySchedule:{
      Monday:    [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–9:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:10",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"10:10–11:00",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"11:00–11:30",subject:"Art",subjectKh:"សិល្បៈ"}],
      Tuesday:   [{time:"7:00–8:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:00–9:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:10",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"10:10–11:00",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"11:00–11:30",subject:"PE",subjectKh:"កីឡា"}],
      Wednesday: [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–9:00",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:10",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"10:10–11:00",subject:"Art",subjectKh:"សិល្បៈ"},{time:"11:00–11:30",subject:"Moral Education",subjectKh:"សីលធម៌"}],
      Thursday:  [{time:"7:00–8:00",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"8:00–9:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:10",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"10:10–11:00",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"11:00–11:30",subject:"Art",subjectKh:"សិល្បៈ"}],
      Friday:    [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–9:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:00–9:20",subject:"Break",subjectKh:"សម្រាក"},{time:"9:20–10:10",subject:"Art",subjectKh:"សិល្បៈ"},{time:"10:10–11:00",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"11:00–11:30",subject:"PE",subjectKh:"កីឡា"}],
      Saturday:  [{time:"7:00–8:30",subject:"Khmer Review",subjectKh:"ត្រួតពិនិត្យខ្មែរ"},{time:"8:30–9:00",subject:"Break",subjectKh:"សម្រាក"},{time:"9:00–10:00",subject:"Math Review",subjectKh:"ត្រួតពិនិត្យគណិត"},{time:"10:00–10:30",subject:"Science Review",subjectKh:"ត្រួតពិនិត្យវិទ្យា"}],
    },
    cleaningGroups:[
      ["Sreynit","Bopha","Chanveasna","Kolap","Malis","Chenda","Srey"],
      ["Virak","Daro","Tola","Boren","Menghor","Ratana","Sopheap"],
      ["Lyma","Sokhom","Chanthy","Vanny","Makra","Sothy","Phany"],
      ["Kimba","Bunthan","Sovanny","Leka","Channy","Sambo","Kanhy"],
      ["Nary","Borey","Sovath","Chanty","Pheary","Kunthy","Vibol"],
      ["Mealea","Rotanak","Chanpiseth","Sovath2","Vicheth","Borin","Solida"],
    ],
    monthlyResults:[
      mkMonth("January","មករា",[
        {name:"Sreynit",nameKh:"ស្រីនិត",score:96},{name:"Bopha",nameKh:"បុប្ផា",score:94},{name:"Virak",nameKh:"វីរៈ",score:90},
        {name:"Daro",nameKh:"ដារ៉ូ",score:88},{name:"Tola",nameKh:"តុលា",score:87},{name:"Kolap",nameKh:"កុលាប",score:85},
        {name:"Malis",nameKh:"មាលីស",score:83},{name:"Lyma",nameKh:"ល្យ៉ាម",score:82},{name:"Sokhom",nameKh:"សុខុម",score:80},
        {name:"Chanthy",nameKh:"ចន្ទី",score:79},{name:"Vanny",nameKh:"វ៉ានី",score:77},{name:"Kimba",nameKh:"គីមបា",score:76},
      ]),
      mkMonth("February","កុម្ភៈ",[
        {name:"Bopha",nameKh:"បុប្ផា",score:98},{name:"Sreynit",nameKh:"ស្រីនិត",score:95},{name:"Daro",nameKh:"ដារ៉ូ",score:89},
        {name:"Virak",nameKh:"វីរៈ",score:88},{name:"Tola",nameKh:"តុលា",score:86},{name:"Kolap",nameKh:"កុលាប",score:84},
        {name:"Malis",nameKh:"មាលីស",score:82},{name:"Lyma",nameKh:"ល្យ៉ាម",score:81},{name:"Sokhom",nameKh:"សុខុម",score:79},
        {name:"Chanthy",nameKh:"ចន្ទី",score:78},{name:"Vanny",nameKh:"វ៉ានី",score:76},{name:"Kimba",nameKh:"គីមបា",score:75},
      ]),
      mkMonth("March","មីនា",[
        {name:"Virak",nameKh:"វីរៈ",score:97},{name:"Bopha",nameKh:"បុប្ផា",score:94},{name:"Kolap",nameKh:"កុលាប",score:91},
        {name:"Sreynit",nameKh:"ស្រីនិត",score:90},{name:"Daro",nameKh:"ដារ៉ូ",score:88},{name:"Tola",nameKh:"តុលា",score:86},
        {name:"Malis",nameKh:"មាលីស",score:84},{name:"Lyma",nameKh:"ល្យ៉ាម",score:83},{name:"Sokhom",nameKh:"សុខុម",score:81},
        {name:"Chanthy",nameKh:"ចន្ទី",score:80},{name:"Vanny",nameKh:"វ៉ានី",score:78},{name:"Kimba",nameKh:"គីមបា",score:77},
      ]),
    ],
  },

  // ─────────────────────────────────────────── GRADE 4
  {
    id: 4,
    grade:"Grade 4", gradeKh:"ថ្នាក់ទី៤",
    emoji:"🌸", color:"#E8900A",
    room:"Room 202", roomKh:"បន្ទប់ ២០២",
    teacher:{
      name:"Mr. Dara Noun", nameKh:"លោកគ្រូ តារា នួន",
      title:"Class Teacher", titleKh:"គ្រូប្រចាំថ្នាក់",
      experience:"15 years", experienceKh:"១៥ ឆ្នាំ",
      phone:"077 890 123", email:"dara@pralaymeas.edu.kh", avatar:"👨‍🏫",
      bio:"Veteran educator specializing in English and Social Studies integration.",
      bioKh:"គ្រូបទពិសោធច្រើនឆ្នាំ ជំនាញខាងអង់គ្លេស និងការបង្រួបបង្រួមជាមួយសិក្សាសង្គម។",
    },
    weeklySchedule:{
      Monday:    [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–8:50",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:50–9:40",subject:"English",subjectKh:"អង់គ្លេស"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"10:50–11:30",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"}],
      Tuesday:   [{time:"7:00–8:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:00–8:50",subject:"English",subjectKh:"អង់គ្លេស"},{time:"8:50–9:40",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"10:50–11:30",subject:"Art",subjectKh:"សិល្បៈ"}],
      Wednesday: [{time:"7:00–8:00",subject:"English",subjectKh:"អង់គ្លេស"},{time:"8:00–8:50",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:50–9:40",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"10:50–11:30",subject:"PE",subjectKh:"កីឡា"}],
      Thursday:  [{time:"7:00–8:00",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"8:00–8:50",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:50–9:40",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"English",subjectKh:"អង់គ្លេស"},{time:"10:50–11:30",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"}],
      Friday:    [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–8:50",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"8:50–9:40",subject:"English",subjectKh:"អង់គ្លេស"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"10:50–11:30",subject:"Art",subjectKh:"សិល្បៈ"}],
      Saturday:  [{time:"7:00–8:30",subject:"English Review",subjectKh:"ត្រួតពិនិត្យអង់គ្លេស"},{time:"8:30–9:00",subject:"Break",subjectKh:"សម្រាក"},{time:"9:00–10:30",subject:"Math Review",subjectKh:"ត្រួតពិនិត្យគណិត"}],
    },
    cleaningGroups:[
      ["Sopheak","Chanvary","Nakry","Bunly","Sreynich","Dyna","Ratana"],
      ["Vichet","Sivhorn","Sokunthea","Lyda","Ponleak","Thida","Narith"],
      ["Samnang","Chankrisna","Boranin","Visal","Mengly","Sotheavy","Chamroeun"],
      ["Chhorvy","Bunna","Sovanda","Leakena","Channitha","Sambath","Kanha"],
      ["Pisey","Ratanak","Sophal","Tola","Menghour","Chanmoly","Raksmey"],
      ["Mealea","Rotanak","Chanpiseth","Sovath","Vicheth2","Borin","Solida"],
    ],
    monthlyResults:[
      mkMonth("January","មករា",[
        {name:"Sopheak",nameKh:"សុភ័ក",score:95},{name:"Chanvary",nameKh:"ចន្ទ្រាវ៉ារី",score:93},{name:"Nakry",nameKh:"នាក្រី",score:91},
        {name:"Bunly",nameKh:"បុណ្យលី",score:89},{name:"Sreynich",nameKh:"ស្រីនិច",score:87},{name:"Dyna",nameKh:"ឌីណា",score:86},
        {name:"Ratana",nameKh:"រតនា",score:84},{name:"Vichet",nameKh:"វិចិត្រ",score:83},{name:"Sivhorn",nameKh:"សីហ័ន",score:81},
        {name:"Sokunthea",nameKh:"សុគន្ធា",score:80},{name:"Lyda",nameKh:"លីដា",score:78},{name:"Ponleak",nameKh:"ពន្លឺ",score:77},
      ]),
      mkMonth("February","កុម្ភៈ",[
        {name:"Chanvary",nameKh:"ចន្ទ្រាវ៉ារី",score:97},{name:"Sopheak",nameKh:"សុភ័ក",score:94},{name:"Bunly",nameKh:"បុណ្យលី",score:88},
        {name:"Nakry",nameKh:"នាក្រី",score:87},{name:"Dyna",nameKh:"ឌីណា",score:86},{name:"Sreynich",nameKh:"ស្រីនិច",score:85},
        {name:"Ratana",nameKh:"រតនា",score:83},{name:"Vichet",nameKh:"វិចិត្រ",score:82},{name:"Sivhorn",nameKh:"សីហ័ន",score:80},
        {name:"Sokunthea",nameKh:"សុគន្ធា",score:79},{name:"Lyda",nameKh:"លីដា",score:77},{name:"Ponleak",nameKh:"ពន្លឺ",score:76},
      ]),
      mkMonth("March","មីនា",[
        {name:"Nakry",nameKh:"នាក្រី",score:98},{name:"Chanvary",nameKh:"ចន្ទ្រាវ៉ារី",score:95},{name:"Sopheak",nameKh:"សុភ័ក",score:90},
        {name:"Bunly",nameKh:"បុណ្យលី",score:89},{name:"Dyna",nameKh:"ឌីណា",score:87},{name:"Sreynich",nameKh:"ស្រីនិច",score:86},
        {name:"Ratana",nameKh:"រតនា",score:84},{name:"Vichet",nameKh:"វិចិត្រ",score:83},{name:"Sivhorn",nameKh:"សីហ័ន",score:81},
        {name:"Sokunthea",nameKh:"សុគន្ធា",score:80},{name:"Lyda",nameKh:"លីដា",score:78},{name:"Ponleak",nameKh:"ពន្លឺ",score:77},
      ]),
    ],
  },

  // ─────────────────────────────────────────── GRADE 5
  {
    id: 5,
    grade:"Grade 5", gradeKh:"ថ្នាក់ទី៥",
    emoji:"⭐", color:"#D4780A",
    room:"Room 301", roomKh:"បន្ទប់ ៣០១",
    teacher:{
      name:"Mrs. Sreymom Keo", nameKh:"លោកគ្រូ ស្រីម៉ុម កែវ",
      title:"Class Teacher", titleKh:"គ្រូប្រចាំថ្នាក់",
      experience:"10 years", experienceKh:"១០ ឆ្នាំ",
      phone:"089 456 789", email:"sreymom@pralaymeas.edu.kh", avatar:"👩‍🏫",
      bio:"Enthusiastic teacher blending English, PE and creative exploration.",
      bioKh:"គ្រូដែលភ្ជាប់អង់គ្លេស កីឡា និងការស្វែងរកបទពិសោធសិក្សា។",
    },
    weeklySchedule:{
      Monday:    [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–8:50",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:50–9:40",subject:"English",subjectKh:"អង់គ្លេស"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"10:50–11:30",subject:"PE",subjectKh:"កីឡា"}],
      Tuesday:   [{time:"7:00–8:00",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:00–8:50",subject:"English",subjectKh:"អង់គ្លេស"},{time:"8:50–9:40",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"10:50–11:30",subject:"Art",subjectKh:"សិល្បៈ"}],
      Wednesday: [{time:"7:00–8:00",subject:"English",subjectKh:"អង់គ្លេស"},{time:"8:00–8:50",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"8:50–9:40",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"10:50–11:30",subject:"Moral Education",subjectKh:"សីលធម៌"}],
      Thursday:  [{time:"7:00–8:00",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"8:00–8:50",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:50–9:40",subject:"English",subjectKh:"អង់គ្លេស"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"10:50–11:30",subject:"PE",subjectKh:"កីឡា"}],
      Friday:    [{time:"7:00–8:00",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"8:00–8:50",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"8:50–9:40",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"9:40–10:00",subject:"Break",subjectKh:"សម្រាក"},{time:"10:00–10:50",subject:"English",subjectKh:"អង់គ្លេស"},{time:"10:50–11:30",subject:"Art",subjectKh:"សិល្បៈ"}],
      Saturday:  [{time:"7:00–8:30",subject:"English Review",subjectKh:"ត្រួតពិនិត្យអង់គ្លេស"},{time:"8:30–9:00",subject:"Break",subjectKh:"សម្រាក"},{time:"9:00–10:30",subject:"Math Review",subjectKh:"ត្រួតពិនិត្យគណិត"}],
    },
    cleaningGroups:[
      ["Sreynich","Dyna","Ratana","Sophal","Pisey","Chanvary","Nakry"],
      ["Virak","Daro","Tola","Boren","Menghor","Sopheap","Samnang"],
      ["Lyma","Sokhom","Chanthy","Vanny","Makra","Sothy","Phany"],
      ["Kimba","Bunthan","Sovanny","Leka","Channy","Sambo","Kanhy"],
      ["Bopha","Sreynit","Kolap","Malis","Chenda","Chanveasna","Srey"],
      ["Mealea","Rotanak","Chanpiseth","Sovath","Vicheth","Borin","Solida"],
    ],
    monthlyResults:[
      mkMonth("January","មករា",[
        {name:"Sreynich",nameKh:"ស្រីនិច",score:97},{name:"Dyna",nameKh:"ឌីណា",score:95},{name:"Ratana",nameKh:"រតនា",score:92},
        {name:"Sophal",nameKh:"សុផល",score:90},{name:"Pisey",nameKh:"ពិសី",score:88},{name:"Chanvary",nameKh:"ចន្ទ្រាវ៉ារី",score:87},
        {name:"Nakry",nameKh:"នាក្រី",score:85},{name:"Virak",nameKh:"វីរៈ",score:84},{name:"Daro",nameKh:"ដារ៉ូ",score:82},
        {name:"Tola",nameKh:"តុលា",score:81},{name:"Boren",nameKh:"បូរ៉េន",score:79},{name:"Menghor",nameKh:"ម៉េងហ័រ",score:78},
      ]),
      mkMonth("February","កុម្ភៈ",[
        {name:"Dyna",nameKh:"ឌីណា",score:98},{name:"Sreynich",nameKh:"ស្រីនិច",score:95},{name:"Sophal",nameKh:"សុផល",score:90},
        {name:"Ratana",nameKh:"រតនា",score:89},{name:"Pisey",nameKh:"ពិសី",score:87},{name:"Chanvary",nameKh:"ចន្ទ្រាវ៉ារី",score:86},
        {name:"Nakry",nameKh:"នាក្រី",score:84},{name:"Virak",nameKh:"វីរៈ",score:83},{name:"Daro",nameKh:"ដារ៉ូ",score:81},
        {name:"Tola",nameKh:"តុលា",score:80},{name:"Boren",nameKh:"បូរ៉េន",score:78},{name:"Menghor",nameKh:"ម៉េងហ័រ",score:77},
      ]),
      mkMonth("March","មីនា",[
        {name:"Ratana",nameKh:"រតនា",score:99},{name:"Dyna",nameKh:"ឌីណា",score:95},{name:"Sreynich",nameKh:"ស្រីនិច",score:91},
        {name:"Sophal",nameKh:"សុផល",score:90},{name:"Chanvary",nameKh:"ចន្ទ្រាវ៉ារី",score:88},{name:"Pisey",nameKh:"ពិសី",score:87},
        {name:"Nakry",nameKh:"នាក្រី",score:85},{name:"Virak",nameKh:"វីរៈ",score:84},{name:"Daro",nameKh:"ដារ៉ូ",score:82},
        {name:"Tola",nameKh:"តុលា",score:81},{name:"Boren",nameKh:"បូរ៉េន",score:79},{name:"Menghor",nameKh:"ម៉េងហ័រ",score:78},
      ]),
    ],
  },

  // ─────────────────────────────────────────── GRADE 6
  {
    id: 6,
    grade:"Grade 6", gradeKh:"ថ្នាក់ទី៦",
    emoji:"🏆", color:"#C46B09",
    room:"Room 302", roomKh:"បន្ទប់ ៣០២",
    teacher:{
      name:"Mr. Piseth Heng", nameKh:"លោកគ្រូ ពិសិទ្ធ ហេង",
      title:"Senior Teacher", titleKh:"គ្រូជាន់ខ្ពស់",
      experience:"18 years", experienceKh:"១៨ ឆ្នាំ",
      phone:"085 123 456", email:"piseth@pralaymeas.edu.kh", avatar:"👨‍🏫",
      bio:"Senior teacher, expert in Computer literacy and national exam preparation.",
      bioKh:"គ្រូជាន់ខ្ពស់ ជំនាញខាងកុំព្យូទ័រ និងការត្រៀមប្រឡង។",
    },
    weeklySchedule:{
      Monday:    [{time:"7:00–7:50",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"7:50–8:40",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:40–9:30",subject:"English",subjectKh:"អង់គ្លេស"},{time:"9:30–9:50",subject:"Break",subjectKh:"សម្រាក"},{time:"9:50–10:40",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"10:40–11:30",subject:"Computer",subjectKh:"កុំព្យូទ័រ"}],
      Tuesday:   [{time:"7:00–7:50",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"7:50–8:40",subject:"English",subjectKh:"អង់គ្លេស"},{time:"8:40–9:30",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"9:30–9:50",subject:"Break",subjectKh:"សម្រាក"},{time:"9:50–10:40",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"10:40–11:30",subject:"PE",subjectKh:"កីឡា"}],
      Wednesday: [{time:"7:00–7:50",subject:"English",subjectKh:"អង់គ្លេស"},{time:"7:50–8:40",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"8:40–9:30",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"9:30–9:50",subject:"Break",subjectKh:"សម្រាក"},{time:"9:50–10:40",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"10:40–11:30",subject:"Computer",subjectKh:"កុំព្យូទ័រ"}],
      Thursday:  [{time:"7:00–7:50",subject:"Science",subjectKh:"វិទ្យាសាស្ត្រ"},{time:"7:50–8:40",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"8:40–9:30",subject:"English",subjectKh:"អង់គ្លេស"},{time:"9:30–9:50",subject:"Break",subjectKh:"សម្រាក"},{time:"9:50–10:40",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"10:40–11:30",subject:"Art",subjectKh:"សិល្បៈ"}],
      Friday:    [{time:"7:00–7:50",subject:"Khmer",subjectKh:"ភាសាខ្មែរ"},{time:"7:50–8:40",subject:"Social Studies",subjectKh:"សិក្សាសង្គម"},{time:"8:40–9:30",subject:"Computer",subjectKh:"កុំព្យូទ័រ"},{time:"9:30–9:50",subject:"Break",subjectKh:"សម្រាក"},{time:"9:50–10:40",subject:"Math",subjectKh:"គណិតវិទ្យា"},{time:"10:40–11:30",subject:"English",subjectKh:"អង់គ្លេស"}],
      Saturday:  [{time:"7:00–8:30",subject:"Exam Prep",subjectKh:"ត្រៀមប្រឡង"},{time:"8:30–9:00",subject:"Break",subjectKh:"សម្រាក"},{time:"9:00–10:00",subject:"Computer Lab",subjectKh:"មន្ទីរពិសោធន៍"},{time:"10:00–11:00",subject:"Math Review",subjectKh:"ត្រួតពិនិត្យគណិត"}],
    },
    cleaningGroups:[
      ["Piseth","Chanda","Vanna","Sophorn","Ratana","Bunly","Sreynich"],
      ["Virak","Daro","Tola","Boren","Menghor","Sopheap","Samnang"],
      ["Lyma","Sokhom","Chanthy","Vanny","Makra","Sothy","Phany"],
      ["Kimba","Bunthan","Sovanny","Leka","Channy","Sambo","Kanhy"],
      ["Sopheak","Nakry","Chanvary","Bunly2","Dyna","Sreynit","Bopha"],
      ["Mealea","Rotanak","Chanpiseth","Sovath","Vicheth","Borin","Solida"],
    ],
    monthlyResults:[
      mkMonth("January","មករា",[
        {name:"Piseth",nameKh:"ពិសិទ្ធ",score:99},{name:"Chanda",nameKh:"ចន្ទ",score:96},{name:"Vanna",nameKh:"វណ្ណ",score:93},
        {name:"Sophorn",nameKh:"សុភ័ណ",score:91},{name:"Ratana",nameKh:"រតនា",score:89},{name:"Bunly",nameKh:"បុណ្យលី",score:88},
        {name:"Sreynich",nameKh:"ស្រីនិច",score:86},{name:"Virak",nameKh:"វីរៈ",score:85},{name:"Daro",nameKh:"ដារ៉ូ",score:83},
        {name:"Tola",nameKh:"តុលា",score:82},{name:"Boren",nameKh:"បូរ៉េន",score:80},{name:"Menghor",nameKh:"ម៉េងហ័រ",score:79},
      ]),
      mkMonth("February","កុម្ភៈ",[
        {name:"Chanda",nameKh:"ចន្ទ",score:98},{name:"Piseth",nameKh:"ពិសិទ្ធ",score:97},{name:"Sophorn",nameKh:"សុភ័ណ",score:92},
        {name:"Vanna",nameKh:"វណ្ណ",score:91},{name:"Ratana",nameKh:"រតនា",score:89},{name:"Bunly",nameKh:"បុណ្យលី",score:87},
        {name:"Sreynich",nameKh:"ស្រីនិច",score:85},{name:"Virak",nameKh:"វីរៈ",score:84},{name:"Daro",nameKh:"ដារ៉ូ",score:82},
        {name:"Tola",nameKh:"តុលា",score:81},{name:"Boren",nameKh:"បូរ៉េន",score:79},{name:"Menghor",nameKh:"ម៉េងហ័រ",score:78},
      ]),
      mkMonth("March","មីនា",[
        {name:"Piseth",nameKh:"ពិសិទ្ធ",score:100},{name:"Vanna",nameKh:"វណ្ណ",score:95},{name:"Chanda",nameKh:"ចន្ទ",score:93},
        {name:"Sophorn",nameKh:"សុភ័ណ",score:91},{name:"Ratana",nameKh:"រតនា",score:89},{name:"Bunly",nameKh:"បុណ្យលី",score:88},
        {name:"Sreynich",nameKh:"ស្រីនិច",score:86},{name:"Virak",nameKh:"វីរៈ",score:85},{name:"Daro",nameKh:"ដារ៉ូ",score:83},
        {name:"Tola",nameKh:"តុលា",score:82},{name:"Boren",nameKh:"បូរ៉េន",score:80},{name:"Menghor",nameKh:"ម៉េងហ័រ",score:79},
      ]),
    ],
  },
];
