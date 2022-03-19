import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComment = createAsyncThunk(
    "comments/fetchComment",
    async (threadId) => {
      return fetch(`//${threadId}`).then((res) => res.json());
    }
  );

const commentSlice = createSlice({
    name: "commnents",
    initialState: {
    },
    reducers: {},
    extraReducers: {
    },
  });

  export default commentSlice.reducer;