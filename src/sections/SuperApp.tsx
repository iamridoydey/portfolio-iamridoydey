import React, { useEffect, useState, ReactNode } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import { ThemeProvider } from "../store/ThemeContext";
import { WindowWidthProvider } from "../store/WindowContext";
import Loader from "../components/basicUtility/Loader";
import CursorEffect from "../components/basicUtility/CursorEffect";

interface Prop {
  children: ReactNode;
}

const SuperApp: React.FC<Prop> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true); // Loader visibility state
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loader after 3 seconds (3000 ms)
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  useEffect(() => {
    if (!loading) {
      const unsubscribe = scrollYProgress.onChange((latest) => {
        scaleX.set(latest); // Update scaleX based on scroll progress
      });
      return () => unsubscribe(); // Clean up the scroll listener
    }
  }, [scaleX, loading, scrollYProgress]);

  return (
    <ThemeProvider>
      <WindowWidthProvider>
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Progress Bar */}
            <motion.div
              style={{ scaleX }}
              className="fixed w-full top-0 left-0 h-2 bg-[#13829a] origin-left z-[1000]"
              initial={{ scaleX: 0 }} // Initial state
              transition={{ duration: 0.5 }} // Smooth transition for scaleX
            ></motion.div>

            {/* Main Content */}
            <main className="relative w-full min-h-screen overflow-x-hidden">
              <CursorEffect />
              <section className="relative max-w-[1440px] mx-auto md:px-4">
                {children} {/* Render children passed to this component */}
              </section>
            </main>
          </>
        )}
      </WindowWidthProvider>
    </ThemeProvider>
  );
};

export default SuperApp;
