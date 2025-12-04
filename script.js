let typingInterval = null;
let profileInterval = null;

// --- 1. Main Function to Generate Dynamic Items ---
function generateGalleryItems(prefix, count, titleBase, category) {
  const items = {};
  const itemKeys = [];

  // Placeholder colors (Blue/Grey theme)
  const color =
    category === "Technical"
      ? "1e3a8a"
      : category === "Writing"
      ? "334155"
      : "475569";

  for (let i = 1; i <= count; i++) {
    const key = `${prefix}_${i}`;
    itemKeys.push(key);

    // Default placeholder
    let mediaArray = [
      `https://placehold.co/600x600/${color}/ffffff?text=${titleBase}+${i}`,
    ];
    let descText = `Description for ${titleBase} ${i}.`;
    let itemTitle = `${titleBase} ${i}`;
    let thumbnail = mediaArray[0];

    if (category === "Technical") {
      const techProjects = [
        // UPDATED PATHS
        {
          title: "EndavourOS Rice/Setup",
          desc: "",
          images: ["images/t23.png", "images/t24.png"],
        },
        {
          title: "Rubiks Cube Patterns",
          desc: "📁 React \n 📁 Javascript",
          images: ["images/t22.png", "images/t21.png"],
        },
        {
          title: "Student Information Management System (SIMS)",
          desc: "📅 SHS \n 📁 IDE: NetBeans 23\n📁 Build System: Java with Ant (Java Application)\n📁 Database: MySQL via XAMPP\n📁 Connector: MySQL JDBC Connector\n📁 External Library: Toeder.com Java Calendar",
          images: [
            "images/t2.png",
            "images/t1.png",
            "images/t3.png",
            "images/t4.png",
            "images/t5.png",
            "images/t6.png",
            "images/t7.png",
          ],
        },
        {
          title: "Podcast Website Platform",
          desc: "📅 Grade 9 \n 📁 Build System: HTML, CSS, JavaScript",
          images: ["images/t8.png", "images/t9.png", "images/t10.png"],
        },
        {
          title: "Voting System",
          desc: "📁Java",
          images: ["images/t13.png", "images/t14.png"],
        },
        {
          title: "Life Simulator",
          desc: "📁 Python",
          images: ["images/t15.png", "images/t16.png"],
        },
      ];
      const proj = techProjects[i - 1];
      if (proj) {
        itemTitle = proj.title;
        descText = proj.desc;
        if (proj.images && proj.images.length > 0) mediaArray = proj.images;
        thumbnail = mediaArray[0];
      }
    } else if (category === "Editing") {
      const editProjects = [
        // UPDATED PATHS
        {
          title: "21st Century Skills Video About Trece Martires ",
          desc: "📅 Grade 11\n 🎬 Alight Motion",
          video: "images/thumb1.gif",
          thumb: "images/thumb1.gif",
        },
        {
          title: "KOMPAN Video About Manuel Luis Quezon",
          desc: "📅 Grade 11\n 🎬 After Effects",
          video: "images/thumb2.gif",
          thumb: "images/thumb2.gif",
        },
        {
          title: "EMTECH Video About News Reporting",
          desc: "📅 Grade 11\n🎬 Capcut",
          video: "images/thumb3.gif",
          thumb: "images/thumb3.gif",
        },
        {
          title: "WIRCACA Vlog",
          desc: "📅 Grade 12\n 🎬 Capcut ",
          video: "images/thumb4.mp4",
          thumb: "images/thumb4.gif",
        },
        {
          title: "Simple Cooking Edit For Youtube ",
          desc: "📅 Grade 10\n 🎬 Capcut",
          video: "images/thumb5.gif",
          thumb: "images/thumb5.gif",
        },
        {
          title: "Mores (2024) Film",
          desc: "📅 Grade 11\n🎬 Capcut\n🎨 Davinci Resolve",
          video: "images/thumb6.gif",
          thumb: "images/thumb6.gif",
        },
      ];
      const proj = editProjects[i - 1];
      if (proj) {
        itemTitle = proj.title;
        descText = proj.desc;
        mediaArray = [proj.video];
        thumbnail = proj.thumb;
      }
    } else if (category === "Writing") {
      const writeProjects = [
        // UPDATED PATHS
        { title: "(Poem) Tolerance ", desc: "", image: "images/w1.png" },
        {
          title: "(Poem) Rust",
          desc: "Description for story 2.",
          image: "images/w2.png",
        },
        { title: "(Poem) Tainted Pieces", desc: "", image: "images/w3.png" },
        { title: "(Screenplay) Mores", desc: "", image: "images/w4.png" },
        {
          title: "(Screenplay) Bakit Babae ang Naghuhugas ng Pinggan?",
          desc: "This originally written by Filomena Colendrino, and I was tasked to revised it in my own version during Junior High School.",
          image: "images/w5.png",
        },
        { title: "what the sigma..", desc: "", image: "images/w6.jpg" },
      ];
      const proj = writeProjects[i - 1];
      if (proj) {
        itemTitle = proj.title;
        descText = proj.desc;
        mediaArray = [proj.image];
        thumbnail = proj.image;
      }
    }

    items[key] = {
      id: key,
      title: itemTitle,
      category: category,
      fileType: "gallery_item",
      images: mediaArray,
      image: thumbnail,
      content: descText,
    };
  }
  return { items, keys: itemKeys };
}

// Generate Dynamic Content
const techData = generateGalleryItems(
  "tech_proj",
  6,
  "Tech Project",
  "Technical"
);
const writingData = generateGalleryItems(
  "writing_proj",
  6,
  "Writing Sample",
  "Writing"
);
const editingData = generateGalleryItems(
  "editing_proj",
  6,
  "Edit Work",
  "Editing"
);

