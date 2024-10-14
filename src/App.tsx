import React from "react";
import "./App.css";
import { ThemeProvider } from "./store/ThemeContext";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <main className={`max-w-[1440px] mx-auto px-4`}>
        <Home />
        <About />
        <Skills/>
        <Projects/>
      </main>
    </ThemeProvider>
  );
};

export default App;
