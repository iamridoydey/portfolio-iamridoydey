import React, { useContext, useState, useMemo } from "react";
import SlideItems from "./SlideItems";
import { ThemeContext } from "../../store/ThemeContext";
import { motion } from "framer-motion";

const Slider: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  const [slides, setSlides] = useState([
    {
      id: 0,
      title: "iamridoydey Portfolio",
      img: "/img/portfolio.png",
      description:
        "It is a portfolio project which is responsive and very fast. You will get a smooth experience of this website. Here I use a bunch of animations.",
      tech: [
        "/icons/html.svg",
        "/icons/css.svg",
        "/icons/tailwind.svg",
        "/icons/ts.svg",
        "/icons/react.svg",
        "/icons/framer.svg",
      ],
      live: "https://iamridoydey.vercel.app/",
      github: "https://github.com/iamridoydey/portfolio-iamridoydey",
    },
    {
      id: 1,
      title: "Job Sheild",
      img: "/img/jobsheild.png",
      description:
        "There is so many fraudulent companies around you. JobShield helps you identify and avoid fraudulent companies and spammers. ",
      tech: [
        "/icons/html.svg",
        "/icons/tailwind.svg",
        "/icons/ts.svg",
        "/icons/nextjs.svg",
        "/icons/mongodb.svg",
        "/icons/graphql.svg",
      ],
      live: "https://www.jobsheild.com/",
      github: "https://github.com/iamridoydey/jobsheild",
    },
    {
      id: 2,
      title: "LinkNQR",
      img: "/img/linkNQR.png",
      description:
        "It is a link shortner app where you can paste your url and get a short link that you can use anywhere you want. It also have analytics option to check how much time linked being clicked.",
      tech: [
        "/icons/html.svg",
        "/icons/css.svg",
        "/icons/js.svg",
        "/icons/ejs.svg",
        "/icons/nodejs.svg",
        `/icons/${isDark ? "express_white" : "express"}.svg`,
        "/icons/mongodb.svg",
        "/icons/jwt.svg",
      ],
      live: "https://linknqr.vercel.app/",
      github: "https://github.com/iamridoydey/LinkNQR",
    },
  ]);

  const [clickedIndex, setClickedIndex] = useState(0);

  // Create a Map for quick lookups
  const slidesMap = useMemo(() => {
    const map = new Map<number, number>();
    slides.forEach((slide, index) => {
      map.set(slide.id, index);
    });
    return map;
  }, [slides]);

  const handleEvent = (btnId: number) => {
    // Early return if the clicked button is already active
    if (btnId === clickedIndex) return;

    const actualIndex = slidesMap.get(btnId); // O(1) lookup
    if (actualIndex === undefined) return;

    // Swap slides in place for better performance
    setSlides((prevSlides) => {
      const updatedSlides = [...prevSlides]; // Create a shallow copy of the previous slides
      // Swapping the first slide with the actual index slide
      [updatedSlides[0], updatedSlides[actualIndex]] = [
        updatedSlides[actualIndex],
        updatedSlides[0],
      ];
      return updatedSlides;
    });
    setClickedIndex(btnId); // Update clicked index
  };

  const variants = {
    initial: { scale: 1, opacity: 0.9 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className="slider relative h-[460px] esm:h-[500px] sm:h-[560px] smd:h-[600px] md:h-[680px] xmd:h-[740px] lg:h-[540px] w-[300px] esm:w-[360px] sm:w-[480px] smd:w-[560px] md:w-[640px] xmd:w-[760px] lg:w-[840px] max-w-[900px] box-border flex items-center justify-center"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="slide_item_container w-full h-full flex flex-col justify-center items-center md:mt-6">
        {slides.map((slide, index) => (
          <SlideItems
            key={slide.id}
            index={index}
            title={slide.title}
            img={slide.img}
            description={slide.description}
            tech={slide.tech}
            live={slide.live}
            github={slide.github}
          />
        ))}

        {/* Dot Navigation */}
        <div className="navigation_container absolute z-[100] bottom-2 esm:bottom-3 sm:bottom-2 lg:bottom-4">
          <div className="dots flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot w-4 h-4 rounded-full ${
                  clickedIndex === index ? "bg-tertiary" : "bg-gray-300"
                }`}
                onClick={() => handleEvent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
