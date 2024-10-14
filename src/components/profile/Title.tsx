import React from "react";
import { motion, useAnimation } from "framer-motion";

const Title: React.FC = () => {
  const controls = useAnimation();

  // Start the background animation
  React.useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Animate the background position
      transition: {
        duration: 5, // Duration for one complete cycle
        ease: "linear", // Smooth linear movement
        repeat: Infinity, // Repeat the animation infinitely
      },
    });
  }, [controls]);

  return (
    <section className="flex items-center justify-center mt-3">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold bg-gradient-to-r from-tertiary via-blue-400 to-tertiary bg-clip-text text-transparent max-w-fit"
        animate={controls} // Use the animation controls
        style={{
          backgroundSize: "200% 200%", // Allow room for background movement
        }}
      >
        Fullstack Web Developer
      </motion.h1>
    </section>
  );
};

export default Title;
