import React from "react";
import "./App.css";
import MobileHeader from "./components/header/MobileHeader";
import ThemeToggler from "./components/themetoggler/ThemeToggler";
import { ThemeProvider } from "./store/ThemeContext";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <MobileHeader/>
      <ThemeToggler/>
    </ThemeProvider>
  );
};

export default App;
