import React, { useContext } from "react";
import {motion} from "framer-motion"
import { ThemeContext } from "../../store/ThemeContext";

interface Props {
  name: string;
  color: string;
}

const Sticker: React.FC<Props> = ({ name, color }) => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <motion.div
      style={{ backgroundColor: color }}
      className={`absolute inline-block px-4 py-2 rounded-lg -top-[45%] z-[2] shadow-md font-semibold ${isDark? "text-[#0c1e41]" : "text-secondary"} `}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <h4>{name}</h4>
      {/* Triangle at the bottom */}
      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent`}
        style={{ borderTopColor: color }}
      ></div>
    </motion.div>
  );
};

export default Sticker;
