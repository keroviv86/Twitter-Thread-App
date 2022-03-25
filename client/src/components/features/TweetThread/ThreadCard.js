import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteThread } from "./threadSlice"

function ThreadCard({thread, id, user}){
    console.log(thread)

    const dispatch = useDispatch()

    function deleteThreadClick(threadId){
       dispatch(deleteThread(threadId))
    }

    let deleteButton = <></>
    if (user.id === thread['author']['id']){
       deleteButton = <button onClick= {() => deleteThreadClick(id)}className= "delete-button">X</button>
    }

    return (
        <div  className = "column">
            <div className = "card">
                {deleteButton}   
                <NavLink activeClassName="active" to={`/users/${thread["author"]["id"]}`}>
                <h3 className = "user-name">{thread["author"]["name"]}</h3>
                </NavLink>
                    <br/>
                    <br/>
                    <hr/>
                    <h5 className="thread-title">{thread["title"]}</h5>
                    <br/>
                    <h6 className="thread-description">{thread["description"]}</h6>
                    <br/>             
                <NavLink activeClassName="active" to={`/thread/${thread["id"]}`}>
                    <a className="tweet-btn">Read {thread["tweets"].length} tweets</a>
                </NavLink>
            </div>
        </div>


    )
}

export default ThreadCard;