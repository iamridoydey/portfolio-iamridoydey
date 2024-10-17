import React, { useContext,} from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  // AiOutlineFile,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { ThemeContext } from "../../store/ThemeContext";

interface activeProps{
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const MobileHeader: React.FC<activeProps> = ({active, setActive}): JSX.Element => {
  const isDark = useContext(ThemeContext)?.isDark;

  return (
    <nav
      className={`${
        isDark ? "bg-[#071f41]" : "bg-white"
      } w-[95%] fixed z-[200] left-1/2 bottom-3 transform -translate-x-1/2 border flex justify-between gap-4 esm:gap-8 sm:gap-12 px-4 esm:px-8 py-3 rounded-lg shadow-xl lg:hidden`}
    >
      <a href="#home">
        <AiOutlineHome
          onClick={() => setActive("home")}
          className={`${
            active === "home"
              ? isDark
                ? "text-secondary"
                : "text-black"
              : "text-fadeGray"
          } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
        />
      </a>
      <a href="#about">
        <AiOutlineUser
          onClick={() => setActive("about")}
          className={`${
            active === "about"
              ? isDark
                ? "text-secondary"
                : "text-black"
              : "text-fadeGray"
          } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
        />
      </a>
      <a href="#skills">
        <FaLaptopCode
          onClick={() => setActive("skills")}
          className={`${
            active === "skills"
              ? isDark
                ? "text-secondary"
                : "text-black"
              : "text-fadeGray"
          } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
        />
      </a>
      <a href="#projects">
        <AiOutlineProject
          onClick={() => setActive("projects")}
          className={`${
            active === "projects"
              ? isDark
                ? "text-secondary"
                : "text-black"
              : "text-fadeGray"
          } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
        />
      </a>

      {/* Remove the resume section from here */}
      {/* <a href="#resume">
          <AiOutlineFile
            onClick={() => setActive("resume")}
            className={`${
              active === "resume"
                ? isDark
                  ? "text-secondary"
                  : "text-black"
                : "text-fadeGray"
            } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
          />
        </a> */}
      <a href="#contact">
        <AiOutlineMail
          onClick={() => setActive("contact")}
          className={`${
            active === "contact"
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
