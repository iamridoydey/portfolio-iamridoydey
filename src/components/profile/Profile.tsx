import React, { useContext } from 'react'
import ProfilePic from './ProfilePic'
import Name from './Name'
import Title from './Title'
import About from './About'
import { ThemeContext } from '../../store/ThemeContext'
import Buttons from './Buttons'
import Mouse from './Mouse'
import VerticalBarIcons from './VerticalBarIcons'

const Profile:React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  return (
    <section className={`h-[100vh] flex flex-col items-center gap-5 relative ${isDark? "text-secondary" : "text-black"}`}>
      <ProfilePic/>
      <Name/>
      <Title/>
      <About/>
      <Buttons/>
      <Mouse/>
      <VerticalBarIcons/>
    </section>
  )
}

export default Profile