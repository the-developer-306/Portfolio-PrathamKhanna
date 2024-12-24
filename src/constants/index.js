import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  CES,
  tesla,
  shopify,
  threejs,
  python,
  sklearn,
  numpy,
  vibhor,
  raunak,
  ayush,
  papa,
  mmmut,
  mhs,
  halv,
  frd,
  slamps,
  restweb,
  jarvis,
  comingsoon,
  chatapp,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Tech Stack",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Developer",
    icon: web,
  },
  {
    title: "Full Stack Web Developer",
    icon: mobile,
  },
  {
    title: "Automation Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Sklearn",
    icon: sklearn,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Executive Board Member",
    company_name: "Computer Engineering Society, M.M.M.U.T",
    icon: CES,
    iconBg: "black",
    date: "June 2023 - Present",
    points: [
      "Development CTF questions including concepts of Cryptography, Steganography, Web exploitation.",
      "Collaborative Deployment of CTF Website using Microsoft Azure, Docker, Kubernetes.",
      "Development of Competitive Programming questions.",
      "Organised Coding Contests on for junior year students on plateforms such as Hackerrank, Codechef.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "An automation expert and machine learning specialist, transforming complex tasks into efficient, user-friendly solutions.",
    name: "Mr. Kapil Khanna",
    designation: "C.M. Finance",
    company: "H.A.L.",
    image: papa,
  },
  {
    testimonial:
      "Innovative in web development and machine learning, excels at delivering precise, impactful projects efficiently.",
    name: "Mr. Vibhor Tandon",
    designation: "Senior H.R. Tech. Specialist",
    company: "Adyen",
    image: vibhor,
  },
  {
    testimonial:
      "Combines automation and machine learning skills, consistently demonstrating problem-solving expertise.",
    name: "Mrs. Raunak Agrawal",
    designation: "Workday Functional Consultant",
    company: "Kainos",
    image: raunak,
  },
  {
    testimonial:
      "Expertly enhanced sparkluslamps.com, showcasing a unique blend of web development prowess and creative vision.",
    name: "Mr. Ayush Tandon",
    designation: "U.K.G. Support",
    company: "T.C.S.",
    image: ayush,
  },
];

const projects = [
  {
    name: "Fake Review Detector",
    description:
      "This project uses machine learning to detect fake reviews. The Fake Review Detector analyzes features like text sentiment, review length, and helpful votes ratio to classify reviews as either 'FAKE' or 'GENUINE.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Logistic Regression",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: frd,
    source_code_link:
      "https://github.com/the-developer-306/Fake-Review-Detector",
    deployed_link: "https://the-developer-306.github.io/Fake-Review-Detector/",
  },
  {
    name: "House Price Predictor",
    description:
      "Harnessing machine learning algorithms to forecast housing prices, empowering buyers and sellers with accurate predictions based on key factors like location, crime rate, rooms, accessibility, and more.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SkLearn",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link:
      "https://github.com/the-developer-306/House-Price-Predictor",
    deployed_link: "https://the-developer-306.github.io/coming-soon-page/",
  },
  {
    name: "Voice Assistant System",
    description:
      "Python Voice Assistant: Powerful, intuitive, and personalized voice-controlled interface for efficient task execution. Empowers users with Python's capabilities, understanding and responding to commands accurately and quickly.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "pyttsx3",
        color: "green-text-gradient",
      },
      {
        name: "pyqt5-gui",
        color: "pink-text-gradient",
      },
    ],
    image: jarvis,
    source_code_link:
      "https://github.com/the-developer-306/Voice-Assistant-System",
    deployed_link: "https://the-developer-306.github.io/coming-soon-page/",
  },
  {
    name: "Voice Assistant System 2.0",
    description: "",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "pyttsx3",
        color: "green-text-gradient",
      },
      {
        name: "pyqt5-gui",
        color: "pink-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/the-developer-306/J.A.R.V.I.S-2.0",
    deployed_link: "https://the-developer-306.github.io/coming-soon-page/",
  },
  {
    name: "Chat Application",
    description:
      "Cosneckt is a web-based chat application designed to facilitate real-time communication between users.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/the-developer-306/Cosneckt",
    deployed_link: "https://the-developer-306.github.io/coming-soon-page/",
  },
  {
    name: "E-Commerce Website",
    description:
      "For Sparklus Lamps, I built an e-commerce platform using WordPress, featuring custom themes, secure payments, and responsive design, ensuring a seamless shopping experience.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: slamps,
    source_code_link: "https://sparkluslamps.com/",
    deployed_link: "https://sparkluslamps.com/",
  },
  {
    name: "Restaurant Website",
    description:
      "Restaurant-Website: A modern, responsive website for a restaurant. Features menu display, online food ordering, about us section and contact info.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: restweb,
    source_code_link: "https://github.com/the-developer-306/Restaurant-Website",
    deployed_link: "https://the-developer-306.github.io/Restaurant-Website/",
  },
];

const educations = [
  {
    title: "Bachelor of Technology",
    institute_name: "M.M.M. University of Technology",
    affiliation: "(Autonomous University)",
    city: "Gorakhpur",
    icon: mmmut,
    iconBg: "black",
    date: "2022 - Pursuing",
    fos: "Computer Science and Engineering",
    cgpa: "8.29",
    special_mentions: "",
    website: "http://mmmut.ac.in/",
  },
  {
    title: "Class 12th",
    institute_name: "H.A.L Vidyalaya",
    affiliation: "C.B.S.E.",
    city: "Kanpur",
    icon: halv,
    iconBg: "black",
    date: "2021-2022",
    fos: "Physics, Chemistry, Maths, English, Computer Science",
    cgpa: "96.20% (School Topper)",
    special_mentions: "",
    website: "https://www.halvidyalayakanpur.in/",
  },
  {
    title: "Class 10th",
    institute_name: "Methodist High School",
    affiliation: "I.C.S.E.",
    city: "Kanpur",
    icon: mhs,
    iconBg: "black",
    date: "2019-2020",
    fos: "Physics, Chemistry, Maths, English, Hindi, Computer Science",
    cgpa: "95.00%",
    special_mentions: "",
    website: "https://mhskanpur.org/",
  },
];

export { services, technologies, experiences, testimonials, projects, educations };