// --- Configuration Data ---
const PORTFOLIO_DATA = {
  ...techData.items,
  ...writingData.items,
  ...editingData.items,

  root: {
    title: "Desktop",
    category: "System",
    children: ["about_me", "skills_goals", "growth", "terminal", "readme_file"],
  },
  about_me: {
    title: "1. About Me",
    category: "Folder",
    fileType: "Folder",
    icon: "folder",
    children: [
      "personal_profile",
      "strengths_weaknesses",
      "psych_tests",
      "personal_reflections",
      "core_beliefs",
    ],
  },
  personal_profile: {
    id: "personal_profile",
    title: "Personal Profile",
    category: "About Me",
    fileType: "txt",
    content: `🧑🏼‍🦲 Shaniqua Mae Cervantes\n📚 IR001 - 3\n🎓 1ST YEAR BSCS Tech Block 1 \n📍 Cubao, Quezon City\n📮 shaniqua.cervantes@ciit.edu.ph\n\nHeya! Go ahead, and simply call me Shan. \n
          I seem to have find my place in the tech industry, and I'm looking forward to becoming a
          Cloud Data Engineer or a Data Analyst. I had a general knack for software growing up in 
          the internet unsupervised so I never really saw myself outside this field. 
          \n\nNow I am here, and ever since knowing my peers/learning about the competitive nature
           of it all, I urge myself to be better. Everyday is a learning process for me. Although 
           ultimately, the reason why I am here is because of grit. Tech has attached itself to my 
           life, and I aspire to help make it better for each, and everyone of us.
           \n ┈┈ \n Fun Fact Not So Fun Fact... \n ➤ 19 Yrs. Old\n ➤ English, Filipino, Bikol \n ➤ ISFP-T \n ➤ Fish Owner \n ➤ Book Worm \n ➤ Likes: Puzzles, Gunplas, Seinen Manga, Mangoes, Sleeping \n ➤ Hates: Myself`,
  },
  strengths_weaknesses: {
    id: "strengths_weaknesses",
    title: "Strengths, Weaknesses, & Self-Insights",
    category: "About Me",
    fileType: "txt",
    content: `STRENGTH\n⦁ Empathetic \n⦁ Curious \n⦁ Sensitive \n⦁ Observant \n⦁ Open Minded \n\nWEAKNESS\n⦁ Passive \n⦁ Sensitive \n⦁ Avoidant \n⦁ Impatient \n⦁ Self Critical\n\n SELF-INSIGHTS\
\n i am imperfect, i know. with my sensitive and empathetic nature, i can say that i am
attentive to others but this hinders me to maintaining boundaries to which why i strive
 to learn how to protect others, and myself included. i know that i have a lot to give,
and in order to do so i need to do what works efficient for me.`,
  },
  psych_tests: {
    id: "psych_tests",
    title: "Psychological Test Results",
    category: "About Me",
    fileType: "txt",
    content: `
                                                                                Psychological Test Result

Learning Style Inventory:

A Visual learning preference is observed, indicating that information is processed
and retained most effectively through visual means such as diagrams, charts, written 
notes, and imagery. Strong visualization skills are present, along with a keen awareness
of aesthetics and the ability to create mental "movies" to aid understanding and recall. 
Effective strategies include color-coding, visual mapping, and handwritten notes, with 
careful observation and interpretation of visual cues in the environment.

Big Five Inventory (OCEAN):

Openness to Experience: Moderate – Shows curiosity and creative potential, with willingness
to explore new ideas while maintaining practical focus.

Conscientiousness: Moderate – Demonstrates organization and responsibility, with reliability 
in tasks and goal-oriented behavior.

Extraversion: Slightly Low – Tends to be reserved in social settings, favoring meaningful 
one-on-one interactions over large group engagements.

Agreeableness: High – Exhibits empathy, cooperation, and consideration, with sensitivity 
to others' needs and emotions.

Neuroticism / Negative Emotionality: Moderate – Generally emotionally stable, though occasional 
stress or sensitivity may occur in challenging situations.`,
  },
  personal_reflections: {
    id: "personal_reflections",
    title: "Personal Reflections",
    category: "About Me",
    fileType: "txt",
    content: `
last year or so, i’ve dreaded every day for the year to end, and it did. my lifestyle was 
auto pilot ‘till the next year as i’d hoped things will magically be better, but it didn’t.
i waited, and waited for that day ‘till i realized i was not living. 

i am afraid to admit that i wasted my youth. i do not know how to feel about the person 
i am becoming but i know for sure that i will keep looking forward and not behind. i
have time to ponder, and make the most of who i am in this world. 
`,
  },
  core_beliefs: {
    id: "core_beliefs",
    title: "Core Beliefs & Philosophy",
    category: "About Me",
    fileType: "png",
    content: "",
  },
  skills_goals: {
    title: "2. Skills & Goals",
    category: "Folder",
    fileType: "Folder",
    icon: "target",
    children: [
      "skills_inventory",
      "goal_frameworks",
      "short_long_term_goals",
      "life_maps",
    ],
  },
  skills_inventory: {
    id: "skills_inventory",
    title: "Skills Inventory",
    category: "Skills & Goals",
    fileType: "Folder",
    icon: "folder",
    children: ["tech_folder", "creative_folder", "personal_folder"],
  },
  tech_folder: {
    id: "tech_folder",
    title: "Technical Skills",
    category: "Skills Inventory",
    fileType: "Folder",
    children: techData.keys,
  },
  creative_folder: {
    id: "creative_folder",
    title: "Creative Skills",
    category: "Skills Inventory",
    fileType: "Folder",
    children: ["writing_folder", "editing_folder"],
  },
  writing_folder: {
    id: "writing_folder",
    title: "Writing",
    category: "Creative Skills",
    fileType: "Folder",
    children: writingData.keys,
  },
  editing_folder: {
    id: "editing_folder",
    title: "Editing",
    category: "Creative Skills",
    fileType: "Folder",
    children: editingData.keys,
  },
  personal_folder: {
    id: "personal_folder",
    title: "Personal Skills",
    category: "Skills Inventory",
    fileType: "Folder",
    children: ["personal_content"],
  },
  personal_content: {
    id: "personal_content",
    title: "Personal Skills List",
    category: "Personal Skills",
    fileType: "txt",
    content: `idk pa hehe`,
  },
  goal_frameworks: {
    id: "goal_frameworks",
    title: "Goal Frameworks",
    category: "Skills & Goals",
    fileType: "txt",
    content: `

███████╗███╗   ███╗ █████╗ ██████╗ ████████╗
██╔════╝████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝
███████╗██╔████╔██║███████║██████╔╝   ██║   
╚════██║██║╚██╔╝██║██╔══██║██╔══██╗   ██║   
███████║██║ ╚═╝ ██║██║  ██║██║  ██║   ██║   
╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
                                            
S - SPECIFIC
If I were to be specific, I'd like qualify as a Cloud Data Engineer or 
Data Analyst because these jobs are the backbone of companies. They handle 
the data needed for company. There are constraints to this goal, and I am 
aware that this job is very niche so it might be difficult to be recruited. 
It also has a learning curve, so I must work really hard to attain the skills 
needed.

M - MEASURABLE
In terms of measuring my skills for my dream job, it is a continuous process.
Eventually, if I were to get employed after or before college, that would make 
me feel assured that I am qualified so that might be how I will measure, and 
know my goal. 

A - ACHIEVABLE
My goal can be accomplished in a lot of ways such as getting my degree, or 
freelancing, or lastly, networking. The practical or logical way to achieve the job 
of Cloud Data Engineer or Data Analyst is first graduating with my Computer 
Science program, and then eventually taking internships that relate to technology
/programming, until I find an offer relating to my dream job.

R - RELEVANT
As of now, achieving this goal is quite difficult. Although, I believe being ready 
is less likely a feeling but a choice so if given an opportunity to train or freelance,
I would take it. That would mean I would have to choose to be serious about it as this
goal is a long term goal that will determine how I will live.

T - TIME-BOUND
This goal is likely a decade long to determine if it's achieveable; there will be many
trial and errors. Everything is not everlasting so I must be realistic about when this
dream is due. But for now, I will keep going until I achieve it. Starting now, I will
work on this goal. Small steps to eventually huge projects, and work
`,
  },
  short_long_term_goals: {
    id: "short_long_term_goals",
    title: "Short & Long-Term Goals",
    category: "Skills & Goals",
    fileType: "txt",
    content: `
SHORT-TERM
- Improve my back-end development skills by building small projects (APIs, databases,
and server-side logic).
- Learn key programming languages such as Python, Java, or JavaScript.
- Take online courses or tutorials related to back-end development to strengthen my 
foundation.

LONG-TERM
- Secure an internship in a tech company to gain real-world experience.
- Transition into a full-time role as a Back-End Developer or Data Analyst.
- Contribute to meaningful projects that impact users and businesses.
- Continuously learn advanced technologies, frameworks, and tools to stay competitive
in the field.
- Build a professional network of mentors, peers, and industry contacts to grow my 
career.
`,
  },
  life_maps: {
    id: "life_maps",
    title: "Life Maps & Plans",
    category: "Skills & Goals",
    fileType: "txt",
    content: `
MY LIFE MAP & TIMELINE

2025-2029: College & Skills
- Graduate by 2029.
- Build practical back-end and data skills.
- Do internships and small freelance projects.

2030-2037: Career & Savings
- Work full-time in tech.
- Keep freelancing on the side.
- Save enough by late 20s for future plans.

2038-2045: Work Abroad
- Move to another country for work.
- Gain global experience and explore new cultures.

2046+: Retirement & Life Goals
- Retire when ready.
- Buy a cozy cottage in Switzerland or Finland.
- Be silly. Eat lots of mangoes.  
`,
  },
  growth: {
    title: "3. Personal Growth & Reflection",
    category: "Folder",
    fileType: "Folder",
    icon: "sparkles",
    children: [
      "growth_plan",
      "motivation_purpose",
      "overcoming_challenges",
      "self_assessments",
    ],
  },
  growth_plan: {
    id: "growth_plan",
    title: "Personal Growth Plan",
    category: "Growth & Reflection",
    fileType: "txt",
    content: `
- Improve back-end and data skills through projects and internships
- Practice public speaking and communication
- Build professional relationships and networks
- Manage time between school, projects, and personal life
- Reflect on progress and set realistic goals
- Take small steps daily for consistent learning and growth
`,
  },
  motivation_purpose: {
    id: "motivation_purpose",
    title: "Motivation & Purpose",
    category: "Growth & Reflection",
    fileType: "txt",
    content: `
- Create value and achieve professional growth
- Learn tech skills for opportunities and projects
- Gain financial independence and explore personal goals
- Stay curious and motivated in life and career
`,
  },
  overcoming_challenges: {
    id: "overcoming_challenges",
    title: "Overcoming Challenges",
    category: "Growth & Reflection",
    fileType: "txt",
    content: `
- Overcome procrastination and self-doubt
- Break tasks into small steps with mini-deadlines
- Ask for help when stuck
- Reflect on past successes for confidence
`,
  },
  self_assessments: {
    id: "self_assessments",
    title: "Self-Assessments",
    category: "Growth & Reflection",
    fileType: "txt",
    content: "N/A",
  },
  terminal: {
    id: "terminal-app",
    title: "4. Terminal Emulator",
    category: "System",
    fileType: "app",
    content: "Launch the interactive command-line interface.",
  },
  readme_file: {
    id: "readme_file",
    title: "README.md",
    category: "System",
    fileType: "md",
    content: `Welcome! This is my finals project for Self Development! It is designed to look like a 
          desktop environment. Click the folders/files to open them. Press CTRL + SPACE to open 
          the app launcher. ESC to close windows. Enjoy!`,
  },
};

