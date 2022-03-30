import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchTweet, fetchThread } from "./threadSlice";

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
      threadData["tweets"].map((tweet) =>
        dispatch(fetchTweet(tweet["twitter_api_id"]))
      );
    }
  }, [threadData]);

  let tweetsToDisplay = <></>;
  console.log(threadData);
  if (tweets.length > 0) {
    tweetsToDisplay = [...tweets].sort(
      (a, b) =>
        threadData["tweets"].find((tweet) => tweet.twitter_api_id === a.id)[
          "order"
        ] -
        threadData["tweets"].find((tweet) => tweet.twitter_api_id === b.id)[
          "order"
        ]
    );
    tweetsToDisplay = tweetsToDisplay.map((tweet) => {
      return (
        <SingleTweet
          key={tweet["id"]}
          tweetText={tweet["text"]}
          tweetMedia={tweet["media"]}
        />
      );
    });
  }

  console.log(tweets);

  return (
    <div className="app">
      <h3>{threadData["title"]}</h3>
      <br />
      {tweets.length > 0 ? (
        <>
          <div>Author: {tweets[0]["username"]}</div>
          <br />
          <img src={tweets[0]["profile_image_url"]} alt="" />
          <br />
        </>
      ) : null}
      {tweetsToDisplay}
      <br />
      <br />
      Comments
      <CommentContainer user={user} />
    </div>
  );
}

export default TweetThread;
