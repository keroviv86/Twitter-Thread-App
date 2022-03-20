import { React, useState } from "react";

import { useDispatch } from "react-redux";

import { deleteComment } from "./commentSlice";
import CommentForm from "./CommentForm";

function Comment({ commentInfo, user }) {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  function deleteCommentClick(id) {
    dispatch(deleteComment(id));
  }

  function updateCommentClick(commentInfo) {
    setEdit(true);
  }

  if (edit) {
    return (
      <div>
        {commentInfo["commentor"]}
        <CommentForm user={user} commentInfo={commentInfo} submitMode={false} setEdit={setEdit} />
        <button onClick={() => setEdit(!edit)}>Cancel</button>
      </div>
    );
  } else {
    return (
      <div>
        {commentInfo["commentor"]} : {commentInfo["comment"]}
        <button onClick={() => updateCommentClick(commentInfo)}>Edit</button>
        <button onClick={() => deleteCommentClick(commentInfo["id"])}>
          Delete
        </button>
      </div>
    );
  }
}

export default Comment;
