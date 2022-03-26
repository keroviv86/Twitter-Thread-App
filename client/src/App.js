import "./App.css";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import TweetThread from "./components/features/TweetThread/TweetThread.js";
import SingleTweet from "./components/features/TweetThread/SingleTweet.js";
import NewThread from "./components/features/TweetThread/NewThread"
import SubscribedThread from "./components/features/TweetThread/SubscribedThread"
import UserProfile from "./components/features/Profile/UserProfile"
import NavBar from "./components/NavBar.js";
// import SignUpForm from "./components/SignUpForm";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
  }, []);
  if (!user)
    return (
      <Login
        onLogin={setUser}
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        setIsAuthenticated={setIsAuthenticated}
      />
    );
  // if (!isAuthenticated) return <Login error= {'please login'} setIsAuthenticated={setIsAuthenticated} onLogin={setUser}/>;
  
  return (
    <div className="App">
      <NavBar
        setIsAuthenticated={setIsAuthenticated}
        isAuthenticated={isAuthenticated}
        user={user}
        setUser={setUser}
      />
      <h1 className="title">
        Unravel<strong>The</strong>Thread
      </h1>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              onLogin={setUser}
              name={name}
              setName={setName}
              password={password}
              setPassword={setPassword}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route path="/users/:userId" element={<UserProfile subscriber={user}/>}/>
        <Route path="/thread/singletweet/:id" element={SingleTweet} />
        <Route path="/allthread" element={<Home user={user}/>} />
        <Route path="/subscribedthreads" element={<SubscribedThread user={user}/>}/>
        <Route path="/thread/:threadId" element={<TweetThread user={user}/>} />
        <Route path= "/newthread" element={<NewThread user={user}/>}/>
      </Routes>
      {/* {isAuthenticated? <p>Welcome </p>: <p>please log in</p>} */}
    </div>
  );
}

export default App;
