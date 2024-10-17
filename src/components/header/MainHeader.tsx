import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/ThemeContext";

interface activeProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeader: React.FC<activeProps> = ({ active, setActive }) => {
  const isDark = useContext(ThemeContext)?.isDark;
  const [hovered, setHovered] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const menuItems = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const capitalCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <nav
      className={`hidden lg:flex justify-center ${
        isScrolled
          ? `fixed z-30 top-6 border-[1px] rounded-[50px] px-10 py-3 left-1/2 transform -translate-x-1/2 shadow-lg transition-all ease-in-out bg-opacity-90 ${
              isDark ? "bg-[#000]" : "bg-secondary bg-opacity-95"
            }`
          : "pt-4"
      }`}
    >
      <ul
        className={`flex items-center justify-between gap-4 font-montserrat font-semibold`}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive(item.name)}
              href={item.href}
              className={`font-extrabold transition-all duration-300`}
            >
              <span
                className={`font-montserrat text-tertiary text-2xl ${
                  hovered === item.name || active === item.name
                    ? ""
                    : "invisible"
                }`}
              >
                ‹
              </span>
              <span
                className={`mx-2 text-xl ${
                  hovered === item.name || active === item.name
                    ? isDark
                      ? "text-secondary"
                      : "text-black"
                    : "text-fadeGray"
                }`}
              >
                {capitalCase(item.name)}
              </span>
              <span
                className={`text-tertiary text-2xl ${
                  hovered === item.name || active === item.name
                    ? ""
                    : "invisible"
                }`}
              >
                /›
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainHeader;
