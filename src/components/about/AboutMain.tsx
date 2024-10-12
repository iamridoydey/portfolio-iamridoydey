import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'

const AboutMain:React.FC = () => {
  return (
    <section className={`mt-5 flex items-center justify-between gap-10`}>
      <AboutLeft/>
      <AboutRight/>
    </section>
  )
}

export default AboutMain