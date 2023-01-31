import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  moviesData: [],
  trendingData: [],
  tvShowsData: [],
}

// const API_URL = `https://api.themoviedb.org/3/`;

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
  const url = `https://api.themoviedb.org/3/discover/movie`
  const resp = await axios.get(url, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
  const data = await resp.data.results
  // console.log(data);
  return data
})

export const getTrending = createAsyncThunk('movies/getTrending', async () => {
  const url = `https://api.themoviedb.org/3/trending/all/day`
  const resp = await axios.get(url, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
  const data = await resp.data.results
  // console.log(data);
  return data
})

export const getTvShows = createAsyncThunk('movies/getTvShows', async () => {
  const url = `https://api.themoviedb.org/3/discover/tv`
  const resp = await axios.get(url, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
  const data = await resp.data.results
  // console.log(data);
  return data
})

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      // console.log(state)
    })
    builder.addCase(getMovies.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.moviesData = action.payload
    })
    builder.addCase(getTrending.pending, (state) => {
      // console.log(state)
    })
    builder.addCase(getTrending.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.trendingData = action.payload
    })
    builder.addCase(getTvShows.pending, (state) => {
      // console.log(state)
    })
    builder.addCase(getTvShows.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.tvShowsData = action.payload
    })
  },
})

export default moviesSlice.reducer
