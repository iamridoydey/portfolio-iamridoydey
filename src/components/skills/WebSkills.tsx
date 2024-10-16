import React, { useContext } from "react";
import TagStart from "../basicUtility/TagStart";
import TagClosed from "../basicUtility/TagClosed";
import { ThemeContext } from "../../store/ThemeContext";
import IconBlock from "./IconBlock";
import {motion} from "framer-motion"
import { useWindowWidth } from "../../store/WindowContext";

const WebSkills: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  const icons = [
    { img: "/icons/html.svg", color: "#E34F26" },
    { img: "/icons/css.svg", color: "#1572B6" },
    { img: "/icons/js.svg", color: "#F7DF1E" },
    { img: "/icons/ts.svg", color: "#3178C6" },
    { img: "/icons/nodejs.svg", color: "#339933" },
    { img: "/icons/react.svg", color: "#61DAFB" },
    { img: "/icons/bootstrap.svg", color: "#7952B3" },
    { img: "/icons/tailwind.svg", color: "#06B6D4" },
    { img: `/icons/${isDark? "express_white": "express"}.svg`, color: `${isDark? "#ffffff" : "#000000"}` },
    { img: "/icons/mongodb.svg", color: "#47A248" },
    { img: "/icons/postgresql.svg", color: "#336791" },
    { img: "/icons/python.svg", color: "#3776AB" },
  ];

  const {width} = useWindowWidth()
  const variants = {
    initial: { x: "100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.2, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className={`web_skills max-w-[548px] lg:max-w-auto p-6 lg:p-10 m-auto lg:m-10 h-fit rounded-lg border-4 border-blue-500 hover:border-tertiary transition-colors duration-500 ease-out ${
        isDark ? "bg-[#071f41bd]" : "bg-[#c5cbd5bd]"
      }`}
      variants={variants}
      initial={width >= 1024 ? "initial" : "animate"}
      whileInView="animate"
    >
      <div
        className={`skills_title font-bold text-xl md:text-2xl lg:text-3xl text-center ${
          isDark ? "text-blue-100" : "text-black"
        }`}
      >
        <h2>
          <TagStart />
          <span className="mr-1 lg:mr-2"></span>
          WebDevelopment
          <span className="ml-1 lg:ml-2"></span>
          <TagClosed />
        </h2>
      </div>

      <div className="icons_container grid grid-cols-3 gap-4 mt-8">
        {icons.map((obj, index) => (
          <IconBlock key={index} img={obj.img} color={obj.color} />
        ))}
      </div>
    </motion.div>
  );
};

export default WebSkills;
