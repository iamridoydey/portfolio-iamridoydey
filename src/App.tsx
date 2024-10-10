import React from "react";
import "./App.css";
import { ThemeProvider } from "./store/ThemeContext";
import Home from "./sections/Home";
import About from "./sections/About";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Home/>
      <About/>
    </ThemeProvider>
  );
};

export default App;
