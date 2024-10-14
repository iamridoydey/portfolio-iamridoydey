import React from "react";
import "./App.css";
import { ThemeProvider } from "./store/ThemeContext";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <main className={`max-w-[1440px] mx-auto md:px-4`}>
        <Home />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </ThemeProvider>
  );
};

export default App;