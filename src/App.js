import { useEffect, useId } from 'react';
import {
  getMovies,
  getTrending,
  getTvShows,
} from './redux/features/movies/moviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDark } from '../src/redux/features/toggle/toggleSlice'
import Navbar from './pages/Navbar';
import Pages from './pages/Pages';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
      <Nav />
    </BrowserRouter>
  )
}

export default App;
