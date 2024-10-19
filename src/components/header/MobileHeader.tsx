import React, { useContext } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { ThemeContext } from "../../store/ThemeContext";
import { Link } from "react-router-dom";

interface activeProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const MobileHeader: React.FC<activeProps> = ({
  active,
  setActive,
}): JSX.Element => {
  const isDark = useContext(ThemeContext)?.isDark;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id); // Update active state
    }
  };

  return (
    <nav
      className={`${
        isDark ? "bg-[#071f41]" : "bg-white"
      } w-[95%] fixed z-[200] left-1/2 bottom-3 transform -translate-x-1/2 border flex justify-between gap-4 esm:gap-8 sm:gap-12 px-4 esm:px-8 py-3 rounded-lg shadow-xl lg:hidden`}
    >
      <Link
        to="/home"
        onClick={() => {
          setActive("home");
          scrollToSection("home");
        }}
      >
        <AiOutlineHome
          className={`${
            active === "home"
              ? isDark
                ? "text-secondary"
                : "text-black"
              : "text-fadeGray"
          } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
        />
      </Link>
      <Link
        to="/about"
        onClick={() => {
          setActive("about");
          scrollToSection("about");
        }}
      >
        <AiOutlineUser
          className={`${
            active === "about"
              ? isDark
                ? "text-secondary"
                : "text-black"
              : "text-fadeGray"
          } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
        />
      </Link>
      <Link
        to="/skills"
        onClick={() => {
          setActive("skills");
          scrollToSection("skills");
        }}
      >
        <FaLaptopCode
          className={`${
            active === "skills"
              ? isDark
                ? "text-secondary"
                : "text-black"
              : "text-fadeGray"
          } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
        />
      </Link>
      <Link
        to="/projects"
        onClick={() => {
          setActive("projects");
          scrollToSection("projects");
        }}
      >
        <AiOutlineProject
          className={`${
            active === "projects"
              ? isDark
                ? "text-secondary"
                : "text-black"
              : "text-fadeGray"
          } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
        />
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          setActive("contact");
          scrollToSection("contact");
        }}
      >
        <AiOutlineMail
          className={`${
            active === "contact"
              ? isDark
                ? "text-secondary"
                : "text-black"
              : "text-fadeGray"
          } w-6 h-6 esm:w-7 esm:h-7 sm:w-8 sm:h-8 cursor-pointer`}
        />
      </Link>
    </nav>
  );
};

export default MobileHeader;
