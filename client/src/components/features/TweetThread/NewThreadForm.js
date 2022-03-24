import { useEffect } from "react";
import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createThread, createTweet } from "./threadSlice.js";

function NewThreadForm({ user }) {
  const newThreadId = useSelector((state) => state.threads.newThreadId);
  const newTweets = useSelector((state) => state.threads.newTweets);

  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (newThreadId) {
      for (let i = 0; i < newTweets.length; i++) {
        dispatch(
          createTweet({
            tweetthread_id: newThreadId,
            twitter_api_id: newTweets[i]['data'][0]["id"],
            order: i,
          })
        );
      }
    }   
  }, [newThreadId]);

  const dispatch = useDispatch();
  function onInputChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(
      createThread({
        title: input["title"],
        description: input["description"],
        user_id: user["id"],
      })
    );
  }

  return (
    <form onSubmit={onSubmit}className="newThread-form">
        <label>
            <input
            className="new-thread-input"
            type="text"
            onChange={onInputChange}
            value={input["title"]}
            placeholder="Name"
            name="title"
            />
        </label>
        <label>
            <input
            className="new-thread-input"
            type="text"
            onChange={onInputChange}
            value={input["description"]}
            placeholder="Description"
            name="description"
            />
        </label>
      <input type="submit" value="Submit" name="submitComment" />
    </form>
  );
}

export default NewThreadForm;
