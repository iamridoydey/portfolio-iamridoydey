import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/ThemeContext";

const MainHeader: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;

  // Use these states for hover and active classes
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string>("Home");

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];


  // Page On Scroll state
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <nav
      className={`hidden lg:flex justify-center ${
        isScrolled ? `fixed top-6 border-[1px] rounded-[50px] px-8 py-3 left-1/2 transform -translate-x-1/2 shadow-lg transition-all ease-in-out ${isDark? "bg-[#53535333]": "bg-secondary"}` : "pt-4"
      }`}
    >
      <ul
        className={`flex items-center justify-between ${isScrolled? "" : ""} gap-4 font-montserrat font-semibold `}
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
                  hovered === item.name ||
                  active === item.name ||
                  (active === "Home" && item.name === "Home")
                    ? ""
                    : "invisible"
                }`}
              >
                ‹
              </span>
              <span
                className={`mx-2 text-xl ${
                  hovered === item.name ||
                  active === item.name ||
                  (active === "Home" && item.name === "Home")
                    ? isDark
                      ? "text-secondary"
                      : "text-black"
                    : " text-fadeGray"
                }`}
              >
                {item.name}
              </span>
              <span
                className={`text-tertiary text-2xl ${
                  hovered === item.name ||
                  active === item.name ||
                  (active === "Home" && item.name === "Home")
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
