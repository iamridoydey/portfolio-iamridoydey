import React, { useContext } from 'react'
import TagStart from '../basicUtility/TagStart';
import TagClosed from '../basicUtility/TagClosed';
import { ThemeContext } from '../../store/ThemeContext';

const Tag:React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <div
      className={`flex flex-nowrap items-center justify-center lg:justify-start gap-2 text-2xl md:text-3xl lg:text-4xl font-extrabold `}
    >
      <TagStart />
      <h2 className={`font-montserrat ${isDark ? "text-secondary" : ""}`}>
        Projects
      </h2>
      <TagClosed />
    </div>
  );
}

export default Tag