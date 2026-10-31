// Every certificate, letter, press item and photo on the site lives in this one file.
// The certificates section, the wins, the experience entries, the project pages and
// every page at /certificates/<slug> all read from here, so they always agree.
//
// Rules for this file:
// - `slug` is a permanent web address (https://www.yashshah.co.in/certificates/<slug>).
//   It is used in the resume. Never change a slug once it is published.
//   Only lowercase letters, digits and hyphens.
// - `title` and `dates` are written exactly as printed on the document.
// - `description` uses only what the document says, or facts already on the site.
// - The files are made by "Yash Website/tools/prepare-documents.py" from the originals in DOC.
//   Files that showed private details are covered and flattened before they get here.
// - Same house rules as site.js: no em dashes, no semicolons, no phone numbers.

export const documentTypes = [
  { id: "internship", label: "Internships", one: "Internship" },
  { id: "hackathon", label: "Hackathons and competitions", one: "Hackathon or competition" },
  { id: "course", label: "Courses and certifications", one: "Course or certification" },
  { id: "research", label: "Research", one: "Research" },
  { id: "appreciation", label: "Appreciation", one: "Appreciation" },
  { id: "membership", label: "Membership", one: "Membership" },
  { id: "press", label: "Press", one: "Press" },
  { id: "photo", label: "Photos", one: "Photo" },
];

