import React, { useContext, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineFile,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { ThemeContext } from "../../store/ThemeContext";

const MobileHeader: React.FC = (): JSX.Element => {
  const isDark = useContext(ThemeContext)?.isDark;

  const [activeBtn, setActiveBtn] = useState("");

  return (
      <nav
        className={`${
          isDark ? "bg-transparentGray" : "bg-white"
        } w-[95%] fixed left-1/2 bottom-3 transform -translate-x-1/2 border flex justify-between gap-4 esm:gap-8 sm:gap-12 px-4 esm:px-8 py-3 rounded-lg shadow-xl lg:hidden`}
      >
        <a href="#home">
          <AiOutlineHome
            onClick={() => setActiveBtn("home")}
            className={`${
              activeBtn === "home"
                ? isDark
                  ? "text-secondary"
                  : "text-black"
                : "text-fadeGray"
            } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
          />
        </a>
        <a href="#about">
          <AiOutlineUser
            onClick={() => setActiveBtn("about")}
            className={`${
              activeBtn === "about"
                ? isDark
                  ? "text-secondary"
                  : "text-black"
                : "text-fadeGray"
            } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
          />
        </a>
        <a href="#skills">
          <FaLaptopCode
            onClick={() => setActiveBtn("skills")}
            className={`${
              activeBtn === "skills"
                ? isDark
                  ? "text-secondary"
                  : "text-black"
                : "text-fadeGray"
            } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
          />
        </a>
        <a href="#projects">
          <AiOutlineProject
            onClick={() => setActiveBtn("projects")}
            className={`${
              activeBtn === "projects"
                ? isDark
                  ? "text-secondary"
                  : "text-black"
                : "text-fadeGray"
            } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
          />
        </a>
        <a href="#resume">
          <AiOutlineFile
            onClick={() => setActiveBtn("resume")}
            className={`${
              activeBtn === "resume"
                ? isDark
                  ? "text-secondary"
                  : "text-black"
                : "text-fadeGray"
            } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
          />
        </a>
        <a href="#contact">
          <AiOutlineMail
            onClick={() => setActiveBtn("contact")}
            className={`${
              activeBtn === "contact"
                ? isDark
                  ? "text-secondary"
                  : "text-black"
                : "text-fadeGray"
            } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
          />
        </a>
      </nav>
  );
};

export default MobileHeader;
