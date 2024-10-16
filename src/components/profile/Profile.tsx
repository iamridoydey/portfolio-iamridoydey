import React, { useContext } from "react";
import ProfilePic from "./ProfilePic";
import Name from "./Name";
import Title from "./Title";
import About from "./About";
import { ThemeContext } from "../../store/ThemeContext";
import Buttons from "./Buttons";
import Mouse from "./Mouse";
import VerticalBarIcons from "./VerticalBarIcons";
import { motion } from "framer-motion";

const Profile: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  // Staggering the appearance of child elements
  const containerVariants = {
    hidden: { opacity: 0, y: "-50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        staggerChildren: 0.3, // Stagger children by 0.2 seconds
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className={`h-[100vh] flex flex-col items-center gap-2 md:gap-5 relative ${
        isDark ? "text-secondary" : "text-black"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Pic */}
      <motion.div variants={childVariants}>
        <ProfilePic />
      </motion.div>

      {/* Name */}
      <motion.div variants={childVariants}>
        <Name />
      </motion.div>

      {/* Title */}
      <motion.div variants={childVariants}>
        <Title />
      </motion.div>

      {/* About */}
      <motion.div variants={childVariants}>
        <About />
      </motion.div>

      {/* Buttons */}
      <motion.div className="w-full" variants={childVariants}>
        <Buttons />
      </motion.div>

      {/* Mouse */}
      <motion.div variants={childVariants}>
        <Mouse />
      </motion.div>

      <VerticalBarIcons />
    </motion.section>
  );
};

export default Profile;
