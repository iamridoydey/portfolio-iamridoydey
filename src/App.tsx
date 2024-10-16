import React from "react";
import "./App.css";
import { ThemeProvider } from "./store/ThemeContext";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { motion, useScroll, useSpring } from "framer-motion";


const App: React.FC = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <ThemeProvider>
      {/* Main content */}
      <main className="relative max-w-[1440px] mx-auto md:px-4">
        {/* Scroll Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="fixed w-full top-0 left-0 h-2 bg-[#13829a] origin-left z-[1000]"
        ></motion.div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
};

export default App;
