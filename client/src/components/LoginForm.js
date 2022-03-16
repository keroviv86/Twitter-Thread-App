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
      <> 
        <form onSubmit={handleSubmit}>
        <label>
          Username
   
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
         Password
    
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
       
        <input type="submit" value="Login!" />
      </form>
      {errors?errors.map(e => <div>{e}</div>):null}
    </>
    )

  
}

export default LoginForm