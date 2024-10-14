import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { motion } from "framer-motion";

interface Items {
  index: number;
  title: string;
  img: string;
  description: string;
  tech: string[];
  handleEvent: (index: number) => void;
}

const SlideItems: React.FC<Items> = ({
  index,
  title,
  img,
  description,
  tech,
  handleEvent,
}) => {
  const isDark = useContext(ThemeContext)?.isDark;

  // Rotation for Framer Motion
  const rotation = index * -2; // Adjust for rotation smoothness
  const translation = index * -20; // Adjust for translation smoothness
  const scale = 1 - (index + 1) / 20;

  // Run the handleEvent every 10 seconds, passing the index
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleEvent(index); // Passing the index
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, [index, handleEvent]); // Dependencies: index and handleEvent

  return (
    <motion.div
      drag="x"
      onDragEnd={(event, info) => {
        if (info.offset.x < -20 || info.offset.x > 20) {
          handleEvent(index); // Move to the back when dragged
        }
      }}
      dragConstraints={{ left: -30, right: 30 }}
      whileTap={{ cursor: "grabbing" }}
      animate={{
        rotate: rotation,
        x: translation,
        scaleY: scale,
        zIndex: 10 - index,
      }}
      transition={{
        duration: 1, // Increased duration for smoother transitions
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth, natural motion
      }}
      className={`slide_item absolute h-[520px] w-full px-8 pt-12 ${
        isDark ? "bg-[#07273afa]" : "bg-secondary"
      }  slider_shadow rounded-lg box-border`}
    >
      <div className="main flex flex-nowrap gap-8">
        <div className="left flex flex-col gap-4">
          <h3
            className={`font-montserrat font-bold text-2xl ${
              isDark ? "text-blue-100" : "text-black"
            }`}
          >
            {title}
          </h3>
          <p
            className={`font-poppins font-semibold text-md ${
              isDark ? "text-blue-100" : "text-black"
            }`}
          >
            {description}
          </p>

          <div className="technologies">
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDark ? "text-blue-100" : "text-black"
              }`}
            >
              Technologies
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {tech.map((icon, techIndex) => (
                <figure key={techIndex} className="w-12 h-12">
                  <img className="w-full h-full" src={icon} alt="Tech icon" />
                </figure>
              ))}
            </div>
          </div>
        </div>
        <div className="right max-w-30">
          <img
            className="w-full h-auto rounded-lg"
            src={img}
            alt="Project screenshot"
          />
        </div>
      </div>
      <div className="buttons mt-4 flex gap-4">
        <a
          href="#"
          className="px-12 py-4 bg-tertiary text-secondary rounded-md hover:bg-blue-400"
        >
          Live Demo
        </a>
        <a
          href="#"
          className="px-12 py-4  bg-tertiary text-secondary rounded-md hover:bg-blue-400"
        >
          Github
        </a>
      </div>
    </motion.div>
  );
};

export default SlideItems;
