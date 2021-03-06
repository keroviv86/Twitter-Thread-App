import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ThreadCard from "./ThreadCard";
import { fetchSubscribedThreads } from "./threadSlice";

function SubscribedThreadList({user}) {
  const threads = useSelector((state) => state.threads.allThreads);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubscribedThreads(user["id"]));
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

export default SubscribedThreadList;
