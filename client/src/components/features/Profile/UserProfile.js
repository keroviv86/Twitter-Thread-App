import { React, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import UserThreads from './UserThreads'
import "./Profile.css";

function UserProfile() {
    var colorcode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    const [user, setUser] = useState([]);
    let { userId} = useParams();


    useEffect(() => {
        fetch(`/users/${userId}`).then((res) => {
        if (res.ok) {
            res.json().then((user) => {
              setUser(user);
            });
          }
        });
      }, []);
    console.log(user)

    if(user.length===0){
        return(
            <>LOADING...</>
        )
    }else{
        return (
            <>
              <div className = 'profile-container'style={{background:colorcode}} >
                  <div className = 'profile-card'style={{background:colorcode}}>
                  <div className="profile_details">
                        <div className="profile_images">
                            <img src={user['profile_photo']} />
                        </div>
                        <div className="profile">
                            <h2>{user['name']}</h2>
                            <div className="specification">
                                <span>{user['description']}</span>
                                <small className="line"></small>
                                <span>{user['location']}</span>
                                <small className="line"></small>
                                <span>{user['interest']}</span>
                            </div>
                            <button>Follow</button>
                        </div>
                        <UserThreads user={user} />
                    </div>
                  </div>
              </div>
            </>
          );
    }
}


export default UserProfile;
