import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ThreadList from "./ThreadList";
import { fetchTweets, fetchThread } from "./threadSlice";

function TweetThread({ threadId }) {
  const threadData = useSelector((state) => state.threads.threadData);
  const tweets = useSelector((state) => state.threads.tweets)

  console.log(tweets)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThread(1))
  }, [])

  useEffect(() => {
    if (threadData && threadData['tweets']) {
      dispatch(fetchTweets(threadData['tweets']))
    }
  }, [threadData])

  return (
    <div className="App">
      <h1>Thread Slice</h1>
      {/* <TweetList tweetPics={tweetPics} /> */}
    </div>
  );
}

export default TweetThread;
