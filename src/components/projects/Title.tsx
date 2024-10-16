import React, { useContext } from 'react'
import { ThemeContext } from '../../store/ThemeContext';
import { useWindowWidth } from '../../store/WindowContext';
import {motion} from "framer-motion"

const Title:React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
    const { width } = useWindowWidth();

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
      className="w-full h-full mt-4 md:my-4 md:pb-4"
      variants={variants}
      initial={width >= 1024 ? "initial" : "animate"}
      whileInView="animate"
    >
      <h1
        className={`font-poppins text-2xl lg:text-3xl font-bold  text-center ${
          isDark ? "text-blue-100" : "text-black"
        }`}
      >
        My Projects
      </h1>
    </motion.div>
  );
}

export default Title