import { React, useState, useEffect} from "react";
import "./TweetThread.css";
import SingleTweet from "./SingleTweet";

import { useSelector, useDispatch } from "react-redux";

import { fetchTweetThreadAPI, setSearchId } from "./threadSlice"

function NewThread() {
  const searchId = useSelector((state) => state.threads.searchId); 
  const newTweets = useSelector((state) => state.threads.newTweets);

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchId) {
      dispatch(fetchTweetThreadAPI(searchId))
    }
  }, [searchId])

  function search() {
    dispatch(setSearchId("854747467593560064"));

  }


  function onInputChange(event){
    setInput(event.target.value)
  }

  function onSubmit(e){
    e.preventDefault();
    dispatch(setSearchId(input));
    setInput("");
  }
  console.log(newTweets)
   const displayNewTweets = newTweets.map((tweet)=>(
    <SingleTweet key={tweet.id} id={tweet.id} tweetText={tweet.text}/>
  ))

  return (
    <div>
        NewThread
        <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            onChange={onInputChange}
            value={input}
            name="commentInput"
          />
        </label>
        <input type="submit" value="smack the booty" name="submitComment" />
      </form>
      {displayNewTweets}
     
    </div>
  );
}

export default NewThread;
