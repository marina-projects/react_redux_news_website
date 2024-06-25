import { configureStore } from "@reduxjs/toolkit";
import allNewsReducer from "../features/allNews/allNewsSlice"; // не используй именованный экспорт
import commentsReducer from '../features/comments/commentSlice'

export const store = configureStore({
  reducer: {
    allNews: allNewsReducer,
    comments: commentsReducer
  },
});
