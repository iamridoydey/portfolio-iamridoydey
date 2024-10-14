import React from 'react'
import Tag from './Tag'
import Title from './Title'
import Slider from './Slider'

const ProjectContainer:React.FC = () => {
  return (
    <div className={`pt-28 h-[100vh]`}>
      <Tag/>
      <Title/>
      <Slider/>
    </div>
  )
}

export default ProjectContainer