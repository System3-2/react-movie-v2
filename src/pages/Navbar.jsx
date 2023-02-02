import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleDark, toggleModal } from '../redux/features/toggle/toggleSlice';
import { setSearch } from '../redux/features/movies/moviesSlice';
import { BsFillSunFill, BsMoonStars, BsSearch, BsXLg } from 'react-icons/bs';

const Navbar = () => {
  const { isDark, isModalOpen } = useSelector(store => store.toggle);
  const { search } = useSelector(store => store.movies);
  const dispatch = useDispatch();

  return (
    <header>

      <nav className='p-8 m-4 text-[#90CC3B] flex justify-between items-center'>

        <div className='md:hidden p-2 m-2 text-4xl' onClick={() => dispatch(toggleModal())}>
          {!isModalOpen ? <BsSearch /> : <BsXLg />}
        </div>

        <div>
          <img className='w-16' src="https://s1.bunnycdn.ru/assets/sites/hurawatch/logo.png" alt="logo" />
        </div>

        <div className='p-4 m-2 hidden md:flex'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text"
              onChange={(e) => {
                dispatch(setSearch(e.target.value))
              }}
              value={search}
              placeholder="search"
              className="p-4 rounded-lg border-4 border-[#90cc3b] outline-none bg-transparent text-black dark:text-inherit"
            />
          </form>
        </div>

        <div className="p-3 m-3 text-4xl" onClick={() => dispatch(toggleDark())}>
          {isDark ? <BsFillSunFill /> : <BsMoonStars />}
        </div>
      </nav>
      {isModalOpen &&
        <div
          className='mx-8 flex justify-center items-center absolute top-36 left-0 right-0 bg-black dark:bg-slate-100 p-9 md:hidden rounded-lg z-50 '>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text"
              onChange={(e) => {
                dispatch(setSearch(e.target.value))
              }}
              value={search}
              placeholder="search"
              className="p-4 rounded-lg border-4 border-[#90cc3b] outline-none bg-transparent text-white dark:text-black"
            />
          </form>
        </div>
      }
    </header>
  )
}

export default Navbar;
