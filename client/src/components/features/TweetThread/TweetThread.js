import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import { fetchTweets, fetchThread } from "./threadSlice";

import Thread from "./Thread.js";
import CommentContainer from '../Comment/CommentContainer'

function TweetThread({user}) {
  let { threadId } = useParams();

  const threadData = useSelector((state) => state.threads.threadData);
  const tweets = useSelector((state) => state.threads.tweets)
  console.log(threadData)
  console.log(tweets)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThread(threadId))
  }, [])

  useEffect(() => {
    if (threadData && threadData['tweets']) {
      dispatch(fetchTweets(threadData['tweets']))
    }
  }, [threadData])

  return (
    <div className="App">
      <h1>Thread Slice</h1>
      {tweets.map((tweet) => <Thread key={tweet.id} id={tweet.id} tweetText={tweet.text}/>)}
      <CommentContainer user={user}/>
    </div>
  );
}

export default TweetThread;
