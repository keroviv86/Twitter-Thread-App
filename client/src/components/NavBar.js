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
      <nav className="sidebar">
        <ul>
        <li><a aria-haspopup="true">Menu</a>
          <ul className = "dropdown">
            {user ? (
              <li onClick={logout}> Logout </li>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}{" "}
             <li><NavLink to="/allthread">All Threads</NavLink></li> 
            <li><NavLink to="/subscribedthreads">Subscribed Threads</NavLink></li>
            {isAuthenticated ? (
              <li>
                <NavLink to="/newthread">New Thread</NavLink>
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
