import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
function LoginForm({ onLogin, name, setName, password, setPassword, setIsAuthenticated }) {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate(); 

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: name,
      password: password
    }
    // setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res=>res.json())
    .then((r) => {
      // setIsLoading(false);
      if (!r.error) {
        onLogin(r)
        setIsAuthenticated(true)
        navigate('/allthread')
      } else {
        // console.log(r)
        setErrors(r)
      }
      setName("")
      setPassword("")
    });
  }
 
    return (
      <div className="button">
      <div className="form-group"> 
        <form onSubmit={handleSubmit}>
       
          Username
   
        <input className="inputField" type="text" value={name} autoComplete="username" onChange={(e) => setName(e.target.value)} />
          
          <br/>
         Password
    
        <input className="inputField" type="password" value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
  
       
        <button className="btn btn-login" type="submit"> Log in</button>
      </form>
      <br/>
      {errors? <div className="error-message">{errors['error']}</div>:null}
    </div>
    </div>
    )

  
}

export default LoginForm