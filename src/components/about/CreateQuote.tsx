import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Counter from "./Counter";

interface QuoteProps {
  quote: string;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateQuote: React.FC<QuoteProps> = ({ quote, isClicked, setIsClicked }) => {
  return (
    <div className="relative w-full flex-shrink-0 px-6">
      <div className="bg-blue-950 border-4 border-blue-400 hover:border-tertiary rounded-lg p-6">
        <h1 className="text-tertiary text-3xl font-montserrat font-bold pb-4">
          Quote
        </h1>
        <div className="ml-10">
          <span className="text-tertiary text-2xl font-bold">
            <FaQuoteLeft />
          </span>
          <p className="text-xl font-poppins text-blue-100 pb-3">{quote}</p>
          <span className="text-tertiary text-2xl font-bold">
            <FaQuoteRight />
          </span>
        </div>
      </div>
      <Counter isClicked={isClicked} setIsClicked={setIsClicked}/>
    </div>
  );
};

export default CreateQuote;