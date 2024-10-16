import React from "react";
import "./App.css";
import { ThemeProvider } from "./store/ThemeContext";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import CursorEffect from "./components/basicUtility/CursorEffect";
import { WindowWidthProvider } from "./store/WindowContext";

const App: React.FC = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <ThemeProvider>
      <WindowWidthProvider>
        <main className={`relative w-full h-full`}>
          <CursorEffect />
          <section className="relative max-w-[1440px] mx-auto md:px-4">
            <motion.div
              style={{ scaleX }}
              className="fixed w-full top-0 left-0 h-2 bg-[#13829a] origin-left z-[1000]"
            ></motion.div>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </section>
        </main>
      </WindowWidthProvider>
    </ThemeProvider>
  );
};

export default App;
