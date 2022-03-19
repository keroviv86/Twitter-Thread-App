import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCommentsForThread = createAsyncThunk(
  "comments/fetchCommentsForThread",
  async (threadId) => {
    return fetch(`/comments/tweetthread/${threadId}`).then((res) => res.json());
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId) => {
    fetch(`/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return commentId;
  }
);

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (newComment) => {
    return fetch(`/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).then((res) => res.json());
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    entities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCommentsForThread.fulfilled](state, action) {
      state.entities = action.payload;
    },
    [deleteComment.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [createComment.fulfilled](state, action) {
      state.entities = [...state.entities, action.payload];
    },
  },
});

export default commentSlice.reducer;
