import React, { useContext, useState } from "react";
import SlideItems from "./SlideItems";
import { ThemeContext } from "../../store/ThemeContext";

const Slider: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  const [slides, setSlides] = useState([
    {
      title: "Animation Portfolio",
      img: "/img/profile_demo.png",
      description:
        "It is a portfolio project which is responsive and very fast. You will get a smooth experience of this website. Here I use bunch of animation",
      tech: [
        "/icons/html.svg",
        "/icons/scss.svg",
        "/icons/ts.svg",
        "/icons/react.svg",
        "/icons/framer.svg",
      ],
    },
    {
      title: "Task Book",
      img: "/img/taskBook.png",
      description:
        "It is a to do app. But I love to named to Task Book as it maintain our task. As it is using backend then you can save your task and after accomplishing you can remove it",
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
      title: "iamridoydey Portfolio",
      img: "/img/portfolio.png",
      description:
        "It is a portfolio project which is responsive and very fast. You will get a smooth experience of this website. Here I use bunch of animation",
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

  const handleEvent = (index: number) => {
    const updatedSlides = [...slides];
    const [clickedSlide] = updatedSlides.splice(index, 1);
    if (index == 0) {
      updatedSlides.push(clickedSlide);
    } else {
      updatedSlides.unshift(clickedSlide);
    }
    setSlides(updatedSlides);
    setClickedIndex(Math.round(Math.random() * 2));
  };

  return (
    <div className="slider relative w-full h-auto">
      <div className="slide_item_container absolute h-[480px] sm:h-[600px] w-[300px] sm:w-[480px] md:w-[768px] max-w-[900px]  flex flex-col justify-center items-center mx-4 sm:mx-8 md:mt-6 top-1/2 left-1/2 transform -translate-x-1/2">
        {slides.map((slide, index) => (
          <SlideItems
            key={index}
            index={index}
            title={slide.title}
            img={slide.img}
            description={slide.description}
            tech={slide.tech}
            handleEvent={handleEvent}
          />
        ))}

        {/* Dot Navigation */}
        <div className="navigation_container absolute z-[100] bottom-0 md:-bottom-16 lg:bottom-4">
          <div className="dots flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleEvent(index)}
                className={`w-4 h-4 rounded-full ${
                  index === clickedIndex ? "bg-tertiary" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
