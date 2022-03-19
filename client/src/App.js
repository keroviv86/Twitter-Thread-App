import "./App.css";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import TweetThread from "./components/features/TweetThread/TweetThread.js";
import SingleTweet from "./components/features/TweetThread/SingleTweet.js";

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
        <Route path="/thread/singletweet/:id" element={SingleTweet} />
        <Route path="/home" element={<Home name={name} user={user} />} />
        <Route path="/thread/:threadId" element={<TweetThread />} />
      </Routes>
      {/* {isAuthenticated? <p>Welcome </p>: <p>please log in</p>} */}
    </div>
  );
}

export default App;
