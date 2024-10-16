import React, { useContext } from "react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { ThemeContext } from "../../store/ThemeContext";
import { motion } from "framer-motion";

const ManualContact: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  const variants = {
    initial: { scale: 0.8, opacity: 0.9 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className={`border-[2px] sm:border-2 md:border-4 ${
        isDark ? "" : "border-red-500"
      } hover:border-tertiary transition-colors duration-100 rounded p-4 sm:p-6 md:p-10 bg-gray-800 box-border text-md md:text-xl text-blue-200 font-semibold w-full`}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      {/* Import Statement */}
      <h3 className={`mb-4`}>
        <span className="text-pink-700">import</span> React{" "}
        <span className="text-pink-700">from</span>{" "}
        <span className="text-yellow-500">"react";</span>
      </h3>
      <h3 className={`my-4`}>
        <span className="text-pink-700">const</span>{" "}
        <span className="text-purple-400 pr-1">ManuallyContact</span>
        <span className="text-pink-700 pr-2 font-bold">:</span>
        <span className="text-blue-300 pr-1">React.FC</span>{" "}
        <span className="text-pink-700">=</span>
        () <span className="text-pink-700">=&gt;</span> &#123;
      </h3>
      <div className="pl-4 flex flex-col gap-4">
        {/* Main Data */}
        <div className="manual_contact flex flex-col gap-4">
          <h3>
            <span className="text-pink-700">const </span>
            <span className="text-purple-400">Email</span>
            <span className="text-pink-700"> = </span>
            <span className="text-yellow-500">"iamridoydey@gmail.com"</span>
          </h3>
          <h3>
            <span className="text-pink-700">const </span>
            <span className="text-purple-400">WhatsApp</span>
            <span className="text-pink-700"> = </span>
            <span className="text-yellow-500">"+8801931923862"</span>
          </h3>
        </div>
        <div className="social_contact flex items-center flex-wrap">
          <h3 className="flex gap-2 items-center">
            <span className="text-pink-700">const</span>{" "}
            <span className="text-purple-400">Socials</span> <span>=</span>{" "}
            <span className="text-pink-700 text-3xl pr-2">[</span>
          </h3>
          <ul className="flex gap-2 items-center text-secondary">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/iamridoydey/"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <span>,</span>
            <li>
              <a target="_blank" href="https://x.com/iamridoy_dey/">
                <FaXTwitter />
              </a>
            </li>
            <span>,</span>
            <li>
              <a target="_blank" href="https://www.facebook.com/iamridoydey/">
                <FaFacebookF />
              </a>
            </li>
          </ul>
          <span className="text-pink-700 text-3xl pl-2">]</span>
        </div>
        <h3>
          <span className="text-pink-700">return</span> &lt;&gt; &lt;/&gt;
        </h3>
        &#125;
      </div>
      <h3 className="pt-4">
        <span className="text-pink-700">export default</span>{" "}
        <span className="text-purple-400">ManuallyContact</span>;
      </h3>
    </motion.div>
  );
};

export default ManualContact;
