import React, { createContext, useState, useRef } from "react";

// Create a Context for the active section
export const ActiveSectionContext = createContext<
  | {
      activeSection: string;
      setActiveSection: React.Dispatch<React.SetStateAction<string>>;
      sectionsRefs: React.RefObject<{ [key: string]: HTMLElement | null }>; // Include sectionsRefs here
    }
  | undefined
>(undefined);

// Create a provider component
export const ActiveSectionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRefs = useRef<{ [key: string]: HTMLElement | null }>({
    home: null,
    about: null,
    skills: null,
    projects: null,
    contact: null,
  });

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, sectionsRefs }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

