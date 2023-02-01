import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../redux/features/movies/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPlayCircle } from 'react-icons/ai';
import MoviesTrailer from './MoviesTrailer';
import { BsXLg } from 'react-icons/bs';


const SingleMovies = () => {
  const [trailer, setTrailer] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');

  const { singleMovie } = useSelector(store => store.movies);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { title, overview, poster_path, vote_average, status, homePage } = singleMovie;
  const images = 'https://image.tmdb.org/t/p/w500';
  // console.log(singleMovie);

  useEffect(() => {
    dispatch(getSingleMovie({ id }))
  }, []);

  const setmovieTrailer = (title) => {
    setTrailer(!trailer);
    setMovieTitle(title)
    console.log(trailer);
  }
  return (
    <article
      className='p-4 m-2 flex flex-col-reverse md:flex-row gap-2 text-black dark:text-[#90cc3b] font-sans relative'>
      <div className='p-8 m-4 gap-4 justify-start items-center'>
        <h3 className='text-2xl font-[600]'>{title}</h3>
        <p className='text-lg mt-4'>{overview}</p>

        <div className='mx-1 flex items-center gap-4 mt-4'>
          <span className=' py-2 px-4 bg-[#90cc3b] rounded-full text-black'>{vote_average}</span>
          <span className='hidden md:block py-2 px-4 bg-[#90cc3b] rounded-full text-black'>{status}</span>
          <span className=' py-2 px-4 bg-[#90cc3b] rounded-full text-black cursor-pointer inline-block md:hidden'
            onClick={() => setmovieTrailer(title)}
          >
            <AiFillPlayCircle /></span>
        </div>
        {homePage ? <a href={homePage} alt="watch here" className='underline m-4 p2'>{homePage}</a> : null}
      </div>

      {trailer ? <MoviesTrailer title={title} /> : <div className='p-2 m-8 object-cover'>
        <img className='w-full rounded-lg' src={images + poster_path} alt={title} />
      </div>}

      {/* { trailer &&} */}
      {trailer && <BsXLg className='absolute top-0 right-6 float-right' onClick={() => setTrailer(!trailer)} />}
    </article>

  )
}

export default SingleMovies;