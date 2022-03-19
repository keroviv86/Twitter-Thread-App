import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCommentsForThread } from "./commentSlice";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentContainer() {
  let { threadId } = useParams();

  const comments = useSelector((state) => state.comments.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsForThread(threadId));
  }, []);

  const commentDisplay = comments.map((comment) => (
    <Comment key={comment.id} commentInfo={comment} />
  ));

  return (
    <div>
        {commentDisplay}
        <CommentForm/>
    </div>
  );
}

export default CommentContainer;
