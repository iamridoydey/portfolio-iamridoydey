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
      body.classList.add("bg-darkBg");
    } else {
      body.classList.remove("bg-darkBg");
    }
  }, [isDark]); // Dependency array to run effect when isDark changes


  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className={`w-10 h-10 rounded-full border fixed top-5 right-4 shadow-lg ${
          isDark ? "bg-mbNavDarkBg text-white" : "bg-gray-200 text-black"
        }`}
      >
        {isDark ? (
          <IoMoonOutline className="m-auto" />
        ) : (
          <IoSunnyOutline className="m-auto" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggler;
