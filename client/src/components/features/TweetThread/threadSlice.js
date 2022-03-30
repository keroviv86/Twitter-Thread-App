import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// action = {type:"", payload:{}}

export const fetchAllThreads = createAsyncThunk(
  "threads/fetchAllThreads",
  async () => {
    return fetch("/tweetthreads").then((res) => res.json());
  }
);

export const fetchSubscribedThreads = createAsyncThunk(
  "threads/fetchSubscribedThreads",
  async (userId) => {
    return fetch(`/subscribed_threads/${userId}`).then((res) => res.json());
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

// in the reducer make tweet states look like [{id, username, profile pic, text, medi}]
export const fetchTweets = createAsyncThunk(
  "threads/fetchTweets",
  async (tweets) => {
    // return a Promise containing the data we want
    const ids = tweets.map((tweet) => tweet["twitter_api_id"]).join(",");
    return fetch(
      // `https://api.twitter.com/2/tweets?ids=${ids}&tweet.fields=id`,
      `https://api.twitter.com/2/tweets?ids=${ids}&expansions=author_id,attachments.media_keys&tweet.fields=text,attachments&user.fields=name,profile_image_url&media.fields=url,preview_image_url`,
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
      `https://api.twitter.com/2/tweets?ids=${tweetId}&expansions=author_id,attachments.media_keys&tweet.fields=text,referenced_tweets,attachments,entities&user.fields=name,profile_image_url&media.fields=preview_image_url,url`,
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
    clearTweets: (state, action) => {
      state.newTweets = [];
    },
  },
  extraReducers: {
    // in the reducer make tweet states look like [{id, username, profile pic, text, medi}]
    [fetchTweets.fulfilled](state, action) {
      state.tweets = action.payload;
    },
    [fetchThread.fulfilled](state, action) {
      state.threadData = action.payload; // updates the state for the TweetThread Component
    },
    [deleteThread.fulfilled](state, action) {
      state.allThreads = state.allThreads.filter(
        (thread) => thread.id !== action.payload
      );
    },
    [fetchAllThreads.fulfilled](state, action) {
      state.allThreads = action.payload; // updates the state for the TweetThread Component
    },
    [fetchSubscribedThreads.fulfilled](state, action) {
      state.allThreads = action.payload;
    },
    // in the reducer make tweet states look like [{id, username, profile pic, text, media}]
    // media is {description, image, link}
    [fetchTweetThreadAPI.fulfilled](state, action) {
      const payload = action.payload;
      console.log(payload);
      let tweet = payload["data"][0];
      let author = payload["includes"]["users"].find(
        (user) => user.id === tweet["author_id"]
      );

      let media = null;
      if (payload["includes"]["media"]) {
        media = payload["includes"]["media"][0];
        media = media["url"]
          ? { description: null, 
              link: media["url"], 
              image: media["url"] }
          : {
              description: null,
              link: media["preview_image_url"],
              image: media["preview_image_url"],
            };
      } else if (tweet["entities"] && tweet["entities"]["urls"]) {
        media = tweet["entities"]["urls"][0];
        media = {
          description: media["description"],
          link: media["url"],
          image: media["images"] ? media["images"][0]["url"] : null,
        };
      }
      // let media = payload["includes"]["media"].find(media => media.id === tweet.media)

      let newTweetObj = {
        id: tweet["id"],
        text: tweet["text"],
        username: author["name"],
        profile_image_url: author["profile_image_url"],
        media: media,
      };

      let references = payload["data"][0]["referenced_tweets"]
      if (references && references[0]["type"] === "replied_to") {
        state.searchId = references[0]["id"];
      } else {
        state.searchId = null;
      }
      
      state.newTweets = [newTweetObj, ...state.newTweets]; // updates the state for the TweetThread Component
    },
    [createThread.fulfilled](state, action) {
      state.allThreads = [...state.allThreads, action.payload];
      state.newThreadId = action.payload["id"];
    },
    [createTweet.fulfilled](state, action) {
      state.newThreadId = null;
    },
  },
});

export const { setSearchId, clearTweets } = threadSlice.actions;

export default threadSlice.reducer;
