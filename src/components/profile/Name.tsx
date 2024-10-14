import React, { useContext } from "react";
import { PiHandWavingDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { ThemeContext } from "../../store/ThemeContext";

const Name: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <section className="flex items-center justify-center gap-2 ">
      <h1 className={`text-3xl lg:text-4xl font-semibold font-montserrat ${isDark? "text-blue-300": "text-black"}`}>
        Hi, I'm Ridoy
      </h1>
      <motion.div
        animate={{ rotate: [0, -20, 10, 0, -20, 10, 0, -20, 0] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1
        }}
      >
        <PiHandWavingDuotone className="fill-tertiary text-3xl md:text-4xl lg:text-5xl" />
      </motion.div>
    </section>
  );
};

export default Name;
