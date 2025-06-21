import React, { ReactNode, useState } from "react";

// Define a interface for theme context
interface ThemeColor {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>; // Add the setIsDark function
}

//Define a interface for the props of the provider
interface ThemeProviderProps {
  children: ReactNode;
}

// Define a background
export const ThemeContext = React.createContext<ThemeColor | undefined>(
  undefined
);

// Theme provider
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);


  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      {children}
    </ThemeContext.Provider>
  )
};
