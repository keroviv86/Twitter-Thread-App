import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// async actions
export const fetchTweets = createAsyncThunk("threads/fetchTweets", (tweetIds) => {
  // return a Promise containing the data we want
  const ids = tweetIds.join(",")
  return fetch(
    `https://api.twitter.com/2/tweets?ids=${ids}&tweet.fields=id`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAE4baQEAAAAAS4PBMisiiOacYjtmgKhyThcK%2FYU%3DGc9KajB8EimnHJgSPHSO3rSBV9WSjbSP09FjFkxjXzDKKBnXKM",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data);
});

// Reducer
const initialState = {
  entities: [], // array of tweets
  status: "idle", // loading state
};

const threadSlice = createSlice({
  name: "threads",
  initialState: {
    entities: [], // array of tweets
    status: "idle", // loading state
  },
  reducers: {
    threadAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    threadUpdated(state, action) {
      const thread = state.entities.find(
        (thread) => thread.id === action.payload.id
      );
      thread.url = action.payload.url;
    },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchTweets.pending](state) {
      state.status = "loading";
    },
    [fetchTweets.fulfilled](state, action) {
      console.log(action.payload);
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { threadAdded, threadUpdated } = threadSlice.actions;

export default threadSlice.reducer;
