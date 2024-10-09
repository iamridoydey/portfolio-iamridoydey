import React from "react";
import Profile from "../components/profile/Profile";
import Header from "../components/header/Header";

const Home: React.FC = () => {
  return (
    <section className="home">
      <Header/>
      <Profile />
    </section>
  );
};

export default Home;
