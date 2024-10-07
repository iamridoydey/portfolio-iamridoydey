import React from "react";

const MainHeader: React.FC = () => {
  return (
    <nav className="pt-4 flex justify-center">
      <ul className="flex items-center justfiy-between gap-8 font-montserrat font-semibold">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default MainHeader;