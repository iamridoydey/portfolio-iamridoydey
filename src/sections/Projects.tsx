import React from "react";
import ProjectContainer from "../components/projects/ProjectContainer";
import { useActiveSection } from "../store/ActiveSection";

const Projects: React.FC = () => {
  const { sectionsRefs } = useActiveSection();

  return (
    <section
      id="projects"
      ref={(el) => {
        if (sectionsRefs.current) {
          sectionsRefs.current.project = el;
        }
      }}
    >
      <ProjectContainer />
    </section>
  );
};

export default Projects;
