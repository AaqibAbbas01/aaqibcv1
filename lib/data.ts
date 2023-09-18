import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Software Test Engineer",
    location: "Testrinx Software Solutions Pvt. Ltd , Noida",
    description:
      "As a Quality Analyst at Testrinx Software Solutions, I have played a vital role in ensuring high-quality software solutions. I apply STLC methodologies, collaborate with cross-functional teams using Jira, and conduct manual testing with black box techniques. With expertise in SQL, I perform effective database testing. I utilize Postman API for comprehensive API testing, Figma for UI/UX testing, and develop mobile testing strategies. I maintain adherence to quality standards, collaborate with developers, and continuously enhance my skills. Committed to driving quality excellence, I contribute to the success of the development team at Testrinx Software Solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2019 - May 2022",
  },
  {
    title: "Quality Assurance Engineer",
    location: "Reddoorz , Noida",
    description:
      "During my tenure as a Quality Analyst at RedDoorz, I excelled in software testing and quality assurance. I collaborated with cross-functional teams to implement STLC methodologies, designed and executed comprehensive test automation strategies using Java and TestNG. I implemented BDD techniques with Cucumber, applied Agile methodologies, conducted mobile testing with Selenium and Appium, utilized Postman API for API testing, and performed SQL and SAP HANA database testing. I identified performance bottlenecks, conducted load testing, and utilized Microsoft Excel for data analysis and reporting.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - May 2023",
  },
  {
    title: "Quality Analyst",
    location: "Shiprocket, Gurugram",
    description:
      "As a Quality Analyst at Shiprocket, I ensure the delivery of high-quality software solutions in the dynamic field of logistics and e-commerce. My responsibilities include debugging software issues, conducting load testing, and performing system integration testing. I leverage PHP, Java, TestNG, and Cucumber frameworks to develop and execute comprehensive API and automation tests. Utilizing tools such as Jenkins, Python, Selenium, and Postman API, I drive efficient testing and automation processes. I excel in applying Scrum methodologies, managing project workflows with Jira, and utilizing SQL and Microsoft Excel for data analysis and reporting. With a focus on quality assurance and adherence to Agile methodologies, I contribute to Shiprocket's success in delivering reliable solutions to clients.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SRX International",
    description:
      "Streamlined global package delivery logistics from India using JIRA, Excel, phpMyAdmin, ELK Logs, Jenkins, and Postman for efficient bug tracking, data management, and real-time log analysis. Facilitated international expansion for Indian businesses with reliable shipping.",
    tags: ["Jira", "Rest Assured", "Postman", "Selenium", "Java", "Jenkins", "ELK Logs", "phpmyadmin", "sql"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Finance & Redpartner Project at RedDoorz",
    description:
      "Collaborated cross-functionally to ensure software quality, conducted database testing using DBeaver for SAP and MySQL databases, and maintained test artifacts for various types of testing.",
    tags: ["Jira", "Rest Assured", "Postman", "Selenium", "Java", "Jenkins", "SAP Hanna", "dbeaver", "sql"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Stanza Living Website Project",
    description:
      "Conducted smoke, manual, regression, and data validation testing, wrote test plans and cases, performed API and database testing, and actively participated in Agile/Scrum processes.",
    tags: ["Appium", "Java", "SQL", "Jira", "Browserstack", "Figma"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Selenium",
  "Appium",
  "Figma",
  "Php My Admin",
  "Jenkins",
  "ELK for Logs",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "SAP Hanna",
  "My Sql",
  "Postman",
  "Rest Assured",
  "Jira",
  "MS Excel",
  "Dbeaver",
  "Browserstack",
] as const;
