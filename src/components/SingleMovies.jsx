import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMovie } from '../redux/features/movies/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const SingleMovies = () => {
  const { singleMovie } = useSelector(store => store.movies);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(singleMovie);
  const { title, overview, poster_path, vote_average, status } = singleMovie;
  const images = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    dispatch(getSingleMovie({id}))
  },[])
  return (
   <article 
   className='p-4 m-2 flex flex-col-reverse md:flex-row justify-center items-center gap-4 text-black dark:text-[#90cc3b]'>
    <div className='p-8 m-4 gap-2'>
      <h3 className='text-2xl '>{title}</h3>
      <p>{overview}</p>
    </div>
    <div className='p-2 m-1 '>
      <img className='w-full' src={images+poster_path} alt={title} />
    </div>
   </article>
  )
}

export default SingleMovies;