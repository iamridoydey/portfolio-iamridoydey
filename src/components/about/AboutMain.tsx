import React from "react";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const AboutMain: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 lg:p-4">
      <AboutLeft />
      <AboutRight />
    </section>
  );
};

export default AboutMain;
