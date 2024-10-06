import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineFile,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

const MobileHeader: React.FC = (): JSX.Element => {
  return (
    <section className="bg-mbNavBg dark:bg-mbNavDarkBg flex justify-between gap-6 mx-8 mt-4 px-8 py-4 rounded-lg shadow-lg">
      <AiOutlineHome className="text-black dark:text-white w-6 h-6 cursor-pointer focus:text-[#1e1d1d]" />
      <AiOutlineUser className="text-black dark:text-white w-6 h-6 cursor-pointer" />
      <FaLaptopCode className="text-black dark:text-white w-6 h-6 cursor-pointer" />
      <AiOutlineProject className="text-black dark:text-white w-6 h-6 cursor-pointer" />
      <AiOutlineFile className="text-black dark:text-white w-6 h-6 cursor-pointer" />
      <AiOutlineMail className="text-black dark:text-white w-6 h-6 cursor-pointer" />
    </section>
  );
};

export default MobileHeader;
