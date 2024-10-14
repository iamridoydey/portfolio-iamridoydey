import React from 'react'
import Tag from './Tag';
import Title from './Title';
import WebSkills from './WebSkills';
import OtherSkills from './OtherSkills';

const SkillsContainer:React.FC = () => {
  return (
    <div className="pt-28 margin-auto">
      <Tag />
      <Title />
      <section className='w-full px-5 pt-10 flex flex-col md:flex-row justify-between gap-6'>
        <WebSkills />
        <OtherSkills />
      </section>
    </div>
  );
}

export default SkillsContainer