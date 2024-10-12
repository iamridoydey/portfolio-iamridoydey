import React, { useEffect, useState } from "react";
import CreateQuote from "./CreateQuote";
const AboutRight: React.FC = () => {
  const quotes = [
    "Outside of web development, I'm fascinated by software technologies—especially AI and Machine Learning—where innovative algorithms create endless possibilities.",
    "Web development and learning new technologies keep my curiosity alive. Building projects is a way for me to explore creative solutions.",
    "I am passionate about solving real-world problems with programming. I love the constant evolution in software and the challenges it brings.",
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
      setIsClicked(true)
    }, 10500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isClicked]);

  return (
    <section className="relative max-w-[60%] h-full bg-transparent p-10 transition-all duration-400 ease-in-out overflow-hidden">
      <section className="w-full slide_wrapper overflow-hidden">
        {/* Container for quotes */}
        <section
          className="w-full flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${quoteNum * 100}%)`,
          }}
        >
          {quotes.map((quote, index) => (
            <CreateQuote key={index} quote={quote} isClicked={isClicked} setIsClicked={setIsClicked}/>
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
