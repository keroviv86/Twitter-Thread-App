import { React } from "react";
import "./TweetThread.css";

function SingleTweet({tweetText}) {

    function onClick(event) {
        console.log("click")
    }
    return(
        <div className="tweet-container">   
            <div className = "content-tweet" onClick={onClick}>
                {tweetText}
                <br/>
                <br/>
             </div>

        </div>
        
    )
}

export default SingleTweet;