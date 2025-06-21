import React from "react";
import MainHeader from "./MainHeader";
import MobileHeader from "./MobileHeader";
import ThemeToggler from "../themetoggler/ThemeToggler";
import { useActiveSection } from "../../store/ActiveSection";
import ScrollObserver from "./ScrollObserver";
const Header: React.FC = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  return (
    <section className="header">
        <MainHeader
          active={activeSection}
          setActive={setActiveSection}
        />
        <MobileHeader
          active={activeSection}
          setActive={setActiveSection}
        />
        <ScrollObserver/>
      <ThemeToggler />
    </section>
  );
};

export default Header;
