import React from 'react'
import SkillsContainer from '../components/skills/SkillsContainer'
import { useActiveSection } from '../store/ActiveSection';

const Skills:React.FC = () => {
  const { sectionsRefs } = useActiveSection();
  return (
    <section
      id="skills"
      className="skills_wrapper w-full"
      ref={(el) => {
        if (sectionsRefs.current) {
          sectionsRefs.current.skills = el;
        }
      }}
    >
      <SkillsContainer />
    </section>
  );
}

export default Skills