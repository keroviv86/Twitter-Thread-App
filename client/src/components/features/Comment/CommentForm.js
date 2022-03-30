import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { createComment, updateComment } from "./commentSlice";

function CommentForm({ user, commentInfo, submitMode, setEdit }) {
  let { threadId } = useParams();

  const [input, setInput] = useState(commentInfo["comment"]);

  const dispatch = useDispatch();

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (submitMode) {
      dispatch(
        createComment({
          user_id: user["id"],
          tweetthread_id: threadId,
          comment: input,
          parent_comment_id: 0,
        })
      );
    } else {
      dispatch(
        updateComment({
          id: commentInfo["id"],
          comment: input,
        })
      );
      setEdit(false);
    }

    setInput("");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label className= "comment-body">
          <input
            type="text"
            onChange={onInputChange}
            value={input}
            name="commentInput"
            placeholder="Comment..."
            className="new-comment"
          />
        </label>
        <input className="comment-btn" type="submit" value="Submit" name="submitComment" />
      </form>
    </>
  );
}

export default CommentForm;
