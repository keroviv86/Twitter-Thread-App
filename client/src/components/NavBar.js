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
        <ul>
        <li><a aria-haspopup="true">Menu</a>
          <ul className = "dropdown">
            <li><NavLink to="/sign-up">Sign-Up</NavLink></li> 
            {user ? (
              <li onClick={logout}> Logout </li>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}{" "}
            <li><NavLink to="/home">Home</NavLink></li>
            {isAuthenticated ? (
              <li>
                <NavLink to="/thread">Thread</NavLink>
              </li>
            ) : (
              <p> </p>
            )}
          </ul>
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default NavBar;
