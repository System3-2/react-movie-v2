import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='m-2 p-8 flex flex-col text-center justify-center items-center gap-2 text-black dark:text-[#90cc3b]'>
      <div className='container mx-auto m-4 p-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/OlojaMuyiwa" className='hover:opacity-50 transition duration-150 '>
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/m/in/oloja-muyiwa-b6b89a24b" className='hover:opacity-50 transition duration-150 '>
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com/iRedeploy__" className='hover:opacity-50 transition duration-150 '>
          <AiOutlineTwitter />
        </a>
      </div>
      <div>
        <p>&copy; Copyright {new Date().getFullYear()}, Oloja Corporation</p>
      </div>
    </footer>
  )
}

export default Footer;
