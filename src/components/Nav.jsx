import React from 'react';
import { RiMovie2Line } from 'react-icons/ri'
import { BiCameraMovie } from 'react-icons/bi';
import { MdOutlineMovieFilter } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Nav = () => {
  return <nav className='fixed bottom-0 container mx-auto py-4 px-8   bg-transparent rounded-full flex justify-center items-center gap-4 md:p-2 md:m-4 md:bg-transparent'>

    <Link to="/" className='p-4 bg-[#90cc38] rounded-full'>
      <RiMovie2Line />
    </Link>

    <Link to="/trending" className='p-4 bg-[#90cc38] rounded-full'>
      <BiCameraMovie />
    </Link>

    <Link to="/tvshows" className='p-4 bg-[#90cc38] rounded-full'>
      <MdOutlineMovieFilter />
    </Link>

    
  </nav>
}

export default Nav