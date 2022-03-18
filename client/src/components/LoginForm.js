import React, {useState} from 'react'
function LoginForm({ onLogin, name, setName, password, setPassword, setIsAuthenticated }) {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: name,
      password: password
    }
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          setIsAuthenticated(true)
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
    return (
      <div className="button">
      <div className="form-group"> 
        <form onSubmit={handleSubmit}>
       
          Username
   
          <input className="inputField" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          
          <br/>
         Password
    
        <input className="inputField" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
       
        <button className="btn btn-login" type="submit"> Log in</button>
      </form>
      {errors?errors.map(e => <div>{e}</div>):null}
    </div>
    </div>
    )

  
}

export default LoginForm