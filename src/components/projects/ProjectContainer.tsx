import React from 'react'
import Tag from './Tag'
import Title from './Title'
import Slider from './Slider'

const ProjectContainer:React.FC = () => {
  return (
    <div className={`pt-8 md:pt-12 lg:pt-28 sm:min-h-[130vh] min-h-[100vh] mx-auto`}>
      <Tag/>
      <Title/>
      <Slider/>
    </div>
  )
}

export default ProjectContainer