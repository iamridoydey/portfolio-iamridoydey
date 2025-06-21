import React, { useContext } from "react";
import TagStart from "../basicUtility/TagStart";
import TagClosed from "../basicUtility/TagClosed";
import { ThemeContext } from "../../store/ThemeContext";
import { motion } from "framer-motion";
import IconBlock from "./IconBlock";

const OtherSkills: React.FC = () => {
  const { isDark } = useContext(ThemeContext) || {}; // Use optional chaining for safety

  const icons = [
    { name: "figma", img: "/icons/figma.svg", color: "#FF5733" },
    { name: "canva", img: "/icons/canva.svg", color: "#00c4cc" },
    { name: "linux", img: "/icons/linux.svg", color: "#FDDA0D" },
    { name: "git", img: "/icons/git.svg", color: "#EE4B2B" },
    { name: "vscode", img: "/icons/vscode.svg", color: "#6495ED" },
    { name: "postman", img: "/icons/postman.svg", color: "#FF5F1F" },
    { name: "docker", img: "/icons/docker.svg", color: "#0047AB" },
    { name: "aws", img: "/icons/aws.svg", color: "#FF5733" },
  ];

  const variants = {
    initial: { x: "-100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.2, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className={`other_skills h-fit p-4 self-center rounded-lg border-4 border-blue-500 hover:border-tertiary transition-colors duration-500 ease-out shadow-2xl ${
        isDark ? "bg-[#071f41bd]" : "bg-[#c5cbd5bd]"
      }`}
      variants={variants}
      initial="initial"
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
          Tools & Platform
          <span className="ml-1 lg:ml-2"></span>
          <TagClosed />
        </h2>
      </div>
      <div className="icons_container grid grid-cols-3 gap-4 px-6 py-2 mt-4">
        {icons.map((obj, index) => (
          <IconBlock
            key={index}
            name={obj.name}
            img={obj.img}
            color={obj.color}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OtherSkills;
