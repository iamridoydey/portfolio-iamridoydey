import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineFile } from "react-icons/ai";
import {motion} from "framer-motion"

const Buttons:React.FC = () => {
  return (
    <section
      className={`flex items-center justify-center gap-8 text-secondary`}
    >
      <motion.a
        href="#projects"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { ease: "easeInOut", delay: 0.2 },
        }}
      >
        <button className="flex flex-nowrap items-center justify-between gap-3 font-montserrat font-semibold bg-tertiary hover:bg-blue-300 px-6 py-3 rounded-md shadow-lg">
          <IoLogoGithub className="w-6 h-6" />
          <span>My Projects</span>
        </button>
      </motion.a>
      <motion.a
        href="#contact"
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { ease: "easeInOut", delay: 0.2 },
        }}
      >
        <button className="flex flex-nowrap items-center justify-between gap-3 font-montserrat font-semibold bg-btnGray hover:bg-blue-300 px-6 py-3 rounded-md shadow-lg">
          <AiOutlineFile className="w-6 h-6" />
          <a target='_blank' href="/documents/iamridoydey.pdf">My Resume</a>
        </button>
      </motion.a>
    </section>
  );
}

export default Buttons;