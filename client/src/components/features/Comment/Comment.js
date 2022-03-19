import { React } from "react";

import { useDispatch } from "react-redux";

import { deleteComment } from "./commentSlice";

function Comment({ commentInfo }) {
  const dispatch = useDispatch();

  function deleteCommentClick(id) {
    dispatch(deleteComment(id));
  }

  return (
    <div>
      {commentInfo["commentor"]} : {commentInfo["comment"]}
      <button>Edit</button>
      <button onClick={() => deleteCommentClick(commentInfo["id"])}>
        Delete
      </button>
    </div>
  );
}

export default Comment;