// --- RESTORED: Terminal File System Structure ---
const TERMINAL_FILES = {
  "1-about-me/": {
    title: "About Me Folder",
    type: "directory",
    children: [
      "personal-profile.txt",
      "strengths-weaknesses.txt",
      "psych-tests.txt",
      "personal-reflections.txt",
      "core-beliefs.txt",
    ],
  },
  "2-skills-goals/": {
    title: "Skills & Goals Folder",
    type: "directory",
    children: [
      "skills-inventory.txt",
      "goal-frameworks.txt",
      "short-long-term-goals.txt",
      "life-maps.txt",
    ],
  },
  "3-growth/": {
    title: "Growth Folder",
    type: "directory",
    children: [
      "growth-plan.txt",
      "motivation-purpose.txt",
      "overcoming-challenges.txt",
      "self-assessments.txt",
    ],
  },
  "personal-profile.txt": {
    title: PORTFOLIO_DATA.personal_profile.title,
    content: PORTFOLIO_DATA.personal_profile.content,
    type: "file",
  },
  "strengths-weaknesses.txt": {
    title: PORTFOLIO_DATA.strengths_weaknesses.title,
    content: PORTFOLIO_DATA.strengths_weaknesses.content,
    type: "file",
  },
  "psych-tests.txt": {
    title: PORTFOLIO_DATA.psych_tests.title,
    content: PORTFOLIO_DATA.psych_tests.content,
    type: "file",
  },
  "personal-reflections.txt": {
    title: PORTFOLIO_DATA.personal_reflections.title,
    content: PORTFOLIO_DATA.personal_reflections.content,
    type: "file",
  },
  // UPDATED PATH
  "core-beliefs.txt": {
    title: PORTFOLIO_DATA.core_beliefs.title,
    content: "Image file: Use UI to view.",
    image: "images/poster5.png",
    type: "file",
  },
  "skills-inventory.txt": {
    title: "Skills Inventory List",
    content: PORTFOLIO_DATA.personal_content.content,
    type: "file",
  },
  "goal-frameworks.txt": {
    title: PORTFOLIO_DATA.goal_frameworks.title,
    content: PORTFOLIO_DATA.goal_frameworks.content,
    type: "file",
  },
  "short-long-term-goals.txt": {
    title: PORTFOLIO_DATA.short_long_term_goals.title,
    content: PORTFOLIO_DATA.short_long_term_goals.content,
    type: "file",
  },
  "life-maps.txt": {
    title: PORTFOLIO_DATA.life_maps.title,
    content: PORTFOLIO_DATA.life_maps.content,
    type: "file",
  },
  "growth-plan.txt": {
    title: PORTFOLIO_DATA.growth_plan.title,
    content: PORTFOLIO_DATA.growth_plan.content,
    type: "file",
  },
  "motivation-purpose.txt": {
    title: PORTFOLIO_DATA.motivation_purpose.title,
    content: PORTFOLIO_DATA.motivation_purpose.content,
    type: "file",
  },
  "overcoming-challenges.txt": {
    title: PORTFOLIO_DATA.overcoming_challenges.title,
    content: PORTFOLIO_DATA.overcoming_challenges.content,
    type: "file",
  },
  "self-assessments.txt": {
    title: PORTFOLIO_DATA.self_assessments.title,
    content: PORTFOLIO_DATA.self_assessments.content,
    type: "file",
  },
  "readme.txt": {
    title: PORTFOLIO_DATA.readme_file.title,
    content: PORTFOLIO_DATA.readme_file.content,
    type: "file",
  },
  "help.txt": {
    title: "Terminal Help",
    content:
      "Use 'ls' to list files, 'cat <filename>' to view content, and 'clear' to clean the screen.",
    type: "file",
  },
};

