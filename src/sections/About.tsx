import React from 'react'
import Tag from '../components/about/Tag';
import AboutMain from '../components/about/AboutMain';
import AboutTitle from '../components/about/AboutTitle';

const About:React.FC = () => {
  return (
    <section id="about" className="about_wrapper h-[100vh] box-border">
      <div className="max-w-[1200px] float-right pt-28 box-border">
        <Tag />
        <AboutTitle />
        <AboutMain />
      </div>
    </section>
  );
}

export default About;