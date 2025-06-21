import React from "react";
import { BsMouse } from "react-icons/bs";
import {motion} from "framer-motion"

const Mouse: React.FC = () => {

  return (
    <motion.section className="mt-5 flex items-center justify-center" initial={{y:0}} animate={{y: [0, -10, 0], transition:{duration: 2,repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}}>
      <BsMouse className="w-7 h-7"/>
    </motion.section>
  );
};

export default Mouse;
