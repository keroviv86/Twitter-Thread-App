import { React, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import UserThreads from './UserThreads'

import "./Profile.css";

function UserProfile({subscriber}) {
    var colorcode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    const [user, setUser] = useState([]);
    const [follow, setFollow]= useState(false)
    let { userId } = useParams();


    useEffect(() => {
        fetch(`/users/${userId}`).then((res) => {
        if (res.ok) {
            res.json().then((user) => {
              setUser(user);
            });
          }
        });
      }, []);


    function followButton(userId, subscriberId){
        let subscriptionObj = { 
            user_id: userId,
            subscriber_id: subscriberId
        }
       fetch("/subscriptions",{
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify(subscriptionObj)
       }).then((res)=> res.json());
       setFollow(true)
    }

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
                            {follow ?
                                <button className="following-btn">Following</button> :
                                <button className="follow-btn" onClick={()=>followButton(user['id'],subscriber['id'])}>Follow</button>
                            }
                           
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
