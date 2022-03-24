import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ThreadCard from "./ThreadCard";
import { fetchAllThreads } from "./threadSlice";

function ThreadList({user}) {
  const threads = useSelector((state) => state.threads.allThreads);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllThreads());
  }, []);

  const threadsToDisplay = threads.map((thread) => (
    <ThreadCard 
     key={thread.id}
     id={thread.id}
     thread = {thread}
     user={user}
    
    />
   
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
