// All the words on the website live in this file.
// To change the site, edit the text here and push. The pages read from it.
// House rules for copy: simple first-person English, no em dashes, no semicolons,
// no phone number, no home address, no date of birth, no teammate names.

export const site = {
  name: "Yash Shah",
  url: "https://www.yashshah.co.in",
  title: "Yash Shah | AI/ML Engineer and Researcher",
  description:
    "I'm Yash Shah, an AI/ML engineer and researcher from Ahmedabad. I was an AI/ML Research Intern at ISRO, I'm a National Winner at Smart India Hackathon 2025, Hardware Edition, and I co-authored two papers accepted by Springer Nature journals.",
  email: "work.yash15@gmail.com",
  linkedin: "https://www.linkedin.com/in/simplyyash",
  github: "https://github.com/Yash-158",
  resume: "/resume/yash-shah-resume.pdf",
  location: "Ahmedabad, India. IST, UTC+5:30.",
  tagline: "Building AI for real-world data.",
  availability: "Final year at GLS University, and open to internships from January to July 2027.",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/#research" },
  { label: "Experience", href: "/#experience" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  lines: ["AI/ML", "Engineer &", "researcher"],
  intro:
    "I build AI for real-world data, from marsquake signals on Mars to photos of sand on Indian beaches, and I take it all the way to working products.",
  photoAlt: "Yash Shah in a dark blazer and light blue shirt, smiling",
  oval: ["From Mars to", "the shoreline"],
  stickers: {
    isro: "AI/ML Research Intern, ISRO",
    sih: { title: "National Winner", text: "Smart India Hackathon 2025, Hardware Edition" },
    papers: { title: "2 papers accepted", text: "Springer Nature journals" },
  },
};

export const about = {
  // [text, underlined?] pairs, so the highlighted phrases stay easy to edit
  paragraph: [
    ["I'm a final-year Computer Science engineer from Ahmedabad. I was an ", false],
    ["AI/ML Research Intern at ISRO", true],
    [", I'm a ", false],
    ["National Winner at Smart India Hackathon 2025, Hardware Edition", true],
    [", and I co-authored ", false],
    ["two papers accepted by Springer Nature journals", true],
    [".", false],
  ],
  badge: ["Open to", "internships", "Jan to Jul 2027"],
};

export const stats = [
  { value: "02", label: "Papers accepted by Springer Nature" },
  { value: "05", label: "Internships, including ISRO" },
  { value: "68,766", label: "Teams at SIH 2025, where we won" },
  { value: "03", label: "Design patents filed" },
];

export const services = [
  {
    tone: "blue",
    icon: "wave",
    title: "AI and Machine Learning Research",
    sub: "Deep learning for scientific data.",
    items: ["Deep learning with PyTorch", "Fourier Neural Operators", "Computer vision with YOLOv8", "Seismic data with ObsPy and SeisBench"],
  },
  {
    tone: "periwinkle",
    icon: "code",
    title: "Backend and Full-Stack Development",
    sub: "Systems that keep running.",
    items: ["Django, DRF and FastAPI", "React and TypeScript", "Real-time apps with WebSockets", "AWS, Docker and GitHub Actions"],
  },
  {
    tone: "lavender",
    icon: "chip",
    title: "Hardware and IoT",
    sub: "Ideas you can hold in your hand.",
    items: ["Raspberry Pi devices", "ESP32 and sensor integration", "Image processing on the device", "Product enclosure design"],
  },
];

export const papers = [
  {
    venue: "Springer Nature,",
    journal: "Education and Information Technologies",
    title: "Frequency-Family Classification of Marsquakes from Spectrograms with a Hybrid Convolutional and Fourier Neural Operator",
    authors: [["Yash Shah", true, " (first author)"], ["Anvi Panchal", false], ["Madhuri Chopade", false]],
    status: "Accepted for publication.",
    text: "To our knowledge, the first supervised model that sorts marsquakes into all six Marsquake Service event types, using NASA InSight data from my ISRO internship.",
    link: "https://link.springer.com/journal/10639",
    doc: "icishct-2026-paper-presentation", // presented at ICISHCT-2026
    card: { tone: "navy", tilt: -6, eyebrow: "Held-out test set", value: "99.50%", caption: "frequency-family accuracy, and 79.60% across all six types" },
  },
  {
    venue: "Springer Nature,",
    journal: "Cureus Journal of AI-Augmented Research",
    title: "Marsquake Detection from Raw InSight Waveforms with a Hybrid Convolutional and Fourier Neural Operator",
    authors: [["Anvi Panchal", false], ["Yash Shah", true], ["Madhuri Chopade", false]],
    status: "Accepted for publication.",
    text: "A hybrid model that finds marsquakes directly in raw seismometer waveforms, without hand-made features.",
    link: "https://www.cureusjournals.com/journal/ai-augmented-research",
    card: { tone: "white", tilt: 5, eyebrow: "Held-out test set", value: "95.20%", caption: "ROC-AUC, and 83.88% on 751 external MarsQuakeNet clips" },
  },
];
export const thirdPaper = "A third paper is in progress.";

// "Intellectual Property" on the home page, straight after Published research. The same facts as Anvi's site.
// Say "design patent" only, never "application", and show no application numbers.
// `accepted` gives the row the accent badge. `doc` adds the "View acceptance status" link.
export const ip = {
  title: "Intellectual Property",
  intro: "Three design patents filed with the Indian Patent Office, one accepted for registration and two under examination.",
  designs: [
    { name: "Portable Soil Moisture Meter", status: "Accepted for registration", accepted: true, note: "Certificate in progress", doc: "soil-moisture-meter-design-2026", linkText: "View acceptance status" },
    { name: "Compact Soil Moisture Monitoring Device", status: "Under examination" },
    { name: "Portable Sediment Grain Size Analysis Device (Coast Scan)", status: "Under examination" },
  ],
};

// ---------------------------------------------------------------------------
// Projects. The first four are the big rows on the home page.
// Every project with `sections` gets its own page at /projects/<slug>.
// ---------------------------------------------------------------------------
// The signed lab report is now a certificate page on this site (it replaced a Google Drive link).
const LAB_REPORT = "/certificates/coast-scan-lab-report-2025";

export const projects = [
  {
    slug: "coast-scan",
    name: "Coast Scan",
    featured: true,
    category: "Hardware and computer vision",
    period: "Sep to Dec 2025",
    summary:
      "A handheld device that photographs beach sand and reports grain size and sediment type in seconds, instead of days in a lab. It is incubated at GLS LEAF.",
    lead: "A handheld device that analyses beach sand in seconds, instead of days in a lab.",
    badge: "National Winner, Smart India Hackathon 2025, Hardware Edition",
    stackShort: "Python, OpenCV, CNNs, Raspberry Pi, Django, AWS",
    stack: ["Python", "OpenCV", "NumPy", "CNNs", "Raspberry Pi", "IoT sensors", "Django", "AWS"],
    metric: { tone: "blue", tilt: -7, eyebrow: "Validated in a civil engineering lab", value: "98%", caption: "agreement with sieve analysis on D50 grain size" },
    homeLinks: [{ label: "Lab report", href: LAB_REPORT }],
    links: [{ label: "Read the lab report", href: LAB_REPORT, primary: true }],
    hero: { kind: "grains", caption: "How the device sees sand. Each grain is outlined and measured.", note: "Illustration" },
    heroStickers: { award: ["National Winner", "Smart India Hackathon 2025, Hardware Edition"], stat: ["98%", "match with lab sieve analysis"] },
    facts: [
      ["Timeline", "Sep to Dec 2025"],
      ["Team", "6 people"],
      ["Result", "National Winner, Smart India Hackathon 2025, Hardware Edition"],
      ["Now", "Incubated at GLS LEAF"],
    ],
    sections: [
      {
        kind: "text",
        eyebrow: "The problem",
        title: "Sand tells you a lot about a coast. Measuring it takes days.",
        paras: [
          "Grain size is one of the first things coastal researchers measure. It shows how a beach is changing, where erosion is happening and what kind of sediment is moving.",
          "Today this is done with sieve analysis. A sample is dried, shaken through a stack of sieves and weighed by hand, which takes days of lab work for every sample.",
          "Our problem statement came from the Ministry of Earth Sciences and the National Centre for Coastal Research. They wanted a faster way to get the same answer in the field.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "What we built",
        title: "A small lab you can carry to the beach.",
        intro:
          "Coast Scan is a low-cost handheld device. You put a sand sample inside, and it photographs the grains, measures them and sorts the sediment, then shows the result on a dashboard along with environmental readings.",
        cards: [
          { icon: "cube", title: "Black chamber", text: "A closed chamber with its own light, so every photo is taken in the same conditions, on the beach or in a lab." },
          { icon: "camera", title: "Camera and sensors", text: "A Raspberry Pi camera captures the grains, and onboard sensors record the conditions around the sample." },
          { icon: "chart", title: "Live dashboard", text: "Results appear on a web dashboard with the grain size distribution, the sediment type and the sensor readings." },
        ],
      },
      {
        kind: "steps",
        id: "how",
        eyebrow: "How it works",
        title: "From a handful of sand to a report.",
        steps: [
          { title: "Capture", text: "The camera takes a close-up photo of the sample inside the chamber." },
          { title: "Isolate the grains", text: "Thresholding, contour detection and morphological operations separate each grain from the rest." },
          { title: "Measure", text: "The device works out the grain size distribution, the D50 grain size and the sediment type. We also tested CNN models for grain recognition." },
          { title: "Report", text: "A Django dashboard on AWS turns the numbers into a report you can read and share." },
        ],
      },
      {
        kind: "results",
        eyebrow: "Results",
        title: "We checked it against the real lab method.",
        items: [
          { style: "solid", value: "98%", text: "agreement with lab sieve analysis on the D50 grain size" },
          { style: "glass", value: "Days to seconds", text: "A report that used to need days of manual lab work is now generated automatically." },
          {
            style: "glass",
            text: "Validated in the Civil Engineering laboratory at Sri Sairam Engineering College. The lab report is signed and stamped by the head of the department.",
            link: { label: "Open the lab report", href: LAB_REPORT },
          },
        ],
      },
      {
        kind: "list",
        eyebrow: "Where it went",
        title: "From a hackathon idea to an incubated product.",
        items: [
          ["National Winner, Smart India Hackathon 2025, Hardware Edition.", "Selected from 68,766 teams, and the only team from Gujarat among the winners."],
          ["Design patent filed.", "\"Portable Sediment Grain Size Analysis Device\", filed with the Indian Patent Office, under examination."],
          ["Incubated at GLS LEAF.", "The incubation centre at GLS University."],
          ["Pitched at the IDE Bootcamp, Edition 3, Phase 1.", "Run by the Ministry of Education's Innovation Cell and AICTE at GITAM Bengaluru."],
          ["Featured in Ahmedabad Mirror.", "A story on our national win."],
        ],
      },
    ],
  },
  {
    slug: "edubridge-ai",
    name: "EduBridge AI",
    featured: true,
    category: "AI and full-stack",
    period: "Jul to Aug 2026",
    summary:
      "It listens to a live English lecture and explains it in the student's own language, at their level, while the lecture is still going on.",
    lead: "Live English lectures, explained in the student's own language while the lecture is still going on.",
    badge: "5th Place, TetraTHON 2026, Indo-French AI Innovation Sprint",
    stackShort: "React 19, TypeScript, Node.js, Fastify, WebSockets, LLMs, AWS Lightsail",
    stack: ["React 19", "TypeScript", "Node.js", "Fastify", "WebSockets", "Speech recognition", "LLMs", "AWS Lightsail"],
    metric: { tone: "navy", tilt: 6, eyebrow: "Built to stay up during a lecture", value: "175", caption: "automated tests, with automatic failover between AI providers" },
    homeNote: "5th Place, 5th of 44 finalist teams, at TetraTHON 2026, Indo-French AI Innovation Sprint.",
    hero: { kind: "metric" },
    heroStickers: { award: ["5th Place", "TetraTHON 2026, Indo-French AI Innovation Sprint"], stat: ["44", "finalist teams in the final round"] },
    facts: [
      ["Timeline", "Jul to Aug 2026"],
      ["Event", "TetraTHON 2026, Indo-French AI Innovation Sprint"],
      ["Result", "5th Place, 5th of 44 finalist teams"],
      ["Tests", "155 unit and 20 end-to-end"],
    ],
    sections: [
      {
        kind: "text",
        eyebrow: "The problem",
        title: "Missing one word can cost the next half minute.",
        paras: [
          "Research on second-language comprehension suggests that a person needs to know about 98% of the words to follow comfortably. In a fast technical lecture, many students in English-medium colleges fall short of that.",
          "The damage is not the one word. A student stops to decode an unfamiliar term and loses what the teacher said next, and this keeps adding up through the lecture.",
          "Translation alone does not fix it, because a hard technical term is just as hard in Hindi. What helps is an explanation at the right level, at the moment it is needed.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "What we built",
        title: "One button, and the lecture appears in your language.",
        intro:
          "There is no account, no login and no setup form. The student presses one button, and EduBridge AI shows the lecture in English and in their own language side by side.",
        cards: [
          { icon: "mic", title: "Three ways in", text: "A live microphone, a shared browser tab or an uploaded recording, all handled by the same pipeline." },
          { icon: "columns", title: "Two aligned columns", text: "Verbatim English on one side and the student's language on the other, aligned paragraph by paragraph." },
          { icon: "tap", title: "Tappable terms", text: "Technical terms stay in English, as in exams and textbooks. Tapping one explains it in both languages." },
          { icon: "help", title: "An \"I'm lost\" button", text: "It summarises the last 90 seconds in three points without pausing the lecture." },
        ],
      },
      {
        kind: "steps",
        eyebrow: "How it works",
        title: "From sound to a simpler explanation, as the lecture goes on.",
        steps: [
          { title: "Capture", text: "The browser records audio, cuts it into short pieces at natural pauses and streams them over WebSockets." },
          { title: "Transcribe", text: "A speech recognition model turns each piece into English text." },
          { title: "Find the hard words", text: "Technical terms are detected on the server, and the subject is inferred from the terms heard so far." },
          { title: "Explain", text: "A language model rewrites the lecture in the student's language, at a level inferred from how they use the app." },
        ],
      },
      {
        kind: "results",
        eyebrow: "Results",
        title: "Built to keep working in a real classroom.",
        items: [
          { style: "solid", value: "175", text: "automated tests, 155 unit tests and 20 end-to-end browser tests" },
          { style: "glass", value: "3 providers", text: "Speech and language models are routed across Sarvam, Groq and Cerebras, with automatic failover if one goes down." },
          { style: "glass", value: "5th of 44", text: "5th Place, 5th of 44 finalist teams, at TetraTHON 2026, Indo-French AI Innovation Sprint." },
        ],
      },
      {
        kind: "list",
        eyebrow: "Recognition",
        title: "Built during a 36-hour sprint.",
        items: [
          ["5th Place, 5th of 44 finalist teams.", "TetraTHON 2026, Indo-French AI Innovation Sprint, a 36-hour sprint at Navrachana University with ISEN Méditerranée in France, under the IndiaAI Mission."],
          ["Selected from the earlier round.", "Our selection-round project was StudySetu, an adaptive revision platform."],
        ],
      },
    ],
  },
  {
    slug: "urja-setu",
    name: "Urja Setu",
    featured: true,
    category: "Computer vision and backend",
    period: "Sep to Oct 2025",
    summary:
      "Citizens report an electrical hazard with one photo. The model works out what is in it and sends a prioritised ticket to the right technician, for a problem statement from GUVNL, Gujarat's power utility.",
    lead: "Report an electrical hazard with one photo, and the right technician gets a prioritised ticket.",
    badge: "Top 50, out of 4,000+ teams, SSIP Vikas Saptah Hackathon 2025",
    stackShort: "Python, YOLOv8, PyTorch, Django REST Framework, Flutter, React",
    stack: ["Python", "YOLOv8", "PyTorch", "Django REST Framework", "Flutter", "React", "OpenStreetMap"],
    metric: { tone: "white", tilt: -5, eyebrow: "Fine-tuned YOLOv8s model", value: "7", caption: "classes detected, from poles and transformers to vegetation overgrowth" },
    homeLinks: [{ label: "Backend code on GitHub", href: "https://github.com/Yash-158/Urja-Setu", circle: true }],
    links: [{ label: "Backend code on GitHub", href: "https://github.com/Yash-158/Urja-Setu", primary: true }],
    hero: { kind: "image", src: "/images/projects/urja-setu-dashboard.webp", alt: "Urja Setu admin dashboard with a map of unresolved hazard reports across Ahmedabad", caption: "The admin dashboard, with a map of unresolved reports." },
    heroStickers: { award: ["Top 50", "SSIP Vikas Saptah Hackathon 2025"], stat: ["4,000+", "teams in the hackathon"] },
    facts: [
      ["Timeline", "Sep to Oct 2025"],
      ["Team", "6 people"],
      ["Result", "Top 50, out of 4,000+ teams"],
      ["For", "GUVNL, Gujarat"],
    ],
    sections: [
      {
        kind: "text",
        eyebrow: "The problem",
        title: "A sparking transformer should not wait in a queue.",
        paras: [
          "Broken poles, low wires and sparking transformers are dangerous, and every report has to reach the right technician quickly.",
          "Our problem statement came from Gujarat Urja Vikas Nigam Ltd (GUVNL), Gujarat's power utility, at the SSIP Vikas Saptah Hackathon 2025. It asked for a better way to collect public feedback on power utility systems.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "What we built",
        title: "Three apps around one smart backend.",
        intro:
          "Urja Setu has a citizen app for reporting, a dashboard for technicians and administrators, and a Django REST backend that looks at every photo before a person does.",
        cards: [
          { icon: "phone", title: "Citizen app", text: "A citizen takes a photo, adds a short description and an address, and sends the report." },
          { icon: "map", title: "Technician dashboard", text: "Technicians see their assigned reports, and administrators see every open report on a map." },
          { icon: "eye", title: "Detection model", text: "A fine-tuned YOLOv8s model identifies the electrical asset in the photo and sets the ticket's priority." },
        ],
      },
      {
        kind: "steps",
        eyebrow: "How it works",
        title: "From a photo to the right person.",
        steps: [
          { title: "Report", text: "The citizen uploads a photo and an address. The address is turned into map coordinates with OpenStreetMap." },
          { title: "Detect", text: "The model finds what is in the photo, across 7 classes from poles and transformers to vegetation overgrowth." },
          { title: "Prioritise", text: "The backend sets the ticket's priority from what was detected and how severe it looks." },
          { title: "Assign", text: "The ticket goes to a technician, who updates it until the hazard is fixed." },
        ],
      },
      {
        kind: "gallery",
        eyebrow: "Screens",
        title: "What it looks like.",
        images: [
          { src: "/images/projects/urja-setu-dashboard.webp", alt: "Admin dashboard with a map of unresolved reports", caption: "Admin dashboard with the map of unresolved reports." },
          { src: "/images/projects/urja-setu-citizen.webp", alt: "Citizen portal listing submitted hazard reports with their status", caption: "Citizen portal, with each report and its status." },
          { src: "/images/projects/urja-setu-technician.webp", alt: "Technician portal listing the reports assigned to a technician", caption: "Technician portal, with the reports assigned to one technician." },
        ],
      },
      {
        kind: "list",
        eyebrow: "Recognition",
        title: "Top 50, out of 4,000+ teams.",
        items: [
          ["SSIP Vikas Saptah Hackathon 2025.", "The 6th edition, run by the Gujarat Knowledge Society under SSIP Gujarat at PDEU, Gandhinagar."],
          ["A real problem statement.", "Set by GUVNL, Gujarat's power utility."],
        ],
      },
    ],
  },
  {
    slug: "bitekaro",
    name: "BiteKaro",
    featured: true,
    category: "Machine learning and full-stack",
    period: "Jul 2025 to Apr 2026",
    summary:
      "A self-ordering cafe kiosk with Razorpay payments and live order updates. Its recommender combines Apriori rules, SVD collaborative filtering and time-of-day popularity.",
    lead: "A self-ordering cafe kiosk that suggests what you might want next.",
    stackShort: "FastAPI, scikit-learn, Node.js, Socket.io, PostgreSQL, Tailwind CSS",
    stack: ["Python", "FastAPI", "scikit-learn", "Node.js", "Express", "Socket.io", "PostgreSQL", "Razorpay", "Tailwind CSS"],
    metric: { tone: "blue", tilt: 6, eyebrow: "Capstone project score", value: "99/100", caption: "for a kiosk with a hybrid menu recommender" },
    homeLinks: [{ label: "Code on GitHub", href: "https://github.com/Yash-158/capstone-bitekaro-final", circle: true }],
    links: [{ label: "Code on GitHub", href: "https://github.com/Yash-158/capstone-bitekaro-final", primary: true }],
    hero: { kind: "metric" },
    heroStickers: { award: ["Capstone I and II", "Semesters 5 and 6"], stat: ["3", "recommendation methods combined"] },
    facts: [
      ["Timeline", "Jul 2025 to Apr 2026"],
      ["Type", "Capstone Project I and II"],
      ["Score", "99/100"],
      ["Parts", "Kiosk, admin and recommender"],
    ],
    sections: [
      {
        kind: "text",
        eyebrow: "The idea",
        title: "A kiosk that knows what goes well together.",
        paras: [
          "BiteKaro is a self-ordering kiosk for a cafe. Customers browse the menu, pay and track their order on the screen, while the cafe manages everything from an admin dashboard.",
          "We wanted the kiosk to do what a good waiter does, which is to suggest something that fits the order and the time of day.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "What we built",
        title: "Everything a small cafe needs on one screen.",
        cards: [
          { icon: "cart", title: "Ordering kiosk", text: "Menu, cart, Razorpay payments and loyalty features, built for a touch screen." },
          { icon: "chart", title: "Admin dashboard", text: "The cafe manages the menu, orders, customers and analytics in one place." },
          { icon: "bolt", title: "Live order updates", text: "Order status updates arrive in real time through Socket.io." },
        ],
      },
      {
        kind: "steps",
        eyebrow: "How the recommender works",
        title: "Three methods, blended into one suggestion.",
        steps: [
          { title: "Bought together", text: "Apriori association rules find items that are often ordered together." },
          { title: "People like you", text: "SVD collaborative filtering learns taste patterns from past orders." },
          { title: "Right now", text: "A time-of-day popularity baseline brings up what sells best at this hour." },
          { title: "Tested", text: "Training and evaluation scripts check the recommender against held-out orders." },
        ],
      },
      {
        kind: "list",
        eyebrow: "Notes",
        title: "What it was trained on.",
        items: [
          ["Public data.", "The recommender was trained on a public bakery transactions dataset, remapped to an Indian cafe menu."],
          ["Capstone score of 99/100.", "Evaluated as Capstone Project I and II across Semesters 5 and 6 at GLS University."],
        ],
      },
    ],
  },
  {
    slug: "studysetu",
    name: "StudySetu",
    category: "AI and education",
    period: "TetraTHON 2026, Indo-French AI Innovation Sprint, selection round",
    summary:
      "A prototype that finds the concepts a student missed after a lecture and builds a short revision session, with a teacher approving every AI-generated item.",
    lead: "A prototype that finds what each student missed after a lecture, and builds a short revision session around it.",
    stack: ["React 18", "TypeScript", "Vite", "FastAPI", "PostgreSQL", "pgvector", "Docker", "GitHub Actions"],
    metric: { tone: "white", tilt: -5, eyebrow: "One AI gateway", value: "4", caption: "AI providers behind it, with automatic failover" },
    links: [{ label: "Code on GitHub", href: "https://github.com/Yash-158/studysetu", primary: true }],
    hero: { kind: "image", src: "/images/projects/studysetu-diagnostic.webp", alt: "StudySetu review screen after a diagnostic quiz, showing chosen and correct answers with reasoning", caption: "The review screen after a five-question diagnostic." },
    facts: [
      ["Event", "TetraTHON 2026, Indo-French AI Innovation Sprint"],
      ["Stage", "Selection-round project"],
      ["Status", "Working prototype"],
      ["Users", "Students, teachers, admins"],
    ],
    sections: [
      {
        kind: "text",
        eyebrow: "The idea",
        title: "The teacher teaches. StudySetu checks that it stuck.",
        paras: [
          "StudySetu is a revision companion, not a replacement for the teacher. Teachers build the curriculum, and their own material grounds everything the system produces.",
          "AI writes the questions and lessons, and no AI-generated item reaches a student until a teacher approves it.",
        ],
      },
      {
        kind: "steps",
        eyebrow: "How it works",
        title: "Diagnose first, then revise.",
        steps: [
          { title: "Diagnose", text: "The first time a student opens a topic, a five-question probe checks what they already know." },
          { title: "Track mastery", text: "Bayesian Knowledge Tracing, a simple statistical model of whether a skill is learned, updates after every answer." },
          { title: "Revise", text: "A short session is built from what the probe found, with a doubt chat grounded in the lesson itself." },
          { title: "Review", text: "Teachers approve AI content and see which misconceptions are common across the class." },
        ],
      },
      {
        kind: "gallery",
        eyebrow: "Screens",
        title: "Built for three kinds of users.",
        images: [
          { src: "/images/projects/studysetu-analytics.webp", alt: "Teacher analytics showing average mastery, completion and misconceptions per topic", caption: "Teacher analytics, with mastery and misconceptions per topic." },
          { src: "/images/projects/studysetu-lesson.webp", alt: "A personalised lesson card with a doubt chat box below it", caption: "A personalised lesson, with the doubt chat underneath." },
        ],
      },
      {
        kind: "list",
        eyebrow: "Engineering",
        title: "How it is built.",
        items: [
          ["One AI gateway.", "Every AI call goes through one gateway with automatic failover across four providers."],
          ["Safe deployments.", "Docker Compose and a GitHub Actions pipeline that rolls back a failed deployment."],
          ["Prototype stage.", "It was built for a hackathon round and is not a finished product."],
        ],
      },
    ],
  },
  {
    slug: "omni-terminal",
    name: "The Omni-Terminal",
    category: "Hardware and product design",
    period: "Own hardware project",
    summary:
      "A Raspberry Pi 5 desk hub for smart home control, media and a live dashboard, in a 3D-printed case refined over five versions.",
    lead: "A Raspberry Pi 5 desk hub for smart home control, music and an always-on dashboard, in a custom 3D-printed case.",
    stack: ["Raspberry Pi 5", "Python", "7-inch touchscreen", "3D design", "3D printing"],
    metric: { tone: "blue", tilt: 5, eyebrow: "Custom enclosure", value: "5", caption: "versions of the case before the final design" },
    links: [{ label: "Photos and write-up on GitHub", href: "https://github.com/Yash-158/Raspberry-pi-5-Mini-Computer", primary: true }],
    hero: { kind: "image", src: "/images/projects/omni-terminal-desk.webp", alt: "The Omni-Terminal on a desk, a white and red 3D-printed case holding a Raspberry Pi 5 next to a 7-inch screen", caption: "The finished Omni-Terminal on a desk.", portrait: true },
    facts: [
      ["Board", "Raspberry Pi 5"],
      ["Screen", "7-inch touchscreen"],
      ["Case", "3D printed, 5 versions"],
      ["Type", "Own hardware project"],
    ],
    sections: [
      {
        kind: "cards",
        eyebrow: "What it does",
        title: "One small screen that runs the desk.",
        cards: [
          { icon: "home", title: "Smart home hub", text: "Lights, plugs and sensors are controlled from the touchscreen." },
          { icon: "music", title: "Media station", text: "Music controls sit on their own screen, so the main PC stays free for work." },
          { icon: "clock", title: "Info deck", text: "An always-on dashboard shows the time, weather, calendar and system stats." },
          { icon: "screen", title: "Second screen", text: "The touchscreen also works as a secondary monitor for the main PC." },
        ],
      },
      {
        kind: "text",
        eyebrow: "The design",
        title: "Designed from scratch, not downloaded.",
        paras: [
          "The enclosure went through five versions to balance looks and function. It is made to fit the Raspberry Pi 5 and the official 7-inch touchscreen.",
          "A cooling casing directs air over the Pi's active cooler, and the ports and GPIO pins stay easy to reach.",
        ],
      },
      {
        kind: "gallery",
        eyebrow: "Photos",
        title: "From print bed to desk.",
        portrait: true,
        images: [
          { src: "/images/projects/omni-terminal-case.webp", alt: "Hand holding the 3D-printed Raspberry Pi case", caption: "The case, with the ports open at the side." },
          { src: "/images/projects/omni-terminal-clock.webp", alt: "The Omni-Terminal screen showing a large clock", caption: "The always-on clock and dashboard." },
          { src: "/images/projects/omni-terminal-print.webp", alt: "A red 3D-printed part of the enclosure", caption: "One of the 3D-printed parts of the enclosure." },
        ],
      },
    ],
  },
  {
    slug: "commently",
    name: "Commently",
    category: "AI and browser extension",
    period: "Jun to Jul 2025",
    summary:
      "A Chrome extension that drafts LinkedIn comments in the tone you choose, powered by an n8n workflow and a Gemini agent.",
    lead: "A Chrome extension that drafts a LinkedIn comment in the tone you choose, right inside the feed.",
    stack: ["JavaScript", "Chrome Extension Manifest V3", "n8n", "LangChain", "Google Gemini"],
    metric: { tone: "navy", tilt: -6, eyebrow: "Tone control", value: "5", caption: "tones to choose from, with memory that avoids repeated phrasing" },
    links: [{ label: "Code on GitHub", href: "https://github.com/Yash-158/Commently", primary: true }],
    hero: { kind: "image", src: "/images/projects/commently-result.webp", alt: "Commently comment generator showing a drafted comment in a professional tone", caption: "A drafted comment, ready to copy or post.", small: true },
    facts: [
      ["Timeline", "Jun to Jul 2025"],
      ["Type", "Personal project"],
      ["Runs on", "Chrome, Manifest V3"],
      ["Backend", "n8n and Gemini"],
    ],
    sections: [
      {
        kind: "steps",
        eyebrow: "How it works",
        title: "From a post to a thoughtful reply.",
        steps: [
          { title: "A button appears", text: "A MutationObserver watches the LinkedIn feed and adds a native-looking button to each new post." },
          { title: "Pick a tone", text: "Choose professional, friendly, funny, supportive or inquisitive, and add an optional hint." },
          { title: "The agent writes", text: "An n8n workflow runs a Gemini agent that remembers your recent comments, so it does not repeat itself." },
          { title: "Review and post", text: "A structured output parser keeps the reply clean, and you copy it or post it in one click." },
        ],
      },
      {
        kind: "gallery",
        eyebrow: "Screens",
        title: "The extension and the workflow behind it.",
        images: [
          { src: "/images/projects/commently-generator.webp", alt: "Commently generator window with a tone selector", caption: "The generator, with tone control.", small: true },
          { src: "/images/projects/commently-workflow.webp", alt: "n8n workflow with a webhook, an AI agent, memory and a structured output parser", caption: "The n8n workflow, with the agent, its memory and the output parser." },
        ],
      },
    ],
  },
  {
    slug: "sky-share",
    name: "SkyShare",
    category: "Backend and web",
    period: "Personal project",
    summary: "Anonymous file sharing where every upload gets a 6-digit code and disappears after 7 days.",
    lead: "Upload a file, share a 6-digit code, and the file disappears after 7 days.",
    stack: ["Python", "Django", "JavaScript", "SQLite", "PostgreSQL-ready"],
    metric: { tone: "blue", tilt: -5, eyebrow: "No account needed", value: "6 digits", caption: "is all someone needs to download your file" },
    links: [{ label: "Code on GitHub", href: "https://github.com/Yash-158/SkyShare", primary: true }],
    hero: { kind: "image", src: "/images/projects/skyshare-home.webp", alt: "SkyShare home page with Upload and Download buttons", caption: "The home page, with upload and download." },
    facts: [
      ["Type", "Personal project"],
      ["Backend", "Python and Django"],
      ["Codes", "6 digits, unique"],
      ["Expiry", "7 days"],
    ],
    sections: [
      {
        kind: "cards",
        eyebrow: "What it does",
        title: "File sharing without the friction.",
        cards: [
          { icon: "user", title: "No sign-up", text: "Anyone can upload a file without creating an account." },
          { icon: "hash", title: "Short codes", text: "Every upload gets a unique 6-digit code, checked against existing codes before it is saved." },
          { icon: "clock", title: "Automatic expiry", text: "Each file gets an expiry time 7 days ahead, and expired files can no longer be downloaded." },
        ],
      },
      {
        kind: "gallery",
        eyebrow: "Screens",
        title: "Two screens, one code.",
        images: [{ src: "/images/projects/skyshare-download.webp", alt: "SkyShare download page with a 6-digit code entry", caption: "Downloading a file with its 6-digit code." }],
      },
    ],
  },
];

// "More things I've made": the smaller projects, shown as a grid of cards in this order.
// `page` links to the project's own page. `thumb` is an image already on the site.
// `fit: "photo"` fills the image area and crops around `focus` (CSS object-position).
// `fit: "screen"` shows a screenshot or diagram in full on a lavender panel.
export const moreProjects = [
  { name: "StudySetu", page: "studysetu", tag: "Hackathon", thumb: "/images/projects/studysetu-diagnostic.webp", fit: "screen",
    line: "Finds the concepts a student missed after a lecture and builds a short revision session." },
  { name: "The Omni-Terminal", page: "omni-terminal", tag: "Hardware", thumb: "/images/projects/omni-terminal-desk.webp", fit: "photo", focus: "50% 40%",
    line: "A Raspberry Pi 5 desk hub for smart home control, music and a live dashboard." },
  { name: "Commently", page: "commently", tag: "Browser extension", thumb: "/images/projects/commently-result.webp", fit: "screen",
    line: "A Chrome extension that drafts LinkedIn comments in the tone you choose." },
  { name: "SkyShare", page: "sky-share", tag: "Web", thumb: "/images/projects/skyshare-home.webp", fit: "screen",
    line: "Anonymous file sharing where every upload gets a 6-digit code and disappears after 7 days." },
  {
    name: "Soil moisture monitor",
    tag: "Hardware",
    icon: "chip",
    line: "An ESP32 device that beeps and lights up when a plant needs water. Both of its enclosure designs are design patents filed with the Indian Patent Office. The Portable Soil Moisture Meter design patent has been accepted for registration, with the certificate in progress, and the Compact Soil Moisture Monitoring Device design patent is under examination.",
    doc: "soil-moisture-meter-design-2026",
  },
  {
    name: "Synapse",
    tag: "Hackathon",
    icon: "code",
    line: "A hospital outpatient (OPD) management system, built at Indus Hackathon 2025, where we were offline finalists.",
    href: "https://github.com/Yash-158/Synapse",
    hrefLabel: "Code on GitHub",
    doc: "indus-hackathon-2025",
  },
  {
    name: "Learning recommender",
    tag: "Hackathon",
    icon: "chart",
    line: "An AI learning recommender with course and project suggestions and a progress roadmap, built at HackHound 3.0, where we were national finalists.",
    doc: "hackhound-3-2025",
  },
];

// The featured win. Its certificate, photo and press clipping come from documents.js (win: "sih").
export const sih = {
  id: "sih",
  pill: "December 2025, Chennai",
  title: "National Winner, Smart India Hackathon 2025, Hardware Edition",
  text: "We won the Hardware Edition Grand Finale with Coast Scan, for a problem statement from the Ministry of Earth Sciences and the National Centre for Coastal Research.",
  detail: [
    "Coast Scan is a handheld device that analyses beach sand in seconds, instead of days in a lab.",
    "We were selected from 68,766 teams, and we were the only team from Gujarat among the national winners.",
    "The prize was INR 1.5 lakh from AICTE, and the win was featured in Ahmedabad Mirror.",
  ],
  project: "coast-scan",
  stats: [
    ["68,766", "teams across India"],
    ["INR 1.5 lakh", "prize from AICTE"],
    ["Only team", "from Gujarat among the national winners"],
  ],
};

// Every other win is its own card. Clicking a card opens a panel with the detail lines,
// its photo and its certificate (both from documents.js, matched by `id`).
export const wins = [
  { id: "singapore", date: "Oct 2026", icon: "flag", title: "Selected, Singapore India Hackathon 2026", summary: "With AICTE and the Ministry of Education. The event is ongoing.",
    detail: ["Selected for the Singapore India Hackathon 2026, with AICTE and the Ministry of Education.", "The event is ongoing."] },
  { id: "patents", date: "Oct 2026", icon: "bulb", title: "Three design patents filed", summary: "Filed with the Indian Patent Office, one accepted for registration and two under examination.",
    detail: ["Three design patents filed with the Indian Patent Office, one accepted for registration and two under examination.", "One is for Coast Scan, the \"Portable Sediment Grain Size Analysis Device\".", "The other two are the two enclosure designs of our soil moisture monitor.", "The Portable Soil Moisture Meter design patent has been accepted for registration, with the certificate in progress, and the Compact Soil Moisture Monitoring Device design patent is under examination."],
    project: "coast-scan" },
  { id: "tetrathon", date: "Aug 2026", icon: "medal", title: "5th Place, TetraTHON 2026, Indo-French AI Innovation Sprint", summary: "5th of 44 finalist teams.",
    detail: ["5th Place, 5th of 44 finalist teams, at TetraTHON 2026, Indo-French AI Innovation Sprint, a 36-hour sprint.", "We built EduBridge AI, which explains a live English lecture in the student's own language."],
    project: "edubridge-ai" },
  { id: "techno", date: "2026", icon: "trophy", title: "Techno Games Champions, GLS Youth Festival 2026", summary: "1st in Treasure Hunt (404: Treasure Not Found) and 2nd in Binary Battle.",
    detail: ["Techno Games Champions at the GLS Youth Festival 2026, 1st in Treasure Hunt (404: Treasure Not Found) and 2nd in Binary Battle."] },
  { id: "vikas", date: "Oct 2025", icon: "medal", title: "Top 50, SSIP Vikas Saptah Hackathon 2025", summary: "Out of 4,000+ teams in Gujarat.",
    detail: ["Top 50, out of 4,000+ teams in Gujarat.", "We built Urja Setu for a problem statement from GUVNL, Gujarat's power utility."],
    project: "urja-setu" },
  { id: "hackhound", date: "Feb 2025", icon: "flag", title: "National Finalist, HackHound 3.0", summary: "SRM IST, Delhi NCR.",
    detail: ["National finalists at HackHound 3.0, at SRM IST, Delhi NCR.", "We built an AI learning recommender with course and project suggestions and a progress roadmap."] },
  { id: "indus", date: "Jan 2025", icon: "flag", title: "Offline Finalist, Indus Hackathon 2025", summary: "Indus University, Ahmedabad.",
    detail: ["Offline finalists at Indus Hackathon 2025, at Indus University, Ahmedabad.", "We built Synapse, a hospital outpatient (OPD) management system."] },
  { id: "sih2024", date: "Sep 2024", icon: "trophy", title: "1st Place, SIH 2024 internal round", summary: "GLS University.",
    detail: ["1st place in the GLS University internal round of Smart India Hackathon 2024."] },
];

// Press. Items with a `doc` open that document's page.
export const press = [
  { doc: "ahmedabad-mirror-sih-2025", title: "Ahmedabad Mirror", text: "On our SIH 2025 national win" },
  { doc: "gls-voice-isro-feature-2026", title: "GLS Voice", text: "On my ISRO internship, July-August 2026" },
  { title: "INICIO", text: "GLS University magazine, team feature" },
];

export const organisations = [
  "ISRO",
  "Springer Nature",
  "Smart India Hackathon",
  "AICTE",
  "TetraTHON",
  "The Line Tech",
  "Burhani IT",
  "SSIP Gujarat",
  "GLS LEAF",
];

// Internships. The "View certificate" button comes from documents.js (experience: "<id>").
// Burhani has no certificate yet, so it shows no button.
export const experience = [
  {
    id: "isro",
    featured: true,
    dates: "May 2026 to Aug 2026",
    role: "AI/ML Research Intern",
    org: "Indian Space Research Organisation (ISRO)",
    place: "Ahmedabad, on-site",
    points: [
      "Built deep learning models for planetary seismology on NASA InSight, Chandrayaan-3 ILSA and Apollo data.",
      "Ran 130+ GPU experiments.",
      "The work became two accepted papers.",
    ],
    tech: ["Deep learning", "Fourier Neural Operators", "NASA InSight", "Chandrayaan-3 ILSA", "Apollo"],
    press: "gls-voice-isro-feature-2026",
  },
  {
    id: "linetech",
    dates: "Jun 2025 to Jul 2025",
    role: "AI and Backend Engineering Intern",
    org: "The Line Tech Solutions Ltd, United Kingdom",
    place: "remote",
    points: [
      "Built Django APIs and AI agents that automate order handling.",
      "Built live financial dashboards from Tally Prime Gold data.",
    ],
    tech: ["Django", "AI agents", "Tally Prime Gold"],
  },
  {
    id: "burhani",
    dates: "Nov 2024 to Dec 2024",
    role: "Dynamics 365 CRM Functional Consultant Intern",
    org: "Burhani Managed IT Services",
    place: "Dubai, UAE, remote",
    points: [
      "Delivered an HR leave and attendance system in Dynamics 365 and Power Apps.",
      "Added geolocation check-in and automatic payroll deductions.",
    ],
    tech: ["Dynamics 365", "Power Apps"],
  },
  {
    id: "lalit",
    dates: "Jul 2024 to Aug 2024",
    role: "Microsoft Power Apps Intern",
    org: "Lalit Rakesh & Associates",
    place: "remote",
    points: [
      "Developed a role-based task management system.",
      "Tasks can be handed over during leave, and the full conversation history is kept.",
    ],
    tech: ["Microsoft Power Apps"],
    extraDoc: "lalit-rakesh-appreciation-2024",
  },
  {
    id: "hindustan",
    dates: "May 2024 to Jun 2024",
    role: "Software Development Intern",
    org: "Hindustan Platinum Pvt. Ltd.",
    place: "remote",
    points: [
      "Built a Flask system that watches networked weighing machines in real time.",
      "It emails an alert when a machine stays offline for over an hour.",
    ],
    tech: ["Python", "Flask"],
  },
];

export const education = {
  dates: "Jun 2023 to May 2027",
  role: "B.Tech in Computer Science and Engineering",
  org: "GLS University, Ahmedabad",
  text: "SGPA 8.70/10 in Semester 6.",
};

// Certificates, letters, press items and photos are in src/data/documents.js.

export const skills = [
  ["AI and machine learning", "PyTorch, TensorFlow, Keras, CNNs, Fourier Neural Operators, YOLOv8, OpenCV, scikit-learn, LangChain, NLP"],
  ["Backend", "Python, Django, DRF, FastAPI, Flask, Node.js, Express, Fastify, Celery, Kafka"],
  ["Frontend", "React, TypeScript, JavaScript, Tailwind CSS, WebSockets"],
  ["Data and cloud", "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, AWS, Docker, GitHub Actions, Linux"],
  ["Science and hardware", "NumPy, pandas, SciPy, ObsPy, SeisBench, Raspberry Pi, ESP32"],
];

export const beyondCode = [
  ["Co-founder, Ink and Imagination", ", the university literary club"],
  ["Organiser, ECHO", ", the department's first literary event, for 300+ students"],
  ["Coordinator, CyberShadez", ", a national-level technical event"],
  ["Mentor", ". Formed our SIH 2025 team across batches for the first time, and mentored junior teams through the Smart India Hackathon 2026 internal round at GLS University."],
  ["IEEE Student Member", ""],
  ["Languages", ", English, Hindi, Gujarati, and learning German"],
];

export const events = [
  ["TEDxIITGandhinagar 2025", ", The Cosmos Within"],
  ["Google Cloud Community Day", ", Gandhinagar 2025"],
  ["AWS Community Day", ", Ahmedabad 2025"],
  ["Dev-o-lution", ", GDG on Campus DAU"],
  ["GDG Cloud Gandhinagar", ", fintech event"],
  ["Prama Data, Cloud and AI Summit", ", 2024"],
];
