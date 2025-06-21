// WindowWidthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context type
interface WindowWidthContextType {
  width: number;
}

// Create the context
const WindowWidthContext = createContext<WindowWidthContextType | undefined>(
  undefined
);

// Create a provider component
export const WindowWidthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={{ width }}>
      {children}
    </WindowWidthContext.Provider>
  );
};

// Create a custom hook to use the context
export const useWindowWidth = (): WindowWidthContextType => {
  const context = useContext(WindowWidthContext);
  if (context === undefined) {
    throw new Error("useWindowWidth must be used within a WindowWidthProvider");
  }
  return context;
};
