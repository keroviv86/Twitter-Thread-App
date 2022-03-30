import { React } from "react";
import "./TweetThread.css";
import {Html5Entities} from "html-entities"

function SingleTweet({ tweetText, tweetMedia }) {
  function onClick(event) {
    // console.log(tweetText);
    // console.log(tweetMedia)
  }
  const htmlEntities = new Html5Entities();

  const text = htmlEntities.decode(tweetText)
  let media = <></>;
  if (tweetMedia) {
    media = <img className="tweetImage" src={tweetMedia["image"]} alt="" />;
    if (tweetMedia["link"]) {
      media = <a href={tweetMedia["link"]} target="_blank" rel="noreferrer">{media}</a>;
    }
  }

  return (
    <div className="tweet-container">
      <div className="content-tweet" onClick={onClick}>
        <div className="tweet-text">{text}</div>
        {media}
      </div>
    </div>
  );
}

export default SingleTweet;
