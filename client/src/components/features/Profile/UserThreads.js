import { React } from "react";
import "./Profile.css";

function UserThreads({user}) {

    return(
        <div className="recent_threads">
            <h5>Recent Threads</h5>
            <div className="created_threads">
                {
                user["tweetthreads"].map(thread =>(
                <li className="create_threads_li">{thread["title"]}</li>
                ))
                }

            </div>
        </div>
    )
}

export default UserThreads;