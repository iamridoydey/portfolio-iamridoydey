import React from "react";
import MainHeader from "./MainHeader";
import MobileHeader from "./MobileHeader";
import ThemeToggler from "../themetoggler/ThemeToggler";
const Header: React.FC = () => {
  return (
    <section className="header">
      <MainHeader />
      <MobileHeader />
      <ThemeToggler />
    </section>
  );
};

export default Header;