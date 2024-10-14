import React, { useContext } from 'react'
import { ThemeContext } from '../../store/ThemeContext';

const AboutTitle:React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <section className='w-full'><h1 className={`font-poppins text-center text-2xl md:text-3xl font-bold my-10 ${isDark? "text-blue-100": "text-black"}`}>Here Are Few Quotes about myself</h1></section>
  )
}

export default AboutTitle;