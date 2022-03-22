import { React } from "react";
import ThreadList from "./features/TweetThread/ThreadList";

function Home({ user }) {
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <ThreadList key={0}/>
      {/* <img className = "homephoto" alt="home"/> */}
    </div>
  );
}

export default Home;
