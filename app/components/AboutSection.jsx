"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title : "Skills",
        id : "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>C#</li>
                <li>ASP.NET</li>
                <li>Entity Framework</li>
                <li>JavaScript / TypeScript</li>
                <li>Unit Testing</li>
                <li>RESTful API</li>
                <li>Python</li>
                <li>SQL</li>
            </ul>
        )
    },
    {
        title : "Education",
        id : "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Object-oriented programming with AI-competence, NBI-Handelsakademin, Malmö</li>
                <li>International Relations, Beijing Foreign Studies University</li>
                <li>Swedish and Litterature, Beijing Foreign Studies University</li>
            </ul>
        )
    },
    {
        title : "Experience",
        id : "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Software Developer Intern, Zetes AB, Malmö</li>
                <li>Operantions Manager, Bybit & Huobi, Chengdu</li>
                <li>Swedish Language Engineer, FunPlus, Beijing</li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTranslation] = useTransition();

  const handleTabChange = (id) => {
    startTranslation(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-12 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about_image.jpg"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            If I could describe myself in one word, it would be " curious ".
            Curiosity has always driven me to explore and learn new things. My
            first job as Swedish language expert in machine translation sparked
            my interest in technology, leading me to decide to pivot my career
            toward development.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find(t => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
