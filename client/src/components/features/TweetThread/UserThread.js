import { React } from "react";
import ThreadList from "./ThreadList";

function UserThread({ user }) {
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <ThreadList key={0} user={user} />
      {/* <img className = "homephoto" alt="home"/> */}
    </div>
  );
}

export default UserThread;
