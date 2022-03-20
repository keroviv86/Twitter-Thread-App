import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCommentsForThread } from "./commentSlice";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentContainer({user}) {
  let { threadId } = useParams();

  const comments = useSelector((state) => state.comments.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsForThread(threadId));
  }, []);

  const commentDisplay = comments.map((comment) => (
    <Comment key={comment.id} commentInfo={comment} user={user} />
  ));

  return (
    <div>
        {commentDisplay}
        <CommentForm user={user} commentInfo={{comment: ""}} submitMode= {true}/>
    </div>
  );
}

export default CommentContainer;
