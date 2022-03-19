import { Button } from "@material-ui/core";
import { React } from "react";

function Comment({ commentInfo }) {
  return (
    <div>
      {commentInfo["commentor"]} : {commentInfo["comment"]}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Comment;
