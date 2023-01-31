import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Movies from '../components/Movies';
import TvShows from '../components/TvShows';
import Trending from '../components/Trending';

const Pages = () => {
  console.log(Route);

  return <Routes>
    <Route exact path="/" element={<Movies />}/>
    <Route path='/trending' element={<Trending />} />
    <Route path='/tvshows' element={<TvShows />} />
  </Routes>
}

export default Pages;
