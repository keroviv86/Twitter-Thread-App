import { React } from "react";
import SubscribedThreadList from "./SubscribedThreadList";

function SubscribedThread({ user }) {
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <SubscribedThreadList key={0} user={user} />
      {/* <img className = "homephoto" alt="home"/> */}
    </div>
  );
}

export default SubscribedThread;
