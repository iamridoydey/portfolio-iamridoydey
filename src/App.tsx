import React from "react";
import "./App.css";
import { ThemeProvider } from "./store/ThemeContext";
import Home from "./sections/Home";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <div className="h-120vh">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
