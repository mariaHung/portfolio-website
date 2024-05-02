import React from "react";

// icons
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineCloudServer } from "react-icons/ai";

// images
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import aprendeImg from "@/public/aprendeMicole.png";
import refineImg from "@/public/dashboards.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Servec - Micolegio",
    description:
      "Design and development of over 20 web applications and management systems. Ensured applications interoperability with APIs and databases. Enhanced applications performance with AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "SEP 2020 - DIC 2023",
  },
  {
    title: "Cloud Architecture and Cloud Security",
    location: "University of Santiago de Chile (USACH)",
    description:
      "Essential understanding of ensuring the integrity of computer systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    location: "Amazon Web Services",
    description:
      "Practical experience with AWS services",
    icon: React.createElement(AiOutlineCloudServer),
    date: "2023",
  },
  {
    title: "Google Data Analytics Certificate",
    location: "Coursera",
    description:
      "Data cleaning and analysis with spreadsheets, SQL, and R programming, and creation of visualization and story-telling with Tableau.",
    icon: React.createElement(LuGraduationCap),
    date: "JUN 2023 - NOV 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Aprende Micolegio",
    description:
      "Education platform and learning management systems that provides middle and high schools students learning material and communications with their teachers",
    tags: ["React", "Next.js", "MongoDB"],
    imageUrl: aprendeImg,
  },
  {
    title: "Refine Dashboard",
    description:
      "Independent work with refine framework. Admin panel, that has features like filtering, sorting and pagination, and creating or eliminating tasks.",
    tags: ["React", "TypeScript", "Next.js", "Vite", "GraphQL API"],
    imageUrl: refineImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
  "SQL",
  "Python",
] as const;