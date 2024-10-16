import React from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import { motion } from "framer-motion";

const AboutMain: React.FC = () => {
  const variants = {
    initial: { scale: 0.7, opacity: 0.9 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.4 },
    },
  };
  return (
    <motion.section
      className="flex flex-col md:flex-row items-center justify-between gap-8 lg:p-4"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <AboutLeft />
      <AboutRight />
    </motion.section>
  );
};

export default AboutMain;
