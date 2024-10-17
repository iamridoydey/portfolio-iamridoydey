import React, { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { motion } from "framer-motion";

const Title: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  const variants = {
    initial: { x: "-100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className="w-full h-full"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <h1
        className={`font-poppins py-4 text-2xl lg:text-3xl font-bold text-center ${
          isDark ? "text-blue-300" : "text-black"
        }`}
      >
        My Latest Projects
      </h1>
    </motion.div>
  );
};

export default Title;
