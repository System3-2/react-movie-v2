import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Movies from '../components/Movies';
import TvShows from '../components/TvShows';
import Trending from '../components/Trending';
import SingleMovies from '../components/SingleMovies';
import SingleTv from '../components/SingleTv';

const Pages = () => {
  // console.log(Route);

  return <Routes>
    <Route exact path="/" element={<Movies />}/>
    <Route path='/trending' element={<Trending />} />
    <Route path='/tvshows' element={<TvShows />} />
    <Route path='/movies/:id' element={<SingleMovies />} />
    <Route path='/tv/:id' element={<SingleTv />} />
  </Routes>
}

export default Pages;