// Related links. `project` is a project slug with its own page, `section` is a part of the home page.
const raw = [
  // ------------------------------------------------------------------ Internships
  {
    slug: "isro-research-project-2026",
    type: "internship",
    title: "Certificate, project on \"Machine Learning Approaches for Seismic Event Detection, Classification, and Noise Characterization in Lunar Seismograms, Applications to Lunar Seismological Datasets\"",
    shortTitle: "ISRO research project",
    issuer: "Indian Space Research Organisation (ISRO), Ahmedabad, Department of Space, Government of India",
    dates: "May 21, 2026 to Aug 31, 2026",
    when: "Aug 2026",
    sort: "2026-08-31",
    description:
      "I completed a fourteen-week research project at ISRO in Ahmedabad, from May 21, 2026 to Aug 31, 2026. The project was on machine learning approaches for seismic event detection, classification and noise characterization in lunar seismograms.",
    related: { section: "/#experience", label: "My ISRO internship" },
    experience: "isro",
  },
  {
    slug: "line-tech-internship-2025",
    type: "internship",
    title: "Internship Completion Certificate",
    shortTitle: "The Line Tech internship",
    issuer: "The Line Tech Solution Limited (TheLineTech UK)",
    dates: "01st June 2025 to 01st July 2025, dated July 5, 2025",
    when: "Jul 2025",
    sort: "2025-07-05",
    description:
      "I interned at TheLineTech UK from 1 June to 1 July 2025 and worked on the Nishan product order management system. I used AI tools and agents to design order workflows, pulled data from Tally Prime Gold through APIs and server-side scripts, and turned it into dashboards.",
    related: { section: "/#experience", label: "My internship at The Line Tech" },
    experience: "linetech",
  },
  {
    slug: "lalit-rakesh-internship-2024",
    type: "internship",
    title: "Certificate of Internship",
    shortTitle: "Lalit Rakesh & Associates internship",
    issuer: "Lalit Rakesh & Associates",
    dates: "Conducted from 4th July to 4th August, 2024, dated 05-08-2024",
    when: "Aug 2024",
    sort: "2024-08-05",
    description:
      "I completed a one-month paid internship at Lalit Rakesh & Associates, from 4 July to 4 August 2024. During it, I built a task management system using Microsoft PowerApps.",
    related: { section: "/#experience", label: "My internship at Lalit Rakesh & Associates" },
    experience: "lalit",
  },
  {
    slug: "lalit-rakesh-appreciation-2024",
    type: "appreciation",
    title: "Appreciation Certificate",
    shortTitle: "Lalit Rakesh & Associates appreciation",
    issuer: "Lalit Rakesh & Associates, Chartered Accountants",
    dates: "05.08.2024",
    when: "Aug 2024",
    sort: "2024-08-05",
    description:
      "Lalit Rakesh & Associates gave me this appreciation certificate at the end of my one-month online internship. It recognises the task management system I built with Microsoft PowerApps, which they say improved their workflow and task tracking.",
    related: { section: "/#experience", label: "My internship at Lalit Rakesh & Associates" },
    redacted: "The partner's membership number, mobile numbers and personal email are covered.",
  },
  {
    slug: "hindustan-platinum-internship-2024",
    type: "internship",
    title: "Internship Certificate",
    shortTitle: "Hindustan Platinum internship",
    issuer: "Hindustan Platinum Private Limited",
    dates: "May 2024 to June 2024",
    when: "Jun 2024",
    sort: "2024-06-30",
    description:
      "I interned at Hindustan Platinum from May 2024 to June 2024, where I designed and built a real-time Digital Weighing Machine Monitoring System with Python and Flask. It showed the live status of every networked weighing machine, alerted administrators when a machine stayed unreachable for over an hour, and ran on the company's internal server.",
    related: { section: "/#experience", label: "My internship at Hindustan Platinum" },
    experience: "hindustan",
    redacted: "The supervisor's direct email and phone number are covered.",
  },

  // ------------------------------------------------------------------ Hackathons and competitions
  {
    slug: "sih-2025-winner",
    type: "hackathon",
    pin: true, // shown first among the hackathons
    title: "Winner, Smart India Hackathon 2025, #SIH Hardware Edition Grand Finale 2025",
    shortTitle: "Smart India Hackathon 2025 winner",
    issuer: "Ministry of Education's Innovation Cell and AICTE, nodal centre Sri Sairam Engineering College, Chennai",
    dates: "December 8-12, 2025",
    when: "Dec 2025",
    sort: "2025-12-12",
    description:
      "This certificate names me a winner of Smart India Hackathon 2025, at the Hardware Edition Grand Finale held from 8 to 12 December 2025 at Sri Sairam Engineering College, Chennai. Our team won with Coast Scan, a handheld device that analyses beach sand in seconds.",
    related: { project: "coast-scan", label: "Coast Scan, the project that won" },
    win: "sih",
  },
  {
    slug: "tetrathon-2026-fifth-rank",
    type: "hackathon",
    title: "Tetrathon Certificate of Achievement, Fifth Rank at TetraTHON 2026",
    shortTitle: "TetraTHON 2026, 5th place",
    issuer: "Navrachana University, Vadodara, with ISEN Méditerranée, France",
    dates: "31st July to 2nd August 2026",
    when: "Aug 2026",
    sort: "2026-08-02",
    description:
      "Our team, The Caffeine Clause, claimed fifth rank at TetraTHON 2026, a 36-hour Indo-French AI Innovation Sprint at Navrachana University, Vadodara, with ISEN Méditerranée, France. We built EduBridge AI during the sprint.",
    related: { project: "edubridge-ai", label: "EduBridge AI, the project we built" },
    win: "tetrathon",
  },
  {
    slug: "ide-bootcamp-2026",
    type: "hackathon",
    title: "Certificate of Participation, Innovation, Design and Entrepreneurship (IDE) Bootcamp, Edition 3 - Phase I",
    shortTitle: "IDE Bootcamp, Edition 3",
    issuer: "AICTE, at GITAM (Deemed to be) University, Bengaluru Campus",
    dates: "06th to 10th April 2026",
    when: "Apr 2026",
    sort: "2026-04-10",
    description:
      "I took part in the Innovation, Design and Entrepreneurship (IDE) Bootcamp, Edition 3, Phase I, from 6 to 10 April 2026. It was organised by AICTE at GITAM (Deemed to be) University, Bengaluru Campus, where I pitched Coast Scan.",
    related: { project: "coast-scan", label: "Coast Scan, the project I pitched" },
  },
  {
    slug: "vikas-saptah-hackathon-2025",
    type: "hackathon",
    title: "Certificate of Participation, Hackathon Team Member, \"Vikas Saptah Hackathon 2025\"",
    shortTitle: "SSIP Vikas Saptah Hackathon 2025",
    issuer: "Student Startup and Innovation Policy (SSIP 2.0), Education Department, Government of Gujarat, at Pandit Deendayal Energy University, Gandhinagar",
    dates: "14th October 2025",
    when: "Oct 2025",
    sort: "2025-10-14",
    description:
      "As a hackathon team member, I took part in the Vikas Saptah Hackathon 2025 on 14 October 2025 at Pandit Deendayal Energy University, Gandhinagar, under SSIP 2.0 of the Government of Gujarat. Our project there was Urja Setu, which reached the top 50.",
    related: { project: "urja-setu", label: "Urja Setu, the project we built" },
    win: "vikas",
  },
  {
    slug: "troubleshoot-ideathon-2025",
    type: "hackathon",
    title: "Certificate of Participation, Troubleshoot Ideathon 2025",
    shortTitle: "TroubleShoot Ideathon 2025",
    issuer: "HASHTAG, JEMTEC",
    dates: "2025",
    when: "Sep 2025",
    sort: "2025-09-01",
    description:
      "I took part in Troubleshoot Ideathon 2025, organised by HASHTAG at JEMTEC. The certificate recognises innovation, creativity and teamwork.",
    verify: "https://verification.givemycertificate.com/v/c2eb5dd2-38cf-485b-9654-64873aaac44f",
  },
  {
    slug: "hackhound-3-2025",
    type: "hackathon",
    title: "Certificate of Achievement, HackHound 3.0",
    shortTitle: "HackHound 3.0",
    issuer: "HackHound Club, Department of CSE-AIML, SRM Institute of Science and Technology, Delhi-NCR Campus",
    dates: "27th and 28th February, 2025",
    when: "Feb 2025",
    sort: "2025-02-28",
    description:
      "I received this certificate for taking part in HackHound 3.0, held on 27 and 28 February 2025 at SRM Institute of Science and Technology, Delhi-NCR Campus. There, we built an AI learning recommender with a personalised dashboard.",
    verify: "https://verification.givemycertificate.com/v/4be7b92f-c34c-4f52-a4ce-b8d6c7eab952",
    related: { section: "/#achievements", label: "My wins and recognition" },
    win: "hackhound",
  },
  {
    slug: "indus-hackathon-2025",
    type: "hackathon",
    title: "Indus Hackathon 2025, Certificate of Participation",
    shortTitle: "Indus Hackathon 2025",
    issuer: "Department of Computer Science & Engineering, IITE, Indus University",
    dates: "31st January 2025",
    when: "Jan 2025",
    sort: "2025-01-31",
    description:
      "I took part in Indus Hackathon 2025 on 31 January 2025, organised by the Department of Computer Science and Engineering, IITE, Indus University. Our project there was Synapse, a hospital outpatient management system.",
    related: { section: "/#achievements", label: "My wins and recognition" },
    win: "indus",
  },
  {
    slug: "sih-2024-internal-first-place",
    type: "hackathon",
    title: "Certificate of Achievement, 1st Place in the Internal Hackathon",
    shortTitle: "SIH 2024 internal round, 1st place",
    issuer: "GLS University, Faculty of Engineering and Technology",
    dates: "13th September, 2024",
    when: "Sep 2024",
    sort: "2024-09-13",
    description:
      "I secured 1st place in the Internal Hackathon held by the Faculty of Engineering and Technology, GLS University, on 13 September 2024. This was the university's internal round for Smart India Hackathon 2024.",
    related: { section: "/#achievements", label: "My wins and recognition" },
    win: "sih2024",
  },
  {
    slug: "youth-festival-2026-first-position",
    type: "hackathon",
    title: "Youth Festival 2026 Certificate of Appreciation, First position in 404: TREASURE NOT FOUND",
    shortTitle: "Youth Festival 2026, 1st in 404: Treasure Not Found",
    issuer: "GLS University, GLS Youth Festival 2026",
    dates: "2026",
    when: "2026",
    sort: "2026-03-01",
    description:
      "I secured first position in 404: Treasure Not Found at the GLS Youth Festival 2026. It is the treasure hunt behind our Techno Games championship at the Narrative Youth Festival.",
    related: { section: "/#achievements", label: "My wins and recognition" },
    win: "techno",
  },

  // ------------------------------------------------------------------ Courses and certifications
  {
    slug: "oracle-oci-ai-foundations-2025",
    type: "course",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    shortTitle: "Oracle OCI AI Foundations Associate",
    issuer: "Oracle University",
    dates: "November 03, 2025",
    when: "Nov 2025",
    sort: "2025-11-03",
    description:
      "Oracle recognises me as an Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate. I earned the certification on 3 November 2025.",
    verify: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=431F02229FB8751A1E241F458506E62EC96D967AB22E9AC88B6551A9F3391D44",
  },
  {
    slug: "power-bi-workshop-2025",
    type: "course",
    title: "Certificate of Participation, workshop \"Create a Dashboard with Power BI\"",
    shortTitle: "Power BI dashboard workshop",
    issuer: "Koenig Solutions and Microsoft (Microsoft Elevate), with GLS University",
    dates: "3rd & 4th November 2025",
    when: "Nov 2025",
    sort: "2025-11-04",
    description:
      "I attended the workshop Create a Dashboard with Power BI on 3 and 4 November 2025. It was run by Koenig Solutions and Microsoft under Microsoft Elevate, with GLS University.",
  },
  {
    slug: "agile-scrum-master-2026",
    type: "course",
    title: "Certificate of Completion, Agile Scrum Master",
    shortTitle: "Agile Scrum Master",
    issuer: "Simplilearn SkillUP",
    dates: "24th July 2026",
    when: "Jul 2026",
    sort: "2026-07-24",
    description:
      "I completed the online course Agile Scrum Master from Simplilearn SkillUP on 24 July 2026. You can check the certificate on Simplilearn's site.",
    verify: "https://simpli-web.app.link/e/z0QyRIyBy6b",
  },
  {
    slug: "django-advanced-mastery-2026",
    type: "course",
    title: "Certificate of Completion, Job Ready - Django Advanced Mastery: Kafka, Celery, Redis, Elasticsearch & Beyond!",
    shortTitle: "Django Advanced Mastery",
    issuer: "Codekeen",
    dates: "Completed Date 27 February 2026, Issued On 26 February 2026",
    when: "Feb 2026",
    sort: "2026-02-27",
    description:
      "I completed Codekeen's course Job Ready, Django Advanced Mastery, which covers Kafka, Celery, Redis and Elasticsearch with Django. The certificate gives 27 February 2026 as the completion date.",
    verify: "https://abhijeetgupta.graphy.com/verify-certificate?serialno=TNTEPNXL",
  },
  {
    slug: "green-skills-ai-2025",
    type: "course",
    title: "Certificate of Completion, Foundation Course on Green Skills and Artificial Intelligence",
    shortTitle: "Green Skills and AI",
    issuer: "Edunet Foundation, AICTE and Shell, Skills4Future Program at GLS University",
    dates: "July 2025",
    when: "Jul 2025",
    sort: "2025-07-15",
    description:
      "I completed the Foundation Course on Green Skills and Artificial Intelligence in July 2025. It was part of the Skills4Future Program by Edunet Foundation, AICTE and Shell, at GLS University.",
    verify: "https://skills4future.in/certificate-verification-master-deck/S4F25_178254",
  },
  {
    slug: "how-to-css-2025",
    type: "course",
    title: "Certificate of Achievement, How To CSS",
    shortTitle: "How To CSS",
    issuer: "Codekaro",
    dates: "11 Jan 2025",
    when: "Jan 2025",
    sort: "2025-01-11",
    description:
      "I completed the How To CSS course from Codekaro on 11 January 2025. You can check the certificate on Codekaro's site.",
    verify: "https://codekaro.in/course-certificate/6fa801550c68182a1",
  },
  {
    slug: "java-fundamentals-2024",
    type: "course",
    title: "Course Certificate, Fundamentals of Java Programming",
    shortTitle: "Fundamentals of Java Programming",
    issuer: "Board Infinity, offered through Coursera",
    dates: "Jul 31, 2024",
    when: "Jul 2024",
    sort: "2024-07-31",
    description:
      "I completed Fundamentals of Java Programming, an online course by Board Infinity offered through Coursera, on 31 July 2024. Coursera has confirmed my identity and my participation in the course.",
    verify: "https://coursera.org/verify/49G7LG6WPH2U",
  },

  // ------------------------------------------------------------------ Research
  {
    slug: "icishct-2026-paper-presentation",
    type: "research",
    title: "Certificate of Paper Presentation",
    shortTitle: "ICISHCT-2026 paper presentation",
    issuer: "School of Computing & Technology, Institute of Advanced Research (IAR), Gandhinagar",
    dates: "29-30 October 2026",
    when: "Oct 2026",
    sort: "2026-10-30",
    description:
      "I presented our paper Frequency-Family Classification of Marsquakes from Spectrograms with a Hybrid Convolutional and Fourier Neural Operator at ICISHCT-2026, the International Conference on Intelligent, Secured and Human-Centered Technologies. It was organised by the Institute of Advanced Research, Gandhinagar, on 29 and 30 October 2026.",
    related: { section: "/#research", label: "The paper in my published research" },
  },

  // ------------------------------------------------------------------ Appreciation
  {
    slug: "cybershadez-2026-appreciation",
    type: "appreciation",
    title: "Letter of Appreciation, CyberShadez 2026",
    shortTitle: "CyberShadez 2026 appreciation",
    issuer: "GLS University, Faculty of Engineering & Technology",
    dates: "18th February 2026",
    when: "Feb 2026",
    sort: "2026-02-18",
    description:
      "As a student coordinator of CyberShadez 2026, I managed the Track 3 events, which had more than 300 students taking part. The flagship event, Rise of Agent, introduced students to practical automation with n8n.",
    redacted: "My student enrolment number is covered.",
  },
  {
    slug: "echo-2025-appreciation",
    type: "appreciation",
    title: "Appreciation for Your Efforts in Coordinating ECHO",
    shortTitle: "ECHO appreciation",
    issuer: "GLS University, Faculty of Engineering and Technology",
    dates: "1st March 2025",
    when: "Mar 2025",
    sort: "2025-03-01",
    description:
      "I coordinated ECHO, the first literary event of the Ink and Imagination club at the Faculty of Engineering and Technology, GLS University. This letter thanks me for leading it from the first idea to the event itself.",
  },
  {
    slug: "gls-student-appreciation-2026",
    type: "appreciation",
    title: "Certificate of Appreciation",
    shortTitle: "GLS University student appreciation",
    issuer: "GLS University",
    dates: "21st February 2026",
    when: "Feb 2026",
    sort: "2026-02-21",
    description:
      "GLS University gave me this certificate on 21 February 2026, in recognition of outstanding performance and exemplary dedication as a student of the university.",
  },
  {
    slug: "coastscan-founder-2026",
    type: "appreciation",
    title: "Certificate of Appreciation, founder of CoastScan",
    shortTitle: "CoastScan founder certificate",
    issuer: "SSIP GLS University Incubation Centre, GLS University",
    dates: "27th March, 2026",
    when: "Mar 2026",
    sort: "2026-03-27",
    description:
      "The SSIP GLS University Incubation Centre recognised me as a founder of CoastScan on 27 March 2026. The certificate is for outstanding innovation, entrepreneurial excellence and a promising startup idea.",
    related: { project: "coast-scan", label: "Coast Scan, the project" },
  },
  {
    slug: "gls-startup-nexus-2026",
    type: "appreciation",
    title: "Certificate of Appreciation, for participating in the GLS Startup Nexus",
    shortTitle: "GLS Startup Nexus",
    issuer: "SSIP GLS University Incubation Centre, GLS University",
    dates: "27th March, 2026",
    when: "Mar 2026",
    sort: "2026-03-27",
    description:
      "I presented CoastScan at the GLS Startup Nexus. This certificate, dated 27 March 2026, thanks me for presenting our startup and for contributing to a culture of innovation.",
    related: { project: "coast-scan", label: "Coast Scan, the project" },
  },

  // ------------------------------------------------------------------ Membership
  {
    slug: "ieee-membership-2026",
    type: "membership",
    title: "2026 Certificate of IEEE Membership",
    shortTitle: "IEEE Student Member",
    issuer: "IEEE",
    dates: "2026, in good standing through December 2026",
    when: "2026",
    sort: "2026-01-01",
    description:
      "IEEE recognises me as a Student Member in good standing through December 2026. The certificate notes a personal and professional commitment to the advancement of technology.",
  },

  // ------------------------------------------------------------------ Press
  {
    slug: "ahmedabad-mirror-sih-2025",
    type: "press",
    title: "GLS Univ clinches gold at Smart India Hackathon '25",
    shortTitle: "Ahmedabad Mirror, SIH 2025 win",
    issuer: "Ahmedabad Mirror",
    dates: "",
    when: "Dec 2025",
    sort: "2025-12-13",
    description:
      "Ahmedabad Mirror wrote about our Smart India Hackathon 2025 win in Chennai, which came with a cash prize of Rs 1.5 lakh. The story explains how Coast Scan replaces slow manual sediment analysis with an instant, automated scan, for a challenge from the Ministry of Earth Sciences and the National Centre for Coastal Research.",
    related: { project: "coast-scan", label: "Coast Scan, the project in the story" },
    imageNote: "The picture shows the story itself, cropped from the newspaper clipping.",
    win: "sih",
  },
  {
    slug: "gls-voice-isro-feature-2026",
    type: "press",
    title: "From Classroom to ISRO: A Remarkable Student Achievement",
    shortTitle: "GLS Voice, ISRO internship feature",
    issuer: "GLS Voice, Gujarat Law Society",
    dates: "July-August 2026",
    when: "Jul 2026",
    sort: "2026-08-15",
    description:
      "GLS Voice, the Gujarat Law Society magazine, wrote about my selection for an internship at the Indian Space Research Organisation, Ahmedabad, in its July-August 2026 issue. The story is on page 10.",
    related: { section: "/#experience", label: "My ISRO internship" },
    imageNote: "The picture and the PDF show only the story from page 10.",
  },

  // ------------------------------------------------------------------ Photos
  {
    slug: "sih-2025-grand-finale-photo",
    type: "photo",
    title: "Smart India Hackathon 2025, Grand Finale",
    shortTitle: "SIH 2025 Grand Finale photo",
    issuer: "Smart India Hackathon 2025",
    dates: "12.12.2025, on the winner's cheque",
    when: "Dec 2025",
    sort: "2025-12-12",
    description:
      "Our team at the Smart India Hackathon 2025 Grand Finale, with the winner's cheque and our Winner trophies. The cheque is dated 12.12.2025.",
    alt: "The Coast Scan team at the Smart India Hackathon 2025 Grand Finale, holding the winner's cheque and trophies in front of the SIH 2025 stage",
    related: { project: "coast-scan", label: "Coast Scan, the project that won" },
    win: "sih",
    photo: true,
  },
  {
    slug: "vikas-saptah-2025-team-photo",
    type: "photo",
    title: "SSIP Vikas Saptah Hackathon 2025",
    shortTitle: "Vikas Saptah Hackathon 2025 photo",
    issuer: "SSIP 2.0 Vikas Saptah Hackathon 2025",
    dates: "",
    when: "Oct 2025",
    sort: "2025-10-14",
    description:
      "Our team at the Vikas Saptah Hackathon 2025, each of us holding our SSIP 2.0 certificate.",
    alt: "The Urja Setu team at the Vikas Saptah Hackathon 2025, standing in a row and holding their SSIP 2.0 certificates",
    related: { project: "urja-setu", label: "Urja Setu, the project we built" },
    win: "vikas",
    photo: true,
  },
  {
    slug: "youth-festival-2026-trophies-photo",
    type: "photo",
    title: "Narrative Youth Festival 2026 trophies",
    shortTitle: "Youth Festival 2026 trophies",
    issuer: "GLS University",
    dates: "",
    when: "2026",
    sort: "2026-03-01",
    description:
      "Me with the trophies from the GLS University Narrative Youth Festival 2026, including the Overall Championship in Techno Games and first position in 404: Treasure Not Found.",
    alt: "Yash Shah standing beside a glass table of trophies from the GLS University Narrative Youth Festival 2026",
    related: { section: "/#achievements", label: "My wins and recognition" },
    win: "techno",
    photo: true,
  },
];

