"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 py-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
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
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            As the left top corner shows, my last name is SONG. 
            I love exploring new things, keeping myselft updated and working on solving problems.
          </p>
          <div className="flex flex-row items-center">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-secondary-600 to-secondary-500 hover:bg-green-300 text-white">
              Contact Me
            </button>
            <button className="border w-full sm:w-fit rounded-full text-green-700">
              <span className="flex items-center w-full sm:w-fit  px-4 py-3 gap-2 rounded-full hover:bg-green-300 ">
                Download CV
                <FiDownload className="text-xl"/>
              </span>

            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#15803d] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/my_profile.png"
              alt="profile image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={370}
              height={370}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
