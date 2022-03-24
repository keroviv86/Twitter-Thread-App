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

export const deleteThread = createAsyncThunk(
  "threads/deleteThread",
  async (threadId) => {
    fetch(`/tweetthreads/${threadId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return threadId;
  }
);

export const fetchTweets = createAsyncThunk(
  "threads/fetchTweets",
  async (tweets) => {
    // return a Promise containing the data we want
    const ids = tweets.map((tweet) => tweet["twitter_api_id"]).join(",");
    return fetch(
      // `https://api.twitter.com/2/tweets?ids=${ids}&tweet.fields=id`,
      `https://api.twitter.com/2/tweets?ids=${ids}&expansions=author_id,referenced_tweets.id&user.fields=profile_image_url&media.fields=url`,
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

export const fetchTweetThreadAPI = createAsyncThunk(
  "threads/fetchTweetThreadAPI",
  async (tweetId) => {
    // return a Promise containing the data we want
    return fetch(
      // `https://api.twitter.com/2/tweets?ids=${tweetId}&expansions=referenced_tweets.id`,
      `https://api.twitter.com/2/tweets?ids=${tweetId}&expansions=author_id,referenced_tweets.id&user.fields=profile_image_url&media.fields=url`,
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

export const createThread = createAsyncThunk(
  "threads/createThread",
  async (newThread) => {
    return fetch(`/tweetthreads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newThread),
    }).then((res) => res.json());
  }
);

export const createTweet = createAsyncThunk(
  "threads/createTweet",
  async (newTweet) => {
    return fetch(`/tweets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTweet),
    }).then((res) => res.json());
  }
);


const threadSlice = createSlice({
  name: "threads",
  initialState: {
    searchId: null,
    newThreadId: null,
    newTweets: [],
    allThreads: [],
    threadData: {},
    tweets: [], // array of tweets
  },
  reducers: {
    setSearchId: (state, action) => {
      state.searchId = action.payload;
    },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchTweets.fulfilled](state, action) {
      state.tweets = action.payload;
    },
    [fetchThread.fulfilled](state, action) {
      state.threadData = action.payload; // updates the state for the TweetThread Component
    },
    [deleteThread.fulfilled](state, action) {
      state.allThreads= state.allThreads.filter(
        (thread) => thread.id !== action.payload
      );
    },
    [fetchAllThreads.fulfilled](state, action) {
      state.allThreads = action.payload; // updates the state for the TweetThread Component
    },
    [fetchTweetThreadAPI.fulfilled](state, action) {
      const payload = action.payload;
      state.newTweets = [payload, ...state.newTweets]; // updates the state for the TweetThread Component

      if (
        "referenced_tweets" in payload["data"][0] &&
        payload["data"][0]["referenced_tweets"][0]["type"] === "replied_to"
      ) {
        state.searchId = payload["data"][0]["referenced_tweets"][0]["id"];
      } else {
        state.searchId = null;
      }
    },
    [createThread.fulfilled](state, action) {
      state.allThreads = [...state.allThreads, action.payload]
      state.newThreadId = action.payload["id"]
    },
    [createTweet.fulfilled](state, action) {
      state.newThreadId = null
    }
  },
});

export const { setSearchId } = threadSlice.actions;

export default threadSlice.reducer;
