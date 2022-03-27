import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchTweets, fetchThread } from "./threadSlice";

import SingleTweet from "./SingleTweet.js";
import CommentContainer from "../Comment/CommentContainer";

function TweetThread({ user }) {
  let { threadId } = useParams();

  const threadData = useSelector((state) => state.threads.threadData);
  const tweets = useSelector((state) => state.threads.tweets);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThread(threadId));
  }, []);

  useEffect(() => {
    if (threadData && threadData["tweets"]) {
      dispatch(fetchTweets(threadData["tweets"]));
    }
  }, [threadData]);

  let tweetsToDisplay = [];

  if (tweets["data"]) {
    tweetsToDisplay = tweets["data"].map((tweet) => (
      <SingleTweet
        key={tweet["id"]}
        id={tweet["id"]}
        tweetText={tweet["text"]}
        img={tweets["includes"]["users"][0]["profile_image_url"]}
        username={tweets["includes"]["users"][0]["name"]}
      />
    ));
  }

  return (
    <div className="app">
      <h3>{threadData["title"]}</h3>
      {tweetsToDisplay}
      <br />
      <br />
      Comments
      <CommentContainer user={user} />
    </div>
  );
}

export default TweetThread;