// --- SEARCHABLE ITEMS UPDATED (SORTED BY RANK + REMOVED NUMBERS) ---
const LAUNCHER_SECTIONS = Object.keys(PORTFOLIO_DATA)
  .filter((k) =>
    ["txt", "md", "app", "png", "Folder", "gallery_item"].includes(
      PORTFOLIO_DATA[k].fileType
    )
  )
  .map((k) => ({
    id: k,
    // THIS LINE REMOVES THE NUMBERS ("1. ", "2. ") FROM THE TITLE
    title: PORTFOLIO_DATA[k].title.replace(/^\d+\.\s*/, ""),
    category: PORTFOLIO_DATA[k].category,
    fileType: PORTFOLIO_DATA[k].fileType,
  }))
  .sort((a, b) => {
    // CUSTOM RANKING LOGIC
    const getRank = (item) => {
      // 1. About Me Group
      if (item.id === "about_me") return 10;
      if (item.category === "About Me") return 11;

      // 2. Skills Group
      if (item.id === "skills_goals") return 20;
      if (item.id === "skills_inventory") return 21;
      if (item.category === "Skills & Goals") return 22;
      if (item.category === "Skills Inventory") return 23;
      if (item.category === "Technical") return 24;
      if (item.category === "Creative Skills") return 25;
      if (item.category === "Writing") return 26;
      if (item.category === "Editing") return 27;
      if (item.category === "Personal Skills") return 28;

      // 3. Growth Group
      if (item.id === "growth") return 30;
      if (item.category === "Growth & Reflection") return 31;

      // 4. System
      if (item.category === "System") return 90;

      return 100;
    };

    const rankA = getRank(a);
    const rankB = getRank(b);

    // Sort by Rank first, then Alphabetically within the rank
    if (rankA !== rankB) return rankA - rankB;
    return a.title.localeCompare(b.title);
  });

// --- Profile Picture Data ---
const PROFILE_IMAGES = [
  // UPDATED PATHS
  {
    url: "images/p3.png",
    caption:
      "Photo 1/10: u found me!! . Yippie (: here's random photo dumps that describe me in a nutshell basically ",
  },
  {
    url: "images/p2.png",
    caption:
      "Photo 2/10: one thing ab me is that i love building esp gunplas!! ",
  },
  {
    url: "images/p99.png",
    caption:
      "Photo 3/10: i like dyeing my hair copper even tho, yes, my hair is dying",
  },
  { url: "images/p6.png", caption: "Photo 4/10: and i like puzzles too lol" },
  { url: "images/p4.png", caption: "Photo 5/10: heres my pet hochi :D" },
  { url: "images/p79.jpg", caption: "Photo 6/10: ..." },
  {
    url: "images/p8.png",
    caption:
      "Photo 7/10: stories, to me, are profound, and i consume anything that has great storytelling like films. ",
  },
  {
    url: "images/p90.png",
    caption:
      "Photo 8/10: lately im mostly indulging in school as a CS student. so now less on hobbies , more on studying.",
  },
  { url: "images/p88.png", caption: "Photo 9/10: more gunplas" },
  {
    url: "images/p10.png",
    caption:
      "Photo 10/10: that's bout it. i live a very ordinary life but i want to make the most of it:3",
  },
];

let currentImageIndex = 0;
let filteredItems = [...LAUNCHER_SECTIONS];
let selectedIndex = 0;
let currentFolder = "root";
const backButton = document.getElementById("back-button");

let isContentDragging = false;
let contentWindow, contentHeader;
let isProfilePicDragging = false;
let profilePicWindow, profilePicHeader;
let isResumeDragging = false;
let resumeWindow, resumeHeader;
let isBeliefsDragging = false;
let beliefsWindow, beliefsHeader;
let isTerminalDragging = false;
let terminalWindow, terminalHeader, terminalInput, terminalOutput;
let dragOffsetX, dragOffsetY;
const PROMPT = "shan@arch-rice:~ $";
let currentProjectImageIndex = 0;

function updateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleTimeString(
    "en-US",
    { hour: "2-digit", minute: "2-digit", hour12: false }
  );
}

function toggleLauncher(show = null) {
  const overlay = document.getElementById("app-launcher-overlay");
  const isVisible = overlay.classList.contains("hidden");
  const shouldShow = show !== null ? show : isVisible;
  if (shouldShow) {
    overlay.classList.remove("hidden");
    document.getElementById("launcher-search").value = "";
    filterLauncherItems("");
    document.getElementById("launcher-search").focus();
  } else {
    overlay.classList.add("hidden");
    document.getElementById("launcher-search").blur();
  }
}

function openFolder(folderId) {
  closeTerminal();
  const folder = PORTFOLIO_DATA[folderId];
  if (!folder || (folder.fileType !== "Folder" && folderId !== "root")) return;
  currentFolder = folderId;
  renderFolderView(folderId);
  if (folderId === "about_me") openProfilePicture();
  if (folderId === "tech_folder") openResume();
}

