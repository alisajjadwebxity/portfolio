import {
  wordpress,
  html,
  css,
  tailwind,
  javascript,
  js,
  reactjs,
  nodejs,
  php,
  python,
  git,
  regalsystems,
  freelancer,
  etekstudio,
  wooninjas,
  linux,
  baysideceu,
  ceucreationsinc,
  echelonfront,
  elsistemausa,
  etekstudiosite,
  globalsmoothsystem,
  habitsfitnessacademy,
  tukkuruk,
  xfactortrainingsystems,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "WordPress", icon: wordpress },
  { title: "JavaScript", icon: js },
  { title: "PHP", icon: php },
  { title: "Python", icon: python },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "JavaScript", icon: javascript },
  { name: "WordPress", icon: wordpress },
  { name: "PHP", icon: php },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Python", icon: python },
  { name: "Linux", icon: linux },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Plugin Developer",
    company_name: "WooNinjas",
    icon: wooninjas,
    iconBg: "#161329",
    date: "Sep 2023 - Continue",
    points: [
      "Successfully delivered large-scale custom development projects from concept to deployment, ensuring reliable solutions.",
      "Work under pressure to meet hard deadlines, managing complex requirements and ensuring timely, high-quality execution.",
      "Working with a team to create custom plugins that meet client's requirements and exceed expectations.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "eTekStudio",
    icon: etekstudio,
    iconBg: "#161329",
    date: "Apr 2023 - Sep 2023",
    points: [
      "Provide fast and secure websites to clients along with technical support.",
      "Optimized website performance, troubleshot and resolved complex technical issues.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#161329",
    date: "May 2020 - Mar 2023",
    points: [
      "Work with clients to understand their requirements and provide solutions.",
      "Convert PSD, Figma, and XD designs into responsive WordPress websites.",
      "Build pixel-perfect, mobile-friendly, and cross-browser compatible layouts.",
      "Improve search engine rankings through technical SEO best practices.",
    ],
  },
];

export const projects = [
  {
    name: "BaysideCEU",
    description:
      "Developed an auditing platform featuring course schedules, audit reports, and an administrative workflow for submitting course completions to CEBroker for certification processing.",
    tags: [
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "React JS", color: "blue-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "Custom Auditing Solution", color: "blue-text-gradient" },
      { name: "CEBroker API", color: "green-text-gradient" },
    ],
    image: baysideceu,
    source_code_link: "https://github.com/",
  },
  {
    name: "CEU Creations Inc",
    description:
      "Integrated Zoom Webinar hosting and attendance reporting APIs to track participant engagement and automate certification eligibility based on verified session durations.",
    tags: [
      { name: "jQuery", color: "pink-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "Custom Events Solution", color: "blue-text-gradient" },
      { name: "WPEngine Migration", color: "blue-text-gradient" },
      { name: "Zoom API", color: "green-text-gradient" },
    ],
    image: ceucreationsinc,
    source_code_link: "https://github.com/",
  },
  {
    name: "Echelon Front",
    description:
      "Implemented a custom course enrollment workflow, optimized site performance through audits, and migrated the platform to Cloudways for improved reliability and speed.",
    tags: [
      { name: "jQuery", color: "pink-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "Audit & Optimization", color: "green-text-gradient" },
      { name: "Custom Enrollment", color: "blue-text-gradient" },
      { name: "Cloudways Migration", color: "blue-text-gradient" },
    ],
    image: echelonfront,
    source_code_link: "https://github.com/",
  },
  {
    name: "Elsistema USA",
    description:
      "Enhanced membership onboarding with custom PMPro workflows, interactive member location mapping, and a tailored job board to streamline community engagement.",
    tags: [
      { name: "jQuery", color: "pink-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "Custom PMPro Add-on", color: "blue-text-gradient" },
      { name: "Custom Job Board", color: "blue-text-gradient" },
    ],
    image: elsistemausa,
    source_code_link: "https://github.com/",
  },
  {
    name: "Etek Studio",
    description:
      "Built a web services agency website with custom pricing components, leveraging Bridge and WPBakery while providing migration and maintenance support.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "Maintenance", color: "pink-text-gradient" },
      { name: "Migration", color: "pink-text-gradient" },
    ],
    image: etekstudiosite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Global Smooth System",
    description:
      "Resolved enrollment, login, and onboarding issues by implementing custom workflows while providing continuous maintenance to improve platform stability and usability.",
    tags: [
      { name: "jQuery", color: "pink-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "Custom Enrollment Flow", color: "blue-text-gradient" },
      { name: "Maintenance", color: "pink-text-gradient" },
    ],

    image: globalsmoothsystem,
    source_code_link: "https://github.com/",
  },
  {
    name: "Habits Fitness Academy",
    description:
      "Configured affiliate management workflows, resolved platform issues, enhanced overall functionality, and integrated Stripe payouts to automate affiliate payment processing.",
    tags: [
      { name: "jQuery", color: "pink-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "Affiliate Program", color: "blue-text-gradient" },
      { name: "Stripe API", color: "blue-text-gradient" },
    ],
    image: habitsfitnessacademy,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tukkuruk",
    description:
      "Developed a rental property platform with WooCommerce integration, e-signature workflows, booking management, and external property listing synchronization.",
    tags: [
      { name: "Bootstrap", color: "blue-text-gradient" },
      { name: "jQuery", color: "blue-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "Migration", color: "pink-text-gradient" },
      { name: "Custom WooCommerce Add-on", color: "pink-text-gradient" },
      { name: "Rest API", color: "pink-text-gradient" },
    ],
    image: tukkuruk,
    source_code_link: "https://github.com/",
  },
  {
    name: "XFactor Training Systems",
    description:
      "Built an online coaching platform with custom enrollments, coach interaction tools, practice notes, affiliate management, and Stripe-powered payment processing.",
    tags: [
      { name: "jQuery", color: "pink-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
      { name: "Stripe API", color: "pink-text-gradient" },
      { name: "CustomBusiness Logic", color: "blue-text-gradient" },
    ],

    image: xfactortrainingsystems,
    source_code_link: "https://github.com/",
  },
];
