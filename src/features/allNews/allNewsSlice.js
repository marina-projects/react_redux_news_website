import { createSlice } from "@reduxjs/toolkit";
import { newsData } from "../../data/newsData";

const options = {
    name: 'allNews',
    initialState: [],
    reducers: {
        loadNews: (state, action) => {
            return newsData
        }
    }
};

export const allNewsSlice = createSlice(options);

export const {loadNews} = allNewsSlice.actions;
export const allNewsReducer = allNewsSlice.reducer;