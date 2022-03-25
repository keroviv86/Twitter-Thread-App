import { React, useEffect } from "react";
import ThreadList from "./features/TweetThread/ThreadList";
import { fetchAllThreads } from './features/TweetThread/threadSlice';
import ThreadCard from './features/TweetThread/ThreadCard'
import { useSelector, useDispatch } from "react-redux";

function Home({ user }) {
  const threads = useSelector((state) => state.threads.allThreads);
 
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchAllThreads())
  },[])

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

export default Home;
