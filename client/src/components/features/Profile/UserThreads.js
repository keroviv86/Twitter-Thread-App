import { React } from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";

function UserThreads({user}) {

    return(
        <div className="recent_threads">
            <h5>Recent Threads</h5>
            <div className="created_threads">
                {
                user["tweetthreads"].map(thread =>(
                <NavLink activeClassName="active" to={`/thread/${thread["id"]}`}>
                <li className="create_threads_li">{thread["title"]}</li>
                </NavLink>
                ))
                }

            </div>
        </div>
    )
}

export default UserThreads;