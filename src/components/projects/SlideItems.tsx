import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { motion } from "framer-motion";

interface Items {
  index: number;
  title: string;
  img: string;
  description: string;
  tech: string[];
}

const SlideItems: React.FC<Items> = React.memo(
  ({ index, title, img, description, tech }) => {
    const isDark = useContext(ThemeContext)?.isDark;
    const [isLargeScreen, setIsLargeScreen] = useState(
      window.innerWidth >= 1024
    );

    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 1024);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    // Rotation for Framer Motion
    const rotation = isLargeScreen ? index * -2 : 0;
    const translation = isLargeScreen ? index * -20 : 0;
    const scale = isLargeScreen ? 1 - (index + 1) / 20 : 1;

    return (
      <motion.div
        animate={{
          rotate: rotation,
          x: translation,
          scaleY: scale,
          zIndex: 10 - index,
          transition: {
            ease: "easeInOut",
          },
        }}
        transition={{
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={`slide_item absolute w-full px-8 pt-8 pb-16 md:p-16 ${
          isDark ? "bg-[#07273afa]" : "bg-secondary"
        } slider_shadow rounded-lg box-box border-2 hover:border-tertiary transition-colors duration-100`}
      >
        <div className="main w-full flex flex-nowrap gap-8">
          <div className="left flex flex-col gap-4">
            <h3
              className={`font-montserrat font-bold text-xl lg:text-2xl ${
                isDark ? "text-blue-100" : "text-black"
              }`}
            >
              {title}
            </h3>

            {/* Mobile img view */}
            <figure className="w-full max-w-[600px] lg:hidden ">
              <img
                className="w-full h-auto border rounded-lg"
                src={img}
                alt="Project screenshot"
                loading="lazy"
              />
            </figure>

            <p
              className={`hidden lg:block font-poppins font-semibold text-md ${
                isDark ? "text-blue-100" : "text-black"
              }`}
            >
              {description}
            </p>

            <div className="technologies">
              <h3
                className={`text-lg lg:text-xl font-semibold mb-3 ${
                  isDark ? "text-blue-100" : "text-black"
                }`}
              >
                Technologies
              </h3>
              <div className="flex flex-nowrap gap-3 overflow-hidden lg:grid lg:grid-cols-4">
                {tech.map((icon, techIndex) => (
                  <figure
                    key={techIndex}
                    className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12"
                  >
                    <img
                      className="w-full h-full"
                      src={icon}
                      alt="Tech icon"
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
          <div className="right hidden lg:block">
            <img
              className="w-full h-auto rounded-lg"
              src={img}
              alt="Project screenshot"
              loading="lazy"
            />
          </div>
        </div>
        <div className="buttons mt-4 flex flex-col lg:flex-row gap-4">
          <a
            href="#"
            className="px-12 py-2 md:py-3 bg-tertiary text-center font-bold text-secondary rounded-md hover:bg-blue-400"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="px-12 py-2 md:py-3 bg-tertiary text-center font-bold text-secondary rounded-md hover:bg-blue-400"
          >
            Github
          </a>
        </div>
      </motion.div>
    );
  }
);

export default SlideItems;
