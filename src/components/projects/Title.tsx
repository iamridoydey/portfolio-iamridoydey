import React, { useContext } from 'react'
import { ThemeContext } from '../../store/ThemeContext';

const Title:React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <section>
      <h1
        className={`font-poppins text-2xl lg:text-3xl font-bold my-6  lg:my-10 text-center ${
          isDark ? "text-blue-100" : "text-black"
        }`}
      >
        My Projects
      </h1>
    </section>
  );
}

export default Title