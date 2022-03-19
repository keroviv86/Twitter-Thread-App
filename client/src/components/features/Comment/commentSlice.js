import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComment = createAsyncThunk(
  "comments/fetchComment",
  async (commentId) => {
    return fetch(`/comments/${commentId}`).then((res) => res.json());
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId) => {
    return fetch(`/comments/${commentId}`).then((res) => res.json());
  }
);

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (commentId) => {
    return fetch(`/comments/${commentId}`).then((res) => res.json());
  }
);
export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async (commentId) => {
    return fetch(`/comments/${commentId}`).then((res) => res.json());
  }
);

const commentSlice = createSlice({
  name: "commnents",
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export default commentSlice.reducer;
