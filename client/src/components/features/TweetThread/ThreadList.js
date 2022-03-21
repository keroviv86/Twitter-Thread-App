import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchAllThreads } from "./threadSlice";

function ThreadList() {
  const threads = useSelector((state) => state.threads.allThreads);
 
  console.log(threads)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllThreads());
  }, []);

  const threadsToDisplay = threads.map((thread) => (
  
         <div key={thread.id}  className = "column">
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

   
  ));

  return (
    <>
      <div className="card-container">
          {threadsToDisplay}
      </div>
    </>
  );
}

export default ThreadList;
