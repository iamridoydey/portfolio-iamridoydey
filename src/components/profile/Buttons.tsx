import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineFile } from "react-icons/ai";
import { motion } from "framer-motion";

const Buttons: React.FC = () => {
  return (
    <section
      className={`w-full mt-6 sm:mt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 text-secondary`}
    >
      <motion.a
        className="project_btn w-[80%] sm:w-[200px]"
        target="_blank"
        href="https://github.com/iamridoydey"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { ease: "easeInOut", delay: 0.2 },
        }}
      >
        <button className="w-full flex flex-nowrap items-center justify-center gap-3 font-montserrat font-semibold bg-tertiary hover:bg-blue-300 px-6 py-3 rounded-md shadow-lg">
          <IoLogoGithub className="w-6 h-6" />
          <span>Me On Github</span>
        </button>
      </motion.a>
      <motion.a
        className="resume_btn w-[80%] sm:w-[200px]"
        target="_blank"
        href="/documents/iamridoydey.pdf"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { ease: "easeInOut", delay: 0.2 },
        }}
      >
        <button className="w-full flex flex-nowrap items-center justify-center gap-3 font-montserrat font-semibold bg-btnGray hover:bg-blue-300 px-6 py-3 rounded-md shadow-lg">
          <AiOutlineFile className="w-6 h-6" />
          My Resume
        </button>
      </motion.a>
    </section>
  );
};

export default Buttons;
