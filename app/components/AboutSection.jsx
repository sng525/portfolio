"use client";
import React, { useState } from "react";
import { LibrarySquare, Briefcase, CodeXml } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ABOUT_ME_DATA = [
  {
    number: "01",
    title: "Education",
    description: (
      <ul className="space-y-5 w-auto mr-20 py-5">
        <li className="flex items-start space-x-4 bg-[#F9F9FC] rounded-lg shadow-md p-5 hover:bg-slate-200">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-purple-200 rounded-full">
            <span className="text-lg font-bold text-purple-700">I</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-purple-800">
              Object-oriented programming with AI-competence
            </h2>
            <p className="text-sm text-gray-600">
              NBI-Handelsakademin, Yrkeshögskolan
            </p>
          </div>
        </li>

        <li className="flex items-start space-x-4 bg-[#F9F9FC] rounded-lg shadow-md p-5 hover:bg-slate-200">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
            <span className="text-lg font-bold text-blue-700">II</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-800">
              International Relations
            </h2>
            <p className="text-sm text-gray-600">
              Beijing Foreign Studies University, Master
            </p>
          </div>
        </li>

        <li className="flex items-start space-x-4 bg-[#F9F9FC] rounded-lg shadow-md p-5 hover:bg-slate-200">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-green-200 rounded-full">
            <span className="text-lg font-bold text-green-700">III</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-800">
              Swedish and Literature
            </h2>
            <p className="text-sm text-gray-600">
              Beijing Foreign Studies University, Bachelor
            </p>
          </div>
        </li>
      </ul>
    ),
    color: "#D4BEE4",
    icon: <LibrarySquare className="text-[#A594F9] w-10 h-10" />,
  },
  {
    number: "02",
    title: "Work Experience",
    description: (
      <ul className="space-y-6 mr-20 py-5">
        <li className="bg-[#F3F4F6] p-5 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-800">
            Software Developer Intern, Zetes AB, Malmö
          </h3>
          <div className="mt-2 space-x-2">
            <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
              C#
            </span>
            <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
              .NET
            </span>
            <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
              WPF
            </span>
            <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
              XAML
            </span>
            <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
              API
            </span>
            <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
              JavaScript
            </span>
            <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
              Python
            </span>
          </div>
        </li>

        <li className="bg-[#F3F4F6] p-5 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-800">
            Operations Manager, Bybit & Huobi, Chengdu
          </h3>
          <div className="mt-2 space-x-2">
            <span className="inline-block bg-[#f3e4a2] text-green-600 px-2 py-1 rounded-full text-sm font-medium">
              Campaign Management
            </span>
            <span className="inline-block bg-[#f3e4a2] text-green-600 px-2 py-1 rounded-full text-sm font-medium">
              Data Analysis (Tableau)
            </span>
            <span className="inline-block bg-[#f3e4a2] text-green-600 px-2 py-1 rounded-full text-sm font-medium">
              User Experience
            </span>
            <span className="inline-block bg-[#f3e4a2] text-green-600 px-2 py-1 rounded-full text-sm font-medium">
              Product Flow Enhancements
            </span>
          </div>
        </li>

        <li className="bg-[#F3F4F6] p-5 rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-800">
            Swedish Language Engineer, FunPlus, Beijing
          </h3>
          <div className="mt-2 space-x-2">
            <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm font-medium">
              Rule-based Machine Translation
            </span>
            <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm font-medium">
              Data Extraction
            </span>
            <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm font-medium">
              Data Analysis
            </span>
          </div>
        </li>
      </ul>
    ),
    color: "#EEEEEE",
    icon: <Briefcase className="text-[#A594F9] w-10 h-10" />,
  },
  {
    number: "03",
    title: "Career Plan",
    description:
      "I aim to deepen my expertise in software development, especially in backend technologies and AI integration.",
    color: "#f3e4a2",
    icon: <CodeXml className="text-[#A594F9] w-10 h-10" />,
  },
];

const AboutSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="about" className="py-24 ">
      <h2 className="text-[#A594F9] text-4xl md:text-5xl font-bold text-center mb-12">
        ABOUT ME
      </h2>
      <div className="flex flex-col md:flex-row h-[1000px] md:h-[550px] overflow-x-auto overflow-y-hidden border border-neutral-900 ">
        {ABOUT_ME_DATA.map((section, index) => (
          <motion.div
            key={section.number}
            className="flex-shrink-0 h-ful"
            style={{ backgroundColor: section.color }}
            initial={{ width: index === activeStep ? "80%" : "10%" }}
            animate={{ width: index === activeStep ? "80%" : "10%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setActiveStep(index)}
          >
            <div className="py-5 h-full w-full flex border border-neutral-900">
              <div className="w-16 md:w-24 flex-shrink-0 flex flex-col justify-between text-center ">
                <span className="text-2xl font-bold">{section.number}</span>
                <span className="writing-vertical-lr text-sm font-semibold transform ">
                  {index !== activeStep && section.title}
                </span>
              </div>
              <AnimatePresence>
                {index === activeStep && (
                  <motion.div
                    className="flex-grow overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="mr-4 bg-white rounded-full p-2">
                        {section.icon}
                      </div>
                      <h2 className="text-3xl font-bold">{section.title}</h2>
                    </div>

                    <p className="text-lg">{section.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
