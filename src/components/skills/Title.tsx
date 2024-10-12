import React, { useContext } from 'react'
import { ThemeContext } from '../../store/ThemeContext'

const Title:React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <div className="title py-4">
      <h2 className={`text-xl font-bold lg:text-3xl text-center ${isDark? "text-blue-400": "text-black"}`}>My TechStack and Other Skills</h2>
    </div>
  )
}

export default Title