function renderFolderView(folderId) {
  const folder = PORTFOLIO_DATA[folderId];
  const contentBody = document.getElementById("content-body");
  const contentView = document.getElementById("content-view");

  contentView.classList.remove("gallery-view-mode");
  contentBody.classList.remove("gallery-body-mode");
  contentView.style.height = "";
  contentView.style.display = "";
  contentView.style.flexDirection = "";

  contentBody.innerHTML = "";
  contentBody.className = "text-sm space-y-3 p-6";

  if (folderId !== "root") backButton.classList.remove("hidden");
  else backButton.classList.add("hidden");

  const pathName = folderId === "root" ? "Desktop" : folder.title;
  document.getElementById("content-title").textContent = `/~/${pathName}`;

  const childItems = folder.children || [];
  if (childItems.length === 0) {
    contentBody.className = "text-sm p-4 text-gray-400";
    contentBody.innerHTML = "Directory is empty.";
    return;
  }

  const isFolderGrid =
    folderId === "skills_inventory" || folderId === "creative_folder";
  const isGalleryGrid =
    folderId === "tech_folder" ||
    folderId === "writing_folder" ||
    folderId === "editing_folder";

  if (isGalleryGrid) {
    contentBody.className = "gallery-grid-container";
  } else if (isFolderGrid) {
    contentBody.className = "skills-grid-container";
  }

  childItems.forEach((childId) => {
    const item = PORTFOLIO_DATA[childId];
    if (!item) return;
    const isFolder = item.fileType === "Folder";
    const isApp = item.fileType === "app";
    const itemDiv = document.createElement("div");

    if (isGalleryGrid) {
      itemDiv.className = "gallery-item group";
      itemDiv.innerHTML = `<img src="${item.image}" class="gallery-img" alt="${item.title}" />`;
    } else if (isFolderGrid) {
      itemDiv.className = "skills-grid-item group";
      let icon = `<i data-lucide="folder" class="w-16 h-16 text-blue-400 mb-2"></i>`;
      itemDiv.innerHTML = `${icon}<span class="text-xs text-gray-200 group-hover:text-white font-medium">${item.title}</span>`;
    } else {
      itemDiv.className = "file-explorer-item flex items-center text-gray-200";
      let icon = "";
      if (childId === "skills_inventory")
        icon = `<i data-lucide="folder" class="w-4 h-4 text-blue-400 mr-3"></i>`;
      else if (isFolder)
        icon = `<i data-lucide="folder" class="w-4 h-4 text-blue-400 mr-3"></i>`;
      else if (isApp)
        icon = `<i data-lucide="terminal" class="w-4 h-4 text-white mr-3"></i>`;
      else if (childId === "core_beliefs")
        icon = `<i data-lucide="image" class="w-4 h-4 text-white mr-3"></i>`;
      else
        icon = `<i data-lucide="file-text" class="w-4 h-4 text-gray-400 mr-3"></i>`;
      itemDiv.innerHTML = `${icon} <span class="text-base">${item.title}</span>`;
    }

    itemDiv.onclick = () => {
      if (isFolder) openFolder(childId);
      else if (isApp) {
        closeContent();
        openTerminal();
      } else if (childId === "core_beliefs") {
        openBeliefs();
      } else displayContent(item);
    };
    contentBody.appendChild(itemDiv);
  });
  lucide.createIcons();
  showContentView();
}

function navigateGalleryItem(direction) {
  const currentItemKey = window.currentlyViewingFile;
  if (!currentItemKey) return;
  const item = PORTFOLIO_DATA[currentItemKey];

  if (item && item.images && item.images.length > 1) {
    let newIndex = currentProjectImageIndex + direction;
    if (newIndex >= item.images.length) newIndex = 0;
    if (newIndex < 0) newIndex = item.images.length - 1;
    currentProjectImageIndex = newIndex;

    const mediaEl = document.getElementById("gallery-main-media");
    const counterEl = document.getElementById("gallery-counter");

    if (mediaEl) {
      mediaEl.style.opacity = "0.5";
      setTimeout(() => {
        mediaEl.src = item.images[newIndex];
        mediaEl.style.opacity = "1";
        if (item.category === "Editing") {
          mediaEl.load();
          mediaEl.play();
        }
      }, 100);
    }
    if (counterEl) {
      counterEl.textContent = `${newIndex + 1} / ${item.images.length}`;
    }
  }
}

function displayContent(item) {
  const contentBody = document.getElementById("content-body");
  const contentView = document.getElementById("content-view");

  if (typingInterval) clearInterval(typingInterval);

  if (item.fileType === "gallery_item") {
    contentView.classList.add("gallery-view-mode");
    contentBody.classList.add("gallery-body-mode");
    contentBody.className = "flex h-full w-full bg-transparent";

    const parentKey = Object.keys(PORTFOLIO_DATA).find(
      (k) =>
        PORTFOLIO_DATA[k].children &&
        PORTFOLIO_DATA[k].children.includes(item.id)
    );
    const parentTitle = parentKey ? PORTFOLIO_DATA[parentKey].title : "Desktop";
    document.getElementById(
      "content-title"
    ).textContent = `/~/${parentTitle}/${item.title}`;
    backButton.classList.remove("hidden");

    currentProjectImageIndex = 0;
    const images = item.images || [item.image];
    const displaySource = images[0];
    const hasMultipleImages = images.length > 1;

    const buttonsHtml = hasMultipleImages
      ? `
                  <div class="absolute bottom-4 left-0 right-0 text-center z-10">
                        <span id="gallery-counter" class="text-xs font-mono bg-black/50 px-2 py-1 rounded text-gray-300">1 / ${images.length}</span>
                     </div>
                     <button onclick="navigateGalleryItem(-1)" class="absolute left-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                         <i data-lucide="chevron-left" class="w-6 h-6"></i>
                     </button>
                     <button onclick="navigateGalleryItem(1)" class="absolute right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                         <i data-lucide="chevron-right" class="w-6 h-6"></i>
                     </button>
               `
      : "";

    let mediaHtml = "";
    if (item.category === "Editing") {
      mediaHtml = `<video id="gallery-main-media" src="${displaySource}" controls class="w-full h-full object-contain p-4" autoplay loop></video>`;
    } else {
      mediaHtml = `<img id="gallery-main-media" 
                                 src="${displaySource}" 
                                 ondblclick="showImageModal()" 
                                 class="w-full h-full object-contain p-4 transition-opacity duration-200 cursor-zoom-in" 
                                 title="Double-click to zoom"
                                 alt="${item.title}" />`;
    }

    contentBody.innerHTML = `
                   <div class="w-1/2 h-full bg-black/20 flex flex-col items-center justify-center border-r border-white/10 relative group">
                       ${mediaHtml}
                       ${buttonsHtml}
                   </div>
                   <div class="w-1/2 h-full overflow-y-auto p-8">
                       <span class="inline-block px-2 py-1 mb-4 text-xs font-mono text-blue-400 bg-blue-400/10 rounded border border-blue-400/20">${item.category}</span>
                       <h2 class="text-2xl font-bold text-white mb-4 pb-2 border-b border-gray-700">${item.title}</h2>
                       <div class="prose prose-invert prose-sm">
                           <p class="text-gray-300 whitespace-pre-line leading-relaxed">${item.content}</p>
                       </div>
                   </div>
               `;
  } else {
    contentView.classList.remove("gallery-view-mode");
    contentBody.classList.remove("gallery-body-mode");
    contentBody.className = "text-sm space-y-3 p-6 overflow-y-auto";

    const parentKey = Object.keys(PORTFOLIO_DATA).find(
      (k) =>
        PORTFOLIO_DATA[k].children &&
        PORTFOLIO_DATA[k].children.includes(item.id)
    );
    const parentTitle = parentKey ? PORTFOLIO_DATA[parentKey].title : "Desktop";
    document.getElementById(
      "content-title"
    ).textContent = `/~/${parentTitle}/${item.title}.${item.fileType}`;
    backButton.classList.remove("hidden");

    const cleanContent = item.content
      .replace(/^[\s\n]+|[\s\n]+$/g, "")
      .replace(/^[ \t]+/gm, "");

    contentBody.innerHTML = `
              <p class="text-gray-300"><strong>Category:</strong> ${item.category} (.${item.fileType})</p>
              <div class="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700 text-gray-200 font-mono shadow-inner">
              <div class="whitespace-pre leading-none font-mono text-[10px] md:text-sm overflow-x-auto"><span id="typewriter-text"></span>...
              </div>
              <p class="mt-4 text-xs text-gray-500">Viewing file contents. Click back arrow to return.</p>
          `;

    const targetEl = document.getElementById("typewriter-text");
    let charIndex = 0;
    const typeSpeed = cleanContent.length > 100 ? 2 : 15;

    typingInterval = setInterval(() => {
      if (charIndex < cleanContent.length) {
        targetEl.textContent += cleanContent.charAt(charIndex);
        charIndex++;
        contentBody.scrollTop = contentBody.scrollHeight;
      } else {
        clearInterval(typingInterval);
      }
    }, typeSpeed);
  }

  window.currentlyViewingFile = item.id;
  showContentView();
  lucide.createIcons();
}

