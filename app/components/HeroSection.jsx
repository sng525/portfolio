"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 py-12 text-black dark:text-white">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hey, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Jiaojiao",
                1000,
                "Software Developer",
                1000,
                "Tech Enthusiast",
                1000,
                "Problem Solver",
                1000,
                "Coffee Lover",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl mb-6">
            I love exploring new things, keeping myself updated, and solving
            problems.
          </p>
          <div className="flex flex-row items-center justify-evenly sm:justify-start">
            <button className="border border-green-700 sm:w-fit sm:justify-center rounded-full text-green-700  hover:bg-green-300 hover:text-black transition-all duration-300 ">
              <a
                href="/public/CV_Jiaojiao Song.pdf"
                download="CV_Jiaojiao Song.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center sm:w-fit  px-4 py-3 gap-2 ">
                  Download CV
                  <FiDownload className="text-xl" />
                </span>
              </a>
            </button>
            <div className="flex items-center justify-between">
              <div className="px-4">
                <Link href="https://github.com/sng525">
                  <FaGithub className="text-[#A594F9] w-8 h-8 hover:bg-green-300" />
                </Link>
              </div>
              <Link href="https://www.linkedin.com/in/jiaojiao-song/">
                <FaLinkedin className="text-[#A594F9] w-8 h-8 hover:bg-green-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            className="rounded-full bg-[#A594F9] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/my_profile.png"
              alt="profile image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={370}
              height={370}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
