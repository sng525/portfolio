"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTab from "./ProjectTab";

const projectsData = [
  {
    id: 1,
    title: "Steps Predictor",
    description:
      "A .NET MAUI app designed to predict users daily walking steps based on historical data with the help of machine learning.",
    image: "/projects/steps_predictor.jpg",
    tag: ["All", "C#"],
    gitUrl: "https://github.com/sng525/Steps_Predictor/tree/jiaojiao",
  },
  {
    id: 2,
    title: "Coffee Sharing Platform",
    description:
      "This web app allows users to log in, create a coffee record with a brand, type, rating, comment, and upload pictures.",
    image: "/projects/coffee_sharing.jpg",
    tag: ["All", "Web App"],
    gitUrl: "https://github.com/sng525/WebApp_Coffee-Sharing_Platform",
  },
  {
    id: 3,
    title: "WebShop Clean Coding",
    description:
      "The project aims to refactor and clean codes based on design patterns and clean code principles.",
    image: "/projects/clean_code.jpg",
    tag: ["All", "C#"],
    gitUrl: "https://github.com/sng525/WebShopCleanCode",
  },
];

const ProjectSection = () => {
  const [tab, setTab] = useState("All");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const filterProjects = projectsData.filter((project) => 
    project.tag.includes(tab));

  return (
    <>
      <h2 className="text-white text-4xl font-bold text-center mt-4 mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((project) => (
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
    </>
  );
};

export default ProjectSection;