function showContentView() {
  contentWindow.style.removeProperty("top");
  contentWindow.style.removeProperty("left");
  contentWindow.style.removeProperty("transform");
  contentWindow.style.top = "50%";
  contentWindow.style.left = "50%";
  contentWindow.style.transform = "translate(-50%, -50%)";
  contentWindow.classList.remove("content-hidden", "hidden");
  contentWindow.classList.add("content-visible");
  lucide.createIcons();
}

function closeContent() {
  if (typingInterval) clearInterval(typingInterval);
  contentWindow.classList.remove("content-visible");
  contentWindow.classList.add("content-hidden");
  const video = document.querySelector("video");
  if (video) video.pause();
  setTimeout(() => {
    contentWindow.classList.add("hidden");
    contentWindow.classList.remove("gallery-view-mode");
    currentFolder = "root";
  }, 300);
}

function openTerminal() {
  closeContent();
  terminalWindow.style.removeProperty("top");
  terminalWindow.style.removeProperty("left");
  terminalWindow.style.removeProperty("transform");
  terminalWindow.classList.remove("hidden", "content-visible");
  terminalWindow.classList.add("content-hidden");
  setTimeout(() => {
    terminalWindow.classList.remove("content-hidden");
    terminalWindow.classList.add("content-visible");
    terminalInput.focus();
  }, 10);
}

function closeTerminal() {
  document.getElementById("image-modal").classList.add("hidden");
  terminalWindow.classList.remove("content-visible");
  terminalWindow.classList.add("content-hidden");
  setTimeout(() => {
    terminalWindow.classList.add("hidden");
    terminalWindow.style.removeProperty("top");
    terminalWindow.style.removeProperty("left");
    terminalWindow.style.removeProperty("transform");
  }, 300);
}

function appendOutput(text, type = "output-text") {
  const p = document.createElement("p");
  p.className = type;
  p.innerHTML = text.replace(/\n/g, "<br>");
  terminalOutput.appendChild(p);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function showImageModal() {
  const item = PORTFOLIO_DATA[window.currentlyViewingFile];
  if (!item) return;
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");
  const images = item.images || [item.image];
  modalImg.src = images[currentProjectImageIndex];
  if (images.length <= 1) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }
  modal.classList.remove("hidden");
}

function openResumeZoom() {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const resumeImg = document.getElementById("resume-image");
  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");
  modalImg.src = resumeImg.src;
  prevBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
  modal.classList.remove("hidden");
}

function openBeliefsZoom() {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const beliefsImg = document.getElementById("beliefs-image");
  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");
  modalImg.src = beliefsImg.src;
  prevBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
  modal.classList.remove("hidden");
}

function navigateModalImage(direction) {
  navigateGalleryItem(direction);
  const item = PORTFOLIO_DATA[window.currentlyViewingFile];
  const images = item.images || [item.image];
  const modalImg = document.getElementById("modal-image");
  modalImg.style.opacity = "0.5";
  setTimeout(() => {
    modalImg.src = images[currentProjectImageIndex];
    modalImg.style.opacity = "1";
  }, 100);
}

function closeImageModal() {
  document.getElementById("image-modal").classList.add("hidden");
}

document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("image-modal");
  if (!modal.classList.contains("hidden")) {
    if (e.key === "ArrowLeft") navigateModalImage(-1);
    if (e.key === "ArrowRight") navigateModalImage(1);
  }
});

