import { configureStore } from "@reduxjs/toolkit";
import { allNewsReducer } from "../features/allNews/allNewsSlice";

export const store = configureStore({
    reducer: {
        allNews: allNewsReducer,
    }
})