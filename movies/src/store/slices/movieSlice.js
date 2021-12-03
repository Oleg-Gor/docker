import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../api/api";

export const fetchSearchResult = createAsyncThunk(
  "movie/fetchSearchResult",
  async (title) => getMovies(title)
);

export const initialState = {
  moviesData: [],
  key: "",
  name: "",
  isLoading: false,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    onSubmitLogin: (state, action) => {
      state.key = action.payload.key;
      state.name = action.payload.name;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResult.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
      state.moviesData = action.payload;
      state.isLoading = false;
    });
  },
});

export const { searchMoviesHandler, fetchSearchResultsHandler, onSubmitLogin } =
  movieSlice.actions;

export default movieSlice.reducer;
