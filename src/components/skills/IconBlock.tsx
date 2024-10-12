import React from "react";
import { motion } from "framer-motion";
import { iconHoverAnimation } from "./Animation"; // Adjust the path as necessary

interface Icons {
  img: string;
  color: string;
}

const IconBlock: React.FC<Icons> = ({ img, color }) => {
  return (
    <motion.div
      style={{ borderColor: color }} // Set the border color dynamically
      className="icon_container min-w-16 min-h-16 max-w-32 max-h-32 box-border border-4 rounded-lg flex items-center justify-center p-2 lg:p-4 cursor-pointer"
      initial="initial" // Set initial variant
      whileHover="hover" // Use hover variant
      variants={iconHoverAnimation} // Apply the variants object
      custom={color} // Pass color to the variant function
    >
      <img className="w-full h-full" src={img} alt="skill-icon" />
    </motion.div>
  );
};

export default IconBlock;
