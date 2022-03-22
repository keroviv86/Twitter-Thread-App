import React from "react";
import { NavLink } from "react-router-dom";

function ThreadCard({thread}){
    return (
        <div  className = "column">
            <div className = "card">
                <NavLink to={`/thread/${thread["id"]}`}>
                <h3>{thread["author"]["name"]}</h3>
                <br/>
                <h5>{thread["title"]}</h5>
                <br/>
                <h6>{thread["description"]}</h6>
                <br/>
                <a className="tweet-btn">Read {thread["tweets"].length} tweets</a>
                </NavLink>
            </div>
        </div>


    )
}

export default ThreadCard;