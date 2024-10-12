import { Variants } from "framer-motion";

export const iconHoverAnimation: Variants = {
  initial: {
    scale: 1,
    boxShadow: "0 0 0 0 transparent", // No shadow initially
  },
  hover: (color: string) => ({
    scale: 0.95, // Fast scale effect
    boxShadow: `0 0 0 0 ${color}`, // Initial shadow state
    transition: {
      scale: {
        duration: 0.5, // Fast scale effect
        ease: "easeInOut",
      },
      boxShadow: {
        duration: 1, // Duration for boxShadow
        ease: "easeInOut",
        delay: 0.1, // Slight delay after scaling
        repeat: Infinity, // Repeats infinitely
        repeatDelay: 1, // Delay between repeats
        keyframes: [
          `0 0 0 0 ${color}20`, // Faint shadow
          `0 0 5px 3px ${color}90`, // Spread and slightly stronger
          `0 0 10px 6px ${color}80`, // More spread, slightly faded
          `0 0 0 0 ${color}10`, // Shrink back to faint shadow
        ],
      },
    },
  }),
};
