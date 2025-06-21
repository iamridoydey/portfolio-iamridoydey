import React from "react";
import { HashLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className="loader w-[100vw] h-[100vh] flex items-center justify-center bg-[#071f41] z-[1000]">
      <HashLoader color="#e3083d" size={120} />
    </div>
  );
};

export default Loader;
