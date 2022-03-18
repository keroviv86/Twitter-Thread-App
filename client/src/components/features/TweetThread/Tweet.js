import { React } from "react";

function Tweet({tweetText}) {
    return(
        <div>
            {tweetText}
            <br/>
            <br/>
        </div>
    )
}

export default Tweet;