const typeOrder = Object.fromEntries(documentTypes.map((t, i) => [t.id, i]));

export const documents = raw
  .map((d) => ({
    ...d,
    url: `/certificates/${d.slug}`,
    image: `/certificates/images/${d.slug}.webp`,
    thumb: `/certificates/images/${d.slug}-thumb.webp`, // 960 px, sharp on retina screens
    thumbSmall: `/certificates/images/${d.slug}-thumb-sm.webp`, // 480 px, for small cards
    share: `/certificates/images/${d.slug}-share.jpg`,
    file: d.photo ? `/certificates/files/${d.slug}.jpg` : `/certificates/files/${d.slug}.pdf`,
    alt: d.alt || `${d.shortTitle}, ${d.photo ? "photo" : "certificate"} for Yash Shah`,
  }))
  // Grouped by type, pinned first, then newest first inside each type
  .sort((a, b) => typeOrder[a.type] - typeOrder[b.type] || (b.pin ? 1 : 0) - (a.pin ? 1 : 0) || b.sort.localeCompare(a.sort));

export const docBySlug = Object.fromEntries(documents.map((d) => [d.slug, d]));

/** Look up one document by slug, and fail the build if it does not exist. */
export function doc(slug) {
  const d = docBySlug[slug];
  if (!d) throw new Error(`No document with slug "${slug}" in src/data/documents.js`);
  return d;
}

/** Every document linked to a win, an experience entry or a project. */
export const docsFor = {
  win: (id) => documents.filter((d) => d.win === id),
  experience: (id) => documents.find((d) => d.experience === id),
  project: (slug) => documents.filter((d) => d.related && d.related.project === slug),
};
