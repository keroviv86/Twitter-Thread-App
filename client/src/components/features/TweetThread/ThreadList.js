import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ThreadCard from "./ThreadCard";
import { fetchAllThreads } from "./threadSlice";

function ThreadList() {
  const threads = useSelector((state) => state.threads.allThreads);
 
  console.log(threads)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllThreads());
  }, []);

  const threadsToDisplay = threads.map((thread) => (
    <ThreadCard 
     key={thread.id}
     thread = {thread}
    
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
