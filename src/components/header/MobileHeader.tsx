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
    <div className="relative">
      <section
        className={`${
          isDark ? "dark:bg-mbNavDarkBg" : "bg-white"
        } fixed left-1/2 bottom-5 transform -translate-x-1/2 border flex justify-between gap-6 esm:gap-10 px-8 py-2 rounded-lg shadow-xl`}
      >
        <AiOutlineHome
          onClick={() => setActiveBtn("home")}
          className={`${
            activeBtn === "home"
              ? "text-mbClickColor"
              : isDark
              ? "dark:text-white"
              : "text-black"
          } w-6 h-6 cursor-pointer grow`}
        />
        <AiOutlineUser
          onClick={() => setActiveBtn("about")}
          className={`${
            activeBtn === "about"
              ? "text-mbClickColor"
              : isDark
              ? "dark:text-white"
              : "text-black"
          } w-6 h-6 cursor-pointer grow`}
        />
        <FaLaptopCode
          onClick={() => setActiveBtn("skills")}
          className={`${
            activeBtn === "skills"
              ? "text-mbClickColor"
              : isDark
              ? "dark:text-white"
              : "text-black"
          } w-6 h-6 cursor-pointer grow`}
        />
        <AiOutlineProject
          onClick={() => setActiveBtn("projects")}
          className={`${
            activeBtn === "projects"
              ? "text-mbClickColor"
              : isDark
              ? "dark:text-white"
              : "text-black"
          } w-6 h-6 cursor-pointer grow`}
        />
        <AiOutlineFile
          onClick={() => setActiveBtn("resume")}
          className={`${
            activeBtn === "resume"
              ? "text-mbClickColor"
              : isDark
              ? "dark:text-white"
              : "text-black"
          } w-6 h-6 cursor-pointer grow`}
        />
        <AiOutlineMail
          onClick={() => setActiveBtn("contact")}
          className={`${
            activeBtn === "contact"
              ? "text-mbClickColor"
              : isDark
              ? "dark:text-white"
              : "text-black"
          } w-6 h-6 cursor-pointer grow`}
        />
      </section>
    </div>
  );
};

export default MobileHeader;
