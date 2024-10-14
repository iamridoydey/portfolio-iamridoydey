import React, { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

const Title: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <div className="title py-4">
      <h2
        className={`text-2xl font-bold lg:text-3xl text-center pb-4 ${
          isDark ? "text-blue-400" : "text-black"
        }`}
      >
        How to reach me?
      </h2>
    </div>
  );
};

export default Title;
