import React, { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { motion } from "framer-motion";

const Title: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  const variants = {
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className="title py-4"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <h2
        className={`text-xl font-bold lg:text-3xl text-center ${
          isDark ? "text-blue-400" : "text-black"
        }`}
      >
        My TechStack and Other Skills
      </h2>
    </motion.div>
  );
};

export default Title;
