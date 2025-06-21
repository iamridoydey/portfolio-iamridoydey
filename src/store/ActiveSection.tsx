import { useContext } from "react";
import { ActiveSectionContext } from "./ActiveSectionContext";
// Custom hook to use the ActiveSectionContext
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};
