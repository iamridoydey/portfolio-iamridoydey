import React from "react";
import "./App.css";
import { ThemeProvider } from "./store/ThemeContext";
import Home from "./sections/Home";
import About from "./sections/About";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <main className={`max-w-[1440px] mx-auto px-4`}>
        <Home />
        <About />
      </main>
    </ThemeProvider>
  );
};

export default App;
