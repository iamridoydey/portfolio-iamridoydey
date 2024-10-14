import React, { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

const About: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <section className="w-1/2 md:w-auto px-10 lg:w-[800px] text-center">
      <p
        className={`text-xl font-medium hidden md:block  ${
          isDark ? "text-blue-100" : "text-black"
        }`}
      >
        My name is Ridoy Chandra Dey, a passionate fullstack developer focused
        on creating intuitive and impactful digital experiences. Here I showcase
        my work and my passion for development. Let's do something more cool
      </p>
    </section>
  );
};

export default About;
