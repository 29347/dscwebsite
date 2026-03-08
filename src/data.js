// ============================================================
//  SITE DATA — edit this file to update the website content
// ============================================================

// --- STATS (the 4 numbers on the homepage) ---
export const stats = [
  { value: '10+', label: 'Active Members' },
  { value: '12+', label: 'Annual Workshops' },
  //{ value: '5',   label: 'Active Projects' },
  { value: 'PCC', label: 'Official Club' },
]

// --- EVENTS ---
// To add an event: copy one block, paste it, and fill in the details.
// To remove an event: delete its block.
export const events = [
  {
    month: 'Mar',
    day: '9',
    dayOfWeek: 'MONDAY',
    title: 'Introduction to Data Science',
    desc: 'Learn how to query data and manage databases. No prior experience required.',
    time: '12:00 PM – 1:00 PM',
    location: 'Room R-211',
    signupUrl: '',  // paste a sign-up link here, or leave empty to hide the button
  },
  {
    month: 'Mar',
    day: '16',
    dayOfWeek: 'MONDAY',
    title: 'Data Science workshop',
    desc: 'A workshop on creating impactful dashboards and telling stories with data.',
    time: '12:00 PM – 1:00 PM',
    location: 'Room R-211',
    signupUrl: '',
  },
  {
    month: 'Mar',
    day: '23',
    dayOfWeek: 'MONDAY',
    title: 'Untitled workshop or activity ',
    desc: 'We will be hosting something fun',
    time: '12:00 PM – 1:00 PM',
    location: 'Room R-211',
    signupUrl: '',
  },
  {
    month: '2026',
    day: 'Spring',
    dayOfWeek: 'TBD',
    title: 'WiDS Datathon 2026',
    desc: 'The Data Science Club is participating in the WiDS Datathon 2026 (University Edition) this spring',
    time: '',
    location: '',
    signupUrl: 'https://lancerlife.pasadena.edu/news/333534',
  },
  {
    month: 'Apr',
    day: 'Coming Soon',
    dayOfWeek: 'Will be anounce soon',
    title: 'Texera Workshop 2026 ',
    desc: 'NSF funded program that teaches students the principles of data science and machine learning. ',
    time: '',
    location: '',
    signupUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfJ12bgQVtYj8PbEdYiLDbqL_VBKWLYXlbo31jJg3alh_6LJw/viewform',
  },
]

// --- TEAM MEMBERS ---
// initials: first letters of first and last name (shown in the avatar circle)
// To add a member: copy one block, paste it, and fill in the details.
// To remove a member: delete its block.
export const team = [
   {
    name: 'Erin Shaw',
    initials: 'ES',
    role: 'Advisor',
    bio: 'Professor Erin Shaw is the advisor of the data science club.',
    photo: '',
  },
  {
    name: 'Nyan Lin Thura',
    initials: 'NLT',
    role: 'President',
    bio: 'Leading the club with a passion for ML and community building.',
    photo: '',   // paste a photo URL here, or leave empty to show initials
  },
  {
    name: 'Lillian Keshishian',
    initials: 'LK',
    role: 'Vice President',
    bio: 'Coordinates events and workshops. Loves data visualization.',
    photo: '',
  },
  {
    name: 'Something Chow',
    initials: 'SC',
    role: 'Social Media Manager',
    bio: 'Handles outreach, Instagram, and recruiting new members.',
    photo: '',
  },
  {
    name: 'Something Melody',
    initials: 'SM',
    role: 'Social Media Manager',
    bio: 'Handles outreach, Instagram, and recruiting new members.',
    photo: '',
  },
  {
    name: 'Thant Kyi Thu(Alex)',
    initials: 'TKT',
    role: 'Tech Lead',
    bio: 'I did this website.',
    photo: '',
  },
 
]

// --- SOCIAL LINKS ---
// Replace '#' with your actual profile URLs
export const socials = {
  discord:   'https://discord.gg/DTNEUFxxS',
  instagram: 'https://www.instagram.com/dsc.pcc/',
  //linkedin:  '#',
  //github:    '#',
  linktree:  'https://linktr.ee/bigdata8?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAQaFnJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAae_p-q_xblYEkWhUTAHBdYZP-WZK-OKFWTr3ftSqhQPhZHRW4x0NU9IrjYPRg_aem_Lrxjy_cYcveexKehVWBBvw',
  lancerlife: 'https://lancerlife.pasadena.edu/organization/datascienceclub'

}

// --- CONTACT INFO ---
export const contact = {
  email:    'datascienceclub@pasadena.edu',
  schedule: 'Every other Friday · 12:00 PM – 1:00 PM',
  room:     'Room R211',
  instagram: '@dsc.pcc',
  
}
