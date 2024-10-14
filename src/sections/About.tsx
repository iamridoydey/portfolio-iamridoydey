import React from 'react'
import Tag from '../components/about/Tag';
import AboutMain from '../components/about/AboutMain';
import AboutTitle from '../components/about/AboutTitle';

const About:React.FC = () => {
  return (
    <section id="about" className="about_wrapper mx-auto max-w-[1200px] min-h-[100vh] box-border">
      <div className="w-full h-full pt-20 lg:pt-28 box-border">
        <Tag />
        <AboutTitle />
        <AboutMain />
      </div>
    </section>
  );
}

export default About;