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
        I am a passionate{" "}
        <span className="font-medium">Developer</span> with a penchant for learning and versatility.
        With a journey that began at the age of 18;  I've cultivated a deep-seated interest for{" "}
        <span className="font-medium">technology</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.{" "}
        <span className="underline">My interests have since broadened to encompass other technologies</span>{" "}
        This curiosity drove me to pursue certifications in{" "}
        <span className="font-medium">
        Google Data Analytics and AWS Cloud Practitioner.{" "}
        </span>
        <span className="underline">I thrive on challenges</span>{" "}
        finding joy in adapting to new technologies and environments, constantly seeking opportunities to expand my skills and{" "}
        <span className="italic">
        make meaningful contributions 
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        chess, watching movies, and going outside. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. 
      </p>
    </motion.section>
  );
}