import { React, useState } from "react";

import { useDispatch } from "react-redux";

import { deleteComment } from "./commentSlice";
import CommentForm from "./CommentForm";
import "./Comment.css";

function Comment({ commentInfo, user }) {
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  function deleteCommentClick(id) {
    dispatch(deleteComment(id));
  }

  function updateCommentClick(commentInfo) {
    setEdit(true);
  }

  let buttons = <></>
  if (user.id === commentInfo["user_id"]) {
    buttons =(
      <div>
        <button className="comment-btn" onClick={() => updateCommentClick(commentInfo)}>Edit</button>
        <button className="comment-btn" onClick={() => deleteCommentClick(commentInfo["id"])}>
        Delete
        </button>
      </div>
    )
  }

  if (edit) {
    return (
      <div>
        {commentInfo["commentor"]}
        <CommentForm user={user} commentInfo={commentInfo} submitMode={false} setEdit={setEdit} />
        <button className="comment-btn" onClick={() => setEdit(!edit)}>Cancel</button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="commentors">
          <strong>{commentInfo["commentor"]}</strong> : {commentInfo["comment"]}
        {/* <button onClick={() => updateCommentClick(commentInfo)}>Edit</button>
        <button onClick={() => deleteCommentClick(commentInfo["id"])}>
          Delete
        </button> */}
     
        {buttons}
      </div>

      </div>
      
    );
  }
}

export default Comment;
