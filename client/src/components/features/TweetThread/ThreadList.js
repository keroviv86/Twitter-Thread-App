import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { fetchAllThreads } from "./threadSlice";

function ThreadList() {
  const threads = useSelector((state) => state.threads.allThreads);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllThreads());
  }, []);

  const threadsToDisplay = threads.map((thread) => (
    <tr key={thread.id}>
      <td>
        <NavLink to={`/thread/${thread["id"]}`}>
          {thread["author"]["name"]}: {thread["description"]}
        </NavLink>
      </td>
    </tr>
  ));

  return (
    <table>
      <tbody>{threadsToDisplay}</tbody>
    </table>
  );
}

export default ThreadList;
