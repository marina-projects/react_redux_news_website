import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../firebase";

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (newsID) => {
    const q = query(collection(db, 'news'), where('newsID', '==', newsID));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const newsDoc = querySnapshot.docs[0];
      const newsData = newsDoc.data();

      if (newsData?.comments) {
        return newsData.comments;
      } else {
        throw new Error('No comments found');
      }
    } else {
      throw new Error('News not found');
    }
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default commentsSlice.reducer;
