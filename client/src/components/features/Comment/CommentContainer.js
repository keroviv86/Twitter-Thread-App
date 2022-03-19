import { React } from "react";
import { useSelector } from "react-redux";

import Comment from "./Comment.js";

function CommentContainer() {
  const comments = useSelector((state) => state.threads.threadData["comments"]);

  if (comments) {
    const commentDisplay = comments.map((comment) => (
      <Comment commentInfo={comment} />
    ));

    return <>{commentDisplay}</>;
  } else {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
}

export default CommentContainer;
