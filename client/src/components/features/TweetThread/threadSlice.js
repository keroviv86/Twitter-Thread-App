import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// action = {type:"", payload:{}}

export const fetchAllThreads = createAsyncThunk(
  "threads/fetchAllThreads",
  async () => {
    return fetch("/tweetthreads").then((res) => res.json());
  }
);

// async actions
export const fetchThread = createAsyncThunk(
  "threads/fetchThread",
  async (threadId) => {
    return fetch(`/tweetthreads/${threadId}`).then((res) => res.json());
  }
);

export const fetchTweets = createAsyncThunk(
  "threads/fetchTweets",
  async (tweets) => {
    // return a Promise containing the data we want
    const ids = tweets.map((tweet) => tweet["twitter_api_id"]).join(",");
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
    ).then((response) => response.json());
  }
);

const threadSlice = createSlice({
  name: "threads",
  initialState: {
    allThreads: [],
    threadData: {},
    tweets: [], // array of tweets
  },
  reducers: {},
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchTweets.fulfilled](state, action) {
      state.tweets = action.payload["data"];
    },
    [fetchThread.fulfilled](state, action) {
      state.threadData = action.payload; // updates the state for the TweetThread Component
    },
    [fetchAllThreads.fulfilled](state, action) {
      state.allThreads = action.payload; // updates the state for the TweetThread Component
    },
  },
});

// export const { selectThread } = threadSlice.actions;

export default threadSlice.reducer;
