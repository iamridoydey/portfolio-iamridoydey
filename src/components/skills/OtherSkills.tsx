import React, { useContext } from "react";
import TagStart from "../basicUtility/TagStart";
import TagClosed from "../basicUtility/TagClosed";
import { ThemeContext } from "../../store/ThemeContext";
import { iconHoverAnimation } from "./Animation";
import { motion } from "framer-motion";

const OtherSkills: React.FC = () => {
  const { isDark } = useContext(ThemeContext) || {}; // Use optional chaining for safety

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
      className={`other_skills h-fit p-6 self-center rounded-lg border-4 border-blue-500 hover:border-tertiary transition-colors duration-500 ease-out shadow-2xl ${
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
          Design
          <span className="ml-1 lg:ml-2"></span>
          <TagClosed />
        </h2>
      </div>
      <div className="icons_container grid grid-cols-2 gap-6 px-6 py-2 mt-4">
        <motion.div
          className={`penpot_container min-w-16 min-h-16 max-w-32 max-h-32 box-border border-4 rounded-lg flex items-center justify-center p-4`}
          style={{ borderColor: isDark ? "#fff" : "#000" }}
          initial="initial"
          whileHover="hover" // Use hover variant
          variants={iconHoverAnimation} // Apply the variants object
          custom={isDark ? "#ffffff" : "#000000"}
        >
          <img
            className="penpot w-full h-full"
            src={isDark ? "/icons/penpot_white.svg" : "/icons/penpot.svg"}
            alt="Penpot icon"
          />
        </motion.div>
        <motion.div
          className={`canva_container min-w-16 min-h-16 max-w-32 max-h-32 box-border border-4 rounded-lg flex items-center justify-center p-4`}
          style={{ borderColor: "#00c4cc" }}
          initial="initial"
          whileHover="hover" // Use hover variant
          variants={iconHoverAnimation} // Apply the variants object
          custom={"#00c4cc"}
        >
          <img
            className="canva w-full h-full"
            src="/icons/canva.svg"
            alt="Canva icon"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OtherSkills;
