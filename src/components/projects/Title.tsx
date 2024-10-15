import React, { useContext } from 'react'
import { ThemeContext } from '../../store/ThemeContext';

const Title:React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <div className="w-full h-full mt-4 md:my-4 md:pb-4">
      <h1
        className={`font-poppins text-2xl lg:text-3xl font-bold  text-center ${
          isDark ? "text-blue-100" : "text-black"
        }`}
      >
        My Projects
      </h1>
    </div>
  );
}

export default Title