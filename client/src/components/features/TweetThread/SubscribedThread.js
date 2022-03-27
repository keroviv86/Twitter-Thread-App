import { React } from "react";
import SubscribedThreadList from "./SubscribedThreadList";

function SubscribedThread({ user }) {
  return (
    <div>
      <SubscribedThreadList key={0} user={user} />
    </div>
  );
}

export default SubscribedThread;
