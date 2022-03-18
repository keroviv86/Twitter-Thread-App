import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ThreadList from "./ThreadList";
import { fetchTweets } from "./threadSlice";

function TweetThread() {
  const threads = useSelector((state) => state.threads.entities);
  console.log(threads)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets(['1502673952572854278', '1504586176232976396', '1504590603950166019']));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Thread Slice</h1>
      {/* <TweetList tweetPics={tweetPics} /> */}
    </div>
  );
}

export default TweetThread;