import React from "react";
import Profile from "../components/profile/Profile";
import Header from "../components/header/Header";
import { useActiveSection } from "../store/ActiveSection";

const Home: React.FC = () => {
  const { sectionsRefs } = useActiveSection();

  return (
    <section
      id="home"
      className="home_wrapper flex flex-col gap-24"
      ref={(el) => {
        if (sectionsRefs.current) {
          sectionsRefs.current.home = el;
        }
      }}
    >
      <Header />
      <Profile />
    </section>
  );
};

export default Home;
