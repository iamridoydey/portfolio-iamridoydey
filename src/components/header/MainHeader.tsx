import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import { Link } from "react-router-dom";

interface activeProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeader: React.FC<activeProps> = ({ active, setActive }) => {
  const isDark = useContext(ThemeContext)?.isDark;
  const [hovered, setHovered] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const menuItems = [
    { name: "home", path: "/home" },
    { name: "about", path: "/about" },
    { name: "skills", path: "/skills" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" },
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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id); // Update active state
    }
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
            <Link
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
                setActive(item.name);
                scrollToSection(item.name);
              }}
              to={item.path}
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
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainHeader;
