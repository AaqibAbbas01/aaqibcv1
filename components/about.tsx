"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Experienced QA Engineer with 4.3 years of expertise in{" "}
        <span className="font-medium">Manual and Automation testing</span>, Proficient in utilizing tools like{" "}
        <span className="font-medium">Selenium, Appium, Java, API testing with Rest Assured, Postman, and ELK for effective logs checking and debugging, as well as adept in database testing</span>.{" "}
        <span className="italic">Known for identifying defects, tracking</span> and reporting issues, and fostering cross-functional collaboration to ensure top-notch software quality. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Java, Selenium , Postman, Rest Assured API Testing, ELK for Logs, Appium,
          Android Studio , SQl, SAP Hanna, Browser Stack, Github and Jenkins
        </span>
        . I am also familiar with Php, Ruby on Rails, React, Nextjs, Tailwind CSS, TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Senior Quality Assurance Engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">new languages and in my free time i have created some websites or Applications also</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
