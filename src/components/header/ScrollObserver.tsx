import React, { useEffect } from "react";
import { useActiveSection } from "../../store/ActiveSection";


const ScrollObserver: React.FC = () => {
  const { setActiveSection, sectionsRefs } = useActiveSection();

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6, // Trigger when 60% of the section is visible
    });

    // Check if sectionsRefs.current is defined and populated
    if (sectionsRefs.current) {
      Object.values(sectionsRefs.current).forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });
    }

    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [setActiveSection, sectionsRefs]);

  return null;
};

export default ScrollObserver;
