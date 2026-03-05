import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
enabled: false,
animation: splashAnimation,
duration: 2000
};

const illustration = {
animated: false
};

const greeting = {
username: "Mohit Kumar K S",
title: "Hi all, I'm Mohit 👋",
subTitle:
"Full Stack Developer 🚀 | AI & Machine Learning Enthusiast building scalable web applications and intelligent systems.",
resumeLink:
"https://drive.google.com/file/d/1c8D_IJrkS8UTC_VB41tIw2ykfS8G-sIo/view",
displayGreeting: true
};

const socialMediaLinks = {
github: "https://github.com/MohitKumarKS",
linkedin: "https://www.linkedin.com/in/mohit-kumar-ks-57b193330/",
gmail: "[mohit.ks1311@gmail.com](mailto:mohit.ks1311@gmail.com)",
display: true
};

const skillsSection = {
title: "Skills",
subTitle: "Full Stack Development and AI / ML Engineering",

skills: [
"⚡ Building full stack web applications using React and modern backend frameworks",
"⚡ Designing REST APIs using FastAPI, Django and Node.js",
"⚡ Developing Machine Learning models using Python libraries",
"⚡ Working with scalable databases and production ready architectures"
],

softwareSkills: [
{ skillName: "C", fontAwesomeClassname: "fas fa-code" },
{ skillName: "C++", fontAwesomeClassname: "fas fa-code" },
{ skillName: "Java", fontAwesomeClassname: "fab fa-java" },
{ skillName: "Python", fontAwesomeClassname: "fab fa-python" },
{ skillName: "React", fontAwesomeClassname: "fab fa-react" },
{ skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
{ skillName: "FastAPI", fontAwesomeClassname: "fas fa-server" },
{ skillName: "Django", fontAwesomeClassname: "fas fa-leaf" },
{ skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
{ skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
{ skillName: "NumPy", fontAwesomeClassname: "fas fa-chart-bar" },
{ skillName: "Pandas", fontAwesomeClassname: "fas fa-chart-line" },
{ skillName: "XGBoost", fontAwesomeClassname: "fas fa-brain" },
{ skillName: "LSTM", fontAwesomeClassname: "fas fa-brain" }
],
display: true
};
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Sri Eshwar College of Engineering",
      subHeader: "B.E Computer Science and Engineering",
      duration: "2024 - 2028",
      desc: "Focused on software engineering, full stack development and AI systems."
    },
    {
      schoolName: "IIT Madras",
      subHeader: "B.Sc Data Science and Applications",
      duration: "2024 - 2027",
      desc: "Program focused on data science and machine learning."
    }
  ]
};

const techStack = {
viewSkillBars: true,
experience: [
{
Stack: "Frontend Development",
progressPercentage: "85%"
},
{
Stack: "Backend Development",
progressPercentage: "80%"
},
{
Stack: "Machine Learning",
progressPercentage: "75%"
}
],
displayCodersrank: false
};

const workExperiences = {
display: true,
experience: [
{
role: "Software Intern",
company: "Titan Company Limited",
companylogo: require("./assets/images/titan.png"),
date: "2026",
desc:
"Developed a secure E-Warranty registration platform using FastAPI backend and React frontend with JWT authentication and MySQL database.",
descBullets: [
"Built REST APIs for UID validation and OTP verification",
"Designed scalable MySQL schema for warranty management",
"Developed responsive React dashboard for administrators"
]
}
]
};

const openSource = {
showGithubProfile: false,
display: false
};

const bigProjects = {
title: "Projects",
subtitle: "Some of the projects I have built",
projects: [
{
image: require("./assets/images/plantshield.png"),
projectName: "PlantShield AI",
projectDesc:
"AI powered renewable energy forecasting platform using LSTM and XGBoost models with FastAPI backend and React frontend.",
footerLink: [
{
name: "GitHub",
url: "https://github.com/MohitKumarKS/PlantShield-AI"
}
]
},

{
image: require("./assets/images/ewarranty.png"),
projectName: "Titan E-Warranty Platform",
projectDesc:
"Warranty registration platform built during internship using FastAPI backend, JWT authentication and MySQL database.",
footerLink: [
{
name: "GitHub",
url: "https://github.com/MohitKumarKS/Titan_Internship-Ewarrenty"
}
]
},

{
image: require("./assets/images/disaster.png"),
projectName: "Smart Disaster Management System",
projectDesc:
"Disaster response coordination platform using Django backend and MongoDB database.",
footerLink: [
{
name: "GitHub",
url: "https://github.com/MohitKumarKS/python_project"
}
]
}
],

display: true
};const achievementSection = {
  title: "Achievements 🏆",
  subtitle: "Hackathons and Competitive Programming",

  achievementsCards: [
    {
      title: "PSG Hackanova Hackathon Finalist",
      subtitle: "Selected as finalist among multiple competing teams.",
      footerLink: []
    },
    {
      title: "Smartathon Hackathon Participant",
      subtitle: "Built real-world software solutions during the event.",
      footerLink: []
    },
    {
      title: "Competitive Programming",
      subtitle: "Solved 130+ problems on LeetCode and 1250+ problems on Skillrack.",
      footerLink: []
    }
  ],

  display: true
};

const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };

const resumeSection = {
title: "Resume",
subtitle: "Download my resume",
display: true
};

const contactInfo = {
title: "Contact Me ☎️",
subtitle: "Feel free to reach out for collaboration or opportunities.",
number: "8056700244",
email_address: "mohit.ks1311@gmail.com"
};

const twitterDetails = { display: false };

const isHireable = true;

export {
illustration,
greeting,
socialMediaLinks,
splashScreen,
skillsSection,
educationInfo,
techStack,
workExperiences,
openSource,
bigProjects,
achievementSection,
blogSection,
talkSection,
podcastSection,
contactInfo,
twitterDetails,
isHireable,
resumeSection
};
