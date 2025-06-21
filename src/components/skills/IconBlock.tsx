import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { iconHoverAnimation } from "./Animation"; // Adjust the path as necessary
import Sticker from "../basicUtility/Sticker";
import { ThemeContext } from "../../store/ThemeContext";
import { useWindowWidth } from "../../store/WindowContext";

interface Icons {
  name: string;
  img: string;
  color: string;
}

const IconBlock: React.FC<Icons> = ({ name, img, color }) => {
  const isDark = useContext(ThemeContext)?.isDark;
  const { width } = useWindowWidth();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isSmall, setIsSmall] = useState(false);
  const [isTooSmall, setIsTooSmall] = useState(false);

  useEffect(() => {
    if (width <= 1024) {
      setIsSmall(true);
      setIsTooSmall(false);
    } else {
      if (width <= 480) {
        setIsTooSmall(true);
      }
      setIsSmall(false); // Reset when the screen size increases
    }
  }, [width]);

  return (
    <motion.div
      style={{ borderColor: color }} // Set the border color dynamically
      className={`icon_container relative min-w-16 max-w-32 box-border border-4 rounded-lg flex items-center ${
        isSmall ? "flex-col justify-between gap-2" : "justify-center"
      } p-1 sm:px-2 sm:py-4 lg:px-6 lg:py-8 cursor-pointer`}
      initial="initial" // Set initial variant
      whileHover="hover" // Use hover variant
      variants={iconHoverAnimation} // Apply the variants object
      custom={color} // Pass color to the variant function
      onHoverStart={() => setIsHovered(true)} // Handle hover start
      onHoverEnd={() => setIsHovered(false)} // Handle hover end
    >
      <figure className="w-full h-full">
        <img className="w-full h-full" src={img} alt="skill-icon" />
      </figure>
      {isSmall && isTooSmall && (
        <h4
          className={`text-sm sm:text-md smd:text-lg ${
            isDark ? "text-secondary" : "text-blue-950"
          } font-bold`}
        >
          {name}
        </h4>
      )}
      {isHovered && <Sticker name={name} color={color} />}{" "}
      {/* Show Sticker on hover */}
    </motion.div>
  );
};

export default IconBlock;
