// allNewsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchNews = createAsyncThunk("allNews/fetchNews", async () => {
  const querySnapshot = await getDocs(collection(db, "news"));
  const newsList = querySnapshot.docs.map(doc => doc.data());
  console.log(newsList);
  return newsList;
});

const allNewsSlice = createSlice({
  name: "allNews",
  initialState: {
    news: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const allNewsReducer = allNewsSlice.reducer;
