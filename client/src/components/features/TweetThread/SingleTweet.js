import { React } from "react";
import "./TweetThread.css";

function SingleTweet({tweetText, tweet,img,username}) {

    function onClick(event) {
        console.log("click")
    }
    return(
        <div className="tweet-container">   
            <div className = "content-tweet" onClick={onClick}>
                <img src={img} alt="user profile" />
                <h6>{username} </h6>
                {tweetText}
                <br/>
                <br/>
             </div>

        </div>
        
    )
}

export default SingleTweet;