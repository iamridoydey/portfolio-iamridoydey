import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface btnClicked {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Counter: React.FC<btnClicked> = ({ isClicked, setIsClicked }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius; // Full circumference of the circle
  const [timeLeft, setTimeLeft] = useState(10); // Countdown starts at 10
  const [offset, setOffset] = useState(circumference); // Initial stroke offset is full circumference

  useEffect(() => {
    let interval: number | null = null;

    if (isClicked) {
      setTimeLeft(10); // Reset countdown if button is clicked
      setOffset(circumference); // Reset the stroke offset
      setIsClicked(false); // Stop animation


    } else {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            const newTimeLeft = prevTime - 1;
            // Update the stroke offset to fill clockwise
            setOffset(circumference * (newTimeLeft / 10)); // Calculate the new offset
            return newTimeLeft;
          } else {
            clearInterval(interval!); // Clear interval when countdown is done
            return 10; // Reset to 10 to start over
          }
        });
      }, 1000); // Update every second
    }

    return () => {
      if (interval) clearInterval(interval); // Clean up on component unmount
    };
  }, [isClicked, setIsClicked, circumference]);

  return (
    <div className="w-12 h-12 absolute top-5 right-10">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="text-white"
      >
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke={offset == 0 ? "#e3083d" : "#60a5fa"}
          strokeWidth="5"
          fill="transparent"
          strokeDasharray={circumference} // Full circle length
          strokeDashoffset={offset} // Animate stroke offset
          transition={{
            duration: 1, // Sync with countdown (1 second)
            ease: "linear", // Smooth transition
          }}
        />
      </motion.svg>
      {/* Display the countdown inside the circle */}
      <span className="text-white absolute inset-0 flex items-center justify-center text-lg">
        {timeLeft}s
      </span>
    </div>
  );
};

export default Counter;
