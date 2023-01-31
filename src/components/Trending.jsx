import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getTrending } from '../redux/features/movies/moviesSlice';


const Trending = () => {
  const { trendingData } = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const images = 'https://image.tmdb.org/t/p/w500';
  // console.log(trendingData);

  useEffect(() => {
    dispatch(getTrending());
  }, [])
  return (
    <section className='m-2 p-4 grid grid-cols-2 gap-4 md:grid-cols-4 justify-center items-center '>
      {trendingData.map(movie => {
        const { id, poster_path } = movie;
        // console.log(id);

        return <Link to={`/movies/${id}`} key={id}
          className="rounded-2xl relative border-4 border-[#90cc3b] dark:border-inherit">
          <div className='rounded-lg object-fit '>
            <img src={images + poster_path} alt="movie" />
          </div>

          {/* <div className='p-4 m-2 flex items-center justify-center'>
            <h3 className='text-[#90cc3b] text-lg'>{title}</h3>
          </div> */}
        </Link>
      })}
    </section>
  )
}

export default Trending;
