import React from 'react'
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";



const VerticalBarIcons: React.FC = () => {
  return (
    <section className='fixed top-0 left-5 h-[40%] flex flex-col items-center gap-3' >
      <div className="w-1 h-[60%] bg-blue-300"></div>
      <div>
        <ul className='flex flex-col gap-2 text-tertiary text-xl'>
          <li>
            <a href="https://www.linkedin.com/in/iamridoydey/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://x.com/iamridoy_dey/">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="mailto:iamridoydey@gmail.com">
              <IoMailOutline />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default VerticalBarIcons