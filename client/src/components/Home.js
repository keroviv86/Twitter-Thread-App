import { React } from "react";
import ThreadList from "./features/TweetThread/ThreadList";

function Home({ user }) {
  return (
    <div>
      <h1 className="title">
        Unravel<strong>The</strong>Thread
      </h1>
      <p>Welcome, {user.name}!</p>
      <ThreadList key={0}/>
      {/* <img className = "homephoto" alt="home"/> */}
    </div>
  );
}

export default Home;
