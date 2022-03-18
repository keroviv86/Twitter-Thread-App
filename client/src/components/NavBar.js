import React from "react";

import { NavLink } from "react-router-dom";

function NavBar({ isAuthenticated, setIsAuthenticated, user, setUser }) {
  function logout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setIsAuthenticated(false);
      setUser(null);
    });
  }

  return (
    <div>
      <nav className="nav">
        <NavLink to="/sign-up">Sign-Up</NavLink> |
        {user ? (
          <li onClick={logout}> Logout </li>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}{" "}
        |<NavLink to="/home">Home</NavLink>
        {isAuthenticated ? (
          <li>
            <NavLink to="/thread">Thread</NavLink>
          </li>
        ) : (
          <p> </p>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
