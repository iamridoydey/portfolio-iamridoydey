import React from 'react'
import Tag from './Tag'
import Title from './Title'
import SliderContainer from './SliderContainer'

const ProjectContainer:React.FC = () => {
  return (
    <div className={`pt-8 md:pt-12 lg:pt-28 h-fit mx-auto`}>
      <Tag/>
      <Title/>
      <SliderContainer/>
    </div>
  )
}

export default ProjectContainer