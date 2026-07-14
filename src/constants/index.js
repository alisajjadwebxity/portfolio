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
  weatherpedia,
  termpw,
  payloadmaster,
  linux,
  mhft,
  sketcher,
  etekstudio,
  CompileVortex,
  wooninjas,
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
    title: "WordPress Developer",
    company_name: "Regal Systems",
    icon: regalsystems,
    iconBg: "#161329",
    date: "Jun 2018 - Mar 2023",
    points: ["Work with clients to understand their requirements and provide solutions."],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link: "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description: "Tool to automate payload creation using the Metasploit framework",
    tags: [{ name: "shell", color: "blue-text-gradient" }],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description: "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description: "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
