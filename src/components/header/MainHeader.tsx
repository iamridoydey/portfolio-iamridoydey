import React, { useContext, useState } from "react";
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

  return (
    <nav className="pt-4 flex justify-center">
      <ul className="flex items-center justify-between gap-4 font-montserrat font-semibold">
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
