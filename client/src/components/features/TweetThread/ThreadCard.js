import React from "react";
import { NavLink } from "react-router-dom";

function ThreadCard({thread}){
    return (
        <div  className = "column">
            <div className = "card">
                <NavLink activeClassName="active" to={`/thread/${thread["id"]}`}>
                    <h3 className = "author-name">{thread["author"]["name"]}</h3>
                    <br/>
                    <br/>
                    <hr/>
                    <h5 className="thread-title">{thread["title"]}</h5>
                    <br/>
                    <h6 className="thread-description">{thread["description"]}</h6>
                    <br/>
                    <a className="tweet-btn">Read {thread["tweets"].length} tweets</a>
                </NavLink>
            </div>
        </div>


    )
}

export default ThreadCard;