function processCommand(command) {
  command = command.trim();
  if (command === "") {
    terminalInput.value = "";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    return;
  }
  appendOutput(
    `<span class="prompt">${PROMPT}</span> ${command}`,
    "output-text"
  );
  const parts = command.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const arg = parts.slice(1).join(" ").trim();
  switch (cmd) {
    case "help":
      appendOutput(
        `available Commands:
  <span class="prompt">ls</span>            List portfolio files in the current directory.
  <span class="prompt">cat &lt;filename&gt;</span>  Display file contents.
  <span class="prompt">clear</span>         Clear the terminal screen history.
  <span class="prompt">help</span>          Show this help message.`,
        "info-text"
      );
      break;
    case "ls":
      let output = "";
      const filenames = Object.keys(TERMINAL_FILES).sort();
      const directories = filenames.filter(
        (name) => TERMINAL_FILES[name].type === "directory"
      );
      directories.forEach((filename) => {
        output += `<span class="text-blue-400">📁 ${filename}</span>\n`;
      });
      const rootFiles = ["help.txt", "readme.txt"];
      rootFiles.forEach((filename) => {
        const file = TERMINAL_FILES[filename];
        if (file) {
          output += `<span class="text-gray-300">📄</span> <span class="text-white">${filename}</span>\n`;
        }
      });
      appendOutput(output);
      break;
    case "cat":
      if (!arg) {
        appendOutput(
          "Error: Missing file name. Usage: cat <filename>",
          "error-text"
        );
        break;
      }
      if (arg.endsWith("/")) {
        const dirName = arg.slice(0, -1);
        const directory = TERMINAL_FILES[arg] || TERMINAL_FILES[dirName + "/"];
        if (directory && directory.type === "directory") {
          appendOutput(`--- Contents of ${arg} ---`);
          let dirOutput = "";
          if (directory.children && directory.children.length > 0) {
            directory.children.forEach((childFile) => {
              const childData = TERMINAL_FILES[childFile];
              if (childData) {
                const icon = childData.image
                  ? `<span class="text-white">🖼️</span>`
                  : `<span class="text-gray-300">📄</span>`;
                dirOutput += `${icon} <span class="text-white">${childFile}</span>\n`;
              }
            });
          } else {
            dirOutput = "Directory is empty.";
          }
          appendOutput(dirOutput);
          appendOutput("--- END OF DIRECTORY ---");
        } else {
          appendOutput(`Error: cat: ${arg}: Not a directory`, "error-text");
        }
      } else {
        const fileData = TERMINAL_FILES[arg];
        if (fileData && fileData.type === "file") {
          appendOutput(`--- Viewing: ${arg} (${fileData.title}) ---`);
          appendOutput(fileData.content.replace(/\n/g, "<br>"));
          appendOutput("--- END OF FILE ---");
          if (fileData.image) {
            appendOutput(
              `Image found for ${arg}. Opening image modal...`,
              "info-text"
            );
            showImageModal(fileData.image);
          }
        } else {
          appendOutput(
            `Error: cat: ${arg}: No such file or directory`,
            "error-text"
          );
        }
      }
      break;
    case "clear":
      terminalOutput.innerHTML = "";
      break;
    default:
      appendOutput(
        `Error: Command not found: ${cmd}. Type 'help' for commands.`,
        "error-text"
      );
  }
  terminalInput.value = "";
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function startDrag(e, t) {
  let w, h;
  if (t === "terminal") {
    w = terminalWindow;
    h = terminalHeader;
    isTerminalDragging = true;
  } else if (t === "profile_pic") {
    w = profilePicWindow;
    h = profilePicHeader;
    isProfilePicDragging = true;
  } else if (t === "resume") {
    w = resumeWindow;
    h = resumeHeader;
    isResumeDragging = true;
  } else if (t === "beliefs") {
    w = beliefsWindow;
    h = beliefsHeader;
    isBeliefsDragging = true;
  } else {
    w = contentWindow;
    h = contentHeader;
    isContentDragging = true;
  }

  if (w.classList.contains("hidden")) return;
  e.preventDefault();
  const evt = e.touches ? e.touches[0] : e;
  const rect = w.getBoundingClientRect();
  w.style.transition = "none";
  w.classList.remove("content-visible", "content-hidden");
  w.style.transform = "none";
  w.style.top = rect.top + "px";
  w.style.left = rect.left + "px";
  w.style.bottom = "auto";
  w.style.right = "auto";
  dragOffsetX = evt.clientX - rect.left;
  dragOffsetY = evt.clientY - rect.top;
  h.style.cursor = "grabbing";
}

function drag(e) {
  if (
    !isContentDragging &&
    !isTerminalDragging &&
    !isProfilePicDragging &&
    !isResumeDragging &&
    !isBeliefsDragging
  )
    return;
  e.preventDefault();
  const evt = e.touches ? e.touches[0] : e;
  let w;
  if (isTerminalDragging) w = terminalWindow;
  else if (isProfilePicDragging) w = profilePicWindow;
  else if (isResumeDragging) w = resumeWindow;
  else if (isBeliefsDragging) w = beliefsWindow;
  else w = contentWindow;
  w.style.left = evt.clientX - dragOffsetX + "px";
  w.style.top = evt.clientY - dragOffsetY + "px";
}

function stopDrag() {
  isContentDragging = false;
  isTerminalDragging = false;
  isProfilePicDragging = false;
  isResumeDragging = false;
  isBeliefsDragging = false;

  contentHeader.style.cursor = "grab";
  terminalHeader.style.cursor = "grab";
  profilePicHeader.style.cursor = "grab";
  resumeHeader.style.cursor = "grab";
  if (beliefsHeader) beliefsHeader.style.cursor = "grab";

  if (contentWindow) contentWindow.style.transition = "";
}

function updateProfilePictureDisplay() {
  const img = PROFILE_IMAGES[currentImageIndex];
  document.getElementById("profile-image").src = img.url;
  document.getElementById("image-caption").textContent = img.caption;
}

// --- UPDATED: Navigate stops the auto-show ---
function navigateProfileImage(d) {
  stopProfileSlideshow(); // USER CLICKED -> STOP AUTO
  const n = currentImageIndex + d;
  if (n >= 0 && n < PROFILE_IMAGES.length) {
    currentImageIndex = n;
    updateProfilePictureDisplay();
  }
}

// --- NEW FUNCTION: Internal use for auto-sliding (loops) ---
function autoSlideProfile() {
  let n = currentImageIndex + 1;
  if (n >= PROFILE_IMAGES.length) n = 0; // Loop back to start
  currentImageIndex = n;
  updateProfilePictureDisplay();
}

// --- UPDATED: Start slideshow on open ---
function openProfilePicture() {
  currentImageIndex = 0;
  updateProfilePictureDisplay();
  profilePicWindow.classList.remove("hidden", "content-hidden");
  profilePicWindow.classList.add("content-visible");

  profilePicWindow.style.removeProperty("top");
  profilePicWindow.style.removeProperty("left");
  profilePicWindow.style.removeProperty("transform");
  profilePicWindow.style.bottom = "20px";
  profilePicWindow.style.right = "20px";
  profilePicWindow.style.top = "auto";
  profilePicWindow.style.left = "auto";

  startProfileSlideshow(); // START AUTO
}

function startProfileSlideshow() {
  if (profileInterval) clearInterval(profileInterval);
  profileInterval = setInterval(autoSlideProfile, 3000); // 3 Seconds
}

function stopProfileSlideshow() {
  if (profileInterval) {
    clearInterval(profileInterval);
    profileInterval = null;
  }
}

// --- UPDATED: Stop slideshow on close ---
function closeProfilePicture() {
  stopProfileSlideshow(); // STOP AUTO
  profilePicWindow.classList.remove("content-visible");
  profilePicWindow.classList.add("content-hidden");
  setTimeout(() => profilePicWindow.classList.add("hidden"), 300);
}

function openResume() {
  resumeWindow.classList.remove("hidden", "content-hidden");
  resumeWindow.classList.add("content-visible");
  resumeWindow.style.removeProperty("top");
  resumeWindow.style.removeProperty("right");
  resumeWindow.style.removeProperty("transform");
  resumeWindow.style.bottom = "50px";
  resumeWindow.style.left = "340px";
  resumeWindow.style.top = "auto";
}

function closeResume() {
  resumeWindow.classList.remove("content-visible");
  resumeWindow.classList.add("content-hidden");
  setTimeout(() => resumeWindow.classList.add("hidden"), 300);
}

function openBeliefs() {
  beliefsWindow.classList.remove("hidden", "content-hidden");
  beliefsWindow.classList.add("content-visible");
  beliefsWindow.style.removeProperty("top");
  beliefsWindow.style.removeProperty("right");
  beliefsWindow.style.removeProperty("transform");
  beliefsWindow.style.top = "40%";
  beliefsWindow.style.left = "17%";
}

function closeBeliefs() {
  beliefsWindow.classList.remove("content-visible");
  beliefsWindow.classList.add("content-hidden");
  setTimeout(() => beliefsWindow.classList.add("hidden"), 300);
}

function filterLauncherItems(q) {
  const s = q.toLowerCase().trim();
  filteredItems = LAUNCHER_SECTIONS.filter(
    (i) =>
      i.title.toLowerCase().includes(s) || i.category.toLowerCase().includes(s)
  );
  selectedIndex = 0;
  renderLauncherMenu();
}

function renderLauncherMenu() {
  const m = document.getElementById("launcher-menu");
  m.innerHTML = "";
  filteredItems.forEach((item, idx) => {
    const div = document.createElement("div");
    div.className = `launcher-item p-3 rounded-lg flex justify-between items-center cursor-pointer ${
      idx === selectedIndex ? "launcher-item-active" : "text-gray-200"
    }`;
    div.innerHTML = `<span class="text-sm">${item.title}</span><span class="text-xs text-gray-500">${item.category}</span>`;
    div.onclick = () => {
      const data = PORTFOLIO_DATA[item.id];
      if (item.id === "terminal-app") openTerminal();
      else if (item.id === "core_beliefs") openBeliefs();
      else if (data.fileType === "Folder") openFolder(item.id);
      else displayContent(data);
      toggleLauncher(false);
    };
    if (idx === selectedIndex)
      div.scrollIntoView({
        block: "nearest",
      });
    m.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  updateTime();
  setInterval(updateTime, 60000);
  contentWindow = document.getElementById("content-view");
  contentHeader = document.getElementById("content-header");
  terminalWindow = document.getElementById("terminal-window");
  terminalHeader = document.getElementById("terminal-header");
  profilePicWindow = document.getElementById("profile-picture-modal");
  profilePicHeader = document.getElementById("profile-picture-header");
  resumeWindow = document.getElementById("resume-modal");
  resumeHeader = document.getElementById("resume-header");
  beliefsWindow = document.getElementById("beliefs-modal");
  beliefsHeader = document.getElementById("beliefs-header");
  terminalOutput = document.getElementById("terminal-output");
  terminalInput = document.getElementById("terminal-input");

  backButton.onclick = function () {
    if (window.currentlyViewingFile) {
      window.currentlyViewingFile = null;
      renderFolderView(currentFolder);
    } else {
      if (currentFolder === "root") return;
      const parentKey = Object.keys(PORTFOLIO_DATA).find(
        (k) =>
          PORTFOLIO_DATA[k].children &&
          PORTFOLIO_DATA[k].children.includes(currentFolder)
      );
      openFolder(parentKey || "root");
    }
  };

  [
    contentHeader,
    terminalHeader,
    profilePicHeader,
    resumeHeader,
    beliefsHeader,
  ].forEach((h) => {
    if (!h) return;
    let t = "content";
    if (h.id.includes("terminal")) t = "terminal";
    if (h.id.includes("profile")) t = "profile_pic";
    if (h.id.includes("resume")) t = "resume";
    if (h.id.includes("beliefs")) t = "beliefs";
    h.addEventListener("mousedown", (e) => startDrag(e, t));
    h.addEventListener("touchstart", (e) => startDrag(e, t));
  });
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDrag);

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      processCommand(e.target.value);
    }
  });

  document.getElementById("folder-about").onclick = () =>
    openFolder("about_me");
  document.getElementById("folder-skills").onclick = () =>
    openFolder("skills_goals");
  document.getElementById("folder-growth").onclick = () => openFolder("growth");
  document.getElementById("folder-terminal").onclick = openTerminal;
  document.getElementById("folder-readme").onclick = () => {
    currentFolder = "readme_file";
    displayContent(PORTFOLIO_DATA["readme_file"]);
  };
});

