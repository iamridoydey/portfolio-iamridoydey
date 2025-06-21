import React from 'react'
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";



const VerticalBarIcons: React.FC = () => {
  return (
    <section className='absolute top-[-145px] left-5 h-[40%] flex flex-col items-center gap-3' >
      <div className="w-1 h-[60%] bg-blue-300"></div>
      <div>
        <ul className='flex flex-col gap-2 text-tertiary text-xl font-bold'>
          <li>
            <a href="https://www.linkedin.com/in/iamridoydey/" target='_blank'>
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://x.com/iamridoy_dey/" target='_blank'>
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/iamridoydey" target='_blank'>
             <IoLogoGithub/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default VerticalBarIcons