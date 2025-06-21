import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/ThemeContext";

const CursorEffect: React.FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const isDark = useContext(ThemeContext)?.isDark;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const newMouseX = Math.round((event.pageX / windowWidth) * 100);
      const newMouseY = Math.round((event.pageY / windowHeight) * 100);

      setMouseX(newMouseX);
      setMouseY(newMouseY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []); // Only run once on mount

  // Radial gradient with transparency
  const radialGradientStyle = {
    background: `radial-gradient(at ${mouseX}% ${mouseY}%, ${
      isDark ? "rgba(204, 54, 90, 0.7)" : "rgba(204, 54, 90, 0.6)"
    }, ${isDark ? "rgba(30, 41, 59, 1)" : "rgba(240, 240, 240, 1)"})`,
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-[1] pointer-events-none over"
      style={radialGradientStyle}
    ></div>
  );
};

export default CursorEffect;
