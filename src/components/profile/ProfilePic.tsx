import React from 'react'
const ProfilePic:React.FC = () => {
  return (
    <figure className='flex items-center justify-center w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] mb-5 sm:mb-8 md:mb-2'>
      <img className='w-full h-full rounded-full' src="./img/ridoydey_pro.svg" alt="Ridoy Dey Picture" />
    </figure>
  )
}

export default ProfilePic