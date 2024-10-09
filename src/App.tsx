import React from "react";
import "./App.css";
import { ThemeProvider } from "./store/ThemeContext";
import Home from "./sections/Home";
import Header from "./sections/Header";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Header/>
      <Home/>
    </ThemeProvider>
  );
};

export default App;