document
  .getElementById("launcher-toggle-btn")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLauncher();
  });
document.addEventListener("keydown", (e) => {
  const isLauncherVisible = !document
    .getElementById("app-launcher-overlay")
    .classList.contains("hidden");
  const searchInput = document.getElementById("launcher-search");
  if (e.ctrlKey && e.code === "Space") {
    e.preventDefault();
    toggleLauncher();
  } else if (e.key === "Escape") {
    toggleLauncher(false);
    closeContent();
    closeTerminal();
    closeProfilePicture();
    closeResume();
    closeBeliefs();
  } else if (isLauncherVisible) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex = (selectedIndex + 1) % filteredItems.length;
        renderLauncherMenu();
        searchInput.focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (filteredItems.length > 0) {
        selectedIndex =
          (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
        renderLauncherMenu();
        searchInput.focus();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selectedItem = filteredItems[selectedIndex];
      if (selectedItem) {
        const data = PORTFOLIO_DATA[selectedItem.id];
        if (selectedItem.id === "terminal-app") openTerminal();
        else if (selectedItem.id === "core_beliefs") openBeliefs();
        else if (data.fileType === "Folder") openFolder(selectedItem.id);
        else displayContent(data);
        toggleLauncher(false);
      }
    }
  }
});
document
  .getElementById("launcher-search")
  .addEventListener("input", (e) => filterLauncherItems(e.target.value));

function closeImageModal() {
  document.getElementById("image-modal").classList.add("hidden");
}
