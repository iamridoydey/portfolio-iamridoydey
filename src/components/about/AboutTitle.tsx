import React, { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { motion } from "framer-motion";

const AboutTitle: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  const variants = {
    initial: { x: "-100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.section
      className="w-full"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <h1
        className={`font-poppins text-center text-2xl md:text-3xl font-bold my-10 ${
          isDark ? "text-blue-100" : "text-black"
        }`}
      >
        Here Are Few Quotes about myself
      </h1>
    </motion.section>
  );
};

export default AboutTitle;
