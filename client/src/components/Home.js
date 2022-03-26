import { React, useState, useEffect } from "react";
import ThreadList from "./features/TweetThread/SubscribedThreadList";
import { fetchAllThreads } from './features/TweetThread/threadSlice';
import ThreadCard from './features/TweetThread/ThreadCard'
import { useSelector, useDispatch } from "react-redux";

function Home({ user }) {
  const [searchThread, setSearchThread] = useState("")
  const threads = useSelector((state) => state.threads.allThreads);
 
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchAllThreads())
  },[])

  const allFilteredThreads = [...threads]
  .filter((items) => {
    return items.title.toLowerCase().includes(searchThread.toLowerCase());
  })

  const threadsToDisplay = allFilteredThreads.map((thread) => (
    <ThreadCard 
     key={thread.id}
     id={thread.id}
     thread = {thread}
     user={user}
    />
  ));
  return (
    <>
      <form className= "search-box">
          <input
          className = "search-input" 
          type="search"
          placeholder="Search for a thread..."
          required
          onChange={(e)=> setSearchThread(e.target.value)}
          />
      </form>
      <div className="card-container">
          {threadsToDisplay}
      </div>
    </>
  );
}

export default Home;
