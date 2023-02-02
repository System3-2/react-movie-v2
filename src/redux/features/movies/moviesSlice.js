import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  moviesData: [],
  trendingData: [],
  tvShowsData: [],
  singleMovie: [],
  singleTv: [],
  search: "",
};

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (dispatch, thunk) => {
    const { movies } = thunk.getState();
    const { search } = movies;
    console.log(search);
    
    const url = `https://api.themoviedb.org/3/${
      search === "" ? "discover" : "search"
    }/movie`;
    const resp = await axios.get(url, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: search,
      },
    });
    const data = await resp.data.results;
    return data;
  }
);

export const getTrending = createAsyncThunk("movies/getTrending", async () => {
  const url = `https://api.themoviedb.org/3/trending/all/day`;
  const resp = await axios.get(url, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });
  const data = await resp.data.results;
  return data;
});

export const getTvShows = createAsyncThunk(
  "movies/getTvShows",
  async (dispatch, thunk) => {
    const { movies } = thunk.getState();
    const { search } = movies;

    const url = `https://api.themoviedb.org/3/${
      search === "" ? "discover" : "search"
    }/tv`;
    const resp = await axios.get(url, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        query: search,
      },
    });
    const data = await resp.data.results;
    return data;
  }
);

export const getSingleMovie = createAsyncThunk(
  "movies/getSingleMovie",
  async (payload, thunkApi) => {
    const { id } = payload;
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const resp = await axios.get(url, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
      },
    });
    const data = await resp.data;
    return data;
  }
);

export const getSingleTv = createAsyncThunk(
  "movies/getSinglTv",
  async (payload, thunkApi) => {
    const { id } = payload;
    const url = `https://api.themoviedb.org/3/tv/${id}`;
    const resp = await axios.get(url, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
      },
    });
    const data = await resp.data;
    return data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {});
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.moviesData = action.payload;
    });
    builder.addCase(getTrending.pending, (state) => {});
    builder.addCase(getTrending.fulfilled, (state, action) => {
      state.trendingData = action.payload;
    });
    builder.addCase(getTvShows.pending, (state) => {});
    builder.addCase(getTvShows.fulfilled, (state, action) => {
      state.tvShowsData = action.payload;
    });
    builder.addCase(getSingleMovie.pending, (state) => {});
    builder.addCase(getSingleMovie.fulfilled, (state, action) => {
      state.singleMovie = action.payload;
    });
    builder.addCase(getSingleTv.pending, (state) => {});
    builder.addCase(getSingleTv.fulfilled, (state, action) => {
      state.singleTv = action.payload;
    });
  },
});

export const { setSearch } = moviesSlice.actions;
export default moviesSlice.reducer;
