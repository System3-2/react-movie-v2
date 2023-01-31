import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './features/toggle/toggleSlice';
import moviesReducer from './features/movies/moviesSlice';


const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    movies: moviesReducer
  }
});

export default store;