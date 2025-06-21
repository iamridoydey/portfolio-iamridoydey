import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggler: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggler must be used within a ThemeProvider");
  }

  const { isDark, setIsDark } = context;

  const toggleTheme = () => {
    setIsDark((prev) => !prev); // Toggle the theme
  };

  // Use useEffect to set the background color based on isDark state
  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("bg-primary");
    } else {
      body.classList.remove("bg-primary");
    }
  }, [isDark]); // Dependency array to run effect when isDark changes

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className={`w-12 h-12 z-20 rounded-full border-[0.5px] ${
          isDark ? "border-secondary" : "border-black"
        } fixed top-4 lg:top-[90vh] right-4 z-100 shadow-lg ${
          isDark ? "bg-primary text-white" : "bg-white text-black"
        }`}
      >
        {isDark ? (
          <IoMoonOutline className="m-auto w-full h-full p-2" />
        ) : (
          <IoSunnyOutline className="m-auto w-full h-full p-2" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggler;
