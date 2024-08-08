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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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

const services = [
  {
    title: "Car Building",
    icon: web,
  },
  {
    title: "Fuel efficient",
    icon: mobile,
  },
  {
    title: "Technology",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    title: "Initiatives 1",
    company_name: "NAME1",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
    ],
  },
  {
    title: "Initiatives 2",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
    ],
  },
  {
    title: "Initiatives 3",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
    ],
  },
  {
    title: "Initiatives 4",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
    "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
      "Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1Initiatives 1",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sarthak",
    designation: "CFO",
    company: "Google",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sarthak",
    designation: "COO",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Sarthak",
    designation: "CTO",
    company: "Google",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sarthak",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "achievements",
        color: "blue-text-gradient",
      },
      {
        name: "achievements",
        color: "green-text-gradient",
      },
      {
        name: "achievements",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sarthak",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "achievements",
        color: "blue-text-gradient",
      },
      {
        name: "achievements",
        color: "green-text-gradient",
      },
      {
        name: "achievements",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sarthak",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "achievements",
        color: "blue-text-gradient",
      },
      {
        name: "achievements",
        color: "green-text-gradient",
      },
      {
        name: "Sarthak",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
