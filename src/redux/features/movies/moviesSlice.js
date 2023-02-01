import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  moviesData: [],
  trendingData: [],
  tvShowsData: [],
  singleMovie: [],
  singleTv: [],
  search: '',
}

let shown = 'discover';

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

export const getSingleMovie = createAsyncThunk('movies/getSingleMovie', async (payload, thunkApi) => {
  const { id } = payload;
  // console.log(id);
  const url = `https://api.themoviedb.org/3/movie/${id}`
  const resp = await axios.get(url, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      
    },
  })
  const data = await resp.data
  // console.log(data);
  return data
})

export const getSingleTv = createAsyncThunk('movies/getSinglTv', async (payload, thunkApi) => {
  const { id } = payload;
  // console.log(id);
  const url = `https://api.themoviedb.org/3/tv/${id}`
  const resp = await axios.get(url, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      
    },
  })
  const data = await resp.data
  // console.log(data);
  return data
})


const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      if(state.search) {
        console.log('true');
        shown = state.search
      }
      else {
        console.log('false');
        shown = 'discover'
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      // console.log(state)
    })
    builder.addCase(getMovies.fulfilled, (state, action) => {
      // console.log(action.payload)
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
    builder.addCase(getSingleMovie.pending, (state) => {
      // console.log(state)
    })
    builder.addCase(getSingleMovie.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.singleMovie = action.payload
    })
    builder.addCase(getSingleTv.pending, (state) => {
      // console.log(state)
    })
    builder.addCase(getSingleTv.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.singleTv = action.payload
      // console.log(state.singleTv);
    })
  },
})

export const { setSearch } = moviesSlice.actions
export default moviesSlice.reducer
