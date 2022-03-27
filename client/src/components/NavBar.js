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
    // <div>
    //   <nav className="sidebar">
    //     <ul>
    //     <li><a aria-haspopup="true">Menu</a>
    //       <ul className = "dropdown">
    //         {user ? (
    //           <li onClick={logout}> Logout </li>
    //         ) : (
    //           <NavLink to="/login">Login</NavLink>
    //         )}{" "}
    //          <li><NavLink to="/allthread">All Threads</NavLink></li>
    //         <li><NavLink to="/subscribedthreads">Subscribed Threads</NavLink></li>
    //         {isAuthenticated ? (
    //           <li>
    //             <NavLink to="/newthread">New Thread</NavLink>
    //           </li>
    //         ) : (
    //           <p> </p>
    //         )}
    //       </ul>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
    <>
      <script src="https://kit.fontawesome.com/20c42ad618.js" crossorigin="anonymous"></script>
      <div class="wrapper">
        <div class="sidebar">
          <h2>Menu</h2>
          <ul>
            <li><NavLink to="/allthread">All Threads</NavLink></li>
            <li><NavLink to="/subscribedthreads">Subscribed Threads</NavLink></li>
            {isAuthenticated ? (
              <li>
                <NavLink to="/newthread">New Thread</NavLink>
              </li>
            ) : (
              <p> </p>
            )}
            {user ? (
              <li onClick={logout}> 
              <NavLink to="/login"> Logout</NavLink>
              </li>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}{" "}
        
          </ul>
        </div>
        <div class="main_content">
          <div class="header">Welcome, {user.name}!</div>

        </div>
      </div>
    </>
  );
}

export default NavBar;
