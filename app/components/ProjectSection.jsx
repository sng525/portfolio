"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTab from "./ProjectTab";
import { motion, useAnimation, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Steps Predictor",
    description:
      "A .NET MAUI app designed to predict users daily walking steps intergrated with machine learning.",
    image: "/projects/steps_predictor.jpg",
    gitUrl: "https://github.com/sng525/Steps_Predictor/tree/jiaojiao",
  },
  {
    id: 2,
    title: "Coffee Sharing Platform",
    description:
      "This web app allows users to log in, create a coffee record with a brand, type, rating, comment, and upload pictures.",
    image: "/projects/coffee_sharing.jpg",
    gitUrl: "https://github.com/sng525/WebApp_Coffee-Sharing_Platform",
  },
  {
    id: 3,
    title: "WebShop Clean Coding",
    description:
      "The project aims to refactor and clean codes based on design patterns and clean code principles.",
    image: "/projects/clean_code.jpg",
    gitUrl: "https://github.com/sng525/WebShopCleanCode",
  },
];

const ProjectSection = () => {
  /*   const [tab, setTab] = useState("All");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  }; */

  // const filterProjects = projectsData.filter((project) =>
  //   project.tag.includes(tab));
  const controls = useAnimation()

  return (
    <section id="projects">
      <div
        className="grid gap-8 lg:grid-cols-[1fr,2fr]"
      >
        <motion.h2
          className="text-[#A594F9] text-2xl font-bold tracking-tight lg:text-4xl xl:text-4xl"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
            },
          }}
        >
          WHAT I HAVE DONE
          <br />
          WITH PROGRAMMING
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
          />
        ))}
        </div>
        {/* <h2 className="text-[#A594F9] text-4xl md:text-5xl font-bold text-center mb-12">
        WHAT I HAVE DONE WITH PROGRAMMING
      </h2> */}
        {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTab
          onClick={handleTabChange}
          name={"All"}
          isSelected={tab === "All"}
        />
        <ProjectTab
          onClick={handleTabChange}
          name={"C#"}
          isSelected={tab === "C#"}
        />
        <ProjectTab
          onClick={handleTabChange}
          name={"Web App"}
          isSelected={tab === "Web App"}
        />
      </div> */}
        {/* <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
          />
        ))}
      </div> */}
      </div>
    </section>
  );
};

export default ProjectSection;
