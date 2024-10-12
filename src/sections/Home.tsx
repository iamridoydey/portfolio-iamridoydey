import React from "react";
import Profile from "../components/profile/Profile";
import Header from "../components/header/Header";

const Home: React.FC = () => {
  return (
    <section id="home" className="home_wrapper max-h-[100vh] flex flex-col gap-24">
      <Header/>
      <Profile/>
    </section>
  );
};

export default Home;
