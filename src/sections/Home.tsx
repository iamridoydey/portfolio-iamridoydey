import React from "react";
import MobileHeader from "../components/header/MobileHeader";
import MainHeader from "../components/header/MainHeader";
import ThemeToggler from "../components/themetoggler/ThemeToggler";

const Home: React.FC = () => {
  return <section className="home">
    <MainHeader/>
    <MobileHeader/>
    <ThemeToggler/>
  </section>
}

export default Home;