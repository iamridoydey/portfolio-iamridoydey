import React, { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { useWindowWidth } from "../../store/WindowContext";
import { motion } from "framer-motion";

const Title: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  const { width } = useWindowWidth();

  const variants = {
    initial: { x: "100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className="title py-4"
      variants={variants}
      initial={width >= 1024 ? "initial" : "animate"}
      whileInView="animate"
    >
      <h2
        className={`text-2xl font-bold lg:text-3xl text-center pb-4 ${
          isDark ? "text-blue-400" : "text-black"
        }`}
      >
        How to reach me?
      </h2>
    </motion.div>
  );
};

export default Title;
