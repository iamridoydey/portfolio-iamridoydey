import React, { useEffect, useState } from "react";
import CreateQuote from "./CreateQuote";
const AboutRight: React.FC = () => {
  const quotes = [
    "Curiosity drives me to explore cutting-edge technologies like AI and Machine Learning, where I discover endless possibilities for innovation and solving real-world challenges.",
    "Exploring new places fuels my passion for adventure, just like learning new technologies fuels my creativity, pushing me to overcome exciting new challenges each day.",
    "Helping others through education is a core value of mine. Sharing knowledge empowers people to solve problems and fosters progress, making a meaningful impact in the world.",
  ];



  const [quoteNum, setQuoteNum] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const goToSlides = (index: number) => {
    setQuoteNum(index);
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    setQuoteNum((prevQuoteNum) => (prevQuoteNum + 1) % quotes.length);
  };

  useEffect(() => {
    // Set up an interval to change the slide every 10 seconds
    const intervalId = setInterval(() => {
      goToNextSlide();
      setIsClicked(true);
    }, 10500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isClicked]);

  return (
    <section className="relative w-full lg:max-w-[60%] h-full mx-auto bg-transparent lg:p-10 transition-all duration-400 ease-in-out overflow-hidden">
      <section className="w-full slide_wrapper overflow-hidden">
        {/* Container for quotes */}
        <section
          className="w-full flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${quoteNum * 100}%)`,
          }}
        >
          {quotes.map((quote, index) => (
            <CreateQuote
              key={index}
              quote={quote}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          ))}
        </section>
      </section>

      {/* Dot buttons */}
      <div className="dot_buttons absolute bottom-3 left-[50%] transform -translate-x-[50%] flex flex-row items-center gap-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              quoteNum === index
                ? "bg-tertiary"
                : "bg-blue-400 hover:bg-tertiary"
            }`}
            onClick={() => {
              goToSlides(index);
              setIsClicked(true);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutRight;
