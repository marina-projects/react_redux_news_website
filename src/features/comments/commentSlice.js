import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, query, collection, where, updateDoc, arrayUnion } from "firebase/firestore";
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

export const addComment = createAsyncThunk(
    'comments/addComment',
    async ({ newsID, commentText }, { rejectWithValue }) => {
      try {
        // Создание запроса для получения документа новости по newsID
        const q = query(collection(db, 'news'), where('newsID', '==', newsID));
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
          const newsDoc = querySnapshot.docs[0];
          const newsDocRef = newsDoc.ref;
  
          // Новый комментарий
          const newComment = {
            commentID: Date.now().toString(), // Используем текущую метку времени как уникальный идентификатор комментария
            commentText,
          };
  
          // Обновление документа, добавление нового комментария в массив comments
          await updateDoc(newsDocRef, {
            comments: arrayUnion(newComment),
          });
  
          return newComment;
        } else {
          return rejectWithValue('News not found');
        }
      } catch (error) {
        return rejectWithValue(error.message);
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
      })
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments.push(action.payload);
      })
      .addCase(addComment.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default commentsSlice.reducer;
