import React from 'react'
import { RiFileDownloadLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import MeImage from "../assets/Minal.png";

const Hero = () => {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center lg:px-80 md:px-20 px-10">
      <div className="absolute pointer-events-none inset-0 flex justify-center w-full h-full dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 justify-between gap-4">
        <div id="left" className="flex flex-col gap-4 col-span-1 lg:col-span-2 order-2 lg:order-1 ">
          <p className="text-2xl md:text-3xl lg:text-5xl">Hii i'm Minal 👋</p>
          <p className="font-Outfit pr-4 text-sm lg:text-xl md:text-lg">“ I'm Minal, an undergrad in Computer Science Engineering, passionate about mastering React, React Native, and tackling Data Structures & Algorithms (DSA). I can build apps that work (most of the time) and solve problems you probably didn’t think were solvable. Always ready to dive into new tech, break things, and maybe fix them too. Let’s see what goes wrong... together! ”</p>
          <div className="flex gap-8 font-Outfit font-semibold mt-4">
            <div className="px-3 py-1 border border-black dark:border-white rounded flex items-center gap-2 cursor-pointer dark:hover:bg-[#1f2837] hover:bg-gray-400 transition duration-500 ease-in-out">
              Resume <RiFileDownloadLine />
            </div>
            <div className="flex gap-4 items-center text-3xl ">
              <FaLinkedin className="cursor-pointer dark:hover:text-white text-gray-500 transition duration-500 ease-in-out hover:text-black" />
              <FaGithub className="cursor-pointer dark:hover:text-white text-gray-500 transition duration-500 ease-in-out hover:text-black" />
              <IoMdMail className="cursor-pointer dark:hover:text-white text-gray-500 transition duration-500 ease-in-out hover:text-black" />
            </div>
          </div>
        </div>
        <div id="right" className="col-span-1 flex items-center sm:justify-end order-1 lg:order-2 w-full h-full ">
          <img className="w-30 h-32 lg:w-80 lg:h-80 object-cover rounded-lg" src={MeImage} alt="Minal" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
