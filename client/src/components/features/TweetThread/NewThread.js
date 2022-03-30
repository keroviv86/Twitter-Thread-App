import { React, useState, useEffect } from "react";
import "./TweetThread.css";
import SingleTweet from "./SingleTweet";
import NewThreadForm from "./NewThreadForm";

import { useSelector, useDispatch } from "react-redux";

import { fetchTweetChained, setSearchId, clearTweets } from "./threadSlice";

function NewThread({ user }) {
  const searchId = useSelector((state) => state.threads.searchId);
  const newTweets = useSelector((state) => state.threads.newTweets);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTweetChained(searchId));
    }
  }, [searchId]);

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(clearTweets())
    dispatch(setSearchId(input));
    setInput("");
  }

  const displayNewTweets = newTweets.map((tweet) => {
    return(<SingleTweet
      key={tweet["id"]}
      tweetText={tweet["text"]}
      tweetMedia={tweet["media"]}
    />);
  });

  return (
    <div className="app">
      <form onSubmit={onSubmit} className="newThread-form">
        NewThread
        <label>
          <input
            type="text"
            onChange={onInputChange}
            value={input}
            name="commentInput"
            className="new-thread-input"
          />
        </label>
        <input
          className="newThread-btn"
          type="submit"
          value="Search Thread"
          name="submitComment"
        />
      </form>
      <NewThreadForm user={user} />
      {displayNewTweets.length > 0 ? (
        <>
          <div>Author: {newTweets[0]["username"]}</div>
          <br />
          <img src={newTweets[0]["profile_image_url"]} alt="" />
          <br />
        </>
      ) : null}
      {displayNewTweets}
    </div>
  );
}

export default NewThread;
