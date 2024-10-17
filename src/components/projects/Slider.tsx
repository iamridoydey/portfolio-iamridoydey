import React, { useContext, useState } from "react";
import SlideItems from "./SlideItems";
import { ThemeContext } from "../../store/ThemeContext";
import { motion } from "framer-motion";

const Slider: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  const [slides, setSlides] = useState([
    {
      id: 0,
      title: "Animation Portfolio",
      img: "/img/profile_demo.png",
      description:
        "It is a portfolio project which is responsive and very fast. You will get a smooth experience of this website. Here I use a bunch of animations.",
      tech: [
        "/icons/html.svg",
        "/icons/scss.svg",
        "/icons/ts.svg",
        "/icons/react.svg",
        "/icons/framer.svg",
      ],
    },
    {
      id: 1,
      title: "Task Book",
      img: "/img/taskBook.png",
      description:
        "It is a to-do app. But I love to name it Task Book as it maintains our tasks. As it is using backend, you can save your tasks and after accomplishing them, you can remove them.",
      tech: [
        "/icons/html.svg",
        "/icons/css.svg",
        "/icons/tailwind.svg",
        "/icons/ts.svg",
        "/icons/react.svg",
        "/icons/nodejs.svg",
        `/icons/${isDark ? "express_white" : "express"}.svg`,
        "/icons/mongodb.svg",
      ],
    },
    {
      id: 2,
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
    },
  ]);

  const [clickedIndex, setClickedIndex] = useState(0);
  const N = slides.length;
  const findId = (itemId: number): number => {
    let id = 0;
    while (id < N) {
      if (slides[id].id === itemId) return id;
      id++;
    }
    return id;
  };

  const handleEvent = (btnId: number) => {
    // Early return if the clicked button is already active
    if (btnId === clickedIndex) return;

    const actualIndex = findId(btnId);
    const updatedSlides = [...slides];

    // Swapping slides
    const temp = updatedSlides[N - 1];
    updatedSlides[N - 1] = updatedSlides[actualIndex];
    updatedSlides[actualIndex] = temp;

    // Log for debugging
    console.log("New slides order: ", updatedSlides);
    console.log("Selected button index: ", btnId);

    setSlides(updatedSlides); // Properly updating the slides
    setClickedIndex(btnId); // Setting clicked index
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
          />
        ))}

        {/* Dot Navigation */}
        <div className="navigation_container absolute z-[100] bottom-2 esm:bottom-3 sm:bottom-2 lg:bottom-4">
          <div className="dots flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleEvent(index)}
                className={`w-4 h-4 rounded-full ${
                  index === clickedIndex ? "bg-tertiary" : "bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
