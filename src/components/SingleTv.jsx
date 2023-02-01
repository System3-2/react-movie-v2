import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTv } from '../redux/features/movies/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPlayCircle } from 'react-icons/ai';
import MoviesTrailer from './MoviesTrailer';
import { BsXLg } from 'react-icons/bs';


const SingleTv = () => {
  const [trailer, setTrailer] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');

  const { singleTv } = useSelector(store => store.movies);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { name, overview, poster_path, vote_average, status, homePage, first_air_date, number_of_episodes, number_of_seasons  } = singleTv;
  const images = 'https://image.tmdb.org/t/p/w500';
  // console.log(singleTv);

  useEffect(() => {
    dispatch(getSingleTv({ id }))
  }, [])

  const setmovieTrailer = (title) => {
    setTrailer(!trailer);
    setMovieTitle(title)
    console.log(trailer);
  }

  return (
    <article
      className='p-4 m-2 flex flex-col-reverse md:flex-row gap-2 text-black dark:text-[#90cc3b] font-sans'>
      <div className='p-8 m-4 gap-4 justify-start items-center'>
        <h3 className='text-2xl font-[600]'>{name}</h3>
        <p className='text-lg mt-4'>{overview}</p>

        <div className='mx-1 flex items-center gap-4 mt-4'>
          <span className=' py-2 px-4 bg-[#90cc3b] rounded-full text-black'>{vote_average}</span>
          <span className='hidden md:block py-2 px-4 bg-[#90cc3b] rounded-full text-black'>{status}</span>
          <span className=' py-2 px-4 bg-[#90cc3b] rounded-full text-black cursor-pointer inline-block md:hidden'
          onClick={() => setmovieTrailer(name)}
          ><AiFillPlayCircle /></span>
        </div>

        <div className='mx-1 flex items-center gap-4 mt-4'>
          <span className=' py-2 px-4 bg-[#90cc3b] rounded-full text-black'>{first_air_date}</span>
          <span className='hidden md:block py-2 px-4 bg-[#90cc3b] rounded-full text-black'>{number_of_seasons}</span>
          <span className=' py-2 px-4 bg-[#90cc3b] rounded-full text-black cursor-pointer inline-block'>{number_of_episodes}</span>
        </div>
        {homePage ? <a href={homePage} alt="watch here" className='underline m-4 p2'>{homePage}</a> : null}
      </div>

      {/* <div className='p-2 m-8 object-cover'>
        <img className='w-full rounded-lg' src={images + poster_path} alt={name} />
      </div> */}

      {trailer ? <MoviesTrailer title={name} /> : <div className='p-2 m-8 object-cover'>
        <img className='w-full rounded-lg' src={images + poster_path} alt={name} />
      </div>}

      {trailer && <BsXLg className='absolute top-36 right-12 float-right' onClick={() => setTrailer(!trailer)} />}
    </article>
  )
}

export default SingleTv;