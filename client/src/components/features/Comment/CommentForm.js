import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { createComment } from "./commentSlice";

function CommentForm() {
  let { threadId } = useParams();

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();

    dispatch(
      createComment({
        user_id: 4,
        tweetthread_id: threadId,
        comment: input,
        parent_comment_id: 0,
      })
    );

    setInput("");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            onChange={onInputChange}
            value={input}
            name="commentInput"
          />
        </label>
        <input type="submit" value="Submit" name="submitComment" />
      </form>
    </>
  );
}

export default CommentForm;
